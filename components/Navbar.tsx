import { links } from "@/data";
import { useState } from "react";
import Link from "next/link";


export default function Navbar() {
    const [active, setActive] = useState<number | undefined>();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        if(isMenuOpen){
            setIsMenuOpen(false);
        } else {
            setIsMenuOpen(true);
        }
    }

    const handleClick = () => {
        if(!isMenuOpen) return;
        setIsMenuOpen(false);
    }

    return (
            <header className="flex justify-around bg-white my-4 p-6 sticky">
                    <div className="py-2 font-extrabold">
                    <Link href={"/"}></Link>
                    Mossny <span>.NG</span>
                </div>
                
                <div className="flex justify-around">
                    <ul className="flex">
                        {links.map((item) => (
                            <li key={item.id} className="px-4 py-2">
                                <a 
                                    href={item.href}
                                    onClick={() => setActive(item.id)}
                                    className={`${active === item.id ? "bg-yellow-200 text-white rounded-4xl p-0.5" : "#fff"}`}
                                > {item.title} </a>
                            </li>
                        ))}
                    </ul>

                    <div className="rounded-full bg-[#03081F] font-bold text-white items-center ml-10">
                        {/* <span>icon</span> */}
                        <Link href={"/auth"}>
                            <button className="py-2 px-4">Login/Signup</button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                <div className="md:hidden pr-8">
                    <button
                        onClick={toggleMenu}
                        className="text-red-500 hover:text-purple-400"
                        aria-label="Toggle Menu"
                        aria-expanded={isMenuOpen}
                    >
                        {isMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                l                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden text-2xl pb-4 leading-loose pl-4">
                        <ul>
                            <li className="block pb-2" onClick={handleClick}>Home</li>
                        </ul>
    
                        <div className="rounded-full bg-[#03081F] font-bold text-white items-center ml-10">
                            {/* <span>icon</span> */}
                            <Link href={""}>
                                <button className="py-2 px-4">
                                    Login/Signup
                                </button>
                            </Link>
                        </div>
                    </div>
                )}
                </div>
        </header>
    );
}