
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  organization: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      organization: "",
      message: "",
    },
  });

  function onSubmit(data: FormValues) {
    console.log(data);
    toast({
      title: "Message sent successfully",
      description: "Thank you for reaching out. I'll get back to you soon!",
      duration: 5000,
    });
    form.reset();
  }

  return (
    <section id="contact" className="section-padding bg-consulting-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-accent1-DEFAULT mx-auto mb-6"></div>
          <p className="paragraph max-w-3xl mx-auto">
            Ready to explore how my consulting services can benefit your organization? 
            Let's start a conversation about your unique needs and goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md animate-fade-up">
            <h3 className="heading-md mb-6">Send a Message</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} className="border-consulting-200" />
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
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="you@example.com" {...field} className="border-consulting-200" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="organization"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Organization (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Your company or organization" {...field} className="border-consulting-200" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="How can I help your organization?" 
                          {...field} 
                          className="border-consulting-200 min-h-32" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-consulting-600 hover:bg-consulting-700 text-white"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </Form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="heading-md mb-6">Contact Information</h3>
              <p className="paragraph mb-8">
                Feel free to reach out through any of the channels below. I look forward 
                to hearing about your organization and how we might work together.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-consulting-100 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-consulting-600" />
                </div>
                <div>
                  <h4 className="font-medium text-lg text-consulting-700">Email</h4>
                  <p className="text-gray-600">contact@monalisasalib.com</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-consulting-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-consulting-600" />
                </div>
                <div>
                  <h4 className="font-medium text-lg text-consulting-700">Phone</h4>
                  <p className="text-gray-600">(123) 456-7890</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-consulting-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-consulting-600" />
                </div>
                <div>
                  <h4 className="font-medium text-lg text-consulting-700">Location</h4>
                  <p className="text-gray-600">Washington D.C. Metropolitan Area</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-consulting-600 to-consulting-700 text-white p-6 rounded-lg shadow-md">
              <h4 className="font-serif text-xl font-medium mb-2">Let's Work Together</h4>
              <p className="mb-4">
                Ready to transform your organization's approach to leadership and strategy?
              </p>
              <p className="font-medium">
                Book a free 30-minute consultation to discuss your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
