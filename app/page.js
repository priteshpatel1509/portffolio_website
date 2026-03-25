// Optimized page.js for a High-End Portfolio
"use client";

export default function Portfolio() {
  const sections = ["home", "about", "projects", "skills", "certificates", "contact"];

  const skills = [
    { name: "HTML", logo: "/html5.jpg" },
    { name: "CSS", logo: "/css.jpg" },
    { name: "JavaScript", logo: "/js.jpg" },
    { name: "Java", logo: "/java.jpeg" },
    { name: "React", logo: "/reactjs1.jpg" },
    { name: "Next.js", logo: "/next2.jpg" },
    { name: "TailwindCSS", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
    { name: "PHP", logo: "/php1.jpg" },
    { name: "MySQL", logo: "/mysql.jpg" },
    { name: "Git", logo: "/git.jpg" },
    { name: "Python", logo: "/python.jpg" },
    { name: "Node.js", logo: "/nodejs.jpg" },
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-slate-200 selection:bg-cyan-500/30">
      {/* Dynamic Background Mesh */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-cyan-500/10 blur-[120px] animate-pulse"></div>
        <div className="absolute top-[40%] -right-[10%] w-[30%] h-[50%] rounded-full bg-purple-500/10 blur-[120px] animate-bounce-slow"></div>
      </div>

      {/* Navbar - Glassmorphism */}
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center font-bold text-black group-hover:rotate-12 transition-transform">
              PP
            </div>
            <span className="text-xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              PRITESH <span className="text-cyan-400">PATEL</span>
            </span>
          </div>
          
          <ul className="hidden md:flex items-center space-x-1">
            {sections.map((item) => (
              <li key={item}>
                <a href={`#${item}`} className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-cyan-400 transition-all rounded-full hover:bg-white/5 capitalize">
                  {item}
                </a>
              </li>
            ))}
            <li className="ml-4">
              <a href="#contact" className="px-5 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-cyan-400 transition-colors">
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center px-6 pt-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-medium tracking-wider uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>Available for projects</span>
            </div>
            <h1 className="text-5xl lg:text-8xl font-black leading-[1.1] tracking-tight">
              Design <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Driven</span> <br />
              Development.
            </h1>
            <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
              I’m a Full-Stack Java Developer specializing in building (and occasionally designing) exceptional digital experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="px-8 py-4 bg-cyan-500 text-black font-bold rounded-xl hover:bg-cyan-400 hover:-translate-y-1 transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                View Projects
              </a>
              <a href="#about" className="px-8 py-4 border border-white/10 font-bold rounded-xl hover:bg-white/5 transition-all">
                About Me
              </a>
            </div>
          </div>
          
          <div className="relative flex justify-center lg:justify-end animate-in fade-in zoom-in duration-1000 delay-300">
             <div className="relative w-72 h-72 lg:w-96 lg:h-96 group">
                {/* Decorative Rings */}
                <div className="absolute inset-0 border-2 border-cyan-500/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
                <div className="absolute inset-4 border border-purple-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                
                <div className="relative h-full w-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl group-hover:border-cyan-500/50 transition-colors">
                   <img src="/m3.png" alt="Profile" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Projects Grid - Bento Box Style */}
      <section id="projects" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center lg:text-left">
            <h2 className="text-sm font-bold tracking-widest text-cyan-500 uppercase mb-4">Portfolio</h2>
            <h3 className="text-4xl lg:text-5xl font-bold">Featured Creations</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all">
                <div className="aspect-video bg-gray-800 overflow-hidden">
                   <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 group-hover:scale-110 transition-transform duration-500"></div>
                </div>
                <div className="p-8">
                  <div className="flex gap-2 mb-4">
                    <span className="text-[10px] px-2 py-1 rounded bg-cyan-500/10 text-cyan-400 font-bold uppercase">React</span>
                    <span className="text-[10px] px-2 py-1 rounded bg-purple-500/10 text-purple-400 font-bold uppercase">Java</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">Project Title {i}</h4>
                  <p className="text-gray-400 text-sm mb-6">A brief description of the technical challenges solved in this specific project.</p>
                  <a href="#" className="text-sm font-bold flex items-center text-white group-hover:gap-2 transition-all">
                    View Case Study <span className="opacity-0 group-hover:opacity-100">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-5xl mx-auto rounded-[3rem] bg-gradient-to-br from-cyan-600 to-blue-700 p-12 lg:p-24 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-8">Ready to start a <br/> conversation?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <a href="mailto:pritesh@example.com" className="px-10 py-5 bg-white text-black font-black rounded-2xl hover:scale-105 transition-transform">
                Email Me Directly
             </a>
             <a href="#" className="px-10 py-5 bg-black/20 text-white font-black rounded-2xl backdrop-blur-md hover:bg-black/30 transition-all">
                LinkedIn Profile
             </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center text-gray-500 text-sm">
        <p>© 2026 Pritesh Patel. Built with Next.js & Passion.</p>
      </footer>

      {/* Required Animations for Tailwind (Add to global.css) */}
      <style jsx global>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-30px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 6s ease-in-out infinite;
        }
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
}
