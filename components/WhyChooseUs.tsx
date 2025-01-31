import Image from "next/image"
import { Separator } from "./ui/separator"

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 px-8 bg-center bg-no-repeat bg-cover bg-[url(/Website_Featured_UiPath_030120236-1680x750.jpg)]">
      <div className="max-w-7xl mx-auto bg-[#EFF6EE] p-8 shadow-[0px_-8px_11px_8px_rgb(0,0,0,0.4)]">
        <h2 className="text-2xl lg:text-4xl font-normal text-blue text-center mb-4">Why Choose Us?</h2>
        <Separator className="mb-14 bg-blue" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center">
              <Image src="/user-experience.png" width={100} height={100} alt="Expertise" />
            </div>
            <h3 className="font-medium text-base mb-2">Expertise</h3>
            <p className="text-blue font-normal text-base">
            Our team is composed of highly skilled professionals with deep industry knowledge and hands-on experience in diverse technological domains.
            </p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center">
              <Image src="/problem-solving.png" width={100} height={100} alt="Expertise" />
            </div>
            <h3 className="font-medium text-base mb-2">Tailored Solutions</h3>
            <p className="text-blue font-normal text-base">
            We understand that no two businesses are the same. That’s why we take a personalized approach, delivering solutions that are custom-fit to your requirements.
            </p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center">
              <Image src="/commitment.png" width={100} height={100} alt="Expertise" />
            </div>
            <h3 className="font-medium text-base mb-2">Commitment to Excellence</h3>
            <p className="text-blue font-normal text-base">
            We are passionate about helping our clients succeed. Our commitment to delivering top-notch services ensures that we consistently exceed expectations.
            </p>
          </div>
        <div className="col-span-1 md:col-span-3 grid md:grid-cols-2 gap-12 justify-items-center justify-center">
          <div className="text-center max-w-[250px] justify-self-end">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center">
              <Image src="/inspiration.png" width={100} height={100} alt="Expertise" />
            </div>
            <h3 className="font-medium text-base mb-2">Innovative Approach</h3>
            <p className="text-blue font-normal text-base">
            Technology evolves rapidly, and so do we. By staying updated with the latest advancements and trends, we ensure your business remains ahead of the curve.
            </p>
          </div>
          <div className="text-center max-w-[250px] justify-self-start">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center">
              <Image src="/customer-service.png" width={100} height={100} alt="Expertise" />
            </div>
            <h3 className="font-medium text-base mb-2">End-to-End Support</h3>
            <p className="text-blue font-normal text-base">
            From initial consultation to implementation and ongoing support, we’re with you at every stage of your IT journey.
            </p>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

