import React from "react";

interface TechIconProps {
  className?: string;
  size?: number;
}

export const DockerIcon: React.FC<TechIconProps> = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Docker Whale Body */}
    <path
      d="M22.5 10.5c-.35-.25-1.1-.35-1.7-.1-.15-.8-.7-1.45-1.4-1.8-.15-.08-.3-.12-.45-.15-.4-.6-1.1-1-1.95-1.05-.1 0-.2 0-.3.02C16.4 6.7 15.6 6 14.6 6H13V9.5H8.2c-.45-.6-1.1-1-1.9-1.05-.1 0-.2 0-.3.02C5.7 7.2 4.9 6.5 3.9 6.5H2v3.1c0 4.2 3.4 7.6 7.6 7.6 5.8 0 10.7-3.8 11.9-9.1.5-.1 1.1-.3 1.5-.7.4-.4.6-.9.5-1.4-.3-.2-.7-.4-1-.5z"
      fill="#2496ED"
    />
    {/* Containers on Whale */}
    <rect x="5.5" y="4.5" width="2.2" height="2.2" rx="0.3" fill="#38BDF8" />
    <rect x="8.2" y="4.5" width="2.2" height="2.2" rx="0.3" fill="#38BDF8" />
    <rect x="10.9" y="4.5" width="2.2" height="2.2" rx="0.3" fill="#38BDF8" />
    <rect x="8.2" y="1.8" width="2.2" height="2.2" rx="0.3" fill="#60A5FA" />
    <rect x="10.9" y="1.8" width="2.2" height="2.2" rx="0.3" fill="#60A5FA" />
    <rect x="13.6" y="4.5" width="2.2" height="2.2" rx="0.3" fill="#38BDF8" />
    <rect x="13.6" y="1.8" width="2.2" height="2.2" rx="0.3" fill="#60A5FA" />
    {/* Water jet dot */}
    <circle cx="20.5" cy="9.2" r="0.6" fill="#FFFFFF" />
  </svg>
);

export const MySQLIcon: React.FC<TechIconProps> = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* MySQL Dolphin & Waves */}
    <path
      d="M17.5 4C14.5 2.5 10 3 8 5.5c-2 2.5-1.5 5.5-.5 7.5-.8-.5-1.8-.8-2.5-.5-1 .5-1.5 1.5-1.5 2.5 0 2 2.5 4 6 4 4.5 0 8-2.5 9-6.5.6-2.5.5-5.5-1-8z"
      fill="#00758F"
    />
    <path
      d="M19 8c.5 1 .3 2.5-.5 3.5-1 1.2-2.5 1.8-4 1.8 1.5-1 2.2-2.3 2.5-3.8.3-.7 1-1.2 2-1.5z"
      fill="#F29111"
    />
    <circle cx="16" cy="5.8" r="0.8" fill="#FFFFFF" />
    <path
      d="M4.5 18.5c2 1 5 1.5 8 1 3-.5 5-1.5 7-1"
      stroke="#F29111"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const PythonIcon: React.FC<TechIconProps> = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Top Snake (Blue) */}
    <path
      d="M11.8 2C7.5 2 7.8 3.9 7.8 3.9l.01 2h4.2v.6H5.8S2 6.1 2 10.4s3.3 4.1 3.3 4.1h2v-2.8s-.1-3.3 3.3-3.3h5.7s3.2.1 3.2-3.2V3.9S19.9 2 11.8 2zm-2.4 1.6c.6 0 1.1.5 1.1 1.1s-.5 1.1-1.1 1.1-1.1-.5-1.1-1.1.5-1.1 1.1-1.1z"
      fill="#3776AB"
    />
    {/* Bottom Snake (Yellow) */}
    <path
      d="M12.2 22c4.3 0 4-1.9 4-1.9l-.01-2h-4.2v-.6h6.2s3.8.4 3.8-3.9-3.3-4.1-3.3-4.1h-2v2.8s.1 3.3-3.3 3.3H7.7s-3.2-.1-3.2 3.2v1.3S4.1 22 12.2 22zm2.4-1.6c-.6 0-1.1-.5-1.1-1.1s.5-1.1 1.1-1.1 1.1.5 1.1 1.1-.5 1.1-1.1 1.1z"
      fill="#FFD438"
    />
  </svg>
);

export const NginxIcon: React.FC<TechIconProps> = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Hexagon */}
    <path
      d="M12 2l8.5 4.9v9.8L12 21.6 3.5 16.7V6.9L12 2z"
      fill="#009639"
    />
    {/* White 'N' mark */}
    <path
      d="M8.5 7.5v9h2.2l4.8-6.3v6.3h2V7.5h-2.2L10.5 13.8V7.5H8.5z"
      fill="#FFFFFF"
    />
  </svg>
);

export const MongoIcon: React.FC<TechIconProps> = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* MongoDB Leaf */}
    <path
      d="M12 2C12 2 6 7 6 13.5c0 3.6 2.7 6.6 6 7.5V2z"
      fill="#47A248"
    />
    <path
      d="M12 2c0 0 6 5 6 11.5 0 3.6-2.7 6.6-6 7.5V2z"
      fill="#499D4A"
    />
    <path
      d="M12 21c-.2 0-.4.3-.4.6 0 .5.4.9.4.9s.4-.4.4-.9c0-.3-.2-.6-.4-.6z"
      fill="#3FA037"
    />
    <path
      d="M11.8 6.5v12.2c0 .3.2.5.4.5s.4-.2.4-.5V6.5h-.8z"
      fill="#FFFFFF"
      opacity="0.6"
    />
  </svg>
);

export const PhpIcon: React.FC<TechIconProps> = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* PHP Pill/Oval */}
    <ellipse cx="12" cy="12" rx="10.5" ry="6.5" fill="#777BB4" />
    <path
      d="M6.5 14h1.2l.4-1.8h1.2c1 0 1.8-.7 1.8-1.7 0-.9-.7-1.5-1.7-1.5H6.8L6.5 14zm1.8-2.6l.3-1.2h.7c.4 0 .7.2.7.6 0 .4-.3.6-.7.6h-1zm4.2 2.6h1.2l.9-4h-1.2l-.3 1.4h-1.3l.3-1.4h-1.2L10.5 14h1.2l.3-1.5h1.2l-.7 1.5zm3.5 0h1.2l.4-1.8h1.2c1 0 1.8-.7 1.8-1.7 0-.9-.7-1.5-1.7-1.5h-2.6L16 14zm1.8-2.6l.3-1.2h.7c.4 0 .7.2.7.6 0 .4-.3.6-.7.6h-1z"
      fill="#FFFFFF"
    />
  </svg>
);

export const ReactIcon: React.FC<TechIconProps> = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
    <ellipse cx="12" cy="12" rx="9.5" ry="3.8" stroke="#61DAFB" strokeWidth="1.3" />
    <ellipse
      cx="12"
      cy="12"
      rx="9.5"
      ry="3.8"
      transform="rotate(60 12 12)"
      stroke="#61DAFB"
      strokeWidth="1.3"
    />
    <ellipse
      cx="12"
      cy="12"
      rx="9.5"
      ry="3.8"
      transform="rotate(120 12 12)"
      stroke="#61DAFB"
      strokeWidth="1.3"
    />
  </svg>
);

export const NodeIcon: React.FC<TechIconProps> = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Hexagon */}
    <path
      d="M12 2.5l8 4.6v9.2l-8 4.6-8-4.6V7.1l8-4.6z"
      fill="#339933"
    />
    {/* Stylized 'JS' & leaf mark */}
    <path
      d="M12 6.5l4 2.3v4.6l-4 2.3-4-2.3V8.8l4-2.3z"
      fill="#215732"
    />
    <path
      d="M10 10.5v3.2l2.5 1.4v-3.2L10 10.5z"
      fill="#FFFFFF"
    />
  </svg>
);

export const LinuxIcon: React.FC<TechIconProps> = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Ubuntu / Linux Circle of Friends */}
    <circle cx="12" cy="12" r="10" fill="#E95420" />
    <circle cx="12" cy="12" r="4.8" stroke="#FFFFFF" strokeWidth="2.2" fill="none" />
    {/* 3 Nodes */}
    <circle cx="6.5" cy="12" r="1.6" fill="#F4A261" stroke="#FFFFFF" strokeWidth="0.8" />
    <circle cx="14.8" cy="7.2" r="1.6" fill="#F4A261" stroke="#FFFFFF" strokeWidth="0.8" />
    <circle cx="14.8" cy="16.8" r="1.6" fill="#F4A261" stroke="#FFFFFF" strokeWidth="0.8" />
  </svg>
);

export const GitIcon: React.FC<TechIconProps> = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Git Orange Diamond */}
    <rect
      x="12"
      y="1"
      width="15"
      height="15"
      rx="2.5"
      transform="rotate(45 12 1)"
      fill="#F05032"
    />
    {/* Branches and Commits */}
    <circle cx="8" cy="12" r="1.5" fill="#FFFFFF" />
    <circle cx="13" cy="7.5" r="1.5" fill="#FFFFFF" />
    <circle cx="16" cy="14" r="1.5" fill="#FFFFFF" />
    <path
      d="M8 12h5V7.5M13 12v2h3"
      stroke="#FFFFFF"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const LaravelIcon: React.FC<TechIconProps> = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" fill="#FF2D20" />
    {/* Laravel 3D Cube mark */}
    <path
      d="M12 5.5l6 3.5v6.5l-6 3.5-6-3.5V9l6-3.5z"
      stroke="#FFFFFF"
      strokeWidth="1.5"
      fill="none"
    />
    <path d="M12 5.5v13.5M6 9l6 3.5 6-3.5" stroke="#FFFFFF" strokeWidth="1.3" />
  </svg>
);

export const RedisIcon: React.FC<TechIconProps> = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="4" fill="#DC382D" />
    {/* Stacked Redis Cubes */}
    <path d="M12 5l5 2.5-5 2.5-5-2.5L12 5z" fill="#FFFFFF" />
    <path d="M7 8.5l5 2.5v3L7 11.5v-3z" fill="#E2E8F0" />
    <path d="M17 8.5l-5 2.5v3l5-2.5v-3z" fill="#CBD5E1" />
    <path d="M7 13.5l5 2.5v3L7 16.5v-3z" fill="#E2E8F0" />
    <path d="M17 13.5l-5 2.5v3l5-2.5v-3z" fill="#CBD5E1" />
  </svg>
);

export const AwsIcon: React.FC<TechIconProps> = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="4" fill="#232F3E" />
    <path
      d="M6 10l2-4 2 4M6.7 8.5h2.6"
      stroke="#FF9900"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <path
      d="M12 6l1 4 1-3 1 3 1-4"
      stroke="#FF9900"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* AWS Smile Arrow */}
    <path
      d="M6 15.5c3.5 2 8 2 12 0"
      stroke="#FF9900"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path d="M16 15l2 .5-.5-2" fill="#FF9900" stroke="#FF9900" strokeWidth="0.5" />
  </svg>
);

export const TypeScriptIcon: React.FC<TechIconProps> = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="4" fill="#3178C6" />
    <path
      d="M6 9h5M8.5 9v9M14.5 13.5c.5-.5 1.2-.8 2-.8 1.2 0 2 .7 2 1.8 0 2-3 2-3 3.5h3"
      stroke="#FFFFFF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const TailwindIcon: React.FC<TechIconProps> = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="4" fill="#0F172A" />
    <path
      d="M7.5 11c1-2 2.5-3 4.5-3 2.5 0 3.5 2 5 2 1.5 0 2.5-1 3-2-1 2-2.5 3-4.5 3-2.5 0-3.5-2-5-2-1.5 0-2.5 1-3 2zm-3.5 4c1-2 2.5-3 4.5-3 2.5 0 3.5 2 5 2 1.5 0 2.5-1 3-2-1 2-2.5 3-4.5 3-2.5 0-3.5-2-5-2-1.5 0-2.5 1-3 2z"
      fill="#06B6D4"
    />
  </svg>
);

export const FlutterIcon: React.FC<TechIconProps> = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M14 2L4 12l3 3L19 3h-5z" fill="#42A5F5" />
    <path d="M14 11l-5 5 3 3 7-7h-5z" fill="#02569B" />
    <path d="M12 19l2 2h5l-4-4-3 2z" fill="#01579B" />
  </svg>
);

export type TechIconName =
  | "docker"
  | "mysql"
  | "python"
  | "nginx"
  | "mongo"
  | "php"
  | "react"
  | "node"
  | "linux"
  | "git"
  | "laravel"
  | "redis"
  | "aws"
  | "typescript"
  | "tailwind"
  | "flutter";

export interface TechIconComponentProps {
  name: TechIconName;
  size?: number;
  className?: string;
}

export const TechIcon: React.FC<TechIconComponentProps> = ({ name, size = 24, className = "" }) => {
  switch (name) {
    case "docker":
      return <DockerIcon size={size} className={className} />;
    case "mysql":
      return <MySQLIcon size={size} className={className} />;
    case "python":
      return <PythonIcon size={size} className={className} />;
    case "nginx":
      return <NginxIcon size={size} className={className} />;
    case "mongo":
      return <MongoIcon size={size} className={className} />;
    case "php":
      return <PhpIcon size={size} className={className} />;
    case "react":
      return <ReactIcon size={size} className={className} />;
    case "node":
      return <NodeIcon size={size} className={className} />;
    case "linux":
      return <LinuxIcon size={size} className={className} />;
    case "git":
      return <GitIcon size={size} className={className} />;
    case "laravel":
      return <LaravelIcon size={size} className={className} />;
    case "redis":
      return <RedisIcon size={size} className={className} />;
    case "aws":
      return <AwsIcon size={size} className={className} />;
    case "typescript":
      return <TypeScriptIcon size={size} className={className} />;
    case "tailwind":
      return <TailwindIcon size={size} className={className} />;
    case "flutter":
      return <FlutterIcon size={size} className={className} />;
    default:
      return null;
  }
};
