"use client"

import { navItems } from "@/data"

import Hero from "@/components/Hero"
import Grid from "@/components/Grid"
import Footer from "@/components/Footer"
import Clients from "@/components/Clients"
import Approach from "@/components/Approach"
import Experience from "@/components/Experience"
import RecentProjects from "@/components/RecentProjects"
import { FloatingNav } from "@/components/ui/FloatingNavbar"

const Home = () => {
  return (
    <main className="relative w-full">
      <FloatingNav navItems={navItems} />

      <Hero />
      <div className=" bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        {/* <div className="z-10 bg-black-100"> */}
        <Grid />
        <RecentProjects />
        <Experience />
        <Clients />
        <Approach />
        <Footer />
        {/* </div> */}
      </div>
    </main>
  )
}

export default Home
