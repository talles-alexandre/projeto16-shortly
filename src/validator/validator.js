import Joi from "joi";
const validator = (schema) => (payload) => schema.validate(payload);

const signUpSchema = Joi.object({
  name: Joi.string().min(1).empty().required().messages({
    "string.min": "Nome deve ter no mínimo 1 caracter",
    "string.empty": "Nome não pode ser um campo vazio",
    "any.required": "Nome obrigatorio",
  }),
  email: Joi.string().email().empty().required().messages({
    "string.email": "Formato de email inválido",
    "string.empty": "O e-mail não pode ser um campo vazio",
    "any.required": "O e-mail é obrigatório",
  }),
  password: Joi.string().min(3).empty().required().regex(/^\S+$/).messages({
    "string.min": "A senha deve ter pelo menos 3 caracteres",
    "string.empty": "A senha não pode ser um campo vazio",
    "string.pattern.base": "Não são permitidos espaços vazios",
    "any.required": "Senha obrigatória",
  }),
  confirmPassword: Joi.string().empty().required().messages({
    "string.empty": "O campo Confirmar senha não pode estar vazio",
    "any.required": "O campo Confirmar senha é obrigatório",
  }),
});

const signInSchema = Joi.object({
  email: Joi.string().email().empty().required().messages({
    "string.email": "Formato de email inválido",
    "string.empty": "O e-mail não pode ser um campo vazio",
    "any.required": "O e-mail é obrigatório",
  }),
  password: Joi.string().empty().required().messages({
    "string.empty": "A senha não pode ser um campo vazio",
    "any.required": "Senha obrigatoria",
  }),
});

const urlShortenSchema = Joi.object({
  url: Joi.string()
    .empty()
    .pattern(
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%.\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%\+.~#?&//=]*)/
    )
    .required()
    .messages({
      "string.empty": "URL não pode ser um campo vazio",
      "string.url": "Formato de url inválido",
      "any.required": "URL é obrigatório",
      "string.pattern.base":
        "URL inválida! URL deve começar com http:// or https://",
    }),
});

const signUpValidation = validator(signUpSchema);
const signInValidation = validator(signInSchema);
const urlValidation = validator(urlShortenSchema);

export { signUpValidation, signInValidation, urlValidation };
