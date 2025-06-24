"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import AboutSection from "../component/AboutSection";
import AnimateSvg from "../component/AnimateSvg";

// Types
interface Project {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  description: string;
  websiteUrl?: string;
  sourceCodeUrl?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  isHovered: boolean;
  isExpanded: boolean;
  opacity: number;
  onHover: (index: number) => void;
  onExpand: (index: number) => void;
  onClose: () => void;
}

// Throttle utility function
function throttle<T extends unknown[]>(func: (...args: T) => void, delay: number): (...args: T) => void {
  let timeoutId: ReturnType<typeof setTimeout>;
  let lastExecTime = 0;
  return function (...args: T): void {
    const currentTime = Date.now();
    if (currentTime - lastExecTime > delay) {
      func(...args);
      lastExecTime = currentTime;
    } else {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
        lastExecTime = Date.now();
      }, delay - (currentTime - lastExecTime));
    }
  };
}

const projects: Project[] = [
  { 
    src: "/image1.png", 
    alt: "Project 1", 
    title: "Kombo", 
    subtitle: "Desk organizer", 
    description: "Kombo is a desk organizer inspired by the union and combination of man and nature, made entirely of recycled plastic and designed to ensure free configuration by the user for their own work environment. The concept draws its inspiration from terraces and typical Chinese rice fields, characteristic elements of some beautiful landscapes in the 'Yuanyang' and 'Yunhe' regions.",
    websiteUrl: "https://kombo-project.com",
    sourceCodeUrl: "https://github.com/chazpawar/kombo"
  },
  { 
    src: "/image2.png", 
    alt: "Project 2", 
    title: "EcoLight", 
    subtitle: "Sustainable lighting", 
    description: "A sustainable lighting solution that combines modern aesthetics with environmental consciousness. Features modular design and energy-efficient LED technology.",
    websiteUrl: "https://ecolight-demo.com",
    sourceCodeUrl: "https://github.com/chazpawar/ecolight"
  },
  { 
    src: "/image2.png", 
    alt: "Project 3", 
    title: "FlowChair", 
    subtitle: "Ergonomic seating", 
    description: "An ergonomic office chair designed for maximum comfort and productivity. Features adjustable lumbar support and breathable mesh material.",
    websiteUrl: "https://flowchair-demo.com",
    sourceCodeUrl: "https://github.com/chazpawar/flowchair"
  },
  { 
    src: "/image2.png", 
    alt: "Project 4", 
    title: "UrbanShelter", 
    subtitle: "Public space design", 
    description: "A modular public seating system that adapts to various urban environments. Designed for durability and community interaction.",
    websiteUrl: "https://urbanshelter-demo.com",
    sourceCodeUrl: "https://github.com/chazpawar/urbanshelter"
  },
  { 
    src: "/image2.png", 
    alt: "Project 5", 
    title: "MinimalKitchen", 
    subtitle: "Kitchen appliances", 
    description: "A collection of minimalist kitchen appliances that blend seamlessly into modern home environments while maintaining full functionality.",
    websiteUrl: "https://minimalkitchen-demo.com",
    sourceCodeUrl: "https://github.com/chazpawar/minimalkitchen"
  },
];

// Project Card Component
const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  isHovered,
  isExpanded,
  opacity,
  onHover,
  onExpand,
  onClose,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (isExpanded) {
        onClose();
      } else {
        onExpand(index);
      }
    }
  };

    return (

        <div
          style={{
        margin: index % 2 === 0 ? "4rem 0 4rem 4vw" : "4rem 4vw 4rem 0",
            display: "flex",
        justifyContent: index % 2 === 0 ? "flex-start" : "flex-end",
            alignItems: "center",
        minHeight: isExpanded ? "80vh" : "50vh",
        opacity,
        transition: "opacity 0.2s, min-height 0.4s cubic-bezier(.4,0,.2,1)",
        position: "relative",
        zIndex: isExpanded ? 10 : 1,
      }}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(-1)}
      role="button"
      tabIndex={0}
      aria-label={`${project.title} - ${project.subtitle}. Click to ${isExpanded ? 'close' : 'expand'} project details.`}
      onKeyDown={handleKeyDown}
    >
      <div
          style={{
            position: "absolute",
            left: 40,
            bottom: 40,
            fontSize: "clamp(4rem, 8vw, 8rem)",
            fontWeight: 700,
            color: "#000",
            opacity: 0.08,
            zIndex: 0,
            lineHeight: 1,
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          
      </div>
              <div
                style={{
                  position: "relative",
                  width: isExpanded ? 700 : isHovered ? 520 : 400,
                  height: isExpanded ? 500 : isHovered ? 370 : 400,
                  transition: "all 0.4s cubic-bezier(.4,0,.2,1)",
                  boxShadow: "0 4px 32px rgba(0,0,0,0.08)",
                  borderRadius: "16px",
                  background: "#fff",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: isExpanded ? "default" : "pointer",
                }}
        onClick={() => {
          if (isExpanded) {
            onClose();
          } else {
            onExpand(index);
          }
        }}
        role="img"
        aria-label={project.alt}
              >
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill={false}
                  width={isExpanded ? 700 : isHovered ? 520 : 400}
                  height={isExpanded ? 500 : isHovered ? 370 : 400}
                  style={{
                    objectFit: "cover",
                    borderRadius: "16px",
                    filter: isHovered || isExpanded ? "brightness(0.7)" : "none",
                    transition: "all 0.4s cubic-bezier(.4,0,.2,1)",
                  }}
                />
                {(isHovered || isExpanded) && (
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      pointerEvents: "none",
                    }}
                  >
            
            
                    <div style={{ pointerEvents: "auto" }}>
                      <div style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>{project.title}</div>
                      <div style={{ fontSize: 16, marginBottom: 24 }}>{project.subtitle}</div>
                      {!isExpanded && (
                        <button
                          style={{
                            padding: "10px 28px",
                            borderRadius: 24,
                            background: "#fff",
                            color: "#222",
                            fontWeight: 600,
                            fontSize: 18,
                            border: "none",
                            cursor: "pointer",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                            transition: "background 0.2s, color 0.2s",
                          }}
                  onClick={(e) => {
                            e.stopPropagation();
                    onExpand(index);
                          }}
                  aria-label={`Explore ${project.title} project details`}
                        >
                          Explore
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
              {isExpanded && (
                <div
                  style={{
                    marginLeft: index % 2 === 0 ? 40 : 0,
                    marginRight: index % 2 !== 0 ? 40 : 0,
                    maxWidth: 500,
                    background: "#fff",
                    borderRadius: 16,
                    boxShadow: "0 4px 32px rgba(0,0,0,0.08)",
                    padding: 32,
                    marginTop: 24,
                    marginBottom: 24,
                    zIndex: 11,
                    position: "relative",
                    transition: "all 0.4s cubic-bezier(.4,0,.2,1)",
                  }}
                  role="dialog"
                  aria-label={`${project.title} project details`}
                >
                  <div style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>{project.title}</div>
                  <div style={{ fontSize: 16, marginBottom: 16 }}>{project.subtitle}</div>
                  <div style={{ fontSize: 16, color: "#444", marginBottom: 24 }}>{project.description}</div>
                  
                  {/* Action Buttons */}
                  <div
                    style={{
                      display: "flex",
                      gap: "12px",
                      marginBottom: 24,
                    }}
                  >
                    {project.websiteUrl && (
                      <a
                        href={project.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          padding: "12px 20px",
                          borderRadius: 8,
                          background: "#171717",
                          color: "#fff",
                          fontWeight: 600,
                          fontSize: 14,
                          textDecoration: "none",
                          border: "none",
                          cursor: "pointer",
                          transition: "background 0.2s ease",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "#333";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "#171717";
                        }}
                        aria-label={`Visit ${project.title} website`}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                          <polyline points="15,3 21,3 21,9"/>
                          <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                        Visit Website
                      </a>
                    )}
                    
                    {project.sourceCodeUrl && (
                      <a
                        href={project.sourceCodeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          padding: "12px 20px",
                          borderRadius: 8,
                          background: "#f8f8f8",
                          color: "#171717",
                          fontWeight: 600,
                          fontSize: 14,
                          textDecoration: "none",
                          border: "2px solid #e5e5e5",
                          cursor: "pointer",
                          transition: "all 0.2s ease",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "#f0f0f0";
                          e.currentTarget.style.borderColor = "#d0d0d0";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "#f8f8f8";
                          e.currentTarget.style.borderColor = "#e5e5e5";
                        }}
                        aria-label={`View ${project.title} source code on GitHub`}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                        </svg>
                        View Source Code
                      </a>
                    )}
                  </div>
                  
                  <button
                    style={{
                      padding: "8px 20px",
                      borderRadius: 20,
                      background: "#eee",
                      color: "#222",
                      fontWeight: 600,
                      fontSize: 16,
                      border: "none",
                      cursor: "pointer",
                    }}
                    onClick={onClose}
                    aria-label="Close project details"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          );
};

// Hero Section Component
const HeroSection: React.FC<{ opacity: number }> = ({ opacity }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      height: "100vh",
      opacity,
      transition: "opacity 0.2s",
      position: "fixed",
      left: 0,
      top: 0,
      width: "100vw",
      pointerEvents: opacity === 0 ? "none" : "auto",
    }}
    role="banner"
    aria-label="Portfolio hero section"
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "2rem",
        marginLeft: "2rem",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          background: "rgba(255,255,255,0.8)",
          color: "#171717",
          fontSize: 13,
          padding: "2px 10px",
          borderRadius: 6,
          fontWeight: 500,
          zIndex: 2,
        }}
      >
        Software Engineer
      </div>
      <Image
        src="/headingimage.png"
        alt="Chaitanya Pawar"
        width={120}
        height={120}
        style={{
          objectFit: "cover",
          border: "3px solid #171717",
        }}
      />
      <h1
        style={{
          fontSize: "6vw",
          fontWeight: "bold",
          color: "#171717",
          lineHeight: 1,
        }}
      >
        Chaitanya<br />Pawar
      </h1>
    </div>
    
    {/* Animated Arrow with Explore Text */}
    <div
      style={{
        position: "absolute",
        bottom: "2rem",
        left: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.5rem",
      }}
    >
      <div
        style={{
          fontSize: "1rem",
          fontWeight: "600",
          color: "#171717",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
        }}
      >
        explore
      </div>
      <div
        style={{
          transform: "rotate(90deg)",
          width: "60px",
          height: "60px",
        }}
      >
        <AnimateSvg
          width="100%"
          height="100%"
          viewBox="0 0 127 101"
          className="my-svg-animation"
          path="M3 94.6748C27.4641 99.4874 46.3246 102.55 65.0444 83.8304C73.9796 74.8953 76.1503 62.8261 69.8444 51.4748C58.3692 30.8185 36.6188 61.9308 52.6 71.9193C81.897 90.2303 107.995 53.7887 112.155 28.3637C113.368 20.9544 114.609 12.5035 115 5.07481C115.339 -1.36878 117.032 6.28246 117.844 8.63037C119.35 12.9801 121.884 16.4674 123.356 20.7192C125.931 28.1593 122.746 21.3428 121.755 17.8748C118.913 7.92667 118.724 -1.31665 108.6 8.27481C106.563 10.205 95.3631 19.2352 97.3999 19.4748C103.175 20.1542 109.598 23.9571 115 24.2748C122.394 24.7098 126.464 27.2512 116.6 22.3192C113.382 20.71 110.214 19.6588 107 18.2304C101.703 15.8763 109.23 17.7389 109.844 18.2304C111.629 19.6579 116.523 20.3297 111.8 18.2304C110.584 17.6899 105.386 16.2748 107 16.2748C112.097 16.2748 118.803 21.3653 116.956 17.8748C115.403 14.9415 113.389 14.4872 110.2 14.6748C109.114 14.7386 105.166 17.8748 107 17.8748"
          strokeColor="#000000"
          strokeWidth={3}
          strokeLinecap="round"
          animationDuration={1.5}
          animationDelay={0}
          animationBounce={0.3}
          reverseAnimation={false}
          enableHoverAnimation={true}
          hoverAnimationType="redraw"
          hoverStrokeColor="#4f46e5"
        />
      </div>
    </div>
  </div>
);

// Static Project Display Component
const StaticProjectDisplay: React.FC = () => (
  <div style={{ position: "relative", zIndex: 1 }}>
    {projects.map((project, i) => (
      <div
        key={i}
        style={{
          margin: i % 2 === 0 ? "4rem 0 4rem 4vw" : "4rem 4vw 4rem 0",
          display: "flex",
          justifyContent: i % 2 === 0 ? "flex-start" : "flex-end",
          alignItems: "center",
          minHeight: "50vh",
        }}
      >
        <Image
          src={project.src}
          alt={project.alt}
          width={400}
          height={400}
          style={{
            objectFit: "contain",
            boxShadow: "0 4px 32px rgba(0,0,0,0.08)",
            borderRadius: "16px",
            background: "#fff",
            transition: "all 0.4s cubic-bezier(.4,0,.2,1)",
          }}
        />
      </div>
    ))}
  </div>
);

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [nameOpacity, setNameOpacity] = useState(1);
  const [projectOpacities, setProjectOpacities] = useState(Array(projects.length).fill(1));
  const [hovered, setHovered] = useState(-1);
  const [expanded, setExpanded] = useState(-1);
  
  // Properly typed refs array
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Store the throttled handler in a ref so its identity is stable
  const handleScrollRef = useRef<() => void | undefined>(undefined);
  if (!handleScrollRef.current) {
    handleScrollRef.current = throttle(() => {
      const scrollY = window.scrollY;
      const fade = Math.max(0, 1 - scrollY / 200);
      setNameOpacity(fade);
      const newOpacities = projectRefs.current.map((ref) => {
        if (!ref) return 1;
        const rect = ref.getBoundingClientRect();
        const fadeStart = 200;
        const fadeEnd = -200;
        if (rect.top < fadeStart) {
          const opacity = Math.max(0, Math.min(1, (rect.top - fadeEnd) / (fadeStart - fadeEnd)));
          return opacity;
        }
        return 1;
      });
      setProjectOpacities(newOpacities);
    }, 16);
  }

  useEffect(() => {
    setMounted(true);
    const handler = handleScrollRef.current!;
    window.addEventListener("scroll", handler);
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Memoized event handlers
  const handleHover = useCallback((index: number) => {
    setHovered(index);
  }, []);

  const handleExpand = useCallback((index: number) => {
    setExpanded(index);
  }, []);

  const handleClose = useCallback(() => {
    setExpanded(-1);
  }, []);

  if (!mounted) {
    return (
      <div>
        <HeroSection opacity={1} />
        <div style={{ height: "100vh" }} />
        <StaticProjectDisplay />
        <AboutSection />
      </div>
    );
  }

  return (
    <div>
      <HeroSection opacity={nameOpacity} />
      <div style={{ height: "100vh" }} />
      <div style={{ position: "relative", zIndex: 1 }}>
        {projects.map((project, i) => (
          <div
            key={i}
            ref={el => { projectRefs.current[i] = el; }}
          >
            <ProjectCard
              project={project}
              index={i}
              isHovered={hovered === i}
              isExpanded={expanded === i}
              opacity={projectOpacities[i]}
              onHover={handleHover}
              onExpand={handleExpand}
              onClose={handleClose}
            />
          </div>
        ))}
      </div>
      <AboutSection />
    </div>
  );
}
