import Joi from "joi";

export const schemaEmail = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .empty()
    .messages({
      "string.email": "Formato no valido",
      "string.empty": "Campo obligatorio",
    }),
});

export const schemaPassword = Joi.object({
  password: Joi.string().empty().min(6).max(20).alphanum().messages({
    "string.empty": "Campo obligatorio",
    "string.min": "el password debe tener minimo 6 caracteres",
    "string.max": "el password admite 20 caracteres maximo",
    "string.alphanum": "debe contener caracteres alfanumericos",
  }),
});
