import maxImg from '../assets/max.webp';
import lewisImg from '../assets/lewis.webp';
import charlesImg from '../assets/charles.webp';
import landoImg from '../assets/lando.webp';
import oscarImg from '../assets/oscar.webp';
import lanceImg from '../assets/lance.webp';
import georgesImg from '../assets/george.webp';

export const drivers = [
    {
        id: 1,
        key: 'max',
        name: 'Max Verstappen',
        image: maxImg,
        color: '#FF0000',
        description: "Ultra rapide, agressif et sûr de lui, tu fonces et tu passes toujours en tête 😎"
    },
    {
        id: 2,
        key: 'lewis',
        name: 'Lewis Hamilton',
        image: lewisImg,
        color: '#00AEEF',
        description: "Stratégique, calme sous pression et toujours là pour surprendre."
    },
    {
        id: 3,
        key: 'charles',
        name: 'Charles Leclerc',
        image: charlesImg,
        color: '#D60000',
        description: "Passionné et tête brûlée, tu prends des risques mais finis par briller."
    },
    {
        id: 4,
        key: 'lando',
        name: 'Lando Norris',
        image: landoImg,
        color: '#F5F5DC',
        description: "Cool, charmeur et imprévisible, tu passes partout et fais sourire tout le monde."
    },
    {
        id: 5,
        key: 'oscar',
        name: 'Oscar Piastri',
        image: oscarImg,
        color: '#FFD700',
        description: "Jeune, malin et plein de talent, tu observes, tu apprends et tu surprends."
    },
    {
        id: 6,
        key: 'lance',
        name: 'Lance Stroll',
        image: lanceImg,
        color: '#00FF96',
        description: "Déterminé et patient, tu attends ton moment pour briller sans trop te presser."
    },
    {
        id: 7,
        key: 'georges',
        name: 'Georges Russell',
        image: georgesImg,
        color: '#0070DE',
        description: "Méthodique et solide, tu ne fais pas d’erreurs et tu gagnes la confiance du groupe."
    }
];

// --- FONCTIONS REQUISES PAR LE QUIZZ ---

export function getDriverByName(key) {
    return drivers.find(d => d.key === key);
}

export function getWinner(scoreMap) {
    let best = null;
    let bestScore = -Infinity;

    for (const key in scoreMap) {
        if (scoreMap[key] > bestScore) {
            bestScore = scoreMap[key];
            best = key;
        }
    }
    return best;
}
