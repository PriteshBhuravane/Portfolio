import React, { useEffect, useRef, useState, useCallback } from "react";
import {
  Rotate3d,
  Sparkles,
  Play,
  Pause,
  Compass,
  Zap,
  Layers,
  ArrowUpRight,
  ExternalLink,
  CheckCircle2,
  Code2,
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
  ring: 1 | 2 | 3; // 1: Inner (Core Backend), 2: Middle (DevOps & Cloud), 3: Outer (Frontend, AI & Mobile)
  baseAngle: number; // Base angular offset on the ring in radians
}

export const ORBIT_TECHNOLOGIES: TechNodeItem[] = [
  // -------------------------------------------------------------
  // RING 1: Core Backend & Relational Database (Inner Orbit - 5 nodes)
  // -------------------------------------------------------------
  {
    id: "laravel",
    name: "Laravel Framework",
    shortLabel: "Laravel",
    iconName: "laravel",
    category: "backend",
    brandColor: "#FF2D20",
    proficiency: 95,
    experience: "Primary Framework @ Pleximus Techno",
    description: "Architecting enterprise REST API microservices, Eloquent ORM relations, middleware pipelines, Artisan commands, and secure auth.",
    tools: ["Laravel 10/11", "Eloquent", "Artisan", "Sanctum", "Blade"],
    ring: 1,
    baseAngle: 0,
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
    description: "Modern PHP 8+ object-oriented programming, PSR standards, composer package management, PDO transactions, and high-load web services.",
    tools: ["PHP 8.2", "Composer", "PDO", "PSR Standards", "OOP"],
    ring: 1,
    baseAngle: (Math.PI * 2) / 5,
  },
  {
    id: "mysql",
    name: "MySQL Relational DB",
    shortLabel: "MySQL",
    iconName: "mysql",
    category: "database",
    brandColor: "#00758F",
    proficiency: 92,
    experience: "Schema Modeling & Query Optimization",
    description: "ACID compliance, relational schema architecture, complex joins, composite indexing strategies, and automated backups.",
    tools: ["MySQL 8.0", "Indexes", "Foreign Keys", "Transactions"],
    ring: 1,
    baseAngle: ((Math.PI * 2) / 5) * 2,
  },
  {
    id: "redis",
    name: "Redis In-Memory Caching",
    shortLabel: "Redis",
    iconName: "redis",
    category: "database",
    brandColor: "#DC382D",
    proficiency: 86,
    experience: "High-Performance Caching",
    description: "Sub-millisecond key-value caching, session storage persistence, distributed locks, and pub/sub message brokering.",
    tools: ["Redis 7", "In-Memory Caching", "Session Store", "Key-Value"],
    ring: 1,
    baseAngle: ((Math.PI * 2) / 5) * 3,
  },
  {
    id: "node",
    name: "Node.js & Express",
    shortLabel: "Node.js",
    iconName: "node",
    category: "backend",
    brandColor: "#339933",
    proficiency: 89,
    experience: "Microservices & Event Loop",
    description: "Asynchronous runtime, Express microservices, npm ecosystem, real-time WebSocket communication, and RESTful pipelines.",
    tools: ["Node.js 20", "Express", "REST APIs", "npm"],
    ring: 1,
    baseAngle: ((Math.PI * 2) / 5) * 4,
  },

  // -------------------------------------------------------------
  // RING 2: DevOps, Linux & Cloud Infrastructure (Middle Orbit - 5 nodes)
  // -------------------------------------------------------------
  {
    id: "docker",
    name: "Docker Containers",
    shortLabel: "Docker",
    iconName: "docker",
    category: "devops",
    brandColor: "#2496ED",
    proficiency: 90,
    experience: "Containerization & Multi-Stage Builds",
    description: "Custom Dockerfile recipes, multi-stage production builds, docker-compose orchestration, volume persistence, and isolated networks.",
    tools: ["Docker", "Docker Compose", "Multi-stage Builds", "Container Registry"],
    ring: 2,
    baseAngle: Math.PI / 5,
  },
  {
    id: "linux",
    name: "Linux Server Administration",
    shortLabel: "Linux",
    iconName: "linux",
    category: "devops",
    brandColor: "#E95420",
    proficiency: 95,
    experience: "Primary OS Administration @ Pleximus",
    description: "Ubuntu/Debian server hardening, systemd daemon management, bash automation scripts, user permissions, and SSH tunnel security.",
    tools: ["Ubuntu Server", "Systemd", "Bash Shell", "UFW Firewall", "SSH"],
    ring: 2,
    baseAngle: Math.PI / 5 + (Math.PI * 2) / 5,
  },
  {
    id: "nginx",
    name: "Nginx Reverse Proxy",
    shortLabel: "Nginx",
    iconName: "nginx",
    category: "devops",
    brandColor: "#009639",
    proficiency: 92,
    experience: "Production Ingress & SSL",
    description: "High-performance reverse proxy routing, SSL/TLS Let's Encrypt termination, gzip/brotli compression, load balancing, and rate limiting.",
    tools: ["Nginx", "Reverse Proxy", "Certbot SSL", "Upstream Balancer"],
    ring: 2,
    baseAngle: Math.PI / 5 + ((Math.PI * 2) / 5) * 2,
  },
  {
    id: "aws",
    name: "AWS Cloud Infrastructure",
    shortLabel: "AWS",
    iconName: "aws",
    category: "devops",
    brandColor: "#FF9900",
    proficiency: 84,
    experience: "Cloud Compute & Deployments",
    description: "Amazon EC2 instance configuration, S3 secure asset storage buckets, IAM role permissions, security groups, and VPC networking.",
    tools: ["AWS EC2", "Amazon S3", "IAM", "VPC", "Route 53"],
    ring: 2,
    baseAngle: Math.PI / 5 + ((Math.PI * 2) / 5) * 3,
  },
  {
    id: "git",
    name: "Git Version Control & CI/CD",
    shortLabel: "Git",
    iconName: "git",
    category: "devops",
    brandColor: "#F05032",
    proficiency: 93,
    experience: "Trunk Development & GitHub Actions",
    description: "Git flow branching, merge conflict resolution, interactive rebase, and automated GitHub Actions CI/CD deployment pipelines.",
    tools: ["Git", "GitHub Actions", "Webhooks", "CI/CD Pipelines"],
    ring: 2,
    baseAngle: Math.PI / 5 + ((Math.PI * 2) / 5) * 4,
  },

  // -------------------------------------------------------------
  // RING 3: Frontend, AI & Mobile (Outer Orbit - 6 nodes)
  // -------------------------------------------------------------
  {
    id: "react",
    name: "React & Next.js Ecosystem",
    shortLabel: "React",
    iconName: "react",
    category: "frontend",
    brandColor: "#61DAFB",
    proficiency: 91,
    experience: "Modern Interactive Frontends",
    description: "Custom React hooks, state management, component architecture, Tailwind styling, and responsive web applications.",
    tools: ["React 18", "Hooks", "Context API", "Vite", "SPA"],
    ring: 3,
    baseAngle: 0,
  },
  {
    id: "typescript",
    name: "TypeScript",
    shortLabel: "TypeScript",
    iconName: "typescript",
    category: "frontend",
    brandColor: "#3178C6",
    proficiency: 88,
    experience: "Type-Safe Application Engineering",
    description: "Static type verification, interfaces, generic programming, and compile-time bug prevention across full-stack applications.",
    tools: ["TypeScript 5", "Generics", "Type Guards", "Interfaces"],
    ring: 3,
    baseAngle: (Math.PI * 2) / 6,
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    shortLabel: "Tailwind",
    iconName: "tailwind",
    category: "frontend",
    brandColor: "#06B6D4",
    proficiency: 95,
    experience: "Design Systems & Responsive UI",
    description: "Utility-first design architecture, custom design tokens, dark/light theme switching, and responsive layouts.",
    tools: ["Tailwind CSS 3/4", "Flexbox/Grid", "Transitions", "Dark Mode"],
    ring: 3,
    baseAngle: ((Math.PI * 2) / 6) * 2,
  },
  {
    id: "python",
    name: "Python & Machine Learning",
    shortLabel: "Python",
    iconName: "python",
    category: "backend",
    brandColor: "#3776AB",
    proficiency: 86,
    experience: "Research & SkinFusion-Net ML Paper",
    description: "Python automation scripts, data preprocessing pipelines, and deep learning architectures used in SkinFusion-Net (IJSRST published).",
    tools: ["Python 3.11", "NumPy", "OpenCV", "TensorFlow / Keras"],
    ring: 3,
    baseAngle: ((Math.PI * 2) / 6) * 3,
  },
  {
    id: "mongo",
    name: "MongoDB NoSQL DB",
    shortLabel: "MongoDB",
    iconName: "mongo",
    category: "database",
    brandColor: "#47A248",
    proficiency: 85,
    experience: "Document Modeling & Aggregation",
    description: "Flexible JSON-like document schema modeling, aggregation pipelines, indexed collections, and replica set synchronization.",
    tools: ["MongoDB 7", "Aggregation", "Indexes", "Mongoose"],
    ring: 3,
    baseAngle: ((Math.PI * 2) / 6) * 4,
  },
  {
    id: "flutter",
    name: "Flutter & Dart Mobile",
    shortLabel: "Flutter",
    iconName: "flutter",
    category: "mobile",
    brandColor: "#02569B",
    proficiency: 82,
    experience: "Cross-Platform Mobile UI",
    description: "Cross-platform Android and iOS mobile application development, state management, REST API client integration, and native device APIs.",
    tools: ["Flutter", "Dart", "Provider / Bloc", "REST Client"],
    ring: 3,
    baseAngle: ((Math.PI * 2) / 6) * 5,
  },
];

interface InteractiveTechOrbitProps {
  selectedTechId?: string;
  onSelectTech?: (tech: TechNodeItem) => void;
}

export const InteractiveTechOrbit: React.FC<InteractiveTechOrbitProps> = ({
  selectedTechId,
  onSelectTech,
}) => {
  const { isDark } = useTheme();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Map of DOM element refs for hardware-accelerated 60 FPS transform updating
  const nodeRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const [selectedNode, setSelectedNode] = useState<TechNodeItem>(() => {
    return (
      ORBIT_TECHNOLOGIES.find((n) => n.id === selectedTechId) ||
      ORBIT_TECHNOLOGIES[0]
    );
  });
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [speedMultiplier, setSpeedMultiplier] = useState<number>(1);
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  // Orbital revolution angles for each ring (Keplerian differential speed)
  const ringAnglesRef = useRef({ 1: 0, 2: 0, 3: 0 });

  // 3D Camera Rotation angles & drag state
  // Default camera pitch = ~22 degrees down-angle for optimal 3D ellipse view
  const DEFAULT_PITCH = 0.38;
  const cameraRef = useRef({ pitch: DEFAULT_PITCH, yaw: 0 });
  const mouseStateRef = useRef({
    isDown: false,
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
    velYaw: 0,
    velPitch: 0,
    hasDragged: false,
  });

  // Target camera orientation for smooth auto-focusing on selected node
  const targetCameraYawRef = useRef<number | null>(null);

  // Synchronize external prop with selected node
  useEffect(() => {
    if (!selectedTechId) return;
    const target = ORBIT_TECHNOLOGIES.find((n) => n.id === selectedTechId);
    if (!target) return;
    setSelectedNode(target);

    // Calculate current node angle on its ring
    const currentAngle = target.baseAngle + ringAnglesRef.current[target.ring];
    // Set target yaw so this node faces the camera front (angle = Math.PI / 2 facing viewer)
    targetCameraYawRef.current = -(currentAngle - Math.PI / 2);
  }, [selectedTechId]);

  // Main 3D Animation & Rendering Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let tick = 0;

    const handleResize = () => {
      if (!canvas || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      width = rect.width;
      height = Math.min(460, Math.max(380, rect.width * 0.65));

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
      tick += 0.02;
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2 - 10;
      const fov = 550;

      // Concentric orbital radii scaled responsively to container
      const r1 = Math.min(width * 0.2, 100);
      const r2 = Math.min(width * 0.32, 160);
      const r3 = Math.min(width * 0.44, 225);
      const ringRadii: { [key: number]: number } = { 1: r1, 2: r2, 3: r3 };

      // 1. Advance Orbital Positions (Keplerian differential speed)
      const isSlow = hoveredNodeId !== null;
      const speedFactor = (isSlow ? 0.2 : 1.0) * speedMultiplier;

      if (autoRotate && !mouseStateRef.current.isDown) {
        // Inner ring (Core Backend) orbits fastest
        ringAnglesRef.current[1] += 0.0075 * speedFactor;
        // Middle ring (DevOps & Cloud) orbits medium
        ringAnglesRef.current[2] += 0.0050 * speedFactor;
        // Outer ring (Frontend & AI) orbits calm
        ringAnglesRef.current[3] += 0.0033 * speedFactor;
      }

      // 2. Camera Orientation Handling
      if (targetCameraYawRef.current !== null) {
        // Smoothly ease camera to face selected technology
        let diff = (targetCameraYawRef.current - cameraRef.current.yaw) % (Math.PI * 2);
        if (diff > Math.PI) diff -= Math.PI * 2;
        if (diff < -Math.PI) diff += Math.PI * 2;

        cameraRef.current.yaw += diff * 0.08;
        // Also ease pitch back to optimal view
        cameraRef.current.pitch += (DEFAULT_PITCH - cameraRef.current.pitch) * 0.08;

        if (Math.abs(diff) < 0.005) {
          targetCameraYawRef.current = null;
        }
      } else if (!mouseStateRef.current.isDown) {
        // Inertia damping after dragging
        cameraRef.current.yaw += mouseStateRef.current.velYaw;
        cameraRef.current.pitch += mouseStateRef.current.velPitch;
        mouseStateRef.current.velYaw *= 0.92;
        mouseStateRef.current.velPitch *= 0.92;

        // Clamp pitch so orbit doesn't invert
        cameraRef.current.pitch = Math.max(0.12, Math.min(0.85, cameraRef.current.pitch));
      }

      const pitch = cameraRef.current.pitch;
      const yaw = cameraRef.current.yaw;
      const cosPitch = Math.cos(pitch);
      const sinPitch = Math.sin(pitch);
      const cosYaw = Math.cos(yaw);
      const sinYaw = Math.sin(yaw);

      // -------------------------------------------------------------
      // 3. Draw Canvas Background: Starfield & Core Reactor Glow
      // -------------------------------------------------------------
      ctx.save();

      // Ambient radial core glow
      const corePulse = 20 + Math.sin(tick * 1.8) * 3;
      const coreGrad = ctx.createRadialGradient(
        centerX,
        centerY,
        5,
        centerX,
        centerY,
        r3 + 25
      );
      coreGrad.addColorStop(
        0,
        isDark ? "rgba(168, 85, 247, 0.26)" : "rgba(147, 51, 234, 0.15)"
      );
      coreGrad.addColorStop(
        0.35,
        isDark ? "rgba(59, 130, 246, 0.14)" : "rgba(37, 99, 235, 0.08)"
      );
      coreGrad.addColorStop(
        0.75,
        isDark ? "rgba(16, 185, 129, 0.06)" : "rgba(5, 150, 105, 0.03)"
      );
      coreGrad.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, r3 + 25, 0, Math.PI * 2);
      ctx.fill();

      // Pulsing sonar radar waves radiating from center
      for (let wave = 0; wave < 2; wave++) {
        const waveRadius = ((tick * 18 + wave * 45) % (r2 * 0.9)) + 15;
        const waveAlpha = Math.max(0, 0.25 * (1 - waveRadius / (r2 * 0.9)));
        ctx.strokeStyle = isDark
          ? `rgba(168, 85, 247, ${waveAlpha})`
          : `rgba(147, 51, 234, ${waveAlpha * 0.8})`;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.arc(centerX, centerY, waveRadius, 0, Math.PI * 2);
        ctx.stroke();
      }

      // -------------------------------------------------------------
      // 4. Draw Concentric 3D Orbital Rings (Matching Math Perfectly)
      // -------------------------------------------------------------
      const rings = [
        {
          id: 1,
          radius: r1,
          color: isDark ? "rgba(255, 45, 32, 0.45)" : "rgba(255, 45, 32, 0.35)",
          activeColor: "#FF2D20",
          speed: 0.0075,
        },
        {
          id: 2,
          radius: r2,
          color: isDark ? "rgba(36, 150, 237, 0.4)" : "rgba(36, 150, 237, 0.3)",
          activeColor: "#2496ED",
          speed: 0.0050,
        },
        {
          id: 3,
          radius: r3,
          color: isDark ? "rgba(97, 218, 251, 0.35)" : "rgba(97, 218, 251, 0.25)",
          activeColor: "#61DAFB",
          speed: 0.0033,
        },
      ];

      for (const ring of rings) {
        ctx.save();
        const isRingActive = selectedNode?.ring === ring.id;
        ctx.strokeStyle = isRingActive ? ring.activeColor : ring.color;
        ctx.lineWidth = isRingActive ? 1.8 : 1.2;
        if (!isRingActive) {
          ctx.setLineDash([4, 6]);
        }

        ctx.beginPath();
        const segments = 64;
        for (let i = 0; i <= segments; i++) {
          const phi = (i / segments) * Math.PI * 2;
          const x0 = ring.radius * Math.cos(phi);
          const z0 = ring.radius * Math.sin(phi);
          const y0 = 0;

          // Camera yaw
          const x1 = x0 * cosYaw + z0 * sinYaw;
          const z1 = -x0 * sinYaw + z0 * cosYaw;
          const y1 = y0;

          // Camera pitch
          const x2 = x1;
          const y2 = y1 * cosPitch - z1 * sinPitch;
          const z2 = y1 * sinPitch + z1 * cosPitch;

          // 3D Perspective Projection
          const scale = fov / (fov + z2);
          const px = centerX + x2 * scale;
          const py = centerY + y2 * scale;

          if (i === 0) {
            ctx.moveTo(px, py);
          } else {
            ctx.lineTo(px, py);
          }
        }
        ctx.stroke();

        // Traveling bright photon packet along the ring track
        const photonAngle = (ringAnglesRef.current[ring.id as 1 | 2 | 3] * 1.5 + tick * 0.8) % (Math.PI * 2);
        const xP0 = ring.radius * Math.cos(photonAngle);
        const zP0 = ring.radius * Math.sin(photonAngle);
        const yP0 = 0;

        const xP1 = xP0 * cosYaw + zP0 * sinYaw;
        const zP1 = -xP0 * sinYaw + zP0 * cosYaw;
        const yP1 = yP0;

        const xP2 = xP1;
        const yP2 = yP1 * cosPitch - zP1 * sinPitch;
        const zP2 = yP1 * sinPitch + zP1 * cosPitch;

        const scaleP = fov / (fov + zP2);
        const pxP = centerX + xP2 * scaleP;
        const pyP = centerY + yP2 * scaleP;

        ctx.fillStyle = "#ffffff";
        ctx.shadowColor = ring.activeColor;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(pxP, pyP, isRingActive ? 3.5 : 2.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }

      // Center Nucleus Star (Pritesh DevOps Engine Core)
      ctx.save();
      ctx.fillStyle = isDark ? "#a855f7" : "#7c3aed";
      ctx.shadowColor = "#a855f7";
      ctx.shadowBlur = 14;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 6, 0, Math.PI * 2);
      ctx.fill();

      // White inner core point
      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.arc(centerX, centerY, 2.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      ctx.restore();

      // -------------------------------------------------------------
      // 5. Update DOM Nodes (Real Icons, Living Animation, 100% Visible)
      // -------------------------------------------------------------
      for (let i = 0; i < ORBIT_TECHNOLOGIES.length; i++) {
        const node = ORBIT_TECHNOLOGIES[i];
        const el = nodeRefs.current[node.id];
        if (!el) continue;

        const radius = ringRadii[node.ring] || r2;
        // Current revolving angle on ring
        const currentAngle = node.baseAngle + ringAnglesRef.current[node.ring];

        // 3D coordinates on orbital plane with subtle living vertical bobbing
        const x0 = radius * Math.cos(currentAngle);
        const z0 = radius * Math.sin(currentAngle);
        const y0 = Math.sin(tick * 2.2 + i * 0.7) * 3.5;

        // Camera Yaw rotation
        const x1 = x0 * cosYaw + z0 * sinYaw;
        const z1 = -x0 * sinYaw + z0 * cosYaw;
        const y1 = y0;

        // Camera Pitch rotation
        const x2 = x1;
        const y2 = y1 * cosPitch - z1 * sinPitch;
        const z2 = y1 * sinPitch + z1 * cosPitch;

        // Perspective Projection
        const scale = fov / (fov + z2);
        const px = centerX + x2 * scale;
        const py = centerY + y2 * scale;

        const isSelected = selectedNode?.id === node.id;
        const isHovered = hoveredNodeId === node.id;
        const isCategoryMatch =
          activeCategory === "all" || node.category === activeCategory;

        // Keep icons ALWAYS CLEARLY VISIBLE (minimum 0.85 opacity, never washed out)
        const depthAlpha = Math.max(0.85, Math.min(1.0, (scale - 0.7) / 0.45));
        const effectiveAlpha = isCategoryMatch ? depthAlpha : 0.22;

        // Visual scale bounded so distant icons remain legible and prominent
        const clampedScale = Math.max(0.88, Math.min(1.22, scale));
        const effectiveScale = isSelected
          ? clampedScale * 1.25
          : isHovered
          ? clampedScale * 1.18
          : clampedScale;

        // Strict 3D Z-index ordering (front nodes naturally render over back nodes)
        const zIndex = isSelected
          ? 9999
          : isHovered
          ? 9990
          : Math.round(z2 + 1000);

        // Hardware-accelerated GPU transform
        el.style.transform = `translate3d(${px}px, ${py}px, 0) translate(-50%, -50%) scale(${effectiveScale})`;
        el.style.zIndex = `${zIndex}`;
        el.style.opacity = `${effectiveAlpha}`;
        el.style.pointerEvents = isCategoryMatch ? "auto" : "none";
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [autoRotate, speedMultiplier, isDark, selectedNode, hoveredNodeId, activeCategory]);

  // Mouse & Touch Drag Controls for 3D Camera Rotation
  const handlePointerDown = (e: React.PointerEvent) => {
    mouseStateRef.current.isDown = true;
    mouseStateRef.current.startX = e.clientX;
    mouseStateRef.current.startY = e.clientY;
    mouseStateRef.current.lastX = e.clientX;
    mouseStateRef.current.lastY = e.clientY;
    mouseStateRef.current.velYaw = 0;
    mouseStateRef.current.velPitch = 0;
    mouseStateRef.current.hasDragged = false;
    targetCameraYawRef.current = null;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!mouseStateRef.current.isDown) return;
    const dx = e.clientX - mouseStateRef.current.lastX;
    const dy = e.clientY - mouseStateRef.current.lastY;

    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
      mouseStateRef.current.hasDragged = true;
    }

    // Drag horizontally rotates yaw, vertically tilts pitch
    const deltaYaw = dx * 0.007;
    const deltaPitch = -dy * 0.005;

    cameraRef.current.yaw += deltaYaw;
    cameraRef.current.pitch = Math.max(
      0.12,
      Math.min(0.85, cameraRef.current.pitch + deltaPitch)
    );

    mouseStateRef.current.velYaw = deltaYaw * 0.6;
    mouseStateRef.current.velPitch = deltaPitch * 0.6;
    mouseStateRef.current.lastX = e.clientX;
    mouseStateRef.current.lastY = e.clientY;
  };

  const handlePointerUp = () => {
    mouseStateRef.current.isDown = false;
  };

  const handleNodeClick = (node: TechNodeItem) => {
    // If user was dragging camera, don't trigger click
    if (mouseStateRef.current.hasDragged) return;

    setSelectedNode(node);
    onSelectTech?.(node);

    // Calculate current angle and align camera smoothly to face it
    const currentAngle = node.baseAngle + ringAnglesRef.current[node.ring];
    targetCameraYawRef.current = -(currentAngle - Math.PI / 2);
  };

  const resetCamera = () => {
    cameraRef.current.pitch = DEFAULT_PITCH;
    cameraRef.current.yaw = 0;
    mouseStateRef.current.velYaw = 0;
    mouseStateRef.current.velPitch = 0;
    targetCameraYawRef.current = null;
  };

  return (
    <div
      ref={containerRef}
      className={`rounded-3xl border shadow-2xl overflow-hidden transition-all duration-300 relative select-none ${
        isDark
          ? "bg-slate-950/95 border-slate-800 shadow-purple-950/20"
          : "bg-slate-900 text-slate-100 border-slate-700 shadow-slate-400/30"
      }`}
    >
      {/* Top Header & Interactive Orbit Controls */}
      <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800/80 flex items-center justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-sm shadow-emerald-400/50" />
          <span className="text-xs font-mono font-bold text-slate-200 flex items-center gap-1.5">
            <Rotate3d size={14} className="text-purple-400" />
            3D Tech Planetary System
          </span>
          <span className="text-[10px] font-mono text-purple-300/80 hidden sm:inline bg-purple-500/10 px-2 py-0.5 rounded-md border border-purple-500/20">
            3 Concentric Kepler Rings
          </span>
        </div>

        {/* Orbit Interaction Controls */}
        <div className="flex items-center gap-1.5 text-xs font-mono">
          {/* Auto-Rotate Play/Pause */}
          <button
            type="button"
            onClick={() => setAutoRotate(!autoRotate)}
            title={autoRotate ? "Pause Orbital Motion" : "Resume Orbital Motion"}
            className={`p-1.5 rounded-lg border flex items-center gap-1 transition-all cursor-pointer ${
              autoRotate
                ? "bg-purple-600 text-white border-purple-500 shadow-sm shadow-purple-500/30"
                : "bg-slate-800 text-slate-300 border-slate-700 hover:text-white"
            }`}
          >
            {autoRotate ? <Pause size={12} /> : <Play size={12} />}
            <span className="text-[10px] font-bold hidden sm:inline">
              {autoRotate ? "Orbiting" : "Paused"}
            </span>
          </button>

          {/* Speed Multiplier */}
          <div className="flex items-center rounded-lg bg-slate-800 border border-slate-700 p-0.5">
            {[0.5, 1, 2].map((sp) => (
              <button
                key={sp}
                type="button"
                onClick={() => setSpeedMultiplier(sp)}
                className={`px-1.5 py-0.5 rounded text-[10px] font-bold transition-all cursor-pointer ${
                  speedMultiplier === sp
                    ? "bg-purple-600 text-white"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {sp}x
              </button>
            ))}
          </div>

          {/* Reset Camera Button */}
          <button
            type="button"
            onClick={resetCamera}
            title="Reset 3D Camera"
            className="p-1.5 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 hover:text-white transition-all cursor-pointer"
          >
            <Compass size={12} />
          </button>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="px-4 py-2 bg-slate-900/60 border-b border-slate-800/60 flex items-center gap-1.5 overflow-x-auto scrollbar-none text-[11px] font-medium">
        {[
          { id: "all", label: "All Techs (16)" },
          { id: "backend", label: "Backend" },
          { id: "devops", label: "DevOps & Cloud" },
          { id: "database", label: "Databases" },
          { id: "frontend", label: "Frontend" },
          { id: "mobile", label: "Mobile" },
        ].map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActiveCategory(cat.id)}
            className={`px-2.5 py-1 rounded-full text-[10px] font-semibold whitespace-nowrap transition-all cursor-pointer ${
              activeCategory === cat.id
                ? "bg-purple-600 text-white shadow-md shadow-purple-500/20 font-bold"
                : "bg-slate-800/80 text-slate-400 hover:text-slate-200 border border-slate-700/60"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* 3D Canvas + Overlay Technology Nodes Container */}
      <div
        className="relative w-full h-[390px] sm:h-[420px] overflow-hidden cursor-grab active:cursor-grabbing touch-none"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        {/* Background 3D Elliptical Orbits Canvas */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

        {/* Central Hub Core Overlay Tag */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -mt-2.5 pointer-events-none z-10 flex flex-col items-center">
          <div className="px-2 py-0.5 rounded-full bg-purple-950/80 border border-purple-500/40 text-[9px] font-mono text-purple-300 backdrop-blur-sm shadow-lg shadow-purple-900/40">
            DevOps Core
          </div>
        </div>

        {/* DOM Technology Nodes with Real Animated Brand Icons */}
        {ORBIT_TECHNOLOGIES.map((node) => {
          const isSelected = selectedNode?.id === node.id;
          const isHovered = hoveredNodeId === node.id;

          return (
            <div
              key={node.id}
              ref={(el) => {
                nodeRefs.current[node.id] = el;
              }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                willChange: "transform, opacity, z-index",
              }}
              onPointerEnter={() => setHoveredNodeId(node.id)}
              onPointerLeave={() => setHoveredNodeId(null)}
              onClick={(e) => {
                e.stopPropagation();
                handleNodeClick(node);
              }}
              className="cursor-pointer group flex flex-col items-center select-none"
            >
              {/* Brand Icon Pod */}
              <div
                style={{
                  borderColor: node.brandColor,
                  boxShadow: isSelected
                    ? `0 0 24px ${node.brandColor}99, 0 8px 20px rgba(0,0,0,0.7)`
                    : isHovered
                    ? `0 0 16px ${node.brandColor}66, 0 6px 16px rgba(0,0,0,0.6)`
                    : `0 4px 12px rgba(0,0,0,0.5)`,
                }}
                className={`w-12 h-12 sm:w-13 sm:h-13 rounded-2xl border-2 flex items-center justify-center transition-shadow duration-300 relative ${
                  isDark
                    ? "bg-slate-900/95 text-white"
                    : "bg-slate-900 text-white"
                } ${isSelected ? "ring-2 ring-white/80" : ""}`}
              >
                {/* Brand color ambient halo glow */}
                <div
                  style={{ backgroundColor: node.brandColor }}
                  className={`absolute inset-0 rounded-2xl transition-opacity duration-300 blur-sm pointer-events-none ${
                    isSelected ? "opacity-35" : isHovered ? "opacity-25" : "opacity-10"
                  }`}
                />

                {/* Real Authentic SVG Brand Icon */}
                <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                  <TechIcon name={node.iconName} size={26} />
                </div>

                {/* Live Selected Ping Beacon */}
                {isSelected && (
                  <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span
                      style={{ backgroundColor: node.brandColor }}
                      className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                    />
                    <span
                      style={{ backgroundColor: node.brandColor }}
                      className="relative inline-flex rounded-full h-3 w-3 border border-white"
                    />
                  </span>
                )}
              </div>

              {/* Readable Label Pill Beneath the Icon */}
              <div
                style={{
                  borderColor: isSelected ? node.brandColor : "rgba(100, 116, 139, 0.4)",
                  backgroundColor: isSelected
                    ? `${node.brandColor}22`
                    : "rgba(15, 23, 42, 0.9)",
                }}
                className={`mt-1 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-tight text-white border backdrop-blur-md shadow-md transition-all duration-200 whitespace-nowrap ${
                  isSelected
                    ? "ring-1 ring-white/50 text-white scale-105"
                    : "text-slate-200 group-hover:text-white"
                }`}
              >
                {node.shortLabel}
              </div>
            </div>
          );
        })}

        {/* Floating Hint Overlay */}
        <div className="absolute bottom-2 left-3 pointer-events-none text-[10px] font-mono text-slate-400/80 bg-slate-950/70 px-2.5 py-1 rounded-full border border-slate-800/80 backdrop-blur-sm">
          Drag to rotate 3D orbit • Click any node to inspect
        </div>
      </div>

      {/* Selected Technology Inspection Card */}
      <AnimatePresence mode="wait">
        {selectedNode && (
          <motion.div
            key={selectedNode.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.22 }}
            className="p-4 bg-slate-900/95 border-t border-slate-800 flex flex-col gap-2.5"
          >
            {/* Top Row: Icon + Name + Ring Badge + Proficiency */}
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <div className="flex items-center gap-3">
                <div
                  style={{ borderColor: selectedNode.brandColor }}
                  className="w-10 h-10 rounded-xl border-2 bg-slate-950 flex items-center justify-center shadow-lg"
                >
                  <TechIcon name={selectedNode.iconName} size={22} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold text-white leading-tight">
                      {selectedNode.name}
                    </h4>
                    <span
                      style={{
                        borderColor: selectedNode.brandColor,
                        color: selectedNode.brandColor,
                      }}
                      className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border bg-slate-950/80"
                    >
                      Ring {selectedNode.ring}:{" "}
                      {selectedNode.ring === 1
                        ? "Core Backend"
                        : selectedNode.ring === 2
                        ? "DevOps & Cloud"
                        : "Frontend & AI"}
                    </span>
                  </div>
                  <div className="text-xs text-purple-300 font-mono mt-0.5">
                    {selectedNode.experience}
                  </div>
                </div>
              </div>

              {/* Proficiency Bar */}
              <div className="flex items-center gap-2 bg-slate-950/90 px-3 py-1.5 rounded-xl border border-slate-800">
                <span className="text-[11px] font-mono text-slate-400">Mastery:</span>
                <span
                  style={{ color: selectedNode.brandColor }}
                  className="text-xs font-mono font-bold"
                >
                  {selectedNode.proficiency}%
                </span>
                <div className="w-16 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    style={{
                      width: `${selectedNode.proficiency}%`,
                      backgroundColor: selectedNode.brandColor,
                    }}
                    className="h-full rounded-full"
                  />
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs text-slate-300 leading-relaxed">
              {selectedNode.description}
            </p>

            {/* Key Tools Pills */}
            <div className="flex items-center gap-1.5 flex-wrap pt-1">
              <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                <Code2 size={11} className="text-purple-400" />
                Tools & Stack:
              </span>
              {selectedNode.tools.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-slate-800/90 text-slate-200 border border-slate-700/80"
                >
                  {t}
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
