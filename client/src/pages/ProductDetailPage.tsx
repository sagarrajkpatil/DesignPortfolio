import { useQuery } from "@tanstack/react-query";
import { useRoute } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Breadcrumb from "@/components/Breadcrumb";
import type { Product } from "@shared/schema";

export default function ProductDetailPage() {
  const [, params] = useRoute("/products/:id");
  const productId = params?.id ? parseInt(params.id) : null;

  const { data: product, isLoading } = useQuery<Product>({
    queryKey: [`/api/products/${productId}`],
    enabled: !!productId,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">Loading product...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">Product not found</div>
      </div>
    );
  }

  const specifications = product.specifications ? JSON.parse(product.specifications) : {};
  const materials = product.materials ? JSON.parse(product.materials) : [];
  const standards = product.standards ? JSON.parse(product.standards) : [];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: product.category, href: `/products?category=${product.category}` },
    { label: product.name, active: true }
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <Breadcrumb items={breadcrumbItems} />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        {/* Product Image */}
        <div>
          <img 
            src={product.image || ""} 
            alt={product.name} 
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-6 text-gray-800">{product.name}</h1>
          <div className="prose prose-lg">
            <p className="text-gray-700 whitespace-pre-line">
              {product.description}
            </p>
          </div>
        </div>
      </div>

      {/* Properties Table */}
      {Object.keys(specifications).length > 0 && (
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-800 bg-bpf-gray p-6 -m-6 mb-6">
              {product.name} Properties
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableBody>
                {Object.entries(specifications).map(([key, value]) => (
                  <TableRow key={key}>
                    <TableCell className="font-medium text-gray-700 bg-gray-50 capitalize">
                      {key.replace(/_/g, ' ')}
                    </TableCell>
                    <TableCell className="text-gray-600">
                      {Array.isArray(value) ? (
                        <div className="space-y-1">
                          {value.map((item: string, index: number) => (
                            <div key={index}>{item}</div>
                          ))}
                        </div>
                      ) : (
                        String(value)
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}

      {/* Standards Section */}
      {standards.length > 0 && (
        <Card className="mb-12 bg-bpf-blue text-white">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">{product.name} Standards</h2>
            <Table>
              <TableBody>
                {standards.map((standard: string, index: number) => (
                  <TableRow key={index} className="border-blue-400">
                    <TableCell className="border-r border-blue-400 text-center">
                      {standard}
                    </TableCell>
                    <TableCell className="text-center">
                      Various sizes available
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}

      {/* Materials Section */}
      {materials.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-800">
              {product.name} Materials
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              {materials.map((material: string, index: number) => (
                <div key={index} className="text-bpf-blue hover:underline cursor-pointer">
                  {material}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
