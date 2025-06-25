import { useQuery } from "@tanstack/react-query";
import { useRoute, Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Breadcrumb from "@/components/Breadcrumb";
import type { Standard } from "@shared/schema";

export default function StandardDetailPage() {
  const [, params] = useRoute("/standards/:id");
  const standardId = params?.id ? parseInt(params.id) : null;

  const { data: standard, isLoading } = useQuery<Standard>({
    queryKey: [`/api/standards/${standardId}`],
    enabled: !!standardId,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">Loading standard...</div>
      </div>
    );
  }

  if (!standard) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">Standard not found</div>
      </div>
    );
  }

  const equivalents = standard.equivalents ? JSON.parse(standard.equivalents) : [];
  const dimensions = standard.dimensions ? JSON.parse(standard.dimensions) : [];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Standards", href: "/standards" },
    { label: standard.code, active: true }
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <Breadcrumb items={breadcrumbItems} />
      
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        {standard.code} - {standard.description}
      </h1>

      {/* Equivalent Standards */}
      {equivalents.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Equivalent Standards</h2>
          <div className="flex flex-wrap gap-2">
            {equivalents.map((equiv: string, index: number) => (
              <Badge key={index} variant="outline" className="bg-gray-100 text-bpf-blue border-bpf-blue">
                {equiv}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {/* Technical Diagram */}
      {standard.diagram && (
        <div className="mb-8 text-center">
          <img 
            src={standard.diagram} 
            alt={`${standard.code} Technical Drawing`} 
            className="mx-auto rounded-lg shadow-lg border max-w-2xl"
          />
        </div>
      )}

      {/* Dimensions Table */}
      {dimensions.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-800 bg-bpf-gray p-4 -m-6 mb-6">
              Dimensions for {standard.code} {standard.description}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader className="bg-bpf-blue">
                <TableRow>
                  {Object.keys(dimensions[0] || {}).map((key) => (
                    <TableHead key={key} className="text-white font-medium">
                      {key}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {dimensions.map((dimension: any, index: number) => (
                  <TableRow key={index} className={index % 2 === 1 ? "bg-gray-50" : ""}>
                    {Object.values(dimension).map((value: any, valueIndex: number) => (
                      <TableCell key={valueIndex} className="text-center text-gray-600">
                        {String(value)}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
