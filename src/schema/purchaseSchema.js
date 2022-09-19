const Yup = require('yup');

const schema = {
    create: {
        body: Yup.object({
            user_id: Yup.number().required(),
            store_id: Yup.number().required(),
            client_id: Yup.number().required(),
            sneaker_id: Yup.number().required(),
            amount: Yup.number().min(1).required(),
        }).noUnknown()
    },
    update: {
        body: Yup.object({
            user_id: Yup.number().required(),
            store_id: Yup.number().required(),
            client_id: Yup.number().required(),
            sneaker_id: Yup.number().required(),
            amount: Yup.number().required(),
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