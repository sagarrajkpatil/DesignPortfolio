import { useQuery } from "@tanstack/react-query";
import { useRoute } from "wouter";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { User, Clock, Calendar } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import type { BlogPost } from "@shared/schema";

export default function BlogPostPage() {
  const [, params] = useRoute("/blog/:id");
  const postId = params?.id ? parseInt(params.id) : null;

  const { data: post, isLoading } = useQuery<BlogPost>({
    queryKey: [`/api/blog/${postId}`],
    enabled: !!postId,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">Loading blog post...</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">Blog post not found</div>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: post.title, active: true }
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Breadcrumb items={breadcrumbItems} />
      
      <Card>
        <CardContent className="p-8">
          <header className="mb-8">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">{post.title}</h1>
            <div className="flex items-center text-sm text-gray-600 mb-4 space-x-4">
              <span className="flex items-center">
                <User size={16} className="mr-2" />
                {post.author}
              </span>
              <span className="flex items-center">
                <Clock size={16} className="mr-2" />
                Posted on {new Date(post.publishedAt).toLocaleTimeString('en-US', {
                  hour: 'numeric',
                  minute: '2-digit',
                  hour12: true
                })}
              </span>
              <span className="flex items-center">
                <Calendar size={16} className="mr-2" />
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}
              </span>
            </div>
          </header>

          {/* Large product image */}
          <div className="mb-8">
            <img 
              src={post.image || ""} 
              alt={post.title} 
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="text-gray-700 whitespace-pre-line leading-relaxed">
              {post.content}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
