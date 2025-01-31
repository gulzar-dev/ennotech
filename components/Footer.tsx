import { MailIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-blue py-6 pt-14 px-8">
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto text-left">
        <div className="flex flex-col justify-center space-y-4">
          <Image src="/ennotech-logo.svg" width={50} height={50} alt="ennotech-logo" />
          <p className="text-white text-sm ">6th Floor, Sr.No284/2D,286, Ideas to Impact, Behind Vijay Sales, Baner Gaon, Haveli, Pune – 411045</p>
        </div>
        <div>
          <h3 className="font-semibold text-base text-gray-200 mb-4">SERVICES</h3>
          <ul className="space-y-2 text-white font-light text-xs ">
            <li><Link href="#services">IT Strategy & Consulting</Link></li>
            <li><Link href="#services">Cloud Solutions</Link></li>
            <li><Link href="#services">Cybersecurity Services</Link></li>
            <li><Link href="#services">Software Development</Link></li>
            <li><Link href="#services">IT Infrastructure Management</Link></li>
            <li><Link href="#services">AI Solutions</Link></li>
            <li><Link href="#services">Dashboard Development & Analytics</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-base text-gray-200 mb-4">BUSINESS HOURS</h3>
          <p className="space-y-2 text-white font-light text-sm">Monday to Friday</p>
          <p className="space-y-2 text-white font-light text-sm">9:00 AM - 6:00 PM</p>
        </div>
        <div>
          <h3 className="font-semibold text-base text-gray-200 mb-4">CONTACT US</h3>
          <p className="space-y-2 text-white font-light text-sm inline-flex "><MailIcon className="mr-2 w-[17px] h-[17px] m-auto" />support@ennotechsolutions.in</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-10">
        <p className="text-4xl md:text-7xl text-center text-[#4B3F72] font-bold mb-2 drop-shadow-[0px_4px_4px_rgb(0,0,0,0.25)] backdrop-blur-lg">ENNOTECH SOLUTIONS</p>
        <div className="flex flex-col md:flex-row justify-between items-center bg-blue text-gray-400 ">
          <p className="text-xs font-light">© 2025 <span className="font-medium">Ennotech Solutions</span></p>
          <p className="text-xs">[ENNOTECH SOLUTIONS PRIVATE LIMITED] | EMPOWERING BUSINESSES THROUGH TECHNOLOGY</p>
        </div>
      </div>
    </footer>
  )
}

