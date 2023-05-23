const dados = [
    {
        titulo: "Dicas para reduzir o consumo de energia",
        conteudo: `Economizar energia elétrica é uma prática importante para preservar o meio ambiente e reduzir gastos. Uma dica eficaz é desligar aparelhos eletrônicos quando não estiverem em uso, pois eles consomem energia mesmo em modo standby. Além disso, substituir lâmpadas incandescentes por modelos de LED é uma escolha inteligente, pois elas são mais eficientes e duradouras. Outra medida é aproveitar a luz natural durante o dia, mantendo cortinas e persianas abertas. Pequenas mudanças de hábito podem fazer uma grande diferença na conta de energia e no planeta.`,
        imagemUrl: {
            url: "https://www.obramax.com.br/media/magefan_blog/tipos-de-lampada.jpg",
            alt: "Lâmpada",
        },
        usuario: {
            nome: "schneider001",
            fotoDePerfil: 'https://media.istockphoto.com/id/655015908/pt/foto/confident-and-successful-mature-man.jpg?s=170x170&k=20&c=WcENjUYHkh8Nhb4_p31YNHHjYoP1TysZmwRzjX5zqIE=',
            titulo: "Especialista em energia verde"
        },
        likes: 13,
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
        likes: 7,
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
                likes: 4,
            },
        ],
    },
    
    {
        titulo: "Dicas para o uso eficiente da água",
        conteudo: `Em casa, pequenas ações podem fazer uma grande diferença na preservação da água. Tomar banhos mais curtos, consertar vazamentos rapidamente, utilizar máquinas de lavar roupas e louças apenas com cargas completas, e reutilizar a água da chuva para regar plantas são medidas simples que contribuem para um futuro sustentável.`,
        imagemUrl: {
            url: "https://img.freepik.com/fotos-gratis/barista-brutal-em-um-casaco-preto-atras-de-uma-mesa-de-madeira-grossa-enxagua-um-pequeno-copo-transparente-com-agua-sob-uma-torneira-de-metal-prateado-em-um-cafe-a-agua-cai-do-vidro_346278-482.jpg",
            alt: "Torneida com água corrente",
        },
        usuario: {
            nome: "earthfirst",
            fotoDePerfil: 'https://img.freepik.com/fotos-gratis/estilo-de-vida-beleza-e-moda-conceito-de-emocoes-de-pessoas-jovem-gerente-de-escritorio-feminino-asiatico-ceo-com-expressao-satisfeita-em-pe-sobre-um-fundo-branco-sorrindo-com-os-bracos-cruzados-sobre-o-peito_1258-59329.jpg?w=2000',
            titulo: "Gestora Ambiental"
        },
        likes: 16,
        comentarios: [
            {
                usuario: "sustentavel45",
                fotoDePerfil: 'https://img.freepik.com/fotos-gratis/mulher-sorridente-apaixonada-segurando-as-maos-no-coracao-e-parecendo-feliz-tem-memorias-em-sua-alma-expressa-gratidao-sincera-agradecendo-por-ajuda-de-pe-contra-um-fundo-branco_176420-45923.jpg?w=2000',
                conteudo: "Post super relevante! É hora de mudar nossos hábitos e cuidar melhor desse recurso tão precioso.",
                titulo: "Assessora verde ",
                likes: 5,
            },
            {
                usuario: "greenlife",
                fotoDePerfil: 'https://img.freepik.com/fotos-gratis/homem-bonito-e-confiante-sorrindo-com-as-maos-cruzadas-no-peito_176420-18743.jpg',
                conteudo: "A água agradece! Excelentes orientações para reduzir desperdícios. Compartilhando com amigos!",
                titulo: "Engenheiro Ecológico",
                likes: 8,
            },
            {
                usuario: "ecopower",
                fotoDePerfil: 'https://img.freepik.com/fotos-gratis/mulher-sorrindo-apontando-para-o-ceu_1187-3321.jpg',
                conteudo: "Todos devem ler!",
                titulo: "Analista Ambiental",
                likes: 3,
            },
        ],
    },

    {
        titulo: "Dicas de mobilidade ao trabalho",
        conteudo: `Compartilhar o trajeto ao trabalho é uma forma inteligente de promover a sustentabilidade. Além de reduzir as emissões de carbono, a carona compartilhada economiza combustível e alivia o trânsito. Ao unir forças e compartilhar veículos, estamos contribuindo para um futuro mais limpo e sustentável.`,
        imagemUrl: {
            url: "https://audaztec.com.br/n_homo/wp-content/uploads/2019/01/original-161490a093b4c183fcf0207aac03d933-1024x683.jpg",
            alt: "Pessoas dentro de um carro",
        },
        usuario: {
            nome: "greenlife",
            fotoDePerfil: 'https://img.freepik.com/fotos-gratis/homem-bonito-e-confiante-sorrindo-com-as-maos-cruzadas-no-peito_176420-18743.jpg',
            titulo: "Engenheiro Ecológico"
        },
        likes: 20,
        comentarios: [
            {
                usuario: "schneider001",
                fotoDePerfil: 'https://media.istockphoto.com/id/655015908/pt/foto/confident-and-successful-mature-man.jpg?s=170x170&k=20&c=WcENjUYHkh8Nhb4_p31YNHHjYoP1TysZmwRzjX5zqIE=',
                conteudo: "Dar caronas é uma ótima maneira de economizar combustível e diminuir a emissão de poluentes.",
                titulo: "Especialista em energia verde",
                likes: 4,
            },
            {
                usuario: "sustentavel45",
                fotoDePerfil: 'https://img.freepik.com/fotos-gratis/mulher-sorridente-apaixonada-segurando-as-maos-no-coracao-e-parecendo-feliz-tem-memorias-em-sua-alma-expressa-gratidao-sincera-agradecendo-por-ajuda-de-pe-contra-um-fundo-branco_176420-45923.jpg?w=2000',
                conteudo: "Adoro a ideia das caronas! Vamos nos unir para tornar o trajeto ao trabalho mais sustentável.",
                titulo: "Assessora verde  ",
                likes: 2,
            },
            
        ],
    },

    {
        titulo: "Dicas de uso da energia no trabalho",
        conteudo: `Vamos juntos promover a sustentabilidade no escritório! Desligar os monitores e computadores ao sair faz toda a diferença. Economizamos energia, reduzimos as emissões de carbono e estendemos a vida útil dos equipamentos. Cada ação conta! Vamos unir esforços para um ambiente de trabalho mais eficiente e consciente. Juntos, podemos fazer a diferença!`,
        imagemUrl: {
            url: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            alt: "Pessoas usando vários computadores",
        },
        usuario: {
            nome: "sustentavel45",
            fotoDePerfil: 'https://img.freepik.com/fotos-gratis/mulher-sorridente-apaixonada-segurando-as-maos-no-coracao-e-parecendo-feliz-tem-memorias-em-sua-alma-expressa-gratidao-sincera-agradecendo-por-ajuda-de-pe-contra-um-fundo-branco_176420-45923.jpg?w=2000',
            titulo: "Assessora verde  "
        },
        likes: 16,
        comentarios: [
            {
                usuario: "EarthFirst",
                fotoDePerfil: 'https://img.freepik.com/fotos-gratis/estilo-de-vida-beleza-e-moda-conceito-de-emocoes-de-pessoas-jovem-gerente-de-escritorio-feminino-asiatico-ceo-com-expressao-satisfeita-em-pe-sobre-um-fundo-branco-sorrindo-com-os-bracos-cruzados-sobre-o-peito_1258-59329.jpg?w=2000',
                conteudo: "Ótimas sugestões para reduzir o consumo de eletricidade no ambiente de trabalho. Parabéns!",
                titulo: "Gestora Ambiental",
                likes: 2,
            },
            {
                usuario: "ecopower",
                fotoDePerfil: 'https://img.freepik.com/fotos-gratis/mulher-sorrindo-apontando-para-o-ceu_1187-3321.jpg',
                conteudo: "Excelente post! Vamos adotar essas medidas e contribuir para a sustentabilidade no trabalho.",
                titulo: "Analista Ambiental",
                likes: 5,
            },
            {
                usuario: "greenlife",
                fotoDePerfil: 'https://img.freepik.com/fotos-gratis/homem-bonito-e-confiante-sorrindo-com-as-maos-cruzadas-no-peito_176420-18743.jpg',
                conteudo: "Dicas simples e eficientes para economizar energia no trabalho. Compartilhando com a equipe!",
                titulo: "Engenheiro Ecológico",
                likes: 6,
            },
            {
                usuario: "schneider001",
                fotoDePerfil: 'https://media.istockphoto.com/id/655015908/pt/foto/confident-and-successful-mature-man.jpg?s=170x170&k=20&c=WcENjUYHkh8Nhb4_p31YNHHjYoP1TysZmwRzjX5zqIE=',
                conteudo: "A economia de energia começa no trabalho. Adorei as sugestões práticas!",
                titulo: "Especialista em energia verde",
                likes: 3,
            },
        ],
    },

    
   

    {
        titulo: " Refletindo sobre o Consumo de Energia no Ambiente de Trabalho",
        conteudo: `Queridos colegas de trabalho, vamos fazer uma pausa para refletir sobre o consumo de energia em nossos equipamentos de escritório. É essencial que verifiquemos se nossas geladeiras, cafeteiras e micro-ondas possuem baixo consumo. Ao fazer essa avaliação, estaremos contribuindo para a sustentabilidade e reduzindo o impacto ambiental. Pequenas mudanças em nossos hábitos diários podem fazer uma grande diferença. Vamos optar por aparelhos energicamente eficientes, economizando recursos e dinheiro. Compartilhem essas informações com os colegas e incentivem práticas sustentáveis. Juntos, podemos criar um ambiente de trabalho mais consciente e responsável. Cuidemos do nosso planeta enquanto trabalhamos.`,
        imagemUrl: {
            url: "https://files.tecnoblog.net/wp-content/uploads/2021/12/as-geladeiras-mais-economicas-de-2021_thumb_tb.png",
            alt: "",
        },
        usuario: {
            nome: "Ecopower",
            fotoDePerfil: 'https://img.freepik.com/fotos-gratis/mulher-sorrindo-apontando-para-o-ceu_1187-3321.jpg',
            titulo: "Analista Ambiental"
        },
        likes: 11,
        comentarios: [
            {
                usuario: "schneider001",
                fotoDePerfil: 'https://media.istockphoto.com/id/655015908/pt/foto/confident-and-successful-mature-man.jpg?s=170x170&k=20&c=WcENjUYHkh8Nhb4_p31YNHHjYoP1TysZmwRzjX5zqIE=',
                conteudo: "Conscientização é o primeiro passo para uma mudança positiva. Vamos fazer a diferença!",
                titulo: "Especialista em energia verde",
                likes: 1,
            },
            {
                usuario: "lifeConnect",
                fotoDePerfil: 'https://img.freepik.com/fotos-gratis/retrato-de-homem-afro-americano-profissional-e-inteligente-de-pe-com-as-maos-cruzadas-no-peito-pose-confiante_176420-33861.jpg',
                conteudo: "Ótima iniciativa! Pequenas ações no consumo de energia podem gerar grandes benefícios ambientais.",
                titulo: "Consultor Eco",
                likes: 2,
            },
            {
                usuario: "ourJouney",
                fotoDePerfil: 'https://img.freepik.com/fotos-gratis/pessoa-senior-gesticulando-isolada_23-2149193756.jpg',
                conteudo: "o	O futuro depende das nossas escolhas diárias.",
                titulo: "Pesquisador sustentável",
                likes: 5,
            },
            
    
        ],
    },

    {
        titulo: " Uso Consciente do Ar Condicionado",
        conteudo: `Vamos falar sobre o uso consciente do ar condicionado em nosso escritório. Quando estivermos desfrutando do ar fresco, lembrem-se de manter portas e janelas fechadas. Isso ajuda a manter a eficiência do sistema, economizar energia e reduzir o desperdício. Ao agir de forma responsável, estamos contribuindo para um ambiente de trabalho mais sustentável e confortável para todos. Vamos aproveitar ao máximo o ar condicionado, mas também lembrar de desligá-lo quando não estiver em uso e ajustar a temperatura de forma adequada. Pequenos gestos fazem uma grande diferença. Juntos, podemos criar um ambiente de trabalho eco consciente.`,
        imagemUrl: {
            url: "https://blog.frigelar.com.br/wp-content/uploads/2020/10/Foto-2-ar-condicionado-escritorio-sala-de-estudos.jpg",
            alt: "",
        },
        usuario: {
            nome: "schneider001",
            fotoDePerfil: 'https://media.istockphoto.com/id/655015908/pt/foto/confident-and-successful-mature-man.jpg?s=170x170&k=20&c=WcENjUYHkh8Nhb4_p31YNHHjYoP1TysZmwRzjX5zqIE=',
            titulo: "Especialista em energia verde"
        },
        likes: 13,
        comentarios: [
            {
                usuario: "sustentavel45",
                fotoDePerfil: 'https://img.freepik.com/fotos-gratis/mulher-sorridente-apaixonada-segurando-as-maos-no-coracao-e-parecendo-feliz-tem-memorias-em-sua-alma-expressa-gratidao-sincera-agradecendo-por-ajuda-de-pe-contra-um-fundo-branco_176420-45923.jpg?w=2000',
                conteudo: "Excelente lembrança! Vamos fechar portas e janelas para otimizar o uso do ar condicionado",
                titulo: "Assessora verde ",
                likes: 1,
            },
            {
                usuario: "greenlife",
                fotoDePerfil: 'https://img.freepik.com/fotos-gratis/homem-bonito-e-confiante-sorrindo-com-as-maos-cruzadas-no-peito_176420-18743.jpg',
                conteudo: "Parabéns pela iniciativa! Vamos desfrutar do ar fresco, mas com consciência e responsabilidade.",
                titulo: "Engenheiro Ecológico",
                likes: 2,
            },
            
        ],
    },

    {
        titulo: "Repensando o Consumo: Valorizando a Sustentabilidade e a Economia Circular ",
        conteudo: `Antes de sairmos para comprar um novo aparelho, vamos considerar outras opções. Vamos pensar duas vezes e tentar consertar o que já temos. Se não for possível, podemos doá-lo a alguém que precise. Dessa forma, estaremos reduzindo o desperdício e contribuindo para a economia circular. Pequenos gestos, como reparar e compartilhar, fazem toda a diferença para o meio ambiente e para as pessoas ao nosso redor. Vamos valorizar a sustentabilidade em nossas escolhas e promover uma cultura de consumo responsável. Juntos, podemos construir um futuro mais sustentável e solidário.`,
        imagemUrl: {
            url: "https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2020/10/14/1602707427596.jpg",
            alt: "",
        },
        usuario: {
            nome: "LifeConnect",
            fotoDePerfil: 'https://img.freepik.com/fotos-gratis/retrato-de-homem-afro-americano-profissional-e-inteligente-de-pe-com-as-maos-cruzadas-no-peito-pose-confiante_176420-33861.jpg',
            titulo: "Consultor Eco"
        },
        likes: 17,
        comentarios: [
            {
                usuario: "shneiderverde",
                fotoDePerfil: 'https://img.freepik.com/fotos-gratis/homem-idoso-bonito-sentado_144627-3131.jpg?w=2000',
                conteudo: "Consertar é uma opção inteligente. Vamos valorizar o que já temos e evitar o descarte prematuro.",
                titulo: "Consultor Ambiental",
                likes: 4,
            },
            {
                usuario: "ourJouney",
                fotoDePerfil: 'https://img.freepik.com/fotos-gratis/pessoa-senior-gesticulando-isolada_23-2149193756.jpg',
                conteudo: "Reduzir, reutilizar e doar.",
                titulo: "Pesquisador sustentável",
                likes: 4,
            },
            {
                usuario: "Ecopower",
                fotoDePerfil: 'https://img.freepik.com/fotos-gratis/mulher-sorrindo-apontando-para-o-ceu_1187-3321.jpg',
                conteudo: "Valorizar o que já temos é um gesto sustentável.",
                titulo: "Analista Ambiental",
                likes: 4,
            },
            
        ],
    },

    {
        titulo: "Dica sobre como poupar energia nos corredores e outro ambientes ",
        conteudo: `Se você acha que a iluminação nos corredores está sendo desperdiçada, aqui está uma solução: sensores de presença! Instale esses dispositivos inteligentes para acenderem as luzes apenas quando alguém estiver presente. Dessa forma, você economiza energia e reduz os custos. Os sensores de presença são fáceis de instalar e podem ser ajustados conforme sua preferência. Além disso, eles aumentam a segurança ao garantir que os corredores estejam sempre bem iluminados quando necessário. Faça a diferença e instale sensores de presença nos corredores!`,
        imagemUrl: {
            url: "https://blog.henrilustres.com.br/wp-content/uploads/2021/08/ba544f848a5b545fe5a715d7bf7f1917_simula%C3%A7%C3%A3o-sensor-de-presen%C3%A7a-em-desenho-opt.jpg",
            alt: "",
        },
        usuario: {
            nome: "ourJouney",
            fotoDePerfil: 'https://img.freepik.com/fotos-gratis/pessoa-senior-gesticulando-isolada_23-2149193756.jpg',
            titulo: "Pesquisador sustentável"
        },
        likes: 15,
        comentarios: [
            {
                usuario: "shneiderverde",
                fotoDePerfil: 'https://img.freepik.com/fotos-gratis/homem-idoso-bonito-sentado_144627-3131.jpg?w=2000',
                conteudo: "Instalar sensores de presença é simples e eficaz para reduzir desperdícios de iluminação.",
                titulo: "Consultor Ambiental",
                likes: 2,
            },
            {
                usuario: "EarthFirst",
                fotoDePerfil: 'https://img.freepik.com/fotos-gratis/estilo-de-vida-beleza-e-moda-conceito-de-emocoes-de-pessoas-jovem-gerente-de-escritorio-feminino-asiatico-ceo-com-expressao-satisfeita-em-pe-sobre-um-fundo-branco-sorrindo-com-os-bracos-cruzados-sobre-o-peito_1258-59329.jpg?w=2000',
                conteudo: "Segurança, economia e sustentabilidade em um único dispositivo: sensores de presença nos corredores!",
                titulo: "Gestor Ambiental",
                likes: 3,
            },
            
        ],
    },

    {
        titulo: " Visão Innovadora: A Ponte Flutuante Alimentada por Energia Solar",
        conteudo: `A renomada arquiteta Margot Krasojevic surpreende novamente com sua visão inovadora. Desta vez, apresenta-nos uma ponte flutuante revolucionária alimentada por energia solar. O projeto, concebido com tecnologia de ponta, combina perfeitamente sustentabilidade e funcionalidade. A ponte utiliza painéis solares estrategicamente integrados em sua estrutura para capturar a energia do sol e alimentar seu sistema elétrico. Isso não apenas a torna ecologicamente correta, mas também proporciona uma fonte de energia limpa e renovável. Além disso, a ponte flutuante possui um design elegante e contemporâneo, proporcionando uma experiência visualmente deslumbrante aos usuários. Sua estrutura flexível e adaptável permite a movimentação fluida com as mudanças no nível da água.`,
        imagemUrl: {
            url: "https://s2.glbimg.com/am5PbmN4A0fkqP8Yp_RZWfsacqM=/smart/e.glbimg.com/og/ed/f/original/2017/08/29/36376-preview_low_2121-7_36376_sc_v2com.jpg",
            alt: "",
        },
        usuario: {
            nome: "shneiderverde",
            fotoDePerfil: 'https://img.freepik.com/fotos-gratis/homem-idoso-bonito-sentado_144627-3131.jpg?w=2000',
            titulo: "Consultor Ambiental"
        },
        likes: 25,
        comentarios: [
            {
                usuario: "Ecopower",
                fotoDePerfil: 'https://img.freepik.com/fotos-gratis/mulher-sorrindo-apontando-para-o-ceu_1187-3321.jpg',
                conteudo: "A ponte flutuante alimentada por energia solar é um exemplo brilhante de engenharia ambiental",
                titulo: "Analista Ambiental",
                likes: 7,
            },
            {
                usuario: "lifeConnect",
                fotoDePerfil: 'https://img.freepik.com/fotos-gratis/retrato-de-homem-afro-americano-profissional-e-inteligente-de-pe-com-as-maos-cruzadas-no-peito-pose-confiante_176420-33861.jpg',
                conteudo: "Adoro ver a tecnologia sendo usada de forma inteligente para promover a sustentabilidade",
                titulo: "Consultor Eco",
                likes: 3,
            },
            {
                usuario: "earthFirst",
                fotoDePerfil: 'https://img.freepik.com/fotos-gratis/estilo-de-vida-beleza-e-moda-conceito-de-emocoes-de-pessoas-jovem-gerente-de-escritorio-feminino-asiatico-ceo-com-expressao-satisfeita-em-pe-sobre-um-fundo-branco-sorrindo-com-os-bracos-cruzados-sobre-o-peito_1258-59329.jpg?w=2000',
                conteudo: "O design elegante dessa ponte flutuante é simplesmente deslumbrante!",
                titulo: "Gestora Ambiental",
                likes: 2,
            },
            
        ],
    },

]
export const postagensSchema = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(dados);
        }, 1000);
    });
};