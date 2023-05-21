import * as yup from 'yup'

export const schema = yup.object({
    
    email: yup.string()
        .email("Digite um e-mail válido!")
        .required("O e-mail é obrigatório!"),
    senha: yup.string()
        .min(8, "A senha deve ter pelo menos 8 caracteres")
        .required("A senha é obrigatória!"),

}).required()