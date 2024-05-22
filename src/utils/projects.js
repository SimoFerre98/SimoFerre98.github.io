import ras from "../assets/images/ras.webp";
import joke from "../assets/images/joke.webp";
import lofi from "../assets/images/lofi.webp";
import blog from "../assets/images/blog.webp";
import BlockChange from "../assets/images/BlockChange_Logo_Square.png";
import Leofunlab from "../assets/images/LeoFunLab_Image.jpg";
import Brains2 from "../assets/images/StartingPageBrains.png";
// Creazione di un array di oggetti con i progetti
const data = [
    {
        name: "BlockChange",
        type: "Cross-Platform App",
        url: "https://github.com/SimoFerre98/BlockChange",
        github: 'https://github.com/SimoFerre98/BlockChange',
        image: BlockChange,
        slug: "BlockChange",
        description: "Thesis project for the degree in Computer Engineering. The project is a decentralized application that allows to buy cripto through the blockchain using testnet.",
        tech: ['Dart', 'JavaScript', 'Kotlin', 'Solidity', 'Swift','HTML']
    },
    {
        name: "LeoFunLab",
        type: "Website",
        url: "https://www.leofunlab.com/",
        github: "https://github.com/SimoFerre98/Leofunlab",
        image: Leofunlab,
        slug: "LeoFunlab",
        description: "Site for a gym.",
        tech: ['HTML', 'Javascript', 'css']
    },
    {
        name: "BRAINS2",
        type: "Project by Simulation Team from Genoa University",
        url: "https://github.com/luciry/BRAIN",
        github: "https://github.com/luciry/BRAIN",
        image: Brains2,
        slug: "BRAIN",
        description: "Project introduces an advanced simulator designed to assist decision-makers in strategically implementing smart cities and green infrastructure initiatives.",
        tech: ['Unity', 'Python', 'C#']
    }
]

// Selettore di progetti
export function getData(){
    return data;
}