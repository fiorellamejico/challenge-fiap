const dados = [
    {
        titulo: "Dicas para reduzir o consumo de energia",
        conteudo: `Economizar energia elétrica é uma prática importante para preservar o meio ambiente e reduzir gastos. Uma dica eficaz é desligar aparelhos eletrônicos quando não estiverem em uso, pois eles consomem energia mesmo em modo standby. Além disso, substituir lâmpadas incandescentes por modelos de LED é uma escolha inteligente, pois elas são mais eficientes e duradouras. Outra medida é aproveitar a luz natural durante o dia, mantendo cortinas e persianas abertas. Pequenas mudanças de hábito podem fazer uma grande diferença na conta de energia e no planeta.`,
        imagemUrl: {
            url: "https://static.vecteezy.com/system/resources/previews/000/554/759/original/lightbulb-vector-icon.jpg",
            alt: "Lâmpada economizando energia",
        },
        usuario: {
            nome: "schneider001",
            fotoDePerfil: 'https://media.istockphoto.com/id/655015908/pt/foto/confident-and-successful-mature-man.jpg?s=170x170&k=20&c=WcENjUYHkh8Nhb4_p31YNHHjYoP1TysZmwRzjX5zqIE='
        },
        likes: 15,
        comentarios: [
            {
                usuario: "sustentavel23",
                fotoDePerfil: 'https://img.freepik.com/vetores-premium/retrato-feminino-foto-de-perfil-de-mulher-avatar-de-cor_81894-6400.jpg?w=2000',
                conteudo: "Ótimas dicas! Vou implementá-las imediatamente. Obrigado!",
                likes: 7,
            },
            {
                usuario: "ecologic4life",
                fotoDePerfil: 'https://www.projetodraft.com/wp-content/uploads/2023/01/marina-gontijo-avatar-lensa3.jpg.webp',
                conteudo: "Parabéns pelo post! Essas práticas sustentáveis são essenciais para o nosso futuro.",
                likes: 3,
            },
        ],
    },
]
export const postagensSchema = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(dados);
        }, 2000);
    });
};