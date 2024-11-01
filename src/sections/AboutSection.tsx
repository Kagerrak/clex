import { Cloud } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          About CloudExpress
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg mb-4">
              CloudExpress (CLEX) Customs Brokerage is a dynamic and
              forward-thinking firm based in the Philippines. Our team brings
              together diverse specializations in customs, logistics, and
              international trade.
            </p>
            <p className="text-lg">
              Leveraging cutting-edge technology, we have streamlined our
              operations to minimize costs while maximizing efficiency, allowing
              us to offer highly competitive rates without compromising on
              service quality.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Cloud className="h-32 w-32 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
}
