import { useState } from "react";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useTheme } from "@/contexts/ThemeContext";
// Add EmailJS import
import emailjs from "emailjs-com";

const Contact = () => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  // EmailJS handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_385tiwl", // Replace with your EmailJS service ID
        "template_7qwprjx", // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          time: new Date().toISOString(), 
        },
        "rcp2lXoohA4k7p5Sx" // Replace with your EmailJS user/public key
      )
      .then(() => {
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. I'll get back to you soon!",
        });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again later.",
          variant: "destructive",
        });
      });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/PRITESH-SURESH-BHURAVANE-.pdf";
    link.download = "Pritesh_Bhuravane_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="contact"
      className={`py-20 ${
        isDark
          ? "bg-gradient-to-br from-gray-900 to-gray-800"
          : "bg-gradient-to-br from-slate-50 to-blue-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl font-bold mb-4 ${
              isDark ? "text-white" : "text-gray-800"
            }`}
          >
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
          <p
            className={`text-lg mt-4 ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Let's discuss your next project or just say hello!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3
                className={`text-2xl font-bold mb-6 ${
                  isDark ? "text-white" : "text-gray-800"
                }`}
              >
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div
                    className={`p-3 rounded-full ${
                      isDark ? "bg-purple-900" : "bg-purple-100"
                    }`}
                  >
                    <Mail className="text-purple-600" size={20} />
                  </div>
                  <div>
                    <div
                      className={`font-medium ${
                        isDark ? "text-white" : "text-gray-800"
                      }`}
                    >
                      Email
                    </div>
                    <div className={isDark ? "text-gray-300" : "text-gray-600"}>
                      pritesh.bhuravane@example.com
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div
                    className={`p-3 rounded-full ${
                      isDark ? "bg-purple-900" : "bg-purple-100"
                    }`}
                  >
                    <MapPin className="text-purple-600" size={20} />
                  </div>
                  <div>
                    <div
                      className={`font-medium ${
                        isDark ? "text-white" : "text-gray-800"
                      }`}
                    >
                      Location
                    </div>
                    <div className={isDark ? "text-gray-300" : "text-gray-600"}>
                      Ratnagiri, Maharashtra, India
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3
                className={`text-xl font-bold mb-4 ${
                  isDark ? "text-white" : "text-gray-800"
                }`}
              >
                Connect With Me
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/PriteshBhuravane"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition-colors duration-200"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/pritesh-bhuravane/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors duration-200"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:bhuravanepritesh@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600 text-white p-3 rounded-full hover:bg-purple-700 transition-colors duration-200"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-purple-600">
                  Download Resume
                </CardTitle>
                <CardDescription>
                  Get a copy of my latest resume
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={handleResumeDownload}
                  className="w-full bg-purple-600 hover:bg-purple-700"
                >
                  Download PDF Resume
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle
                className={`text-2xl ${
                  isDark ? "text-white" : "text-gray-800"
                }`}
              >
                Send Message
              </CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you as soon as
                possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;