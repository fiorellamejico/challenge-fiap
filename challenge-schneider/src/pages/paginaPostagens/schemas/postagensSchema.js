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
            fotoDePerfil: 'https://media.istockphoto.com/id/655015908/pt/foto/confident-and-successful-mature-man.jpg?s=170x170&k=20&c=WcENjUYHkh8Nhb4_p31YNHHjYoP1TysZmwRzjX5zqIE=',
            titulo: "Especialista em energia verde"
        },
        likes: 15,
        comentarios: [
            {
                usuario: "sustentavel23",
                fotoDePerfil: 'https://img.freepik.com/vetores-premium/retrato-feminino-foto-de-perfil-de-mulher-avatar-de-cor_81894-6400.jpg?w=2000',
                conteudo: "Ótimas dicas! Vou implementá-las imediatamente. Obrigado!",
                titulo: "Ciclista consciente",
                likes: 7,
            },
            {
                usuario: "ecologic4life",
                fotoDePerfil: 'https://www.projetodraft.com/wp-content/uploads/2023/01/marina-gontijo-avatar-lensa3.jpg.webp',
                conteudo: "Parabéns pelo post! Essas práticas sustentáveis são essenciais para o nosso futuro.",
                titulo: "Ciclista consciente",
                likes: 3,
            },
            {
                usuario: "vitinEcologics",
                fotoDePerfil: 'https://media.istockphoto.com/id/531547724/photo/casual-man-on-white.jpg?s=612x612&w=0&k=20&c=sXxvHdgDpRKZ2yc71sZsIw-mE_SDqKRM_VIfSQcLofU=',
                conteudo: "Vai me poupar um gasto do caramba...",
                titulo: "Mestre da reciclagem",
                likes: 3,
            },
        ],
    },

    {
        titulo: "Dicas para uma reciclagem eficiente",
        conteudo: "A reciclagem é uma prática fundamental para reduzir o impacto ambiental e promover a sustentabilidade. Aqui estão algumas dicas para realizar uma reciclagem eficiente: 1. Separe corretamente os materiais recicláveis, como plástico, papel, vidro e metal, em recipientes adequados. 2. Lave e seque os materiais antes de reciclá-los para evitar contaminação. 3. Consulte os locais de coleta seletiva em sua região e faça o descarte dos materiais nos pontos apropriados. 4. Reduza o consumo de produtos descartáveis e opte por itens duráveis e reutilizáveis. 5. Incentive a reciclagem em sua comunidade, compartilhando informações e participando de programas educacionais. Lembre-se, pequenas ações individuais podem fazer uma grande diferença para o meio ambiente.",
        imagemUrl: {
            url: "https://suadecoracao.com/wp-content/uploads/2023/05/Fotos-reciclagem-embalagens-alimentos-dicas-melhores-praticas.webp",
            alt: "Reciclagem eficiente",
        },
        usuario: {
            nome: "mr.Eco",
            fotoDePerfil: "https://ih1.redbubble.net/image.325108282.1301/flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
            titulo: "Mestre da reciclagem",
        },
        likes: 8,
        comentarios: [
            {
                usuario: "sustentavel123",
                fotoDePerfil: "https://media.gettyimages.com/id/973096596/it/foto/japanese-man-portrait-in-the-studio.jpg?s=612x612&w=gi&k=20&c=hxFqo50DCaqkebmgWWGRN3xG0W-302nqB6ZY48LXS-Q=",

                conteudo: "Excelentes dicas! Vou colocá-las em prática e conscientizar minha família também.",
                titulo: "Ciclista consciente",
                likes: 4,
            },
            {
                usuario: "sustentavel23",
                fotoDePerfil: 'https://img.freepik.com/vetores-premium/retrato-feminino-foto-de-perfil-de-mulher-avatar-de-cor_81894-6400.jpg?w=2000',
                conteudo: "E digo mais",
                titulo: "Ciclista consciente",
                likes: 2,
            },
            {
                usuario: "sustentavel23",
                fotoDePerfil: 'https://img.freepik.com/vetores-premium/retrato-feminino-foto-de-perfil-de-mulher-avatar-de-cor_81894-6400.jpg?w=2000',
                conteudo: "Vamos juntos fazer a diferença! Essas dicas são muito importantes.",
                titulo: "Ciclista consciente",
                likes: 1,
            },
            {
                usuario: "vitinEcologics",
                fotoDePerfil: 'https://media.istockphoto.com/id/531547724/photo/casual-man-on-white.jpg?s=612x612&w=0&k=20&c=sXxvHdgDpRKZ2yc71sZsIw-mE_SDqKRM_VIfSQcLofU=',
                conteudo: "Já sabia...",
                titulo: "Mestre da reciclagem",
                likes: -4,
            },
        ],
    }

]
export const postagensSchema = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(dados);
        }, 2000);
    });
};