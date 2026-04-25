import React from "react";
import { FaDownload, FaExternalLinkAlt } from "react-icons/fa";
import { MovingBorder } from "./ui/MovingBorders"; // Assuming this is the correct import path

const Resume = () => {
  // Replace with your actual resume PDF path
  const resumeUrl = "/resume.pdf";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openInNewTab = () => {
    window.open(resumeUrl, "_blank");
  };

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
          <div className="relative bg-slate-900/[0.8] border border-slate-800 backdrop-blur-xl rounded-2xl p-4">
            {/* Buttons Container */}
            <div className="flex justify-end gap-4 mb-4">
              <button
                onClick={handleDownload}
                className="relative p-[1px] overflow-hidden rounded-lg group"
              >
                <div className="absolute inset-0">
                  <MovingBorder duration={2000} rx="30%" ry="30%">
                    <div className="h-20 w-20 opacity-[0.8] bg-[radial-gradient(#CBACF9_40%,transparent_60%)]" />
                  </MovingBorder>
                </div>
                <div className="relative bg-slate-900/[0.8] border border-slate-800 backdrop-blur-xl px-4 py-2 rounded-lg flex items-center gap-2 group-hover:bg-slate-900/[0.9] transition-all">
                  <FaDownload className="text-sm text-purple" />
                  <span className="text-sm font-medium text-purple">
                    Download
                  </span>
                </div>
              </button>

              <button
                onClick={openInNewTab}
                className="relative p-[1px] overflow-hidden rounded-lg group"
              >
                <div className="absolute inset-0">
                  <MovingBorder duration={2000} rx="30%" ry="30%">
                    <div className="h-20 w-20 opacity-[0.8] bg-[radial-gradient(#CBACF9_40%,transparent_60%)]" />
                  </MovingBorder>
                </div>
                <div className="relative bg-slate-900/[0.8] border border-slate-800 backdrop-blur-xl px-4 py-2 rounded-lg flex items-center gap-2 group-hover:bg-slate-900/[0.9] transition-all">
                  <FaExternalLinkAlt className="text-sm text-purple" />
                  <span className="text-sm font-medium text-purple">
                    Open in New Tab
                  </span>
                </div>
              </button>
            </div>

            {/* PDF Viewer */}
            <div className="w-full h-[800px] rounded-xl overflow-hidden bg-black/20">
              <iframe
                src={`${resumeUrl}#view=FitH`}
                className="w-full h-full"
                title="Resume PDF"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
