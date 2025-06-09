'use client'

import { useState } from "react";
import Hero from "@/components/Hero";
import Search from "@/components/Search";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import ItemCategory from "@/components/ItemCategory";
import Bookevent from "@/components/Service";

const Page = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    // <div className="flex relative bg-black  justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    <div className="bg-[#000319] overflow-hidden sm:px-10">
        <div className="w-full">
          <FloatingNav 
            className=""
            navItems={[
              {name: "Home", link: "/home", icon: <FaHome /> }
            ]}
          />
            <Hero />
            <Search onSearch={setSearchQuery} />
            <ItemCategory searchQuery={searchQuery}/>
            <Bookevent />
            <Footer />
        </div>
    </div>
  )
}

export default Page