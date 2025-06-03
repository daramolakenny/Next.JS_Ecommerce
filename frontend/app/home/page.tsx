'use client'

import Hero from "@/components/Hero";
import FindProduct from "@/components/FindProduct";
import Footer from "@/components/Footer";
import Food from "@/components/Food";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import ItemCategory from "@/components/ItemCategory";

const page = () => {
  return (
    // <div className="flex relative bg-black  justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    <div className="bg-black overflow-hidden sm:px-10">
        <div className="w-full">
          <FloatingNav 
            className=""
            navItems={[
              {name: "Home", link: "/home", icon: <FaHome /> }
            ]}
          />
            <Hero />
            <FindProduct />
            <ItemCategory />
            <Footer />
        </div>
    </div>
  )
}

export default page