import { useEffect, useRef, useState, useCallback } from "react";
import {
  Rotate3d,
  Sparkles,
  Info,
  CheckCircle,
  Play,
  Pause,
  Compass,
  Zap,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "@/contexts/ThemeContext";
import { TechIcon, TechIconName } from "./TechIcons";

export interface TechNodeItem {
  id: string;
  name: string;
  shortLabel: string;
  iconName: TechIconName;
  category: "backend" | "devops" | "frontend" | "database" | "mobile";
  brandColor: string;
  proficiency: number;
  experience: string;
  description: string;
  tools: string[];
  // Initial 3D coordinates
  x: number;
  y: number;
  z: number;
  // Dynamic projected properties
  px?: number;
  py?: number;
  scale?: number;
  z2?: number;
  alpha?: number;
}

const ORBIT_TECHNOLOGIES: Omit<TechNodeItem, "x" | "y" | "z">[] = [
  {
    id: "docker",
    name: "Docker & Containers",
    shortLabel: "Docker",
    iconName: "docker",
    category: "devops",
    brandColor: "#2496ED",
    proficiency: 90,
    experience: "Production & Pleximus Inc",
    description: "Multi-stage Dockerfiles, image optimization, container isolation, docker-compose orchestration, and reproducible deployments.",
    tools: ["Docker Engine", "Docker Compose", "Multi-stage Builds", "Registry"],
  },
  {
    id: "mysql",
    name: "MySQL Relational DB",
    shortLabel: "MySQL",
    iconName: "mysql",
    category: "database",
    brandColor: "#00758F",
    proficiency: 92,
    experience: "Schema Modeling & Optimization",
    description: "ACID compliance, relational schema architecture, complex joins, indexing strategies, query execution plans, and transactions.",
    tools: ["MySQL 8.0", "Indexes", "Foreign Keys", "Stored Procedures"],
  },
  {
    id: "python",
    name: "Python & Research AI",
    shortLabel: "Python",
    iconName: "python",
    category: "backend",
    brandColor: "#3776AB",
    proficiency: 88,
    experience: "IJSRST Research Paper & Scripts",
    description: "Core Python scripting, image feature fusion (SkinFusion-Net), research automation, OpenCV manipulation, and data analysis.",
    tools: ["Python 3", "OpenCV", "TensorFlow", "Pandas", "Scikit-Learn"],
  },
  {
    id: "nginx",
    name: "Nginx Web Server",
    shortLabel: "Nginx",
    iconName: "nginx",
    category: "devops",
    brandColor: "#009639",
    proficiency: 92,
    experience: "Production Sysadmin",
    description: "Reverse proxy, SSL/TLS Let's Encrypt certificates, load balancing, Gzip compression, rate limiting, and virtual host routing.",
    tools: ["Reverse Proxy", "SSL/TLS", "gzip", "Upstream Load Balancing"],
  },
  {
    id: "mongo",
    name: "MongoDB & NoSQL",
    shortLabel: "MongoDB",
    iconName: "mongo",
    category: "database",
    brandColor: "#47A248",
    proficiency: 88,
    experience: "Document Modeling & Mongoose",
    description: "Flexible JSON/BSON document collections, aggregation pipelines, schema validation, indexing, and high-volume data ingestion.",
    tools: ["MongoDB Atlas", "Mongoose", "Aggregation Pipeline", "Indexes"],
  },
  {
    id: "php",
    name: "PHP Backend Engine",
    shortLabel: "PHP",
    iconName: "php",
    category: "backend",
    brandColor: "#777BB4",
    proficiency: 94,
    experience: "Enterprise Core @ Pleximus",
    description: "Modern PHP 8+ object-oriented design, RESTful web services, composer package management, PDO transactions, and secure auth.",
    tools: ["PHP 8.2", "Composer", "PDO", "PSR Standards", "OOP"],
  },
  {
    id: "laravel",
    name: "Laravel Framework",
    shortLabel: "Laravel",
    iconName: "laravel",
    category: "backend",
    brandColor: "#FF2D20",
    proficiency: 95,
    experience: "Primary Framework",
    description: "Eloquent ORM, robust REST API microservices, middleware routing, queue workers, migrations, and automated security policies.",
    tools: ["Laravel 10/11", "Eloquent", "Artisan", "Sanctum", "Blade"],
  },
  {
    id: "react",
    name: "React.js",
    shortLabel: "React",
    iconName: "react",
    category: "frontend",
    brandColor: "#61DAFB",
    proficiency: 92,
    experience: "Full-Stack Frontends",
    description: "Modern component architecture, custom hooks, reactive state engines, Tailwind CSS styling, Vite tooling, and micro-interactions.",
    tools: ["React 18", "Hooks", "Context API", "Vite", "SPA"],
  },
  {
    id: "node",
    name: "Node.js & Express",
    shortLabel: "Node.js",
    iconName: "node",
    category: "backend",
    brandColor: "#339933",
    proficiency: 90,
    experience: "REST API Microservices",
    description: "High-throughput non-blocking asynchronous event loops, Express.js routing, JWT token auth, and backend integrations.",
    tools: ["Node.js", "Express.js", "REST APIs", "JWT", "npm"],
  },
  {
    id: "linux",
    name: "Linux & Ubuntu Server",
    shortLabel: "Linux",
    iconName: "linux",
    category: "devops",
    brandColor: "#E95420",
    proficiency: 94,
    experience: "Production Server Admin",
    description: "Ubuntu Server administration, SSH hardening, systemd services, UFW firewalls, cron tasks, and bash automation scripts.",
    tools: ["Ubuntu 22.04 LTS", "Bash", "systemctl", "UFW", "journalctl"],
  },
  {
    id: "git",
    name: "Git & GitLab CI/CD",
    shortLabel: "Git",
    iconName: "git",
    category: "devops",
    brandColor: "#F05032",
    proficiency: 92,
    experience: "Team Collaboration & Releases",
    description: "Trunk-based and feature branching, merge requests, code reviews, release tags, and automated continuous delivery pipelines.",
    tools: ["Git", "GitLab CI", "GitHub Actions", "Semantic Releases"],
  },
  {
    id: "redis",
    name: "Redis Caching & In-Memory",
    shortLabel: "Redis",
    iconName: "redis",
    category: "database",
    brandColor: "#DC382D",
    proficiency: 86,
    experience: "High-Performance Caching",
    description: "Key-value store caching, sub-millisecond response acceleration, session storage, and pub/sub message brokering.",
    tools: ["Redis 7", "In-Memory Caching", "Session Store", "Key-Value"],
  },
  {
    id: "aws",
    name: "AWS & Cloud Services",
    shortLabel: "AWS",
    iconName: "aws",
    category: "devops",
    brandColor: "#FF9900",
    proficiency: 84,
    experience: "Cloud Infrastructure",
    description: "AWS EC2 instances, S3 object storage for assets, Route 53 DNS records, and IAM security permissions.",
    tools: ["AWS EC2", "S3 Storage", "Route 53", "IAM", "VPC"],
  },
  {
    id: "typescript",
    name: "TypeScript & JavaScript",
    shortLabel: "TypeScript",
    iconName: "typescript",
    category: "frontend",
    brandColor: "#3178C6",
    proficiency: 90,
    experience: "Type-Safe Full-Stack",
    description: "Strict compile-time type safety, interfaces, generics, modern ES2024 features, and robust frontend/backend contracts.",
    tools: ["TypeScript 5", "ESNext", "Interfaces", "Generics"],
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    shortLabel: "Tailwind",
    iconName: "tailwind",
    category: "frontend",
    brandColor: "#06B6D4",
    proficiency: 94,
    experience: "Responsive Systems",
    description: "Utility-first modern design systems, custom color palettes, fluid responsive breakpoints, dark/light themes, and CSS animations.",
    tools: ["Tailwind 3/4", "Responsive Design", "Flex/Grid", "Animation"],
  },
  {
    id: "flutter",
    name: "Flutter & Mobile Apps",
    shortLabel: "Flutter",
    iconName: "flutter",
    category: "mobile",
    brandColor: "#02569B",
    proficiency: 86,
    experience: "Cross-Platform Pet Adoption App",
    description: "Dart language, reactive widget trees, state management, Android app builds, and smooth 60 FPS mobile layouts.",
    tools: ["Flutter SDK", "Dart", "Android Studio", "Material Design"],
  },
];

export const InteractiveTechOrbit = () => {
  const { isDark } = useTheme();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [selectedNode, setSelectedNode] = useState<TechNodeItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [speedMultiplier, setSpeedMultiplier] = useState<number>(1);
  const [projectedNodes, setProjectedNodes] = useState<TechNodeItem[]>([]);

  // 3D Rotation angles & tracking
  const rotationRef = useRef({ x: 0.25, y: 0.35 });
  const velocityRef = useRef({ x: 0.002, y: 0.004 });
  const mousePosRef = useRef({ x: 0, y: 0, isDown: false, hasMoved: false });
  const nodes3DRef = useRef<TechNodeItem[]>([]);

  // Initialize spherical Fibonacci distribution for equidistant 3D spacing
  useEffect(() => {
    const N = ORBIT_TECHNOLOGIES.length;
    const radius = 175; // Sphere radius in 3D units
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle

    const nodes: TechNodeItem[] = ORBIT_TECHNOLOGIES.map((tech, i) => {
      const y = 1 - (i / (N - 1)) * 2; // -1 to 1
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      return {
        ...tech,
        x: x * radius,
        y: y * radius,
        z: z * radius,
      };
    });

    nodes3DRef.current = nodes;
    setSelectedNode(nodes[0]); // Default selected is Docker
  }, []);

  // Main 3D animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const handleResize = () => {
      if (!canvas || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      width = rect.width;
      height = Math.min(520, Math.max(400, rect.width * 0.72));

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.resetTransform?.();
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const fov = 380;

      // Auto-rotation when not actively dragged
      if (autoRotate && !mousePosRef.current.isDown) {
        rotationRef.current.y += velocityRef.current.y * speedMultiplier;
        rotationRef.current.x += velocityRef.current.x * speedMultiplier;
      }

      const rotX = rotationRef.current.x;
      const rotY = rotationRef.current.y;

      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);

      // Project 3D nodes to 2D
      const projected: TechNodeItem[] = nodes3DRef.current.map((node) => {
        // Rotate around Y axis
        const x1 = node.x * cosY + node.z * sinY;
        const y1 = node.y;
        const z1 = -node.x * sinY + node.z * cosY;

        // Rotate around X axis
        const x2 = x1;
        const y2 = y1 * cosX - z1 * sinX;
        const z2 = y1 * sinX + z1 * cosX;

        // Perspective projection
        const scale = fov / (fov + z2);
        const px = centerX + x2 * scale;
        const py = centerY + y2 * scale;

        // Depth alpha: nodes closer to camera are brighter and larger
        const alpha = Math.max(0.35, Math.min(1, (scale - 0.55) * 1.5));

        return {
          ...node,
          px,
          py,
          scale,
          z2,
          alpha,
        };
      });

      // Background Holographic Rings & Core
      ctx.save();
      const coreGrad = ctx.createRadialGradient(
        centerX,
        centerY,
        10,
        centerX,
        centerY,
        110
      );
      coreGrad.addColorStop(
        0,
        isDark ? "rgba(168, 85, 247, 0.25)" : "rgba(147, 51, 234, 0.15)"
      );
      coreGrad.addColorStop(
        0.5,
        isDark ? "rgba(37, 99, 235, 0.15)" : "rgba(37, 99, 235, 0.08)"
      );
      coreGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 110, 0, Math.PI * 2);
      ctx.fill();

      // Elliptical Gyroscope Rings in 3D
      ctx.strokeStyle = isDark ? "rgba(148, 163, 184, 0.15)" : "rgba(100, 116, 139, 0.2)";
      ctx.lineWidth = 1;
      ctx.setLineDash([6, 8]);

      ctx.beginPath();
      ctx.ellipse(centerX, centerY, 185, 75, rotX * 0.7, 0, Math.PI * 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.ellipse(centerX, centerY, 155, 95, -rotY * 0.6, 0, Math.PI * 2);
      ctx.stroke();

      ctx.restore();

      // Draw dynamic laser connections between nodes that are close in 3D space
      ctx.save();
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const a = projected[i];
          const b = projected[j];
          const dist2D = Math.hypot((a.px || 0) - (b.px || 0), (a.py || 0) - (b.py || 0));

          if (dist2D < 130) {
            const isHighlighted = selectedNode?.id === a.id || selectedNode?.id === b.id;
            const linkAlpha = (1 - dist2D / 130) * 0.25 * ((a.alpha || 1) + (b.alpha || 1)) * 0.5;

            ctx.strokeStyle = isHighlighted
              ? isDark
                ? `rgba(192, 132, 252, ${Math.min(0.85, linkAlpha * 3.5)})`
                : `rgba(126, 34, 206, ${Math.min(0.85, linkAlpha * 3.5)})`
              : isDark
              ? `rgba(100, 116, 139, ${linkAlpha})`
              : `rgba(148, 163, 184, ${linkAlpha})`;

            ctx.lineWidth = isHighlighted ? 1.8 : 0.8;
            ctx.beginPath();
            ctx.moveTo(a.px || 0, a.py || 0);
            ctx.lineTo(b.px || 0, b.py || 0);
            ctx.stroke();
          }
        }
      }
      ctx.restore();

      // Update state for DOM overlay nodes
      setProjectedNodes(projected);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [autoRotate, speedMultiplier, isDark, selectedNode]);

  // Touch and pointer handlers for 3D navigation
  const handlePointerDown = (clientX: number, clientY: number) => {
    mousePosRef.current = { x: clientX, y: clientY, isDown: true, hasMoved: false };
  };

  const handlePointerMove = (clientX: number, clientY: number) => {
    if (!mousePosRef.current.isDown) return;
    const deltaX = clientX - mousePosRef.current.x;
    const deltaY = clientY - mousePosRef.current.y;

    if (Math.abs(deltaX) > 2 || Math.abs(deltaY) > 2) {
      mousePosRef.current.hasMoved = true;
    }

    rotationRef.current.y += deltaX * 0.006;
    rotationRef.current.x -= deltaY * 0.006;

    // Constrain pitch so it doesn't flip upside down
    rotationRef.current.x = Math.max(-1.1, Math.min(1.1, rotationRef.current.x));

    mousePosRef.current.x = clientX;
    mousePosRef.current.y = clientY;
  };

  const handlePointerUp = () => {
    mousePosRef.current.isDown = false;
  };

  const handleNodeClick = (node: TechNodeItem) => {
    if (mousePosRef.current.hasMoved) return; // Ignore clicks if user was dragging
    setSelectedNode(node);
  };

  const resetOrientation = () => {
    rotationRef.current = { x: 0.25, y: 0.35 };
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full rounded-3xl border shadow-2xl overflow-hidden p-4 sm:p-6 transition-all duration-300 ${
        isDark
          ? "bg-slate-900/90 border-slate-800 text-slate-100"
          : "bg-white/95 border-slate-200 text-slate-900 shadow-xl"
      }`}
    >
      {/* Top Header Bar with Live Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2.5">
          <div className="p-2.5 rounded-2xl bg-gradient-to-tr from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/25">
            <Rotate3d size={20} className={autoRotate ? "animate-spin-slow" : ""} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-base sm:text-lg tracking-tight">
                3D Tech Orbit
              </h3>
              <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Active Constellation
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Interactive 3D orbit featuring Docker, MySQL, Python, Nginx, MongoDB, PHP & more
            </p>
          </div>
        </div>

        {/* Orbit Motion Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold border flex items-center gap-1.5 transition-all cursor-pointer ${
              autoRotate
                ? "bg-purple-600/15 border-purple-500/30 text-purple-300 shadow-sm"
                : "bg-slate-800/40 border-slate-700 text-slate-400"
            }`}
            title="Toggle 3D Orbit Auto-Spin"
          >
            {autoRotate ? <Pause size={13} /> : <Play size={13} />}
            <span>{autoRotate ? "Spinning" : "Paused"}</span>
          </button>

          <button
            onClick={() => setSpeedMultiplier((prev) => (prev === 1 ? 2 : prev === 2 ? 0.5 : 1))}
            className="px-2.5 py-1.5 rounded-xl text-xs font-semibold border border-slate-700 bg-slate-800/50 text-slate-300 hover:text-white transition-all cursor-pointer"
            title="Change rotation speed"
          >
            <Zap size={13} className="inline mr-1 text-amber-400" />
            <span>{speedMultiplier}x</span>
          </button>

          <button
            onClick={resetOrientation}
            className="p-1.5 rounded-xl border border-slate-700 bg-slate-800/50 text-slate-300 hover:text-white transition-all cursor-pointer"
            title="Reset 3D Perspective"
          >
            <Compass size={16} />
          </button>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-1.5 mb-3">
        {[
          { id: "all", label: "All Technologies" },
          { id: "devops", label: "DevOps & Linux" },
          { id: "backend", label: "Backend & APIs" },
          { id: "database", label: "Databases" },
          { id: "frontend", label: "Frontend" },
          { id: "mobile", label: "Mobile" },
        ].map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-2.5 py-1 rounded-xl text-xs font-medium transition-all cursor-pointer ${
              activeCategory === cat.id
                ? "bg-purple-600 text-white shadow-md shadow-purple-500/25 scale-105"
                : isDark
                ? "bg-slate-800/60 text-slate-400 hover:text-slate-200"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* 3D Orbit Viewport with Interactive Tech Nodes */}
      <div
        className="relative w-full h-[400px] sm:h-[460px] rounded-2xl overflow-hidden bg-slate-950/60 border border-slate-800 select-none cursor-grab active:cursor-grabbing"
        onMouseDown={(e) => handlePointerDown(e.clientX, e.clientY)}
        onMouseMove={(e) => handlePointerMove(e.clientX, e.clientY)}
        onMouseUp={handlePointerUp}
        onMouseLeave={handlePointerUp}
        onTouchStart={(e) => {
          if (e.touches.length === 1) {
            handlePointerDown(e.touches[0].clientX, e.touches[0].clientY);
          }
        }}
        onTouchMove={(e) => {
          if (e.touches.length === 1) {
            handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
          }
        }}
        onTouchEnd={handlePointerUp}
      >
        {/* Background Laser Canvas (Core & Connection lines) */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

        {/* 3D Projected Moving Tech Icons Layer */}
        <div className="absolute inset-0 pointer-events-none">
          {projectedNodes.map((node) => {
            if (node.px === undefined || node.py === undefined) return null;

            const isSelected = selectedNode?.id === node.id;
            const isCategoryMatch = activeCategory === "all" || node.category === activeCategory;
            const scale = node.scale || 1;
            const zIndex = Math.round((node.z2 || 0) + 600);
            const alpha = (node.alpha || 1) * (isCategoryMatch ? 1 : 0.25);

            // Icon size scales with 3D depth
            const iconSize = Math.max(18, Math.min(32, Math.round(24 * scale)));

            return (
              <div
                key={node.id}
                style={{
                  position: "absolute",
                  left: `${node.px}px`,
                  top: `${node.py}px`,
                  transform: `translate(-50%, -50%) scale(${isSelected ? scale * 1.15 : scale})`,
                  zIndex: isSelected ? 9999 : zIndex,
                  opacity: alpha,
                  transition: "transform 0.1s ease-out, opacity 0.2s ease",
                }}
                className="pointer-events-auto"
              >
                <div
                  onClick={() => handleNodeClick(node)}
                  className={`group relative flex flex-col items-center justify-center cursor-pointer transition-all duration-200 ${
                    isSelected ? "scale-110" : "hover:scale-115"
                  }`}
                  title={`${node.name} (${node.proficiency}% proficiency)`}
                >
                  {/* Glowing Outer Halo */}
                  <div
                    style={{
                      backgroundColor: node.brandColor,
                    }}
                    className={`absolute inset-0 rounded-2xl blur-md transition-opacity duration-300 ${
                      isSelected
                        ? "opacity-60 scale-125"
                        : "opacity-25 group-hover:opacity-60"
                    }`}
                  />

                  {/* Node Badge with Authentic Technology SVG Icon */}
                  <div
                    style={{
                      borderColor: isSelected
                        ? "#ffffff"
                        : isDark
                        ? `${node.brandColor}90`
                        : `${node.brandColor}bb`,
                    }}
                    className={`relative p-2.5 sm:p-3 rounded-2xl border-2 flex items-center justify-center transition-all duration-200 backdrop-blur-md shadow-xl ${
                      isSelected
                        ? "bg-slate-900 ring-4 ring-purple-500/40 shadow-purple-500/30"
                        : isDark
                        ? "bg-slate-900/90 hover:border-white shadow-black/60"
                        : "bg-white/95 hover:border-slate-800 shadow-slate-900/20"
                    }`}
                  >
                    <TechIcon name={node.iconName} size={iconSize} className="drop-shadow-sm" />
                  </div>

                  {/* Technology Label Badge underneath icon */}
                  <div
                    className={`mt-1.5 px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-bold tracking-tight whitespace-nowrap transition-all duration-200 border shadow-md ${
                      isSelected
                        ? "bg-purple-600 text-white border-purple-400 scale-105"
                        : isDark
                        ? "bg-slate-900/90 text-slate-200 border-slate-700/80 group-hover:text-white group-hover:border-purple-400"
                        : "bg-white text-slate-800 border-slate-300 group-hover:text-purple-600 group-hover:border-purple-300"
                    }`}
                  >
                    {node.shortLabel}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Floating Hint Overlay */}
        <div className="absolute bottom-3 left-3 text-[11px] text-slate-400 bg-slate-900/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700/60 flex items-center gap-1.5 pointer-events-none shadow-lg">
          <Sparkles size={13} className="text-amber-400 animate-spin-slow" />
          <span>Click & drag to rotate in 3D • Tap any icon to inspect</span>
        </div>
      </div>

      {/* Selected Technology Inspection Panel */}
      <AnimatePresence mode="wait">
        {selectedNode && (
          <motion.div
            key={selectedNode.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className={`mt-4 p-4 sm:p-5 rounded-2xl border transition-all ${
              isDark
                ? "bg-slate-800/70 border-slate-700/80 text-slate-200"
                : "bg-slate-50 border-slate-200 text-slate-800 shadow-sm"
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-3">
                <div
                  style={{ borderColor: selectedNode.brandColor }}
                  className="p-2.5 rounded-2xl border-2 bg-slate-900 shadow-md flex items-center justify-center"
                >
                  <TechIcon name={selectedNode.iconName} size={26} />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold flex items-center gap-2">
                    <span>{selectedNode.name}</span>
                    <span
                      style={{
                        backgroundColor: `${selectedNode.brandColor}20`,
                        color: selectedNode.brandColor,
                        borderColor: `${selectedNode.brandColor}40`,
                      }}
                      className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full border"
                    >
                      {selectedNode.category}
                    </span>
                  </h4>
                  <p className="text-xs text-purple-400 font-semibold flex items-center gap-1.5">
                    <CheckCircle size={12} className="text-emerald-400" />
                    <span>{selectedNode.experience}</span>
                  </p>
                </div>
              </div>

              {/* Proficiency Gauge */}
              <div className="flex items-center gap-2 sm:self-center">
                <div className="text-right">
                  <div className="text-xs text-slate-400 font-medium">Proficiency</div>
                  <div className="text-lg font-black text-slate-100 dark:text-white">
                    {selectedNode.proficiency}%
                  </div>
                </div>
                <div className="w-24 sm:w-28 bg-slate-700/50 rounded-full h-2.5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${selectedNode.proficiency}%` }}
                    transition={{ duration: 0.5 }}
                    style={{ backgroundColor: selectedNode.brandColor }}
                    className="h-full rounded-full"
                  />
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm leading-relaxed text-slate-300 mb-3">
              {selectedNode.description}
            </p>

            {/* Key Ecosystem Tools */}
            <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-700/50">
              <span className="text-[11px] font-semibold text-slate-400 mr-1 flex items-center gap-1">
                <Info size={12} />
                Key Stack:
              </span>
              {selectedNode.tools.map((tool) => (
                <span
                  key={tool}
                  className={`text-[11px] px-2.5 py-0.5 rounded-lg border font-medium ${
                    isDark
                      ? "bg-slate-900/80 border-slate-700 text-slate-300"
                      : "bg-white border-slate-200 text-slate-700"
                  }`}
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InteractiveTechOrbit;
