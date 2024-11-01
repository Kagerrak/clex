import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Users, Cloud, FastForward, CheckCircle } from "lucide-react";

export default function ValuesSection() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Our Core Values: CLEX
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Users,
              title: "Client-Centric",
              description:
                "We put our clients at the heart of everything we do.",
            },
            {
              icon: Cloud,
              title: "Leadership in Innovation",
              description: "We lead in adopting cutting-edge technologies.",
            },
            {
              icon: FastForward,
              title: "Efficiency in Execution",
              description:
                "We are committed to optimizing processes and delivering swift services.",
            },
            {
              icon: CheckCircle,
              title: "Excellence in All Aspects",
              description:
                "We pursue excellence in every facet of our operations.",
            },
          ].map((value, index) => (
            <Card key={index}>
              <CardHeader>
                <value.icon className="h-8 w-8 mb-2 text-primary" />
                <CardTitle>{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{value.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
