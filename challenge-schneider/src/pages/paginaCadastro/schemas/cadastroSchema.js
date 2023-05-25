import * as yup from 'yup'

export const schema = yup.object({
    nome: yup.string()
        .required("O nome é obrigatório!"),
    email: yup.string()
        .email("Digite um e-mail válido!")
        .required("O e-mail é obrigatório!"),
    // id: yup.string()
    //     .min(6, "O ID funcionário deve ter pelo menos 6 caracteres")
    //     .required("ID funcionário é obrigatório!"),
    senha: yup.string()
        .min(8, "A senha deve ter pelo menos 8 caracteres")
        .required("A senha é obrigatória!"),
    senhaConfirma: yup.string()
        .oneOf([yup.ref('senha'), null], "A senhas devem ser iguais!")

}).required()
