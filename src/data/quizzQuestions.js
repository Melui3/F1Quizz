export const quizzQuestions = [
    {
        id: 1,
        question: "🏛️ Les règles de la FIA, tu...",
        answers: [
            { text: "🤷 Tu les découvres au fur et à mesure, pas trop ton truc", points: { lando: 3, oscar: 2, lance: 1 } },
            { text: "📖 Tu les suis à la lettre, la sécurité avant tout", points: { lewis: 3, georges: 2, lance: 1 } },
            { text: "😏 Tu les connais par cœur et les ignores quand ça t'arrange", points: { max: 3, lewis: 1, charles: 2 } },
            { text: "🧠 Tu les comprends mais tu sais quand les contourner", points: { oscar: 3, lando: 2, charles: 1 } }
        ]
    },
    {
        id: 2,
        question: "🏎️ Ton style de pilotage préféré c'est...",
        answers: [
            { text: "🧊 Calme et réfléchi, tu évites les erreurs coûteuses", points: { georges: 3, lance: 2, max: 1 } },
            { text: "💥 Agressif et rapide, toujours à la limite", points: { max: 3, charles: 2, lando: 1 } },
            { text: "🎯 Précis et stratégique, tu sais quand attaquer", points: { lewis: 3, georges: 2, oscar: 1 } },
            { text: "🌊 Fluide et adaptable, tu t'ajustes à chaque situation", points: { oscar: 3, lance: 2, lewis: 1 } }
        ]
    },
    {
        id: 3,
        question: "😤 Quelqu'un te dépasse en course, tu...",
        answers: [
            { text: "⏳ Tu restes calme et attends le bon moment pour contre-attaquer", points: { lance: 3, oscar: 2, max: 1 } },
            { text: "🔍 Tu observes son style pour trouver une faille", points: { oscar: 3, lewis: 2, georges: 1 } },
            { text: "⚡ Tu ripostes immédiatement, pas question de se laisser faire", points: { max: 3, charles: 2, lando: 1 } },
            { text: "📻 Tu actives la radio pour crier au complot", points: { lewis: 3, georges: 2, lance: 1 } }
        ]
    },
    {
        id: 4,
        question: "📻 Ton équipe te demande de changer de stratégie en pleine course, tu...",
        answers: [
            { text: "🤝 Tu obéis sans discuter, l'équipe sait ce qu'elle fait", points: { lewis: 3, georges: 2, lance: 1 } },
            { text: "🙈 Tu ignores les instructions et fais à ta tête", points: { charles: 3, lando: 2, max: 1 } },
            { text: "💬 Tu expliques pourquoi ta stratégie actuelle est meilleure", points: { oscar: 3, max: 2, charles: 1 } },
            { text: "🤔 Tu suis les conseils mais gardes ton instinct en tête", points: { lando: 3, oscar: 2, lewis: 1 } }
        ]
    },
    {
        id: 5,
        question: "🎙️ Interview après la course, tu...",
        answers: [
            { text: "😶 Tu évites les questions difficiles et restes vague", points: { lance: 3, georges: 2, max: 1 } },
            { text: "📋 Tu prépares tes réponses à l'avance pour être sûr de toi", points: { lewis: 3, georges: 2, oscar: 1 } },
            { text: "😄 Tu réponds honnêtement mais avec humour", points: { lando: 3, oscar: 2, lance: 1 } },
            { text: "😈 Sarcasme total ou tu parles mal aux journalistes", points: { max: 3, charles: 2, lando: 1 } }
        ]
    },
    {
        id: 6,
        question: "☕ Ta boisson pendant une course c'est...",
        answers: [
            { text: "🥤 Un soda, pour le goût sucré", points: { lando: 3, oscar: 2, lance: 1 } },
            { text: "☕ Un café, pour la concentration", points: { oscar: 3, lewis: 2, georges: 1 } },
            { text: "⚡ Une boisson énergétique pour rester alerte", points: { max: 3, charles: 2, lando: 1 } },
            { text: "💧 De l'eau, toujours rester hydraté", points: { lewis: 3, georges: 2, lance: 1 } }
        ]
    },
    {
        id: 7,
        question: "😈 Ton ennemi juré c'est...",
        answers: [
            { text: "🏛️ La FIA et ses régulations interminables", points: { lance: 3, oscar: 2, max: 1 } },
            { text: "🏁 Un autre pilote ou une autre écurie", points: { max: 3, charles: 2, lando: 1 } },
            { text: "🔧 Les ingénieurs qui ne comprennent pas tes besoins", points: { oscar: 3, lewis: 2, georges: 1 } },
            { text: "📰 Les journalistes et les médias", points: { lewis: 3, georges: 2, lance: 1 } }
        ]
    },
    {
        id: 8,
        question: "💪 T'es un bon pilote parce que...",
        answers: [
            { text: "🧊 Tu sais rester calme sous pression", points: { lance: 3, oscar: 2, max: 1 } },
            { text: "🏋️ Tu travailles dur et tu t'entraînes constamment", points: { lewis: 3, georges: 2, lance: 1 } },
            { text: "🧠 Tu es intelligent et stratégique dans ta façon de piloter", points: { oscar: 3, lewis: 2, georges: 1 } },
            { text: "⚡ Tu as un talent naturel pour la vitesse, c'est inné", points: { max: 3, charles: 2, lando: 1 } }
        ]
    },
    {
        id: 9,
        question: "🎵 Si ta vie était une chanson, ce serait...",
        answers: [
            { text: "🎷 'Smooth Operator' — calculé et élégant", points: { lewis: 3 } },
            { text: "🕺 'Happy' de Pharrell — toujours fun et détendu", points: { lando: 3 } },
            { text: "🥊 'Eye of the Tiger' — stratégie et patience", points: { oscar: 3, lance: 1 } },
            { text: "✈️ 'Danger Zone' — full vitesse, no limits", points: { max: 3, charles: 1 } }
        ]
    },
    {
        id: 10,
        question: "🦁 Si t'étais un animal sur le circuit...",
        answers: [
            { text: "🦉 Hibou — observe tout avant d'agir", points: { oscar: 3, lance: 1 } },
            { text: "🦊 Renard — malin, rusé, jamais prévisible", points: { lewis: 3, georges: 1 } },
            { text: "🐕 Chien joueur — sympa avec tout le monde", points: { lando: 3 } },
            { text: "🐅 Tigre — attaque sans pitié dès que possible", points: { max: 3, charles: 2 } }
        ]
    },
    {
        id: 11,
        question: "⚡ Ton super-pouvoir en course serait...",
        answers: [
            { text: "🌧️ Manipuler la météo à ta guise", points: { lance: 3, oscar: 1 } },
            { text: "🚀 Nitro illimité, toujours plus vite", points: { max: 3, charles: 2 } },
            { text: "🧠 Télépathie pour anticiper chaque pilote", points: { lewis: 3, georges: 2 } },
            { text: "✨ Se téléporter pour doubler n'importe qui", points: { lando: 3, oscar: 1 } }
        ]
    },
    {
        id: 12,
        question: "🏆 Ton geste signature après une victoire...",
        answers: [
            { text: "😌 Signe discret mais satisfait, classe", points: { oscar: 3, lance: 1 } },
            { text: "✊ Poing levé et regard de tueur", points: { max: 3, charles: 2 } },
            { text: "👐 Mains levées calmement, toujours élégant", points: { lewis: 3, georges: 2 } },
            { text: "🎉 Saut, grand sourire et showtime total", points: { lando: 3, charles: 1 } }
        ]
    }
];
