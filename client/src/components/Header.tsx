import { Link, useLocation } from "wouter";
import { Mail, Phone, Home } from "lucide-react";

export default function Header() {
  const [location] = useLocation();

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top contact bar */}
        <div className="flex justify-end items-center py-2 text-sm text-gray-600 border-b border-gray-100">
          <div className="flex items-center space-x-6">
            <span className="flex items-center">
              <Mail size={14} className="mr-2" />
              estimation@ferrobend.com
            </span>
            <span className="flex items-center">
              <Phone size={14} className="mr-2" />
              +91-836-9719424
            </span>
          </div>
        </div>
        
        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <div className="bg-bpf-blue text-white px-4 py-2 text-2xl font-bold mr-4">BPF</div>
              <div className="text-sm text-gray-600">
                <div className="font-semibold">Comprehensive</div>
                <div>fastening</div>
                <div>solutions</div>
              </div>
            </div>
          </Link>
          
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/about" className="text-gray-700 hover:text-bpf-blue">About</Link>
            <Link href="/faq" className="text-gray-700 hover:text-bpf-blue">FAQ's</Link>
            <Link href="/blog" className="text-gray-700 hover:text-bpf-blue">Blog</Link>
            <Link href="/supply-region" className="text-gray-700 hover:text-bpf-blue">Supply Region</Link>
            <Link href="/datasheets" className="text-gray-700 hover:text-bpf-blue">Datasheets</Link>
          </nav>
          
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="flex items-center text-gray-700 hover:text-bpf-blue">
              <Home size={16} className="mr-2" />
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-bpf-blue">Products</Link>
            <Link href="/materials" className="text-gray-700 hover:text-bpf-blue">Materials</Link>
            <Link href="/standards" className="text-gray-700 hover:text-bpf-blue">Standards</Link>
            <Link href="/contact" className="text-gray-700 hover:text-bpf-blue">Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
