"use client";

import { useState } from "react";
import { FaLocationArrow, FaLinkedinIn, FaMediumM } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const iconMap: Record<string, React.ReactNode> = {
  LinkedIn: <FaLinkedinIn size={18} />,
  Gmail: <MdEmail size={18} />,
  Medium: <FaMediumM size={18} />,
};

const Footer: React.FC = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", purpose: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img src="/footer-grid.svg" alt="grid" className="w-full h-full opacity-50" />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[50vw] text-center">
          Ready to transform <span className="text-purple">your organization's</span> innovation strategy?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Let's explore how design thinking can unlock breakthrough innovation. Available for speaking engagements, consulting, and collaboration.
        </p>

        {/* Social icons */}
        <div className="flex items-center gap-4 mb-10">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              title={info.name}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 text-purple-400 hover:text-white hover:border-purple-500 transition-all"
            >
              {iconMap[info.name]}
            </a>
          ))}
        </div>

        {/* Book a Consultation form */}
        <div className="w-full max-w-xl bg-slate-900/70 border border-slate-700 rounded-2xl p-8 backdrop-blur-md">
          <h2 className="text-xl font-semibold text-white mb-1">Book a Consultation</h2>
          <p className="text-slate-400 text-sm mb-6">Fill in your details and I'll get back to you within 48 hours.</p>

          {submitted ? (
            <div className="text-center py-8">
              <p className="text-purple-400 text-lg font-medium">Thank you! 🎉</p>
              <p className="text-slate-400 text-sm mt-2">Your request has been received. Dr. Chen will be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-slate-400 text-xs mb-1 uppercase tracking-wider">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jane Smith"
                  className="w-full bg-slate-800/60 border border-slate-700 rounded-lg px-4 py-2.5 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-slate-400 text-xs mb-1 uppercase tracking-wider">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="w-full bg-slate-800/60 border border-slate-700 rounded-lg px-4 py-2.5 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-slate-400 text-xs mb-1 uppercase tracking-wider">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jane@company.com"
                  className="w-full bg-slate-800/60 border border-slate-700 rounded-lg px-4 py-2.5 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-slate-400 text-xs mb-1 uppercase tracking-wider">Purpose of Consultation</label>
                <input
                  type="text"
                  name="purpose"
                  required
                  value={form.purpose}
                  onChange={handleChange}
                  placeholder="e.g. Design thinking workshop for our leadership team"
                  className="w-full bg-slate-800/60 border border-slate-700 rounded-lg px-4 py-2.5 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 bg-purple-700 hover:bg-purple-600 text-white font-medium py-2.5 rounded-lg transition-colors text-sm"
              >
                Submit Request
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center px-4">
        <p className="md:text-base text-sm md:font-normal font-light text-slate-400">
          © 2024 Dr. Alexandra Chen · Stanford Graduate School of Business
        </p>
      </div>
    </footer>
  );
};

export default Footer;
