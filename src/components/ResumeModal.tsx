import { useState } from "react";
import {
  Download,
  ExternalLink,
  X,
  FileText,
  Check,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Briefcase,
  Award,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { triggerConfetti } from "@/utils/confetti";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  const { isDark } = useTheme();
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    triggerConfetti();
    const link = document.createElement("a");
    link.href = "/Pritesh_Bhuravane_Resume.pdf";
    link.download = "Pritesh_Bhuravane_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopySummary = () => {
    const text =
      "Pritesh Suresh Bhuravane | Software Developer | DevOps & Backend\nMCA: 8.86 CGPA (3rd Rank, FAMT) | BSc CS: 9.92 CGPA (ASP College) | HSC: 89.66% | SSC: 86.00%\nEmail: bhuravanepritesh@gmail.com | Phone: 9405059038\nSkills: PHP, Laravel, Node.js, Express.js, React.js, React Native, Flutter, MySQL, MongoDB, Firebase, Linux, Nginx, Git/GitLab, AWS";
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15 }}
          transition={{ duration: 0.25 }}
          className={`relative w-full max-w-3xl max-h-[90vh] flex flex-col rounded-3xl border shadow-2xl overflow-hidden ${
            isDark
              ? "bg-slate-900/95 border-slate-700 text-slate-100 shadow-black/60"
              : "bg-white border-slate-200 text-slate-900 shadow-slate-300"
          }`}
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-200/20">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <FileText size={22} />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold">Pritesh Bhuravane — Resume</h3>
                <p className="text-xs text-slate-400">
                  Software Developer • Backend Engineering • DevOps
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>

          {/* Modal Body */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
            {/* Quick Contact & Credentials banner */}
            <div
              className={`p-4 rounded-2xl border flex flex-wrap items-center justify-between gap-3 text-xs ${
                isDark
                  ? "bg-slate-800/60 border-slate-700 text-slate-300"
                  : "bg-slate-50 border-slate-200 text-slate-700"
              }`}
            >
              <div className="flex items-center gap-2">
                <MapPin size={15} className="text-amber-400" />
                <span>Ratnagiri, Maharashtra</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={15} className="text-blue-400" />
                <span>bhuravanepritesh@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={15} className="text-emerald-400" />
                <span>+91 9405059038</span>
              </div>
            </div>

            {/* Professional Highlights */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400 flex items-center gap-1.5">
                <Sparkles size={13} />
                Executive Profile
              </h4>
              <p
                className={`text-xs sm:text-sm leading-relaxed ${
                  isDark ? "text-slate-300" : "text-slate-700"
                }`}
              >
                Software Developer with hands-on experience in backend development, DevOps,
                Linux server administration, REST APIs, database management, Git/GitLab, and application
                deployment. MCA graduate from Finolex Academy of Management & Technology with an 8.86 CGPA
                and 3rd Rank in the MCA program (2026).
              </p>
            </div>

            {/* Complete Education History (MCA, BSc, HSC, SSC) */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400 flex items-center gap-1.5">
                <GraduationCap size={14} />
                Education Journey (MCA, BSc, HSC, SSC)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div
                  className={`p-3.5 rounded-2xl border ${
                    isDark ? "bg-slate-800/50 border-slate-700" : "bg-slate-50 border-slate-200"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold">MCA (Master of Computer Apps)</span>
                    <span className="text-xs font-extrabold text-amber-400">8.86 CGPA</span>
                  </div>
                  <p className="text-[11px] text-slate-400">FAMT Ratnagiri • 2024–2026</p>
                  <p className="text-[10px] text-purple-300 font-semibold mt-1">
                    ★ 3rd Rank in MCA Program
                  </p>
                </div>

                <div
                  className={`p-3.5 rounded-2xl border ${
                    isDark ? "bg-slate-800/50 border-slate-700" : "bg-slate-50 border-slate-200"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold">BSc Computer Science</span>
                    <span className="text-xs font-extrabold text-blue-400">9.92 CGPA</span>
                  </div>
                  <p className="text-[11px] text-slate-400">ASP College, Devrukh • 2021–2024</p>
                  <p className="text-[10px] text-blue-300 font-semibold mt-1">
                    ★ Department Topper (Rank 1)
                  </p>
                </div>

                <div
                  className={`p-3.5 rounded-2xl border ${
                    isDark ? "bg-slate-800/50 border-slate-700" : "bg-slate-50 border-slate-200"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold">HSC (Class 12th Science)</span>
                    <span className="text-xs font-extrabold text-emerald-400">89.66%</span>
                  </div>
                  <p className="text-[11px] text-slate-400">G.K. Sapare Jr. College, Devrukh • 2021</p>
                  <p className="text-[10px] text-emerald-300 font-semibold mt-1">
                    ★ First Class with Distinction
                  </p>
                </div>

                <div
                  className={`p-3.5 rounded-2xl border ${
                    isDark ? "bg-slate-800/50 border-slate-700" : "bg-slate-50 border-slate-200"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold">SSC (Class 10th)</span>
                    <span className="text-xs font-extrabold text-purple-400">86.00%</span>
                  </div>
                  <p className="text-[11px] text-slate-400">M.V. Sonavade High School • 2019</p>
                  <p className="text-[10px] text-purple-300 font-semibold mt-1">
                    ★ First Class Distinction • Grade A Drawing
                  </p>
                </div>
              </div>
            </div>

            {/* Experience Highlights */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400 flex items-center gap-1.5">
                <Briefcase size={14} />
                Work Experience @ Pleximus Inc
              </h4>
              <div
                className={`p-3.5 rounded-2xl border space-y-1.5 ${
                  isDark ? "bg-slate-800/40 border-slate-700" : "bg-slate-50 border-slate-200"
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-bold text-xs sm:text-sm">DevOps Executive</p>
                    <p className="text-[11px] text-slate-400">Pleximus Inc • Ratnagiri, Maharashtra</p>
                  </div>
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                    June 2026 – Present
                  </span>
                </div>
                <p className="text-xs text-slate-300">
                  Application deployment, Linux/Ubuntu server operations, Nginx configuration, Git/GitLab, and database management.
                </p>
              </div>

              <div
                className={`p-3.5 rounded-2xl border space-y-1.5 ${
                  isDark ? "bg-slate-800/40 border-slate-700" : "bg-slate-50 border-slate-200"
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-bold text-xs sm:text-sm">Backend Developer Intern</p>
                    <p className="text-[11px] text-slate-400">Pleximus Inc • Ratnagiri, Maharashtra</p>
                  </div>
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-medium">
                    Dec 2025 – June 2026
                  </span>
                </div>
                <p className="text-xs text-slate-300">
                  PHP/Laravel development, REST APIs, database management, Linux administration, and production troubleshooting.
                </p>
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="p-4 sm:p-5 border-t border-slate-200/20 flex flex-wrap items-center justify-between gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopySummary}
              className="text-xs flex items-center gap-1.5"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-emerald-400" />
                  <span>Copied to Clipboard!</span>
                </>
              ) : (
                <span>Copy Credentials Summary</span>
              )}
            </Button>

            <div className="flex items-center gap-2">
              <a
                href="/Pritesh_Bhuravane_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="sm" className="text-xs flex items-center gap-1.5">
                  <ExternalLink size={14} />
                  <span>Open PDF</span>
                </Button>
              </a>

              <Button
                size="sm"
                onClick={handleDownload}
                className="text-xs bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-md flex items-center gap-1.5"
              >
                <Download size={14} />
                <span>Download PDF</span>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ResumeModal;
