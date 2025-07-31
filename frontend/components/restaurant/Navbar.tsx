import { link } from "@/data";

// interface links = {''}[]

export default function Navbar() {

    return (
        <header className="flex justify-around bg-white my-4 p-6">
                <div className="py-2 font-extrabold">
                    Mossny <span>.NG</span>
                </div>
                
                <div className="flex justify-around">
                    <ul className="flex">
                        {link.map((item) => (
                            <li key={item.id} className="px-4 py-2">
                                <a href={item.href} className=""> {item.title} </a>
                            </li>
                        ))}
                    </ul>

                    <div className="rounded-full bg-[#000319] font-bold text-white items-center ml-10">
                        {/* <span>icon</span> */}
                        <button className="py-2 px-4">Login/Signup</button>
                    </div>
                </div>
        </header>
    );
}