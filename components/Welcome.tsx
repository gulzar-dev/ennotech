import { Card } from "@/components/ui/card"

export function Welcome() {
  return (
    <section id="about" className="py-24 ">
      <div className="max-w-7xl mx-auto px-8 py-14 grid md:grid-cols-2 gap-16 shadow-md shadow-black/10">
        <div className="border-b border-blue py-4">
          <h2 className="text-2xl lg:text-4xl font-medium text-blue mb-8">Welcome to Ennotech Solutions Private Limited</h2>
          <p className="text-blue text-base lg:text-lg leading-relaxed">
            At Ennotech Solutions, we are dedicated to empowering businesses with state-of-the-art IT consulting
            services designed to meet the demands of a fast-paced digital world. Founded on the principles of
            innovation, integrity, and excellence, we leverage cutting-edge technology and proven methodology to unlock
            their full potential. Our team of seasoned IT professionals brings years of experience across various
            industries, ensuring that your business not only adapts to technological change but thrives through it.
          </p>
        </div>
        <Card className="bg-yellow px-8 py-12 shadow-[8px_8px_38px_16px_rgba(0,0,0,0.20)]">
          <h3 className="text-xl lg:text-3xl font-medium text-blue mb-4">How We've Helped Our Clients</h3>
          <p className="text-blue text-base lg:text-lg leading-relaxed">
            Whether you're a budding startup aiming to establish a strong technological foundation or a well-established
            company looking to optimize and innovate, we've consistently proven to be trusted partners in achieving
            success. With a client-first approach, we tailor every solution to align with your unique needs and
            objectives, making us a reliable extension of your team.
          </p>
        </Card>
      </div>
    </section>
  )
}

