import { Link } from "wouter";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, MessageCircle, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-bpf-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products?category=bolts" className="hover:text-gray-300">Bolts</Link></li>
              <li><Link href="/products?category=screws" className="hover:text-gray-300">Screws</Link></li>
              <li><Link href="/products?category=stud-bolts" className="hover:text-gray-300">Stud Bolts</Link></li>
              <li><Link href="/products?category=threaded-rods" className="hover:text-gray-300">Threaded Rods</Link></li>
              <li><Link href="/products?category=nuts" className="hover:text-gray-300">Nuts</Link></li>
              <li><Link href="/products?category=anchor-fasteners" className="hover:text-gray-300">Anchor Fasteners</Link></li>
              <li><Link href="/products?category=washers" className="hover:text-gray-300">Washers</Link></li>
              <li><Link href="/products?category=coated-fasteners" className="hover:text-gray-300">Coated Fasteners</Link></li>
              <li><Link href="/products?category=pins" className="hover:text-gray-300">Pins</Link></li>
              <li><Link href="/products?category=springs" className="hover:text-gray-300">Springs</Link></li>
            </ul>
          </div>

          {/* Standards */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Standards</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/standards?type=din" className="hover:text-gray-300">German DIN</Link></li>
              <li><Link href="/standards?type=iso" className="hover:text-gray-300">International ISO</Link></li>
              <li><Link href="/standards?type=is" className="hover:text-gray-300">Indian IS</Link></li>
              <li><Link href="/standards?type=bs" className="hover:text-gray-300">British BS</Link></li>
              <li><Link href="/standards?type=asme" className="hover:text-gray-300">American ASME</Link></li>
              <li><Link href="/standards?type=uni" className="hover:text-gray-300">Italian UNI</Link></li>
              <li><Link href="/standards?type=sae" className="hover:text-gray-300">American SAE</Link></li>
              <li><Link href="/standards?type=csn" className="hover:text-gray-300">Spanish CSN</Link></li>
              <li><Link href="/standards?type=pn" className="hover:text-gray-300">Polish PN</Link></li>
              <li><Link href="/standards?type=eu" className="hover:text-gray-300">European EU</Link></li>
            </ul>
          </div>

          {/* Materials */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Bolting Materials</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/materials/alloy-steel" className="hover:text-gray-300">Alloy Steel</Link></li>
              <li><Link href="/materials/austenitic-steel" className="hover:text-gray-300">Austenitic Steel</Link></li>
              <li><Link href="/materials/carbon-steel" className="hover:text-gray-300">Carbon Steel</Link></li>
              <li><Link href="/materials/chromium-vanadium-steel" className="hover:text-gray-300">Chromium Vanadium Steel</Link></li>
              <li><Link href="/materials/duplex-steel" className="hover:text-gray-300">Duplex Steel</Link></li>
              <li><Link href="/materials/nickel-alloy" className="hover:text-gray-300">Nickel Alloy</Link></li>
              <li><Link href="/materials/super-austenitic-steel" className="hover:text-gray-300">Super Austenitic Steel</Link></li>
              <li><Link href="/materials/super-duplex-steel" className="hover:text-gray-300">Super Duplex Steel</Link></li>
              <li><Link href="/materials/titanium" className="hover:text-gray-300">Titanium</Link></li>
              <li><Link href="/materials/weathering-steel" className="hover:text-gray-300">Weathering Steel</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Reach Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <Mail size={16} className="mr-3" />
                <a href="mailto:estimation@ferrobend.com" className="hover:text-gray-300">estimation@ferrobend.com</a>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-3" />
                <span>+91-836-9719424</span>
              </div>
              <div className="flex items-start">
                <MapPin size={16} className="mr-3 mt-1" />
                <div>
                  <p>Unit #2, 109/111, Sant Sena Maharaj</p>
                  <p>Marg, 2nd Kumbharwada, Goldevi,</p>
                  <p>Mumbai - 400004, Maharashtra, India.</p>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-2xl hover:text-gray-300"><Facebook size={20} /></a>
                <a href="#" className="text-2xl hover:text-gray-300"><Instagram size={20} /></a>
                <a href="#" className="text-2xl hover:text-gray-300"><Twitter size={20} /></a>
                <a href="#" className="text-2xl hover:text-gray-300"><Linkedin size={20} /></a>
                <a href="#" className="text-2xl hover:text-gray-300"><MessageCircle size={20} /></a>
                <a href="#" className="text-2xl hover:text-gray-300"><Youtube size={20} /></a>
              </div>
              
              <div className="mt-4">
                <p className="text-sm">Wednesday, June 25 2:50:16 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-blue-400 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; 2017, Ferrobend</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/contact" className="hover:text-gray-300">Contact Us</Link>
              <span>|</span>
              <Link href="/supply-region" className="hover:text-gray-300">Supply Region</Link>
              <span>|</span>
              <Link href="/associates" className="hover:text-gray-300">Associates</Link>
              <span>|</span>
              <Link href="/sitemap" className="hover:text-gray-300">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
