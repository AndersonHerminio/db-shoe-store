const Yup = require('yup');

const schema = {
    create: {
        body: Yup.object({
            brand: Yup.string().min(3).max(255).required(),
            model: Yup.string().min(3).max(255).required(),
            price: Yup.number().positive().required(),
            factory_id: Yup.number().required(),
        }).noUnknown()
    },
    update: {
        body: Yup.object({
            brand: Yup.string().min(3).max(255).required(),
            model: Yup.string().min(3).max(255).required(),
            price: Yup.number().positive().required(),
            factory_id: Yup.number().required(),
        }).noUnknown(),
        params: Yup.object({
            id: Yup.number().min(1).required()
        }).noUnknown()
        
    },
    find: {
        params: Yup.object({
            id: Yup.number().min(1).required()
        }).noUnknown()
    }
}

module.exports = schema;