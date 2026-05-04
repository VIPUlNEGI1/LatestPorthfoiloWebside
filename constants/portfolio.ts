import {
  Bell,
  BriefcaseBusiness,
  Building2,
  Calendar,
  Cloud,
  Cpu,
  Database,
  GitFork,
  GraduationCap,
  Mail,
  MapPin,
  Navigation,
  PanelsTopLeft,
  Phone,
  Radio,
  ServerCog,
  Sparkles,
  Smartphone,
  Wifi,
  Zap,
} from "lucide-react";

export const profile = {
  name: "Vipul Negi",
  role: "React Native Application Developer",
  tagline:
    "I build cross-platform Android and iOS apps with scalable architecture, pixel-perfect UI, and production-ready integrations.",
  email: "vipulnegi219@gmail.com",
  phone: "7983922210",
  location: "Mudhuban Colony, Dehradun Uttarakhand - 249175",
  socials: [
    { label: "GitHub", href: "https://github.com/VIPUlNEGI1", icon: GitFork },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/vipulnegi11/", icon: BriefcaseBusiness },
    { label: "Email", href: "mailto:vipulnegi219@gmail.com", icon: Mail },
    { label: "Phone", href: "tel:+917983922210", icon: Phone },
  ],
};

export const metrics = [
  { value: "1.5+", label: "Year building Android and iOS applications" },
  { value: "3+", label: "Complete React Native projects" },
    { value: "2+", label: "Contributed to React Native projects" },
];

export const skills = [
  { name: "React Native Apps", value: 96, icon: PanelsTopLeft },
  { name: "JavaScript / TypeScript", value: 92, icon: Sparkles },
  { name: "Redux / Zustand", value: 88, icon: Database },
  { name: "REST API Integration", value: 90, icon: ServerCog },
];

export const highlights = [
  {
    period: "Now",
    title: "Cross-Platform Mobile Apps",
    body: "Building React Native screens, reusable components, navigation flows, and clean app architecture for Android and iOS.",
  },
  {
    period: "Recent",
    title: "Advanced Integrations",
    body: "Working with maps, live location tracking, Firebase Cloud Messaging, permissions, background services, and Socket.IO.",
  },
  {
    period: "Always",
    title: "Performance and UI Craft",
    body: "Optimizing API calls, resolving package conflicts, and turning complex designs into pixel-perfect mobile interfaces.",
  },
];

export const projects = [
  {
    title: "Delilencer",
    type: "Service Booking App",
    description:
      "A hospitality service-booking app that connects users with freelancers such as cooks, helpers, and caretakers through a smooth mobile experience.",
    stack: ["React Native", "REST API", "Maps", "Firebase"],
    learnings: ["Location permissions", "Real-time maps", "Reusable service flows", "Performance-minded lists"],
  },
  {
    title: "Breeziway",
    type: "Fitness App",
    description:
      "A gym and fitness mobile application for plans, schedules, and activity tracking with a clean, user-friendly interface.",
    stack: ["React Native", "Redux", "TypeScript", "API Integration"],
    learnings: ["Complex UI composition", "State management", "Schedule flows", "Form and data handling"],
  },
  {
    title: "Real-Time Mobile Features",
    type: "Advanced App Systems",
    description:
      "Production mobile modules for socket-driven updates, push notifications, background services, live tracking, and third-party SDK integration.",
    stack: ["Socket.IO", "FCM", "Background Services", "Native Permissions"],
    learnings: ["WebSocket lifecycle", "Push notification flows", "Background updates", "Device service permissions"],
  },
];

export const experience = [
  {
    role: "React Native Developer",
    company: "Nexzem Technologies",
    period: "June 2025 - Present",
    icon: Building2,
    points: [
      "Developing ES6-based React Native applications with clean architecture and coding standards.",
      "Integrating RESTful APIs and managing complex app state with Redux.",
      "Building pixel-perfect mobile UI from design requirements.",
      "Managing third-party libraries, SDKs, and real-time features with WebSockets / Socket.IO.",
    ],
  },
  {
    role: "React Native Developer",
    company: "Grandeur.net",
    period: "Jan 2025 - June 2025",
    icon: Calendar,
    points: [
      "Built high-performance cross-platform mobile apps with reusable components and scalable structure.",
      "Integrated REST APIs with backend teams and optimized API calls for smoother app performance.",
      "Worked on CI/CD pipelines, deployments, NPM dependency management, and conflict resolution.",
      "Implemented real-time maps, location tracking, Firebase Cloud Messaging, background services, and device permissions.",
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Computer Applications",
    period: "2022 - 2025",
    school: "Himalayan Institute of Technology, Dehradun",
    icon: GraduationCap,
  },
  {
    degree: "Higher Secondary Education",
    period: "2020 - 2021",
    school: "S.B.S.N.G.I.C. Narendra Nagar",
    icon: GraduationCap,
  },
  {
    degree: "Secondary Education",
    period: "2018 - 2019",
    school: "S.B.S.N.G.I.C. Narendra Nagar",
    icon: GraduationCap,
  },
];

export const tools = [
  "React Native",
  "JavaScript (ES6)",
  "TypeScript",
  "Firebase",
  "Redux",
  "Zustand",
  "Git",
  "Google Cloud Console",
  "Xcode",
  "Android Studio",
  "CLI Tools",
  "UI/UX",
];

export const advancedLearnings = [
  {
    title: "Real-Time Maps",
    body: "Learned how to handle location permissions, live position updates, map rendering, and user tracking flows.",
    icon: Navigation,
  },
  {
    title: "Sockets",
    body: "Worked with WebSockets / Socket.IO for live app updates, connection lifecycle, and real-time communication patterns.",
    icon: Radio,
  },
  {
    title: "Push Notifications",
    body: "Implemented Firebase Cloud Messaging flows for notification permission, token handling, and user engagement.",
    icon: Bell,
  },
  {
    title: "Background Services",
    body: "Built update flows that continue reliably around app lifecycle changes and device service constraints.",
    icon: Cpu,
  },
  {
    title: "Performance",
    body: "Improved app responsiveness by optimizing API calls, dependency conflicts, rendering work, and heavy screens.",
    icon: Zap,
  },
  {
    title: "Cloud and SDKs",
    body: "Integrated third-party SDKs, Firebase services, Google Cloud Console setup, and native build tooling.",
    icon: Cloud,
  },
];

export const contactDetails = [
  { label: "Location", value: profile.location, icon: MapPin },
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "Phone", value: profile.phone, href: "tel:+917983922210", icon: Phone },
  { label: "Mobile Stack", value: "Android, iOS, React Native", icon: Smartphone },
  { label: "Realtime", value: "Socket.IO, FCM, Maps", icon: Wifi },
];

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
