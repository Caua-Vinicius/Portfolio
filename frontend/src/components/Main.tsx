import Cardtab from "./Cardtab";

export default function Main() {
    return (
        <div className="flex h-screen items-center justify-center">
            <div className="w-[50vh] h-[60vh]">
                <Cardtab>
                    <div className="">
                        <h2 className="font-semibold">Olá!</h2>
                        <h2 className="font-semibold">Meu nome é Cauã Vinicius</h2>
                        <h1 className="font-bold text-[#ff7d00] drop-shadow-lg">Sou um desenvolvedor FullStack</h1>

                        <div className="bottom-0">
                            <a className="border-[0.3vh] border-[#A69C9C] rounded-lg font-bold text-[2vh] p-[0.5vh] transition ease-in-out duration-300 hover:bg-[#A69C9C] hover:text-white " href="#SobreMim">Sobre mim</a>
                        </div>
                    </div>


                </Cardtab>
            </div>
        </div>
    )
}