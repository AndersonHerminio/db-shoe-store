const Yup = require('yup');

const schema = {
    create: {
        body: Yup.object({
            name: Yup.string().min(3).max(255).required(),
            store_id: Yup.number().required(),
        }).noUnknown()
    },
    update: {
        body: Yup.object({
            name: Yup.string().min(3).max(255).required(),
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