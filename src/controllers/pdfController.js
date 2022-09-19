module.exports = () => {
    const pdfService = require('../services/pdfService')();

    const index = async (req, res) => {
        try {
            console.log(req.params)
            const pdf = await pdfService.exportPDF({ 
                id: req.params.student_id,
                logged_user_id: req.userId
            });
    
            res.type('pdf');
            res.download(pdf);
        }
        catch (e) {
            console.log(e);
            return res.status(500).json({ error: "The reservation does not exist." });
        }
    };

    return {
        index
    };
}