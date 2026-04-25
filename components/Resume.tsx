import React from "react";
import { MovingBorder } from "./ui/MovingBorders";

const Resume = () => {
  return (
    <div className="py-20" id="resume">
      <h1 className="heading">
        Take a look at my <span className="text-purple">resume</span>
      </h1>

      <div className="mt-10 flex flex-col items-center px-4">
        <div className="w-full max-w-4xl p-[1px] relative rounded-2xl overflow-hidden">
          {/* Moving Border Background */}
          <div className="absolute inset-0">
            <MovingBorder duration={2000} rx="30%" ry="30%">
              <div className="h-20 w-20 opacity-[0.8] bg-[radial-gradient(#CBACF9_40%,transparent_60%)]" />
            </MovingBorder>
          </div>

          {/* Content Container */}
          <div className="relative bg-slate-900/[0.8] border border-slate-800 backdrop-blur-xl rounded-2xl p-8 text-white font-sans">

            {/* Header */}
            <div className="border-b border-purple-500/40 pb-6 mb-6">
              <h2 className="text-3xl font-bold text-white">Dr. Alexandra Chen</h2>
              <p className="text-purple-400 text-lg mt-1">Director, Design Thinking Lab · Stanford GSB</p>
              <div className="flex flex-wrap gap-4 mt-3 text-sm text-slate-400">
                <span>alexandra.chen@stanford.edu</span>
                <span>·</span>
                <span>Stanford, CA</span>
                <span>·</span>
                <span>linkedin.com/in/dralexandrachen</span>
              </div>
            </div>

            {/* Summary */}
            <Section title="Summary">
              <p className="text-slate-300 leading-relaxed">
                Visionary design strategist and educator with 15+ years of experience embedding human-centered design
                principles into organizations across sectors. Director of the Design Thinking Lab at Stanford GSB,
                mentor to 200+ entrepreneurs, and trusted advisor to Fortune 500 companies. Passionate about
                transforming how teams innovate by making empathy and iteration core to organizational DNA.
              </p>
            </Section>

            {/* Experience */}
            <Section title="Experience">
              <Job
                title="Director, Design Thinking Lab"
                org="Stanford Graduate School of Business"
                period="2016 – Present"
                location="Stanford, CA"
                bullets={[
                  "Lead a 12-person interdisciplinary lab focused on human-centered innovation research and education.",
                  "Designed and delivered design thinking curriculum adopted by 40+ MBA cohorts annually.",
                  "Mentored 200+ entrepreneurs through the Stanford Venture Studio accelerator program.",
                  "Partnered with Fortune 500 clients (Google, IDEO, McKinsey) to embed design-led culture change.",
                  "Published 18 peer-reviewed papers on organizational innovation and design methodology.",
                ]}
              />
              <Job
                title="Senior Innovation Consultant"
                org="IDEO"
                period="2011 – 2016"
                location="San Francisco, CA"
                bullets={[
                  "Led cross-functional teams on human-centered redesign projects for healthcare, fintech, and education clients.",
                  "Facilitated 100+ design sprints and workshops for C-suite executives globally.",
                  "Developed IDEO's internal design thinking certification program, training 300+ consultants.",
                ]}
              />
              <Job
                title="UX Research Lead"
                org="Apple Inc."
                period="2008 – 2011"
                location="Cupertino, CA"
                bullets={[
                  "Directed user research for iOS accessibility features reaching 500M+ users.",
                  "Collaborated with product and engineering teams to translate insights into shipped features.",
                ]}
              />
            </Section>

            {/* Education */}
            <Section title="Education">
              <div className="space-y-3">
                <EduItem degree="Ph.D., Organizational Behavior & Design" school="Stanford University" year="2008" />
                <EduItem degree="M.S., Human-Computer Interaction" school="Carnegie Mellon University" year="2004" />
                <EduItem degree="B.S., Cognitive Science (Honors)" school="UC Berkeley" year="2002" />
              </div>
            </Section>

            {/* Skills */}
            <Section title="Core Competencies">
              <div className="flex flex-wrap gap-2">
                {[
                  "Design Thinking", "Human-Centered Design", "Innovation Strategy",
                  "Organizational Change", "UX Research", "Design Sprints",
                  "Executive Coaching", "Curriculum Design", "Qualitative Research",
                  "Prototyping & Testing", "Systems Thinking", "Stakeholder Facilitation",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-xs bg-purple-900/40 border border-purple-500/30 text-purple-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Section>

            {/* Publications */}
            <Section title="Selected Publications">
              <ul className="space-y-2 text-slate-300 text-sm list-disc list-inside">
                <li>"Empathy at Scale: Design Thinking in Large Organizations" — <em>Harvard Business Review</em>, 2023</li>
                <li>"From Insight to Impact: A Framework for Human-Centered Innovation" — <em>MIT Sloan Management Review</em>, 2021</li>
                <li>"Designing for Behavior Change in Complex Systems" — <em>Journal of Design Research</em>, 2019</li>
                <li>"The Empathic Organization" — Stanford University Press, 2018 (Book)</li>
              </ul>
            </Section>

            {/* Awards */}
            <Section title="Awards & Recognition">
              <ul className="space-y-2 text-slate-300 text-sm list-disc list-inside">
                <li>Fast Company "Most Creative People in Business" — 2024</li>
                <li>Stanford GSB Excellence in Teaching Award — 2022, 2020</li>
                <li>IDEO Design Excellence Award — 2015</li>
                <li>Forbes "30 Under 30" in Education — 2012</li>
              </ul>
            </Section>

          </div>
        </div>
      </div>
    </div>
  );
};

/* ── helpers ── */

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-7">
    <h3 className="text-purple-400 uppercase tracking-widest text-xs font-semibold mb-3">{title}</h3>
    {children}
  </div>
);

const Job = ({
  title, org, period, location, bullets,
}: {
  title: string; org: string; period: string; location: string; bullets: string[];
}) => (
  <div className="mb-5">
    <div className="flex flex-wrap justify-between items-baseline gap-1">
      <span className="font-semibold text-white">{title}</span>
      <span className="text-slate-400 text-sm">{period}</span>
    </div>
    <div className="flex flex-wrap justify-between items-baseline gap-1 mb-2">
      <span className="text-purple-300 text-sm">{org}</span>
      <span className="text-slate-500 text-xs">{location}</span>
    </div>
    <ul className="space-y-1 text-slate-300 text-sm list-disc list-inside">
      {bullets.map((b, i) => <li key={i}>{b}</li>)}
    </ul>
  </div>
);

const EduItem = ({ degree, school, year }: { degree: string; school: string; year: string }) => (
  <div className="flex flex-wrap justify-between items-baseline gap-1">
    <div>
      <span className="font-semibold text-white text-sm">{degree}</span>
      <span className="text-purple-300 text-sm"> · {school}</span>
    </div>
    <span className="text-slate-400 text-sm">{year}</span>
  </div>
);

export default Resume;
