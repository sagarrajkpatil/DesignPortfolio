import { useQuery } from "@tanstack/react-query";
import { Link, useLocation } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import Breadcrumb from "@/components/Breadcrumb";
import type { Product } from "@shared/schema";

export default function ProductsPage() {
  const [location] = useLocation();
  const urlParams = new URLSearchParams(location.split('?')[1]);
  const category = urlParams.get('category') || 'Bolts';

  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products", { category }],
  });

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: category, active: true }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">Loading products...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={breadcrumbItems} />
      
      <h1 className="text-3xl font-bold mb-8 text-gray-800 capitalize">{category}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
        {products?.map((product) => (
          <Card key={product.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4 text-center">
              <img 
                src={product.image || ""} 
                alt={product.name} 
                className="w-full h-32 object-cover rounded mb-3"
              />
              <Link href={`/products/${product.id}`}>
                <h3 className="text-bpf-orange font-semibold text-sm mb-1 hover:underline cursor-pointer">
                  {product.name}
                </h3>
              </Link>
              <p className="text-xs text-gray-600 mb-1">Category: {product.category}</p>
              <p className="text-xs text-gray-600">Hot, Cold Forged & Machined</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
