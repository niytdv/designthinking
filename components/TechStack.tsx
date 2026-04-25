import React from "react";
import { motion } from "framer-motion";

const TechStack = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="pb-20 px-4" id="tech-stack">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-16">
          <span className="text-4xl">🎯</span>
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Areas of Expertise & Research
          </h2>
        </div>

        <motion.div
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Core Research Areas */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-semibold text-purple-500 mb-6 text-center">
              🔬 Core Research Areas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Design Thinking Methodology",
                "Organizational Innovation",
                "Human-Centered Design",
                "Innovation Ecosystems",
                "Entrepreneurship & Startups",
                "Change Management",
              ].map((area, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/30 hover:border-purple-500/60 transition-all"
                >
                  <p className="text-white text-center font-medium">{area}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Methodologies & Frameworks */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-semibold text-purple-500 mb-6 text-center">
              📊 Methodologies & Frameworks
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Qualitative Research Methods",
                "Quantitative Analysis",
                "Ethnographic Studies",
                "Case Study Research",
                "Action Research",
                "Mixed Methods Approach",
              ].map((method, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-blue-500/30 hover:border-blue-500/60 transition-all"
                >
                  <p className="text-white text-center font-medium">{method}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Industry Sectors */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-semibold text-purple-500 mb-6 text-center">
              🌍 Industry Sectors & Applications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Healthcare & Life Sciences",
                "Technology & Software",
                "Financial Services",
                "Education & Learning",
                "Sustainability & Social Impact",
                "Manufacturing & Operations",
              ].map((sector, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg bg-gradient-to-r from-emerald-900/20 to-teal-900/20 border border-emerald-500/30 hover:border-emerald-500/60 transition-all"
                >
                  <p className="text-white text-center font-medium">{sector}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
