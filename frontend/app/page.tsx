'use client'

import { useState } from "react";
import Hero from "@/components/Hero";
import Search from "@/components/Search";
import Footer from "@/components/Footer";
// import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import ItemCategory from "@/components/ItemCategory";
import Bookevent from "@/components/Service";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Discountmeal from "@/components/Discountmeal";
import Compinfor from "@/components/Compinfor";

const Page = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    // <div className="flex relative bg-black  justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    <div className="bg-[#000319] overflow-hidden">
        <div className="w-full">
          <Topbar />
          <Navbar />
          <Hero />
          <Discountmeal discountoffer={[]} />
          <Footer />
          
          {/* <FloatingNav 
            className=""
            navItems={[
              {name: "Home", link: "/home", icon: <FaHome /> }
            ]}
          /> */}
            {/* <Search onSearch={setSearchQuery} /> */}
            {/* <ItemCategory searchQuery={searchQuery}/> */}
            {/* <Bookevent /> */}
            {/* <Compinfor /> */}
        </div>
    </div>
  )
}

export default Page


// "use client"

// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import Swal from "sweetalert2";
// import Footer from "@/components/Footer";

// // 
// export default function Home() {
//   const router = useRouter();
//   const [userName, setUserName] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [formLoading, setFormLoading] = useState(false);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setError('');
//     setFormLoading(true);

//     try {
//       // const success = process.env.SUCCESS;
//       // const name = process.env.NAME;
//       const success = process.env.NEXT_PUBLIC_SUCCESS || '@Kenny201$';
//       const name = process.env.NEXT_PUBLIC_NAME || 'Daramola';
//       if(!userName){
//         setError("Please enter a username!");
//         Swal.fire("Please enter a username!", "", "warning");
//         return;
//       } else if(!password){
//         setError("Please fill in your password!");
//         Swal.fire("Please fill in your password!", "", "warning");
//         return;
//       } else if(userName !== name) {
//         setError("Invalid username or password!");
//         Swal.fire({
//           title: "Invalid username or password!",
//           icon: "error",
//         });
//         return;
//       } else if(password !== success) {
//         setError("Invalid username or password!");
//         Swal.fire({
//           title: "Invalid username or password!",
//           icon: "error",
//         });
//         return;
//       } else {
//         Swal.fire({ title: "Login successful!", icon: "success" });
//         router.push("/home");
//       }

//     } catch {
//       setError("An unexpected error occurred!");
//       Swal.fire({
//         title: "Oops! Something went wrong",
//         icon: "error",
//       });
//     } finally {
//       setFormLoading(false);
//     }
//   };

//   return (
//     <main className="w-full h-screen overflow-y-auto flex flex-col justify-between px-5 md:px-10 py-10 border border-blue-400">
//       <section className="w-full max-w-[600px] mx-auto rounded shadow bg-white py-10">
//         <div className="w-full flex justify-center items-center gap-4 mb-5">
//           {/* <img src={image} alt="" className="text-black"  /> */}
//           <h1 className="font-bold text-3xl">Client Login</h1>
//         </div>
//         <form onSubmit={handleSubmit} className="w-full">
//           <p className="text-center text-sm text-gray-500 mb-4">
//             Please enter your username and password to access the client dashboard.
//           </p>
//           {error && <span className="text-red-500 ">{error}</span>}
//           <div className="w-full max-w-[400px] mx-auto flex flex-col justify-start items-start gap-3 px-3">
//             <div className="w-full">
//               <label htmlFor="">Username: </label>
//               <input
//                 type="text"
//                 value={userName}
//                 onChange={(e) => setUserName(e.target.value)}
//                 className="setup-form-input p-2"
//                 required 
//               />
//             </div>

//             <div className="w-full">
//               <label htmlFor="">Password: </label>
//               <input 
//                 type="password" 
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="setup-form-input p-2"
//                 required 
//               />
//             </div>
//             <button type="submit" className=" px-4 py-3 bg-slate-100 hover:bg-white rounded shadow-sm mt-5">
//               { formLoading ? (<i>Loading ...</i>) : "Login"}
//             </button>
//           </div>
//         </form>
//       </section>

//       <Footer />
//     </main>
//   );
// } 