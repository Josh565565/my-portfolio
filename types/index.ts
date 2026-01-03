// types/index.ts

export interface NavItem {
  id: string;
  label: string;
}

export interface ColorTheme {
  id: number;
  value: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string;
  github: string;
  live: string;
  features: string[];
}

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  value: string;
  link?: string;
}

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  isDarkMode: boolean;
  activeColor: string;
}

export interface ThemeSwitcherProps {
  isDarkMode: boolean;
  setIsDarkMode: (isDark: boolean) => void;
  activeColor: string;
  setActiveColor: (color: string) => void;
}

export interface SectionProps {
  isDarkMode: boolean;
  activeColor: string;
}

export interface SkillsProps extends SectionProps {}

export interface ExperienceProps extends SectionProps {}
