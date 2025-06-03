// 'use client'

// import { Spotlight } from "@/components/ui/Spotlight";
// import { TextGenerateEffect } from "./ui/TextGenerateEffect";

// const Hero = () => {
//   return (
//     <div className="pb-20 pt-36">
//         <div>
//           <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
//           <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="red" />
//           <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
//         </div>

//         <div className="flex justify-center ">
//           <div className="max-w-[60vw] lg:max-w-[80vw] sm:max-w-2xl text-white">
//             <h3 className="text-[20px] flex justify-center ">SO YUMMY</h3>
//             <h2 className="text-6xl flex justify-center tracking-wide">Desserts</h2>

//             <TextGenerateEffect 
//               className="text-center text-sm"
//               words="Indulge in our delicious, handcrafted desserts made with the freshest ingredients. Whether you crave rich chocolate, tangy fruit tarts, or creamy delights, we have something to satisfy every sweet tooth."
//             />
//           </div>
//         </div>
//     </div>
//   )
// }

// export default Hero;










'use client'

import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 w-full"> {/* Added w-full */}
        <div className="w-full">
          <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen max-w-full max-h-screen" fill="yellow" />
          <Spotlight className="top-10 -right-10 h-[80vh] w-[50vw] max-w-full max-h-full " fill="white" />
          <Spotlight className="top-28 left-80 max-w-full max-h-full h-[80vh] w-[50vw]" fill="green" />

          
          
          {/* <Spotlight className="top-10 right-0 absolute h-[80vh] w-[50vw] max-w-full max-h-full" fill="red" />

          <Spotlight className="top-28 left-80 max-w-full max-h-full h-[80vh] w-[50vw]" fill="blue" />
        </div> */}
        </div>

        <div className="flex justify-center w-full"> {/* Added w-full */}
          <div className="w-full max-w-[60vw] lg:max-w-[80vw] sm:max-w-2xl text-white"> {/* Adjusted max-w */}
            <h3 className="text-[20px] flex justify-center ">SO YUMMY</h3>
            <h2 className="text-6xl flex justify-center tracking-wide">Desserts</h2>

            <TextGenerateEffect 
              className="text-center text-sm"
              words="Indulge in our delicious, handcrafted desserts made with the freshest ingredients. Whether you crave rich chocolate, tangy fruit tarts, or creamy delights, we have something to satisfy every sweet tooth."
            />
          </div>
        </div>
    </div>
  )
}

export default Hero;