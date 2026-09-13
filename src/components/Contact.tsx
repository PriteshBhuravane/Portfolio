import { useState } from "react";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Phone,
  Send,
  Check,
  Copy,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useTheme } from "@/contexts/ThemeContext";
import emailjs from "emailjs-com";
import { triggerConfetti } from "@/utils/confetti";
import SignalBeaconModel from "./SignalBeaconModel";

const Contact = () => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const { toast } = useToast();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("bhuravanepritesh@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
    toast({
      title: "Email Copied!",
      description: "bhuravanepritesh@gmail.com copied to clipboard.",
    });
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("+91 9405059038");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
    toast({
      title: "Phone Number Copied!",
      description: "+91 9405059038 copied to clipboard.",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        "service_385tiwl",
        "template_7qwprjx",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || "Portfolio Inquiry",
          message: formData.message,
          time: new Date().toISOString(),
        },
        "rcp2lXoohA4k7p5Sx"
      )
      .then(() => {
        setIsSending(false);
        triggerConfetti();
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for reaching out, Pritesh will respond promptly.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch(() => {
        setIsSending(false);
        toast({
          title: "Notice",
          description: "Opening default mail client to deliver your message directly.",
        });
        const mailto = `mailto:bhuravanepritesh@gmail.com?subject=${encodeURIComponent(
          formData.subject || "Portfolio Contact: " + formData.name
        )}&body=${encodeURIComponent(formData.message + "\n\nFrom: " + formData.name + " (" + formData.email + ")")}`;
        window.location.href = mailto;
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

  return (
    <section
      id="contact"
      className={`py-24 relative overflow-hidden transition-colors duration-300 ${
        isDark ? "bg-slate-950" : "bg-slate-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <MessageSquare size={14} />
            Let's Connect
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Get in{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className={`text-base sm:text-lg ${isDark ? "text-slate-400" : "text-slate-600"}`}>
            Available for software engineering roles, DevOps opportunities, and technical collaborations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Direct Info & Social Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div
              className={`p-6 sm:p-8 rounded-3xl border shadow-xl ${
                isDark ? "bg-slate-900/80 border-slate-800" : "bg-white border-slate-200"
              }`}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-3">Contact Information</h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
                Whether you have an opportunity to discuss, questions about my projects, or DevOps inquiries, feel free to reach out directly.
              </p>

              <div className="space-y-4">
                {/* Email Item */}
                <div
                  className={`p-4 rounded-2xl border flex items-center justify-between gap-3 ${
                    isDark ? "bg-slate-800/50 border-slate-700" : "bg-slate-50 border-slate-200"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 flex-shrink-0">
                      <Mail size={18} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] text-slate-400">Email Address</div>
                      <a
                        href="mailto:bhuravanepritesh@gmail.com"
                        className="text-xs sm:text-sm font-semibold truncate block hover:text-purple-400 transition-colors"
                      >
                        bhuravanepritesh@gmail.com
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-700 transition-colors flex-shrink-0 cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Phone Item */}
                <div
                  className={`p-4 rounded-2xl border flex items-center justify-between gap-3 ${
                    isDark ? "bg-slate-800/50 border-slate-700" : "bg-slate-50 border-slate-200"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 flex-shrink-0">
                      <Phone size={18} />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400">Phone Number</div>
                      <a
                        href="tel:9405059038"
                        className="text-xs sm:text-sm font-semibold hover:text-purple-400 transition-colors"
                      >
                        +91 9405059038
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyPhone}
                    className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-700 transition-colors flex-shrink-0 cursor-pointer"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Location Item */}
                <div
                  className={`p-4 rounded-2xl border flex items-center gap-3 ${
                    isDark ? "bg-slate-800/50 border-slate-700" : "bg-slate-50 border-slate-200"
                  }`}
                >
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 flex-shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400">Location</div>
                    <div className="text-xs sm:text-sm font-semibold">
                      Ratnagiri, Maharashtra, India
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="mt-8 pt-6 border-t border-slate-200/20">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Online Profiles
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/PriteshBhuravane"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-3 rounded-2xl border border-slate-700/60 bg-slate-800/50 hover:bg-slate-800 text-xs font-semibold flex items-center justify-center gap-2 hover:text-purple-400 transition-all hover:scale-105"
                  >
                    <Github size={16} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/pritesh-bhuravane/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-3 rounded-2xl border border-slate-700/60 bg-slate-800/50 hover:bg-slate-800 text-xs font-semibold flex items-center justify-center gap-2 hover:text-purple-400 transition-all hover:scale-105"
                  >
                    <Linkedin size={16} />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Live Signal Beacon Model */}
            <div className="mt-6">
              <SignalBeaconModel />
            </div>
          </motion.div>

          {/* Right Column: Contact Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div
              className={`p-6 sm:p-8 rounded-3xl border shadow-xl ${
                isDark ? "bg-slate-900/80 border-slate-800" : "bg-white border-slate-200"
              }`}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-1">Send a Direct Message</h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  Fill out your details below and I will get back to you promptly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-400 block mb-1.5">
                      Your Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`h-11 rounded-xl text-xs sm:text-sm ${
                        isDark
                          ? "bg-slate-800/80 border-slate-700 text-white placeholder-slate-500"
                          : "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400"
                      }`}
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-400 block mb-1.5">
                      Your Email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      placeholder="e.g. john@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`h-11 rounded-xl text-xs sm:text-sm ${
                        isDark
                          ? "bg-slate-800/80 border-slate-700 text-white placeholder-slate-500"
                          : "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400"
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-400 block mb-1.5">
                    Subject / Topic
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="e.g. DevOps Engineer Opening / Project Consultation"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`h-11 rounded-xl text-xs sm:text-sm ${
                      isDark
                        ? "bg-slate-800/80 border-slate-700 text-white placeholder-slate-500"
                        : "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400"
                    }`}
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-400 block mb-1.5">
                    Your Message *
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Describe your project, role, or questions..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`rounded-xl text-xs sm:text-sm resize-none ${
                      isDark
                        ? "bg-slate-800/80 border-slate-700 text-white placeholder-slate-500"
                        : "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400"
                    }`}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSending}
                  className="w-full h-12 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold text-sm shadow-xl shadow-purple-500/20 flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.01] cursor-pointer"
                >
                  {isSending ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Send Direct Message</span>
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
