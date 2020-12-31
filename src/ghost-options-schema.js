exports.pluginConfigValidation = ({Joi}) => {
    return Joi.object({
        apiUrl: Joi.string().uri({scheme: ['https?/']}).required(),
        contentApiKey: Joi.string().alphanum().required(),
        adminApiKey: Joi.string().required(),
        version: Joi.string().alphanum().default('v3')
    });
};