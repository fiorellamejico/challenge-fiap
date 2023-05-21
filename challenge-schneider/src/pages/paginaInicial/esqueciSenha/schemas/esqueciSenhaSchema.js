import * as yup from 'yup'

export const schema = yup.object({
    
    email: yup.string()
        .email("Digite um e-mail válido!")
        .required("O e-mail é obrigatório!"),
    

}).required()