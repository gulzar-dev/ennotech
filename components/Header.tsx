import { Button } from "@/components/ui/button"
import Image from "next/image"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { MenuIcon } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <nav className="flex relative items-center justify-between px-8 py-6 bg-[#eff6ee] overflow-hidden">
      <div className="w-14 lg:w-16 h-16">
        <div >
          <Link href="/">
          <Image width={60} height={60}  alt="ennotech-logo" src="/ennotech-logo.svg" />
          </Link>
        </div>
      </div>
      <div className="md:flex items-center gap-8 text-blue font-semibold text-sm lg:text-base hidden ">
        <a href="#home" >
          Home
        </a>
        <a href="#about" >
          About Us
        </a>
        <a href="#services" >
          Our Services
        </a>
        <a href="#why-choose-us" >
          Why Choose Us?
        </a>
        <Link href="#contact"><Button className="bg-yellow hover:bg-orange-500 text-blue font-semibold text-sm lg:text-base ">Contact Us</Button></Link>
      </div>
      <div className="md:hidden">
        <DropdownMenu>
        <DropdownMenuTrigger><MenuIcon className="text-blue font-bold w-[35px] h-[35px]" /></DropdownMenuTrigger>
        <DropdownMenuContent className="space-y-4 p-4 w-60 absolute right-0 bg-[#eff6ee] text-blue font-semibold">
          <Link href="/"><DropdownMenuItem>Home</DropdownMenuItem></Link>
          <Link href="/"><DropdownMenuItem>About Us</DropdownMenuItem></Link>
          <Link href="/"><DropdownMenuItem>Our Services</DropdownMenuItem></Link>
          <Link href="/"><DropdownMenuItem>Why Choose Us?</DropdownMenuItem></Link>
          <Button className="bg-yellow hover:bg-orange-500 text-blue font-semibold text-base ">Contact Us</Button>
        </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  )
}

