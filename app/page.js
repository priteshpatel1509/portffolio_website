// No need for Image import since we're using regular img tags

export default function Portfolio() {
  const typingStyles = `
    /* Enhanced Typing Animation */
    .typing-text {
      overflow: hidden;
      white-space: nowrap;
      width: 0;
      border-right: 0.15em solid #00d4ff; /* Cyan cursor */
      animation: typing 4s steps(30, end) forwards, blink-caret 0.75s step-end infinite;
    }

    @keyframes typing {
      from { width: 0; }
      to { width: 100%; }
    }

    @keyframes blink-caret {
      from, to { border-color: transparent; }
      50% { border-color: #00d4ff; }
    }

    /* Smooth Scroll and Hide Scrollbars */
    html {
      scroll-behavior: smooth;
      scrollbar-width: none; /* Firefox */
    }
    ::-webkit-scrollbar {
      display: none;
    }
    body {
      overflow-x: hidden;
    }

    /* Mobile Menu Enhancements */
    #menu-toggle {
      display: none;
    }
    #menu-toggle:checked ~ .mobile-menu {
      display: block;
      animation: slideDown 0.3s ease-out;
    }
    .mobile-menu {
      display: none;
    }
    @keyframes slideDown {
      from { opacity: 0; transform: translateY(-20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    /* Toggle Icon Styles */
    .open-icon { display: inline; }
    .close-icon { display: none; }
    #menu-toggle:checked ~ label .open-icon { display: none; }
    #menu-toggle:checked ~ label .close-icon { display: inline; }

    /* Custom Utilities */
    .w-47 { width: 11.75rem; }
    .h-47 { height: 11.75rem; }
    .w-55 { width: 13.75rem; }
    .h-55 { height: 13.75rem; }

    /* Glow and Hover Effects */
    .glow-effect {
      box-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
      transition: box-shadow 0.3s ease;
    }
    .glow-effect:hover {
      box-shadow: 0 0 40px rgba(0, 212, 255, 0.8);
    }

    /* Fade-in Animation with Delays */
    .fade-in {
      opacity: 0;
      transform: translateY(20px);
      animation: fadeInUp 0.8s ease forwards;
    }
    .fade-in.delay-1 { animation-delay: 0.2s; }
    .fade-in.delay-2 { animation-delay: 0.4s; }
    .fade-in.delay-3 { animation-delay: 0.6s; }
    .fade-in.delay-4 { animation-delay: 0.8s; }
    .fade-in.delay-5 { animation-delay: 1s; }

    @keyframes fadeInUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Pulse and Bounce Enhancements */
    .animate-pulse-custom {
      animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }
    .animate-bounce-custom {
      animation: bounce 1s infinite;
    }
  `;

  const sections = ["home", "about", "projects", "skills", "certificates", "contact"];

  const skills = [
    { name: "HTML", logo: "/html5.jpg" },
    { name: "CSS", logo: "/css.jpg" },
    { name: "JavaScript", logo: "/js.jpg" },
    { name: "React", logo: "/reactjs1.jpg" },
    { name: "Next.js", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" },
    { name: "TailwindCSS", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
    { name: "PHP", logo: "/php1.jpg" },
    { name: "MySQL", logo: "/mysql.jpg" },
    { name: "Git", logo: "/git.jpg" },
    { name: "Python", logo: "/python.jpg" },
    { name: "Node.js", logo: "/nodejs.jpg" },
    { name: "UI/UX Design", logo: "https://cdn-icons-png.flaticon.com/512/1006/1006547.png" },
  ];

  return (
    <div className="min-h-screen font-sans text-white bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-lg border-b border-cyan-600 shadow-lg" role="navigation" aria-label="Main navigation">
        <input type="checkbox" id="menu-toggle" className="hidden" />
        <label htmlFor="menu-toggle" className="md:hidden text-cyan-400 text-2xl cursor-pointer p-3 hover:text-cyan-300 transition-colors" aria-label="Toggle menu">
          <span className="open-icon">☰</span>
          <span className="close-icon">✕</span>
        </label>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 lg:px-8 py-4">
          <div className="flex items-center space-x-3">
            <img src="/mylogo.jpg" alt="Pritesh Patel Logo" className="w-10 h-10 object-contain" />
            <h1 className="text-xl lg:text-2xl font-bold text-cyan-400 tracking-wide">Pritesh Patel</h1>
          </div>
          <ul className="hidden md:flex space-x-8">
            {sections.map((item) => (
              <li key={item}>
                <a href={`#${item}`} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 capitalize font-medium">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mobile-menu md:hidden bg-black/95 backdrop-blur-lg border-t border-cyan-600">
          <ul className="flex flex-col space-y-4 px-4 py-4">
            {sections.map((item) => (
              <li key={item}>
                <label htmlFor="menu-toggle">
                  <a href={`#${item}`} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 capitalize block font-medium">
                    {item}
                  </a>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <style dangerouslySetInnerHTML={{ __html: typingStyles }} />
      <section id="home" className="min-h-screen px-4 lg:px-8 pt-20 bg-gradient-to-b from-black via-blue-950 to-black flex items-center fade-in">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left lg:text-left">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              <span className="text-5xl">Hi, I'm Pritesh Patel</span>
            </h1>
            <p className="text-gray-300 text-xl sm:text-2xl mb-8 leading-relaxed">Full-Stack Java Developer & UI/UX Enthusiast</p>
            <a href="#projects" className="inline-block px-10 py-4 border-2 border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300 text-lg font-semibold glow-effect">
              Explore My Work
            </a>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src="/m3.png"
                alt="Pritesh Patel Profile"
                className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 shadow-2xl hover:scale-105 transition-all duration-500 ease-in-out animate-pulse-custom glow-effect"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-pink-500/20 blur-2xl opacity-60 animate-ping"></div>
              <div className="absolute top-4 left-4 w-5 h-5 bg-cyan-400 rounded-full opacity-80 animate-bounce-custom"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 bg-pink-400 rounded-full opacity-80 animate-bounce-custom delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen px-4 lg:px-8 pt-20 bg-gradient-to-b from-blue-950 via-black to-blue-950 flex items-center fade-in delay-1">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <img
                src="/m3.png"
                alt="Pritesh Patel Profile"
                className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 shadow-2xl hover:scale-105 transition-all duration-500 ease-in-out animate-pulse-custom glow-effect"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-pink-500/20 blur-2xl opacity-60 animate-ping"></div>
              <div className="absolute top-4 left-4 w-5 h-5 bg-cyan-400 rounded-full opacity-80 animate-bounce-custom"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 bg-pink-400 rounded-full opacity-80 animate-bounce-custom delay-1000"></div>
            </div>
          </div>
          <div className="text-left lg:text-left">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-amber-400">About Me</h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              As a dedicated Full-Stack Java Developer, I specialize in crafting innovative, high-performance web applications that blend seamless functionality with intuitive design. Leveraging cutting-edge technologies such as{' '}
              <span className="text-cyan-400 font-semibold">React</span>, <span className="text-cyan-400 font-semibold">Next.js</span>, and{' '}
              <span className="text-cyan-400 font-semibold">TailwindCSS</span>, I ensure every project delivers an exceptional user experience. My passion lies in solving complex problems through clean, efficient code and collaborative development practices.
            </p>
            <p className="text-gray-400 text-base">
              With a keen eye for detail and a commitment to continuous learning, I thrive on turning ideas into reality. Let's build something amazing together!
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 lg:px-8 bg-gradient-to-b from-black via-blue-950 to-black fade-in delay-2">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-amber-400">Featured Projects</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Virtual Assistant", img: "/tri1.png", desc: "An AI-powered virtual assistant for streamlined task management." },
            { title: "Library Management System", img: "/lms.png", desc: "A comprehensive system for managing library resources efficiently." },
            { title: "Database Management Tool", img: "/crud.png", desc: "A robust CRUD application for database operations." },
            { title: "E-Commerce Platform", img: "/demo1.png", desc: "A scalable online store with secure payment integration." },
            { title: "Portfolio Website", img: "/demo2.png", desc: "A responsive personal portfolio showcasing skills and projects." },
            { title: "Task Tracker App", img: "/demo3.png", desc: "A productivity app for tracking daily tasks and goals." }
          ].map((p, i) => (
            <div key={i} className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-cyan-400 transition-all duration-500 hover:scale-105 border-2 border-gray-700 glow-effect">
              <img src={p.img} alt={p.title} className="w-full h-48 object-cover opacity-90 hover:opacity-100 transition-opacity duration-300" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 lg:px-8 bg-gradient-to-b from-blue-950 via-black to-blue-950 fade-in delay-3">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-amber-400">Skills & Technologies</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
          {skills.map((skill, i) => (
            <div key={i} className="bg-gray-800 py-6 rounded-xl hover:border-cyan-400 hover:scale-110 transition-all duration-300 flex flex-col items-center justify-center border-2 border-gray-700 glow-effect animate-bounce-custom">
              <img src={skill.logo} alt={skill.name} className="w-12 h-12 mb-3" />
              <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 px-4 lg:px-8 bg-gradient-to-b from-black via-blue-950 to-black fade-in delay-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-amber-400">Certifications</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "TATA TCS iON Certification", img: "/tcs.cirty.png", issuer: "TATA TCS iON" },
            { title: "Resume Writing & Job Interviewing", img: "/cirty1.1.png", issuer: "Professional Development Institute" },
            { title: "Introduction to Cybersecurity Awareness", img: "/cirty2.2.png", issuer: "Cybersecurity Foundation" },
            { title: "Data Privacy Fundamentals", img: "/cirty3.3.png", issuer: "Privacy Compliance Academy" },
            { title: "Communication Skills", img: "/cirty4.jpg", issuer: "Soft Skills Training Center" },
            { title: "Database Management", img: "/cirty5.png", issuer: "Database Experts Inc." }
          ].map((c, i) => (
            <div key={i} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-cyan-400 transition-all duration-500 hover:scale-105 border-2 border-gray-700 glow-effect">
              <img src={c.img} alt={c.title} className="w-full h-48 object-cover opacity-90 hover:opacity-100 transition-opacity duration-300" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">{c.title}</h3>
                <p className="text-gray-400 text-sm">Issued by {c.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 lg:px-8 text-center bg-gradient-to-b from-blue-950 via-black to-blue-950 fade-in delay-5">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-amber-400">Get In Touch</h2>
        <p className="text-gray-400 mb-10 text-lg max-w-2xl mx-auto">
          I'm always excited to discuss new opportunities, collaborate on projects, or simply connect. Feel free to reach out!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a href="mailto:priteshpatel@email.com" className="border-2 border-cyan-400 px-8 py-4 rounded-full text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 text-lg font-semibold glow-effect">
            Email Me
          </a>
          <a href="https://linkedin.com/in/priteshpatel" className="border-2 border-gray-600 px-8 py-4 rounded-full text-gray-400 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 text-lg font-semibold">
            LinkedIn
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-white border-t border-gray-700 text-sm">
        © {new Date().getFullYear()} Pritesh Patel | All Rights Reserved
      </footer>
    </div>
  );
}
