import { useState, useEffect } from "react";
import {
  Server,
  Terminal,
  Database,
  Smartphone,
  Cpu,
  Activity,
  Zap,
  CheckCircle2,
  Play,
  RotateCcw,
  ShieldCheck,
  Radio,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { triggerConfetti } from "@/utils/confetti";

interface ArchitectureNode {
  id: string;
  title: string;
  category: string;
  icon: typeof Server;
  color: string;
  borderColor: string;
  bgGlow: string;
  status: string;
  latency: string;
  uptime: string;
  details: string;
  cliCommand: string;
  cliOutput: string;
  techStack: string[];
}

const architectureNodes: ArchitectureNode[] = [
  {
    id: "clients",
    title: "Client Layer",
    category: "Frontend & Mobile",
    icon: Smartphone,
    color: "text-purple-400",
    borderColor: "border-purple-500/40",
    bgGlow: "rgba(168, 85, 247, 0.15)",
    status: "Active (Responsive)",
    latency: "12 ms",
    uptime: "99.99%",
    details:
      "React.js Single Page Apps, Flutter, and React Native mobile clients initiating authenticated HTTPS/REST API requests with responsive client-side state caching.",
    cliCommand: "curl -I https://priteshbhuravane.dev/api/v1/health",
    cliOutput: "HTTP/2 200 OK\nContent-Type: application/json\nx-response-time: 12ms\nCache-Control: public, max-age=3600",
    techStack: ["React.js", "React Native", "Flutter", "Tailwind CSS", "Vite"],
  },
  {
    id: "nginx",
    title: "Nginx Reverse Proxy",
    category: "Ingress & Routing",
    icon: Radio,
    color: "text-emerald-400",
    borderColor: "border-emerald-500/40",
    bgGlow: "rgba(16, 185, 129, 0.15)",
    status: "Healthy (Reverse Proxy)",
    latency: "3 ms",
    uptime: "100.0%",
    details:
      "Reverse proxy on Ubuntu server terminating SSL/TLS, enforcing security headers, proxy passing requests to port 3000/8000, and caching static assets.",
    cliCommand: "sudo nginx -t && sudo systemctl status nginx",
    cliOutput: "nginx: the configuration file /etc/nginx/nginx.conf syntax is ok\nnginx: configuration test is successful\n● nginx.service - A high performance web server\n   Active: active (running) since Sun 2026-09-13",
    techStack: ["Nginx", "SSL / TLS", "Proxy Pass", "Gzip / Brotli", "Rate Limiter"],
  },
  {
    id: "backend",
    title: "Backend Core",
    category: "REST APIs & Logic",
    icon: Server,
    color: "text-blue-400",
    borderColor: "border-blue-500/40",
    bgGlow: "rgba(59, 130, 246, 0.15)",
    status: "Operating (REST APIs)",
    latency: "24 ms",
    uptime: "99.98%",
    details:
      "PHP/Laravel and Node.js/Express controllers handling authentication, input sanitization, Eloquent ORM relationships, background queues, and RESTful routing.",
    cliCommand: "php artisan route:list --path=api",
    cliOutput: "+--------+----------+--------------------+-------------------------+\n| Method | URI      | Name               | Action                  |\n+--------+----------+--------------------+-------------------------+\n| GET    | api/user | api.user.profile   | UserController@show     |\n| POST   | api/auth | api.auth.token     | AuthController@issue    |\n+--------+----------+--------------------+-------------------------+",
    techStack: ["PHP 8.2", "Laravel", "Node.js", "Express.js", "REST APIs"],
  },
  {
    id: "database",
    title: "Data Persistence",
    category: "SQL & NoSQL",
    icon: Database,
    color: "text-amber-400",
    borderColor: "border-amber-500/40",
    bgGlow: "rgba(245, 158, 11, 0.15)",
    status: "Synchronized (Zero-Lock)",
    latency: "6 ms",
    uptime: "99.99%",
    details:
      "Optimized MySQL relational databases with foreign keys and compound indexes, supplemented by MongoDB and Firebase Firestore for document storage.",
    cliCommand: "mysql -u root -p -e 'SHOW PROCESSLIST;'",
    cliOutput: "+----+------+-----------+------+---------+------+-------+------------------+\n| Id | User | Host      | db   | Command | Time | State | Info             |\n+----+------+-----------+------+---------+------+-------+------------------+\n| 42 | prod | localhost | main | Sleep   | 2    |       | NULL             |\n+----+------+-----------+------+---------+------+-------+------------------+",
    techStack: ["MySQL", "MongoDB", "Firestore", "Query Indexing", "Transactions"],
  },
  {
    id: "devops",
    title: "Linux & CI/CD",
    category: "DevOps Operations",
    icon: Terminal,
    color: "text-pink-400",
    borderColor: "border-pink-500/40",
    bgGlow: "rgba(244, 114, 182, 0.15)",
    status: "Active (Pleximus Inc)",
    latency: "0 ms (Localhost)",
    uptime: "99.97%",
    details:
      "Ubuntu LTS server administration, GitLab CI automated runners, zero-downtime blue/green deployment scripts, and automated system monitoring.",
    cliCommand: "gitlab-runner status && git log -1 --oneline",
    cliOutput: "Runtime platform arch=amd64 os=linux pid=1402\ngitlab-runner: Service is running pid=1402\n[main] 7f8a912 feat: zero-downtime pipeline executed successfully",
    techStack: ["Ubuntu Linux", "GitLab CI", "Git", "Bash / Shell", "AWS EC2"],
  },
];

export const ArchitectureFlowModel = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>("backend");
  const [isTrafficSpike, setIsTrafficSpike] = useState(false);
  const [packetCount, setPacketCount] = useState(14820);

  const selectedNode =
    architectureNodes.find((n) => n.id === selectedNodeId) || architectureNodes[2];

  useEffect(() => {
    const interval = setInterval(() => {
      setPacketCount((prev) => prev + Math.floor(Math.random() * 5 + 1));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const triggerSpike = () => {
    setIsTrafficSpike(true);
    setPacketCount((prev) => prev + 250);
    triggerConfetti();
    setTimeout(() => setIsTrafficSpike(false), 3000);
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl border border-slate-800 bg-slate-900/90 shadow-2xl relative overflow-hidden backdrop-blur-xl">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* Header with Live Stats & Action Controls */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
              Interactive 3D Pipeline Topology Model
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
            Production System Architecture Flow
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Click on any architectural layer to inspect live system logs, terminal outputs, and performance metrics.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="px-3.5 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs font-mono text-slate-300">
            <span className="text-slate-500">Packets:</span>{" "}
            <span className="text-purple-400 font-bold">{packetCount.toLocaleString()}</span>
          </div>

          <button
            onClick={triggerSpike}
            disabled={isTrafficSpike}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all duration-300 cursor-pointer shadow-lg ${
              isTrafficSpike
                ? "bg-amber-500 text-slate-950 scale-105"
                : "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:opacity-90 hover:scale-105"
            }`}
          >
            <Zap size={14} className={isTrafficSpike ? "animate-bounce" : ""} />
            <span>{isTrafficSpike ? "Traffic Simulating!" : "Simulate Packet Surge"}</span>
          </button>
        </div>
      </div>

      {/* 5-Node Interactive Flow Diagram */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        {architectureNodes.map((node, index) => {
          const Icon = node.icon;
          const isSelected = selectedNodeId === node.id;

          return (
            <motion.div
              key={node.id}
              onClick={() => setSelectedNodeId(node.id)}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer relative overflow-hidden group ${
                isSelected
                  ? `border-purple-500 shadow-xl shadow-purple-500/20 bg-slate-800/95`
                  : `border-slate-800 hover:border-slate-700 bg-slate-900/60`
              }`}
            >
              {/* Active Node Pulsing Ambient Glow */}
              {isSelected && (
                <div
                  className="absolute inset-0 pointer-events-none opacity-40 transition-opacity"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${node.bgGlow}, transparent 70%)`,
                  }}
                />
              )}

              {/* Node Sequence Indicator */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700/60">
                  0{index + 1}
                </span>
                <span className="flex items-center gap-1 text-[10px] font-mono text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {node.latency}
                </span>
              </div>

              {/* Icon & Title */}
              <div className="flex items-center gap-2.5 mb-2">
                <div
                  className={`p-2.5 rounded-xl border ${node.borderColor} bg-slate-800/80 ${node.color} group-hover:scale-110 transition-transform`}
                >
                  <Icon size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white group-hover:text-purple-400 transition-colors">
                    {node.title}
                  </h4>
                  <p className="text-[10px] text-slate-400">{node.category}</p>
                </div>
              </div>

              {/* Mini Tags */}
              <div className="flex flex-wrap gap-1 mt-3">
                {node.techStack.slice(0, 2).map((t) => (
                  <span
                    key={t}
                    className="text-[9px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/50"
                  >
                    {t}
                  </span>
                ))}
                {node.techStack.length > 2 && (
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                    +{node.techStack.length - 2}
                  </span>
                )}
              </div>

              {/* Flow Connector Arrow on Desktop (except last item) */}
              {index < architectureNodes.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center bg-slate-800 border border-slate-700 text-[10px] font-bold ${
                      isTrafficSpike ? "text-amber-400 animate-pulse" : "text-purple-400"
                    }`}
                  >
                    →
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Selected Node Live Diagnostic Inspector */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedNode.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 grid lg:grid-cols-12 gap-6 p-6 rounded-2xl border border-slate-800 bg-slate-950/70"
        >
          {/* Left Column: Metadata & Metrics */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div
                className={`p-3 rounded-2xl border ${selectedNode.borderColor} bg-slate-900 ${selectedNode.color}`}
              >
                <selectedNode.icon size={24} />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-purple-400">
                  Active Layer Details
                </span>
                <h4 className="text-lg font-bold text-white">{selectedNode.title}</h4>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {selectedNode.details}
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <div className="text-[10px] text-slate-400 uppercase">Uptime SLA</div>
                <div className="text-base font-mono font-bold text-emerald-400">
                  {selectedNode.uptime}
                </div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <div className="text-[10px] text-slate-400 uppercase">Response Latency</div>
                <div className="text-base font-mono font-bold text-blue-400">
                  {selectedNode.latency}
                </div>
              </div>
            </div>

            {/* Full Stack Chips */}
            <div>
              <div className="text-[11px] font-mono text-slate-400 mb-2">Technologies Handled:</div>
              <div className="flex flex-wrap gap-1.5">
                {selectedNode.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/25"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive CLI / Diagnostic Shell */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="rounded-xl border border-slate-800 bg-black/90 font-mono text-xs overflow-hidden flex-1 flex flex-col shadow-inner">
              {/* Shell Titlebar */}
              <div className="px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between text-slate-400 text-[11px]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-slate-300 font-semibold">
                    diagnostics@{selectedNode.id}:~
                  </span>
                </div>
                <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 size={12} />
                  LIVE TELEMETRY
                </span>
              </div>

              {/* Terminal Content */}
              <div className="p-4 space-y-3 flex-1 overflow-x-auto text-slate-300 leading-relaxed">
                <div>
                  <span className="text-emerald-400">pritesh@pleximus:~$</span>{" "}
                  <span className="text-white font-bold">{selectedNode.cliCommand}</span>
                </div>
                <pre className="text-[11px] text-slate-400 whitespace-pre font-mono leading-tight">
                  {selectedNode.cliOutput}
                </pre>
                <div className="text-[11px] text-purple-400 pt-2 border-t border-slate-800/80 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping" />
                  Telemetry stream synchronized • Buffer 0 errors
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ArchitectureFlowModel;
