'use client';

import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import HomeLab from '@/components/HomeLab';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import GitHubSection from '@/components/GitHubSection';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import Languages from '@/components/Languages';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }
};

export default function Home() {
  return (
    <main className="bg-[#020617]">
      <section id="hero">
        <Hero />
      </section>
      
      <motion.section id="services" {...fadeInUp}>
        <Services />
      </motion.section>
      
      <motion.section id="homelab" {...fadeInUp}>
        <HomeLab />
      </motion.section>
      
      <motion.section id="experience" {...fadeInUp}>
        <Experience />
      </motion.section>
      
      <motion.section id="skills" {...fadeInUp}>
        <Skills />
      </motion.section>
      
      <motion.section id="projects" {...fadeInUp}>
        <Projects />
      </motion.section>
      
      <motion.section id="github" {...fadeInUp}>
        <GitHubSection />
      </motion.section>
      
      <motion.section id="education" {...fadeInUp}>
        <Education />
      </motion.section>
      
      <motion.section id="certifications" {...fadeInUp}>
        <Certifications />
      </motion.section>
      
      <motion.section id="languages" {...fadeInUp}>
        <Languages />
      </motion.section>
      
      <motion.section id="achievements" {...fadeInUp}>
        <Achievements />
      </motion.section>
      
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
