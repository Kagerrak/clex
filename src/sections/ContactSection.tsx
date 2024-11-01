import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
        <p className="text-lg mb-4">
          Block 2 Lot 5, Dreamland, Hagonoy, Taguig City, NCR, PH, 1630
        </p>
        <p className="text-lg mb-4">+63-919-096-CLEX(2539)</p>
        <p className="text-lg mb-8">info@cloudexpresscb.com</p>
        <Button size="lg">
          Get in Touch
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}
