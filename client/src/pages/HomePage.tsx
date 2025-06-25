import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Category } from "@shared/schema";

export default function HomePage() {
  const { data: categories, isLoading } = useQuery<Category[]>({
    queryKey: ["/api/categories"],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-bpf-blue to-bpf-blue-light text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Comprehensive Fastening Solutions</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Leading manufacturer of high-quality bolts, screws, nuts, washers, and fasteners across ASTM, ASME, ISO, DIN, BS, EN, SAE and Indian material specifications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button size="lg" className="bg-white text-bpf-blue hover:bg-gray-100">
                View Products
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-bpf-blue">
                Get Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Product Categories Overview */}
      <section className="py-16 bg-bpf-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Product Range</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories?.map((category) => (
              <Card key={category.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <img 
                    src={category.image || ""} 
                    alt={category.name} 
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2 text-bpf-blue">{category.name}</h3>
                  <p className="text-gray-600 text-sm">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Manufacturing Facility" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">About BPF - BoltPort Fasteners</h2>
              <p className="text-gray-600 mb-6">
                We are a leading manufacturer of comprehensive fastening solutions, specializing in high-quality bolts, screws, nuts, washers, and custom fasteners. Our products meet international standards including ASTM, ASME, ISO, DIN, BS, EN, SAE and Indian specifications.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-bpf-gray rounded-lg">
                  <div className="text-2xl font-bold text-bpf-blue">25+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-bpf-gray rounded-lg">
                  <div className="text-2xl font-bold text-bpf-blue">1000+</div>
                  <div className="text-sm text-gray-600">Product Variants</div>
                </div>
              </div>
              <Link href="/contact">
                <Button className="bg-bpf-blue hover:bg-bpf-blue-light">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
