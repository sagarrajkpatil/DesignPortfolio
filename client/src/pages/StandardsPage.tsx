import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link, useLocation } from "wouter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import Breadcrumb from "@/components/Breadcrumb";
import type { Standard } from "@shared/schema";

export default function StandardsPage() {
  const [location] = useLocation();
  const urlParams = new URLSearchParams(location.split('?')[1]);
  const [search, setSearch] = useState(urlParams.get('search') || '');
  const [type, setType] = useState(urlParams.get('type') || '');

  const { data: standards, isLoading } = useQuery<Standard[]>({
    queryKey: ["/api/standards", { type, search }],
  });

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Standards", active: true }
  ];

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (search) params.set('search', search);
    if (type) params.set('type', type);
    window.history.pushState({}, '', `/standards?${params.toString()}`);
  };

  const handleReset = () => {
    setSearch('');
    setType('');
    window.history.pushState({}, '', '/standards');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">Loading standards...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={breadcrumbItems} />
      
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Fastener Standards</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-6 space-y-6">
              {/* Search */}
              <div>
                <Input
                  type="text"
                  placeholder="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="mb-2"
                />
                <div className="flex gap-2">
                  <Button onClick={handleSearch} size="sm" variant="secondary">
                    Search
                  </Button>
                  <Button onClick={handleReset} size="sm" variant="secondary">
                    Reset
                  </Button>
                </div>
              </div>

              {/* Filter Categories */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">DIN</label>
                  <Select value={type === 'DIN' ? 'DIN' : ''} onValueChange={(value) => setType(value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="All DIN Standards" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All DIN Standards</SelectItem>
                      <SelectItem value="DIN">DIN Standards</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">ISO</label>
                  <Select value={type === 'ISO' ? 'ISO' : ''} onValueChange={(value) => setType(value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="All ISO Standards" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All ISO Standards</SelectItem>
                      <SelectItem value="ISO">ISO Standards</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">IS</label>
                  <Select value={type === 'IS' ? 'IS' : ''} onValueChange={(value) => setType(value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="All IS Standards" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All IS Standards</SelectItem>
                      <SelectItem value="IS">IS Standards</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">BS</label>
                  <Select value={type === 'BS' ? 'BS' : ''} onValueChange={(value) => setType(value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="All BS Standards" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All BS Standards</SelectItem>
                      <SelectItem value="BS">BS Standards</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Standards Table */}
        <div className="lg:col-span-4">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableBody>
                  {standards?.map((standard) => (
                    <TableRow key={standard.id} className="hover:bg-gray-50">
                      <TableCell className="font-medium text-bpf-blue">
                        <Link href={`/standards/${standard.id}`} className="hover:underline">
                          {standard.code}
                        </Link>
                      </TableCell>
                      <TableCell className="text-gray-600">
                        {standard.description}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              {/* Pagination */}
              <div className="px-6 py-4 bg-gray-50 border-t">
                <div className="flex items-center justify-center space-x-2">
                  <Button size="sm" className="bg-bpf-blue text-white">1</Button>
                  <Button size="sm" variant="secondary">2</Button>
                  <span className="text-gray-400">...</span>
                  <Button size="sm" variant="secondary">Last</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
