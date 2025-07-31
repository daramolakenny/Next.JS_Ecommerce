'use client'

import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Discountmeal from "@/components/Discountmeal";

const Page = () => {

  return (
    <div className="bg-[#000319] overflow-hidden">
        <div className="w-full">
          <Topbar />
          <Navbar />
          <Hero />
          <Discountmeal discountoffer={[]} />
          <Footer />
        </div>
    </div>
  )
}

export default Page