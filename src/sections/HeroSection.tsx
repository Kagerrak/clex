import { Button } from "@/components/ui/button";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { MotionDiv } from "@/components/MotionDiv";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { services } from "@/constants/";

export default function HeroSection() {
  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-pearl">
      <div className="absolute inset-0 bg-vignette pointer-events-none"></div>
      {/* Adjusted container - added text-center and pt-32 for navbar spacing */}
      <div className="container mx-auto px-4 z-10 flex flex-col items-center mb-16 pt-32">
        {/* Hero Text - removed lg:w-1/2 and added text-center */}
        <div className="mb-8 text-center">
          <MotionDiv variants={titleVariants} initial="hidden" className="mb-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900">
              Your Client-Centric Partner in Customs Brokerage
            </h1>
          </MotionDiv>
          <TextGenerateEffect
            words="Delivering swift, seamless, and satisfying services to our clients."
            className="text-xl md:text-2xl text-blue-700 mb-8"
            delay={1}
          />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900"
            >
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Our Services - adjusted max-w and padding */}
      <div className="w-full max-w-6xl mx-auto px-4 mb-16 flex flex-col items-center">
        <div className="inline-flex flex-col mb-8 ">
          <h2 className="text-3xl font-bold text-blue-900  text-center">
            Our Services
          </h2>
          <div className=" relative w-full h-[5px] flex bg-transparent">
            <div className="absolute left-0 w-[20%] h-full bg-[#a67b2c]" />
            <div className="absolute right-0 w-[75%] h-full bg-[#0088b2]" />
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-1">
          {services.map((service) => (
            <HoverEffect
              key={service.link}
              title={service.title}
              description={service.description}
              link={service.link}
              image={service.image}
              hoverImage={service.hoverImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
