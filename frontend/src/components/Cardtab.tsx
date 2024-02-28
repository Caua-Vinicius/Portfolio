import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from '@fortawesome/free-solid-svg-icons';

interface CardtabProps {
    children: React.ReactNode;
}

export default function Cardtab({ children }: CardtabProps) {
    return (
        <div className="bg-[#D9D9D9] w-full h-full rounded-xl shadow-md">
            <div className="bg-[#A69C9C] w-full h-[7vh] rounded-t-xl shadow-sm flex items-center px-[3vh] gap-[1vh]">
                <FontAwesomeIcon className="w-[2vh] text-[#C63838] shadow-sm" icon={faCircle} />
                <FontAwesomeIcon className="w-[2vh] text-[#DABA47] shadow-sm" icon={faCircle} />
                <FontAwesomeIcon className="w-[2vh] text-[#34B21F] shadow-sm" icon={faCircle} />
            </div>
            <div className="p-[3vh]">
                {children}
            </div>

        </div>
    )
}