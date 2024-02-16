import ras from "../assets/images/ras.webp";
import joke from "../assets/images/joke.webp";
import lofi from "../assets/images/lofi.webp";
import blog from "../assets/images/blog.webp";
import BlockChange from "../assets/images/BlockChange.png";
const data = [
    {
        name: "BlockChange",
        type: "Cross-Platform App",
        url: "https://doc-aid.vercel.app/",
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
        github: "",
        image: blog,
        slug: "devblogs",
        description: "This is a Blogging website made for technology lovers.",
        tech: ['HTML', 'Javascript', 'Css', 'Tailwind css', 'Astro', 'Markdown']
    }
]

export function getData(){
    return data;
}