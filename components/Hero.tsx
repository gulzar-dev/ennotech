import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="home" className="relative h-[600px]">
      <Image
        src="/kobu-agency-7okkFhxrxNw-unsplash.jpg"
        alt="IT Consulting Services"
        fill
        className="object-cover"
      />
      <div className="absolute w-full h-full inset-0 mx-auto bg-black/20" />
      <div className="absolute inset-0 flex flex-col justify-center px-8 text-white max-w-7xl mx-auto ">
        <h1 className="text-4xl lg:text-5xl font-medium mb-2 drop-shadow-md">IT Consulting Services</h1>
        <p className="text-lg lg:text-xl mb-8 font-normal">Together we can evaluate, secure and transform your business</p>
        <Button className="w-fit text-lg px-8 py-6 bg-orange-500 hover:bg-orange-600">TALK TO AN EXPERT →</Button>
      </div>
    </section>
  )
}

