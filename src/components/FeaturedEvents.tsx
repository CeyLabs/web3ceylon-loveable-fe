import React, { useMemo } from "react";
import { motion } from "framer-motion";

type Project = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  color: string; // Tailwind bg/gradient classes
  link: string; // can be external or in-page anchor
};

const FeaturedEvents: React.FC = () => {
  // Use brand-aligned gradients (blue ⇄ orange) used across the site
  const featuredProjects: Project[] = useMemo(
    () => [
      {
        id: "colombo",
        title: "Colombo — Web3 Dev Fest",
        subtitle: "Smart contracts, DeFi protocols, and hands-on workshops",
        image: "/lovable-uploads/34a58283-8b82-48f9-88f4-2c88b069921d.png",
        color: "bg-gradient-to-br from-blue-700 via-blue-600 to-orange-500",
        link: "#cities",
      },
      {
        id: "galle",
        title: "Galle — Creators & Entrepreneurs",
        subtitle: "NFTs, DAOs, and the growing creator economy",
        image: "/lovable-uploads/47f9a1d0-4458-400a-8fc0-79adf093cf18.png",
        color: "bg-gradient-to-br from-orange-500 via-orange-500 to-blue-600",
        link: "#cities",
      },
      {
        id: "ella",
        title: "Ella — Community Retreat",
        subtitle: "Network, unwind, and build with the community",
        image: "/lovable-uploads/af28398b-9e23-4e2b-9de1-bda457e09fd8.png",
        color: "bg-gradient-to-br from-blue-600 via-indigo-600 to-orange-500",
        link: "#register",
      },
    ],
    []
  );

  const currentTime = useMemo(() => {
    try {
      return new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return "";
    }
  }, []);

  const handleNavigation = (link: string) => {
    if (link.startsWith("#")) {
      const id = link.slice(1);
      const el = document.getElementById(id);
      if (el) {
        window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
      } else {
        window.location.hash = link; // fallback
      }
    } else {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section className="pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                delay: index * 0.15,
                duration: 0.7,
                ease: "easeOut",
              }}
              className="group cursor-pointer"
              onClick={() => handleNavigation(project.link)}
            >
              <div className="relative overflow-hidden rounded-3xl aspect-[3/4] mb-6">
                <div
                  className={`absolute inset-0 ${project.color} opacity-80`}
                />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover mix-blend-overlay group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/85 mb-6">{project.subtitle}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-white/70 text-sm">
                      {currentTime} — Est. Aug
                    </span>
                    <div className="bg-black/50 backdrop-blur-sm rounded-full px-4 py-2">
                      <span className="text-white text-sm">© Web3Ceylon</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
