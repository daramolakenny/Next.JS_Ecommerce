// import { li } from "motion/react-client"
import { datacategories } from "@/data/index"


type Datacategories = keyof typeof datacategories;

const Service = () => {
  return (
    <div className="w-full h-96 justify-center items-center flex flex-col" id="Service" style={{
        background: "url(/images/cabbage.jpg)",
        backgroundPosition: "center",
        backgroundSize: "center",
        
    }}>
        <div className="font-bold">
            <h2 className="text-3xl text-white">Book a Service With Us</h2>
        </div>

        <div className="flex mx-auto p-6">
            {datacategories.map((items) => (
                <li 
                    key={items.id}
                    className="justify-center text-white text-lg font-semibold hover:text-yellow-500"
                >
                    <a
                        className=""
                        // href={items.url}
                    >
                        {items.name}
                    </a>
                </li>
            ))}
        </div>
    </div>
  )
}

export default Service;