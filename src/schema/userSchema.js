const Yup = require('yup');

const schema = {
    create: {
        body: Yup.object({
            password: Yup.string().min(3).max(10).required(),
            email: Yup.string().email().required(),
            name: Yup.string().min(3).max(255).required(),
        }).noUnknown()
    },
    update: {
        body: Yup.object({
            email: Yup.string().email().required(),
            name: Yup.string().min(3).max(255).required(),
        }).noUnknown(),
    },
    find: {
        params: Yup.object({
            id: Yup.number().min(1).required()
        }).noUnknown()
    },
    token: {
        body: Yup.object({
            email: Yup.string().email().required(),
            password: Yup.string().min(3).max(10).required(),
        }).noUnknown()
    }
}

module.exports = schema;