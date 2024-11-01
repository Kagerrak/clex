import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Import Customs Clearance",
              description:
                "Comprehensive customs clearance: we manage documents, duties & taxes, and compliance, ensuring swift, hassle-free import release.",
            },
            {
              title: "Customs and Tariff Consultancy",
              description:
                "Expert guidance on regulations, tariffs, and duty optimization for informed import strategies.",
            },
            {
              title: "Importer's Accreditation",
              description:
                "Hassle-free management of importer accreditation: we handle paperwork and government liaisons to maintain your import status.",
            },
            {
              title: "Trucking Coordination",
              description:
                "Coordinated logistics: we partner with trusted truckers for safe, timely port-to-door delivery of your goods.",
            },
          ].map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
