
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"
import { useState } from "react"

const content = {
  1: "We believe that technology should be a catalyst for growth, not a barrier. That’s why we take the time to deeply understand your business goals and challenges. Our consultants collaborate with you to develop an IT roadmap that aligns seamlessly with your vision, ensuring sustainable growth and long-term success. From digital transformation strategies to IT governance and risk management, we provide actionable insights and practical solutions.",
  2: "The future of business is in the cloud, and we’re here to make that transition effortless for you. Our team specializes in cloud migration, deployment, and management services, helping you harness the scalability, flexibility, and cost-efficiency of cloud computing. Whether it’s public, private, or hybrid cloud solutions, we ensure a smooth transition with minimal disruption to your operations.",
  3: "In today’s interconnected world, cybersecurity is more critical than ever. We offer end-to-end security solutions to protect your business from potential threats. Our services include risk assessments, penetration testing, compliance audits, and the implementation of advanced security frameworks. We work tirelessly to safeguard your data, systems, and reputation, giving you peace of mind.",
  4: "Bring your ideas to life with our bespoke software development services. From conceptualization to deployment, we design and build user-friendly applications that cater to your business needs. Our expertise spans web development, mobile apps, enterprise software, and custom integrations. With an emphasis on usability and scalability, we deliver solutions that drive productivity and foster innovation.",
  5: "A well-maintained IT infrastructure is the backbone of any successful business. Our infrastructure management services ensure your systems are reliable, scalable, and secure. We handle everything from network optimization and server maintenance to hardware upgrades and performance monitoring, so you can focus on what you do best—running your business.",
  6: "Embrace the future with our Artificial Intelligence (AI) solutions. We help businesses leverage AI to automate processes, gain actionable insights, and enhance decision-making. Our services include AI strategy development, machine learning model implementation, and natural language processing solutions tailored to your specific needs.",
  7: "Make informed decisions with real-time data visualization and analytics. We design and develop customized dashboards that consolidate critical metrics into an intuitive interface. From KPI tracking to predictive analytics, our dashboards empower you to stay on top of your business operations effortlessly.",
}

export function Services() {
  const [ classes , setClasses ] = useState("bg-blue text-yellow p-2")
  const [ closeclass , setCloseClass] = useState("")
  const [ open , setOpen] = useState("item1")
  const [ boxcontent , setBoxContent] = useState(content[1])
  return (
    <section id="services" className="py-24 px-8 bg-[#EFF6EE]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-0">
        <div>
          <h3 className="text-2xl lg:text-3xl text-blue font-semibold mb-8">Our Business Consulting Services</h3>
          <div className="text-blue p-10 px-4 md:pr-0">
          <Accordion type="single" defaultValue={"item-1"} className="w-full text-blue md:hidden block">
            <AccordionItem value="item-1" >
              <AccordionTrigger onClick={() => {setClasses("bg-blue text-yellow p-2"), setOpen("item1"), setBoxContent(content[1])}} className={open === "item1" ? classes : closeclass}>IT Strategy & Consulting</AccordionTrigger>
              <AccordionContent>
                We believe that technology should be a catalyst for growth, not a barrier. That’s why we take the time to deeply understand your business goals and challenges. Our consultants collaborate with you to develop an IT roadmap that aligns seamlessly with your vision, ensuring sustainable growth and long-term success. From digital transformation strategies to IT governance and risk management, we provide actionable insights and practical solutions.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger onClick={() => {setClasses("bg-blue text-yellow p-2"), setCloseClass("") , setOpen("item2"), setBoxContent(content[2])}} className={open === "item2" ? classes : closeclass}>Cloud Solutions</AccordionTrigger>
              <AccordionContent>
              The future of business is in the cloud, and we’re here to make that transition effortless for you. Our team specializes in cloud migration, deployment, and management services, helping you harness the scalability, flexibility, and cost-efficiency of cloud computing. Whether it’s public, private, or hybrid cloud solutions, we ensure a smooth transition with minimal disruption to your operations.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger onClick={() => {setClasses("bg-blue text-yellow p-2"), setCloseClass("") , setOpen("item3"), setBoxContent(content[3])}} className={open === "item3" ? classes : closeclass}>Cybersecurity Services</AccordionTrigger>
              <AccordionContent>
                In today’s interconnected world, cybersecurity is more critical than ever. We offer end-to-end security solutions to protect your business from potential threats. Our services include risk assessments, penetration testing, compliance audits, and the implementation of advanced security frameworks. We work tirelessly to safeguard your data, systems, and reputation, giving you peace of mind.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger onClick={() => {setClasses("bg-blue text-yellow p-2"), setCloseClass("") , setOpen("item4"), setBoxContent(content[4])}} className={open === "item4" ? classes : closeclass}>Software Development</AccordionTrigger>
              <AccordionContent>
                Bring your ideas to life with our bespoke software development services. From conceptualization to deployment, we design and build user-friendly applications that cater to your business needs. Our expertise spans web development, mobile apps, enterprise software, and custom integrations. With an emphasis on usability and scalability, we deliver solutions that drive productivity and foster innovation.              
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger onClick={() => {setClasses("bg-blue text-yellow p-2"), setCloseClass("") , setOpen("item5"), setBoxContent(content[5])}} className={open === "item5" ? classes : closeclass}>IT Infrastructure Management</AccordionTrigger>
              <AccordionContent>
              A well-maintained IT infrastructure is the backbone of any successful business. Our infrastructure management services ensure your systems are reliable, scalable, and secure. We handle everything from network optimization and server maintenance to hardware upgrades and performance monitoring, so you can focus on what you do best—running your business.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger onClick={() => {setClasses("bg-blue text-yellow p-2"), setCloseClass("") , setOpen("item6"), setBoxContent(content[6])}} className={open === "item6" ? classes : closeclass}>AI Solutions</AccordionTrigger>
              <AccordionContent>
              Embrace the future with our Artificial Intelligence (AI) solutions. We help businesses leverage AI to automate processes, gain actionable insights, and enhance decision-making. Our services include AI strategy development, machine learning model implementation, and natural language processing solutions tailored to your specific needs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger onClick={() => {setClasses("bg-blue text-yellow p-2"), setCloseClass("") , setOpen("item7"), setBoxContent(content[7])}} className={open === "item7" ? classes : closeclass}>Dashboard Development & Analytics</AccordionTrigger>
              <AccordionContent>
              Make informed decisions with real-time data visualization and analytics. We design and develop customized dashboards that consolidate critical metrics into an intuitive interface. From KPI tracking to predictive analytics, our dashboards empower you to stay on top of your business operations effortlessly.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
            <ul className="space-y-6 text-lg hidden md:block">
              <li onClick={() => {setClasses("bg-blue text-yellow p-2"), setOpen("item1"), setBoxContent(content[1])}} className={open === "item1" ? classes : closeclass}>IT Strategy & Consulting</li>
              <li onClick={() => {setClasses("bg-blue text-yellow p-2"), setCloseClass("") , setOpen("item2"), setBoxContent(content[2])}} className={open === "item2" ? classes : closeclass}>Cloud Solutions</li>
              <li onClick={() => {setClasses("bg-blue text-yellow p-2"), setCloseClass("") , setOpen("item3"), setBoxContent(content[3])}} className={open === "item3" ? classes : closeclass}>Cybersecurity Services</li>
              <li onClick={() => {setClasses("bg-blue text-yellow p-2"), setCloseClass("") , setOpen("item4"), setBoxContent(content[4])}} className={open === "item4" ? classes : closeclass}>Software Development</li>
              <li onClick={() => {setClasses("bg-blue text-yellow p-2"), setCloseClass("") , setOpen("item5"), setBoxContent(content[5])}} className={open === "item5" ? classes : closeclass}>IT Infrastructure Management</li>
              <li onClick={() => {setClasses("bg-blue text-yellow p-2"), setCloseClass("") , setOpen("item6"), setBoxContent(content[6])}} className={open === "item6" ? classes : closeclass}>AI Solutions</li>
              <li onClick={() => {setClasses("bg-blue text-yellow p-2"), setCloseClass("") , setOpen("item7"), setBoxContent(content[7])}} className={open === "item7" ? classes : closeclass}>Dashboard Development & Analytics</li>
            </ul>
          </div>
        </div>
        <div className="hidden md:flex flex-col justify-center bg-yellow p-6">
          <p className="text-blue mb-8">
            {boxcontent}
          </p>
          {/* <Button className="w-fit">LEARN MORE →</Button> */}
        </div>
      </div>
    </section>
  )
}

