import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Download } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Breadcrumb from "@/components/Breadcrumb";
import type { Datasheet } from "@shared/schema";

export default function DatasheetsPage() {
  const [search, setSearch] = useState('');
  const { toast } = useToast();

  const { data: datasheets, isLoading } = useQuery<Datasheet[]>({
    queryKey: ["/api/datasheets", { search }],
  });

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Datasheets", active: true }
  ];

  const handleDownload = async (datasheet: Datasheet) => {
    try {
      const response = await fetch(`/api/datasheets/${datasheet.id}/download`);
      const result = await response.json();
      
      toast({
        title: "Download Initiated",
        description: `Downloading ${datasheet.filename}`,
      });
    } catch (error) {
      toast({
        title: "Download Failed",
        description: "Unable to download datasheet. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">Loading datasheets...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-bpf-gray min-h-screen">
      <Breadcrumb items={breadcrumbItems} />
      
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Bolting Material Data Sheets</h1>
      
      {/* Search Bar */}
      <div className="mb-8">
        <div className="flex items-center max-w-md">
          <Input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="rounded-r-none focus:ring-2 focus:ring-bpf-blue"
          />
          <Button 
            variant="secondary" 
            className="rounded-l-none border-l-0"
            onClick={() => {}}
          >
            <Download size={16} />
          </Button>
        </div>
      </div>

      {/* Datasheets List */}
      <Card>
        <CardContent className="p-0">
          <div className="divide-y divide-gray-200">
            {datasheets?.map((datasheet) => (
              <div 
                key={datasheet.id} 
                className="flex items-center justify-between p-4 hover:bg-gray-50"
              >
                <span className="text-gray-700">{datasheet.name}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleDownload(datasheet)}
                  className="text-bpf-blue hover:text-bpf-blue-light"
                >
                  <Download size={16} />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
