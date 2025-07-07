'use client'

import { useState } from "react";
import Hero from "@/components/Hero";
import Search from "@/components/order/Search";
import Footer from "@/components/Footer";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/restaurant/Navbar";
import Compinfor from "@/components/Compinfor";
import Carousel from "@/components/restaurant/Carousel";

const Page = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="bg-[#000319] overflow-hidden">
        <div className="w-full">
          <Topbar />
          <Navbar />
            <Hero />
            <Search onSearch={setSearchQuery} />
            <Compinfor />
            <Carousel />
            <Footer />
        </div>
    </div>
  )
}

export default Page