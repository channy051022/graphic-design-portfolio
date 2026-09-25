"use client";

import { Printer } from "lucide-react";
import { resumeData } from "@/data/resume";

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 py-24 px-4 sm:px-6 lg:px-8 print:py-0 print:px-0">
      <div className="max-w-4xl mx-auto">
        {/* Action Bar (Hidden on Print) */}
        <div className="mb-6 flex justify-end print:hidden">
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 bg-foreground text-background px-6 py-2 rounded-full font-medium text-sm hover:opacity-80 transition-opacity shadow-sm"
          >
            <Printer size={16} />
            <span>Download / Print PDF</span>
          </button>
        </div>

        {/* Resume Document */}
        <div className="bg-white text-black p-10 sm:p-16 shadow-xl print:shadow-none print:p-0">
          
          {/* Header */}
          <header className="border-b-2 border-black pb-8 mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight uppercase mb-2">
              {resumeData.name}
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 font-light tracking-widest uppercase mb-6">
              {resumeData.title}
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm sm:text-base text-gray-700">
              <span className="flex items-center gap-1">
                <span className="font-semibold">Phone:</span> {resumeData.contact.phone}
              </span>
              <span className="flex items-center gap-1">
                <span className="font-semibold">Email:</span> {resumeData.contact.email}
              </span>
              <span className="flex items-center gap-1">
                <span className="font-semibold">Portfolio:</span> {resumeData.contact.portfolio}
              </span>
            </div>
          </header>

          {/* About Me */}
          <section className="mb-8">
            <h2 className="text-xl font-bold uppercase tracking-wider border-b border-gray-300 pb-2 mb-4">
              About Me
            </h2>
            <p className="text-gray-800 leading-relaxed text-sm sm:text-base">
              {resumeData.about}
            </p>
          </section>

          {/* Experience */}
          <section className="mb-8">
            <h2 className="text-xl font-bold uppercase tracking-wider border-b border-gray-300 pb-2 mb-4">
              Experience
            </h2>
            <div className="space-y-6">
              {resumeData.experience.map((job, idx) => (
                <div key={idx}>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                    <h3 className="text-lg font-bold">{job.title}</h3>
                    <span className="text-gray-600 font-medium">{job.duration}</span>
                  </div>
                  <p className="text-gray-700 italic mb-2">{job.company}</p>
                  <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                    {job.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mb-8">
            <h2 className="text-xl font-bold uppercase tracking-wider border-b border-gray-300 pb-2 mb-4">
              Education
            </h2>
            <div>
              {resumeData.education.map((edu, idx) => (
                <div key={idx} className="mb-4 last:mb-0">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                    <h3 className="text-lg font-bold">{edu.degree}</h3>
                    <span className="text-gray-600 font-medium">{edu.duration}</span>
                  </div>
                  <p className="text-gray-700">{edu.school}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Skills & Tools */}
          <section className="mb-8 space-y-6">
            <div>
              <h2 className="text-xl font-bold uppercase tracking-wider border-b border-gray-300 pb-2 mb-4">
                Skills
              </h2>
              <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                {resumeData.skills.join(", ")}.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold uppercase tracking-wider border-b border-gray-300 pb-2 mb-4">
                Tools
              </h2>
              <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                {resumeData.tools.join(", ")}.
              </p>
            </div>
          </section>

          {/* References */}
          <section>
            <h2 className="text-xl font-bold uppercase tracking-wider border-b border-gray-300 pb-2 mb-4">
              References
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {resumeData.references.map((ref, idx) => (
                <div key={idx}>
                  <h3 className="font-bold text-lg">{ref.name}</h3>
                  <p className="text-gray-700">{ref.title}</p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Phone:</span> {ref.phone}
                  </p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
