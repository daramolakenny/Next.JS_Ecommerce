import { links } from "@/data";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [active, setActive] = useState();

    return (
        <header className="flex justify-around bg-white my-4 p-6">
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
                                    // onClick={() => setActive()}
                                    className={`${active === item ? "bg-yellow-200 text-white rounded-4xl p-0.5" : "#fff"}`}
                                > {item.title} </a>
                            </li>
                        ))}
                    </ul>

                    <div className="rounded-full bg-[#000319] font-bold text-white items-center ml-10">
                        {/* <span>icon</span> */}
                        <Link href={"/auth"}>
                            <button className="py-2 px-4">Login/Signup</button>
                        </Link>
                    </div>
                </div>
        </header>
    );
}