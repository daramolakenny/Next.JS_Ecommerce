'use client'

import { useState } from "react";
import Hero from "@/components/Hero";
import Search from "@/components/Search";
import Footer from "@/components/Footer";
import ItemCategory from "@/components/ItemCategory";
import Bookevent from "@/components/Service";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/restaurant/Navbar";
import Discountmeal from "@/components/Discountmeal";
import Compinfor from "@/components/Compinfor";
import Carousel from "@/components/restaurant/Carousel";

const Page = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    // <div className="flex relative bg-black  justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    <div className="bg-[#000319] overflow-hidden">
        <div className="w-full">
          <Topbar />
          <Navbar />
          {/* <FloatingNav 
            className=""
            navItems={[
              {name: "Home", link: "/home", icon: <FaHome /> }
            ]}
          /> */}
            <Hero />
            <Search onSearch={setSearchQuery} />
            <Discountmeal discountoffer={[]} />
            <ItemCategory searchQuery={searchQuery}/>
            <Bookevent />
            <Compinfor />
            <Carousel />
            <Footer />
        </div>
    </div>
  )
}

export default Page