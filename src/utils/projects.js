import ras from "../assets/images/ras.webp";
import joke from "../assets/images/joke.webp";
import lofi from "../assets/images/lofi.webp";
import blog from "../assets/images/blog.webp";
import BlockChange from "../assets/images/Blockchange_logo_square.png";
import Leofunlab from "../assets/images/Leofunlab_image.jpg";

// Creazione di un array di oggetti con i progetti
const data = [
    {
        name: "BlockChange",
        type: "Cross-Platform App",
        url: "https://github.com/SimoFerre98/BlockChange",
        github: 'https://github.com/SimoFerre98/BlockChange',
        image: BlockChange,
        slug: "docaid",
        description: "Thesis project for the degree in Computer Engineering. The project is a decentralized application that allows to buy cripto through the blockchain using testnet.",
        tech: ['Dart', 'JavaScript', 'Kotlin', 'Solidity', 'Swift','HTML']
    },
    {
        name: "LeoFunLab",
        type: "Website",
        url: "https://www.leofunlab.com/",
        github: "https://github.com/SimoFerre98/Leofunlab",
        image: Leofunlab,
        slug: "devblogs",
        description: "Site for a gym.",
        tech: ['HTML', 'Javascript', 'Css']
    }
]

// Selettore di progetti
export function getData(){
    return data;
}