import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import Breadcrumb from "@/components/Breadcrumb";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  contact: z.string().optional(),
  company: z.string().optional(),
  address: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zip: z.string().optional(),
  buyer: z.string().optional(),
  country: z.string().optional(),
  message: z.string().min(1, "Message is required"),
  notRobot: z.boolean().refine(val => val === true, "Please confirm you are not a robot"),
});

type ContactForm = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const { toast } = useToast();
  
  const form = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      contact: "",
      company: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      buyer: "",
      country: "",
      message: "",
      notRobot: false,
    },
  });

  const onSubmit = (data: ContactForm) => {
    console.log("Form submitted:", data);
    toast({
      title: "Message Sent",
      description: "Thank you for your inquiry. We will get back to you soon.",
    });
    form.reset();
  };

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Contact Information", active: true }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={breadcrumbItems} />
      
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Contact Information</h1>

      {/* Company Info */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          BoltPort Fasteners LLP (Absorbed into <span className="text-bpf-blue">FERROBEND</span>)
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Head Office */}
          <div className="space-y-8">
            {/* Head Office Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                <MapPin className="mr-2" />
                Head Office
              </h3>
              <div className="text-gray-600 space-y-1">
                <p>Unit # 1 and 2, S S Maharaj Marg,</p>
                <p>2nd Lane, Goldevi, Mumbai 400004,</p>
                <p>Maharashtra, INDIA.</p>
              </div>
              <div className="mt-4 space-y-2 text-gray-600">
                <div className="flex items-center">
                  <Phone className="mr-2 w-4 h-4" />
                  <span>+91-836-9719424</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2 w-4 h-4" />
                  <span>8am to 8pm - Mon to Sat.</span>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-2 w-4 h-4" />
                  <a href="mailto:estimation@ferrobend.com" className="text-bpf-blue hover:underline">
                    estimation@ferrobend.com
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp QR Code */}
            <div className="text-center">
              <h4 className="text-md font-semibold mb-2 flex items-center justify-center">
                <MessageCircle className="mr-2 text-green-500" />
                Whatsapp Us
              </h4>
              <div className="w-32 h-32 bg-gray-200 rounded border mx-auto flex items-center justify-center">
                QR Code
              </div>
            </div>

            {/* Works Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
                <MapPin className="mr-2" />
                Works
              </h3>
              <div className="text-gray-600 space-y-1">
                <p>C-120 Mandhar Industrial Estate,</p>
                <p>HP Gas Godown Lane, Bhayandar East</p>
                <p>Thane 401105, Maharashtra, INDIA.</p>
              </div>
              <div className="mt-4 space-y-2 text-gray-600">
                <div className="flex items-center">
                  <Phone className="mr-2 w-4 h-4" />
                  <span>+91-836-9719424</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2 w-4 h-4" />
                  <span>8am to 8pm - Mon to Sat.</span>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-2 w-4 h-4" />
                  <a href="mailto:estimation@ferrobend.com" className="text-bpf-blue hover:underline">
                    estimation@ferrobend.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="space-y-8">
            <div>
              <h4 className="text-md font-semibold mb-2 flex items-center">
                <MapPin className="mr-2" />
                Google Map
              </h4>
              <div className="w-full h-64 bg-gray-200 rounded border flex items-center justify-center">
                Head Office Location Map
              </div>
            </div>

            <div>
              <h4 className="text-md font-semibold mb-2 flex items-center">
                <MapPin className="mr-2" />
                Google Map
              </h4>
              <div className="w-full h-64 bg-gray-200 rounded border flex items-center justify-center">
                Works Location Map
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-gray-800 flex items-center">
            Don't have access to Email? Quickly Fill in this Form 
            <MessageCircle className="ml-2" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name <span className="text-red-500">*</span></FormLabel>
                    <FormControl>
                      <Input placeholder="Your Full Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email <span className="text-red-500">*</span></FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="example@domain.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="contact"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contact No.</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="8888999000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Name:</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Company Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>State</FormLabel>
                    <FormControl>
                      <Input placeholder="State" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input placeholder="City" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="zip"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Zip</FormLabel>
                    <FormControl>
                      <Input placeholder="Your area code" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="buyer"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Buyer</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Please select type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="distributor">Distributor</SelectItem>
                        <SelectItem value="end-user">End User</SelectItem>
                        <SelectItem value="trader">Trader</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Please Select Country" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="india">India</SelectItem>
                        <SelectItem value="usa">United States</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormLabel>Message <span className="text-red-500">*</span></FormLabel>
                    <FormControl>
                      <Textarea placeholder="Your Message" rows={4} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="md:col-span-2 space-y-4">
                <FormField
                  control={form.control}
                  name="notRobot"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel className="text-sm font-normal">
                        I'm not a robot
                      </FormLabel>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="flex gap-4">
                  <Button type="submit" className="bg-bpf-blue hover:bg-bpf-blue-light">
                    Send Query
                  </Button>
                  <Button type="button" variant="secondary" onClick={() => form.reset()}>
                    Reset
                  </Button>
                </div>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
