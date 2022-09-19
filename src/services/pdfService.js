module.exports = () => {
  const pdf = require('html-pdf');
  const fs = require('fs');
  const {v4: uuidv4} = require('uuid');
  const Books = require('../models/Books');
  const User = require('../models/User');
  const Students = require('../models/Students');
  const BooksStudents = require('../models/BooksStudents');

  const listStudentsAndBooks = async (filter) => {
      return BooksStudents.findAll({
          where: {
              student_id: filter.id
          },
          include: [{
              as: 'book',
              model: Books,
              attributes: ['name'],
              paranoid: false
          }, {
              as: 'student',
              model: Students,
              attributes: ['name'],
              paranoid: false
          }],
          raw: true,
          nest: true,
          attributes: []
      });
  };

  const exportPDF = async filter => {
      const items = await listStudentsAndBooks(filter);
      const loggedUser = await User.findOne({
          where: {
              id: filter.logged_user_id
          },
          attributes: ['name']
      })
      let htmlBook = '';

      items.forEach(item => {
          htmlBook += `
              <tr>
              <td style="padding-left: 40px;">${item.student.name}</td>
              <td style="padding-left: 40px;">${item.book.name}</td>
              </tr> 
                  `
      });

      let htmlTemplate = fs.readFileSync('html/pdf.html', 'UTF-8');

      htmlTemplate = htmlTemplate.replace('{{ userName }}', loggedUser.name);
      htmlTemplate = htmlTemplate.replace('{{ htmlBook }}', htmlBook);

      const filePath = `./uploads/booksByStudent-${uuidv4()}.pdf`;
  
      return generatePDF(htmlTemplate, filePath);
  };

  const generatePDF = (htmlTemplate, filePath) => {
      return new Promise((resolve, reject) => {
          pdf.create(htmlTemplate, {}).toFile(filePath, (err, result) => {
              if (err) {
                  reject('Deu erro');
                  return;
              }
      
              resolve(result.filename)
          });
      })
  };

  return {
      exportPDF
  }
}