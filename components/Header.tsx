import { Button } from "@/components/ui/button"
import Image from "next/image"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { MenuIcon } from "lucide-react"
import Link from "next/link"
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet"
import { useRouter } from "next/navigation"

export function Header(props: any) {
  const router = useRouter()

  const handleClick = (e : string) => {
      setTimeout(() => {
          router.push(e);
      }, 600);
  }

  return (
    <nav className="flex sticky top-0 z-10 relative items-center justify-between px-8 py-4 md:py-6 bg-[#eff6ee] overflow-hidden">
      <div className="w-14 lg:w-16 lg:h-16">
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
      <Sheet >
      <SheetTrigger><MenuIcon className="text-blue font-bold w-[35px] h-[35px]" /></SheetTrigger>
        <SheetContent className="space-y-4 p-4 w-60 pt-10 flex flex-col items-start bg-[#eff6ee] text-blue font-semibold">
          <SheetClose ><button onClick={() => handleClick("/#home")}>Home</button></SheetClose>
          <SheetClose ><button onClick={() => handleClick("/#about")}>About Us</button></SheetClose>
          <SheetClose ><button onClick={() => handleClick("/#services")}>Our Services</button></SheetClose>
          <SheetClose ><button onClick={() => handleClick("/#why-choose-us")}>Why Choose Us?</button></SheetClose>
          <SheetClose ><Button onClick={() => handleClick("/#contact")} className="bg-yellow hover:bg-orange-500 text-blue font-semibold text-base ">Contact Us</Button></SheetClose>
        </SheetContent>
      </Sheet>
      </div>
    </nav>
  )
}
