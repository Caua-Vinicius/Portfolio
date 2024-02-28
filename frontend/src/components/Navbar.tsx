import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import Link from "next/link";



export default function Navbar() {
    return (
        <nav
            className="bg-[#A69C9C] fixed w-full h-[8vh] items-center flex px-[4vh] shadow"
        >

            <a href="#Inicio" className="font-[PressStart] text-white">
                Cauã Vinicius
            </a>
            <div className=" ml-[5vh] flex">
                <FontAwesomeIcon className="w-[3vh] text-white" icon={faSun} />
                <button className="mx-[1vh] bg-black w-[8vh] h-[4vh] rounded-xl">
                    <div></div>
                </button>
                <FontAwesomeIcon className="w-[3vh] text-white" icon={faMoon}/>
            </div>

            <div className="font-[PressStart] text-white ml-auto flex gap-x-[3vh]">
                <a className="hover:underline" href="#SobreMim">Sobre mim</a>
                <a className="hover:underline" href="#Projetos">Projetos</a>
            </div>
        </nav>
    )
}