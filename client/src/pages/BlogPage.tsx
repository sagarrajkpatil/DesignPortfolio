import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link, useLocation } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Breadcrumb from "@/components/Breadcrumb";
import type { BlogPost } from "@shared/schema";

export default function BlogPage() {
  const [location] = useLocation();
  const urlParams = new URLSearchParams(location.split('?')[1]);
  const [selectedCategory, setSelectedCategory] = useState(urlParams.get('category') || '');

  const { data: posts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog", { category: selectedCategory }],
  });

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog", active: true }
  ];

  const categories = ["STUD BOLTS", "WASHERS", "BOLTS", "FASTENERS", "NUTS", "SCREWS"];

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">Loading blog posts...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-bpf-gray min-h-screen">
      <Breadcrumb items={breadcrumbItems} />
      
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Blog</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Categories Sidebar */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-bpf-blue border-b-2 border-bpf-blue pb-2">
                Categories
              </h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setSelectedCategory('')}
                    className={`text-gray-700 hover:text-bpf-blue ${!selectedCategory ? 'text-bpf-blue font-medium' : ''}`}
                  >
                    All
                  </button>
                </li>
                {categories.map((category) => (
                  <li key={category}>
                    <button
                      onClick={() => setSelectedCategory(category)}
                      className={`text-gray-700 hover:text-bpf-blue ${selectedCategory === category ? 'text-bpf-blue font-medium' : ''}`}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Blog Posts */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts?.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <img 
                    src={post.image || ""} 
                    alt={post.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <Badge className="bg-bpf-blue text-white text-xs mb-2">
                      {post.category}
                    </Badge>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          day: 'numeric',
                          month: 'short',
                          year: '2-digit',
                          hour: 'numeric',
                          minute: '2-digit',
                          hour12: true
                        })}
                      </span>
                      <Link href={`/blog/${post.id}`} className="text-bpf-blue text-sm hover:underline">
                        Read More
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
