export default function Portfolio() {
  const typingStyles = `
/* The animation depends on the 'typing-text' class */
.typing-text {
    overflow: hidden; 
    white-space: nowrap; 
    width: 0; 
    border-right: 0.15em solid white; /* The cursor */
    /* 3.5s duration, 21 steps for "Hi, I'm Pritesh Patel" */
    animation: 
        typing 6.5s steps(30, end) infinite, 
        blink-caret 0.75s step-end infinite; 
}

/* Keyframes for the Typing Effect (expanding the width) */
@keyframes typing {
    from { width: 0 }
    to { width: 50% } 
}

/* Keyframes for the Blinking Cursor */
@keyframes blink-caret {
    from, to { border-color: transparent } 
    50% { border-color: white } 
}

/* Custom Tailwind utility sizes included here to avoid issues */
.w-47 { width: 11.75rem; }
.h-47 { height: 11.75rem; }
.w-55 { width: 13.75rem; }
.h-55 { height: 13.75rem; }

/* Hide scrollbars */
::-webkit-scrollbar {
    display: none;
}
html {
    scrollbar-width: none; /* Firefox */
}
body {
    overflow-x: hidden; /* Prevent horizontal scroll */
}

/* Mobile menu toggle styles */
#menu-toggle {
    display: none;
}
#menu-toggle:checked ~ .mobile-menu {
    display: block;
}
.mobile-menu {
    display: none;
}

/* Toggle icon styles */
.open-icon {
    display: inline;
}
.close-icon {
    display: none;
}
#menu-toggle:checked ~ label .open-icon {
    display: none;
}
#menu-toggle:checked ~ label .close-icon {
    display: inline;
}
`;

  const sections = ["home", "about", "projects", "skills", "certificates", "contact"];

  const skills = [
    { name: "HTML", logo: "html5.jpg" },
    { name: "CSS", logo: "css.jpg" },
    { name: "JavaScript", logo: "js.jpg" },
    { name: "React", logo: "reactjs1.jpg" },
    { name: "Next.js", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" },
    { name: "TailwindCSS", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
    { name: "PHP", logo: "php1.jpg" },
    { name: "MySQL", logo: "mysql.jpg" },
    { name: "Git", logo: "git.jpg" },
    { name: "Python", logo: "python.jpg" },
    { name: "Node.js", logo: "nodejs.jpg" },
    { name: "UI/UX Design", logo: "https://cdn-icons-png.flaticon.com/512/1006/1006547.png" },
  ];

  return (
    <div className="min-h-screen font-sans text-white bg-black">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-cyan-700" role="navigation" aria-label="Main navigation">
        {/* Mobile menu toggle checkbox */}
        <input type="checkbox" id="menu-toggle" className="hidden" />
        {/* Mobile menu toggle label with icons */}
        <label htmlFor="menu-toggle" className="md:hidden text-cyan-400 text-xl cursor-pointer p-2" aria-label="Toggle menu">
          <span className="open-icon">☰</span>
          <span className="close-icon">✕</span>
        </label>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-2 sm:px-4 lg:px-8 py-4">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <img src="/mylogo.jpg" alt="Pritesh Patel Logo" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-cyan-400 tracking-wide">Pritesh Patel</h1>
          </div>
          <ul className="hidden md:flex space-x-6 lg:space-x-8">
            {sections.map((item) => (
              <li key={item}>
                <a href={`#${item}`} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 capitalize">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Mobile menu */}
        <div className="mobile-menu md:hidden bg-black/95 backdrop-blur-md border-t border-cyan-700">
          <ul className="flex flex-col space-y-4 px-4 py-4">
            {sections.map((item) => (
              <li key={item}>
                <label htmlFor="menu-toggle">
                  <a href={`#${item}`} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 capitalize block">
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
      <section id="home" className="min-h-screen px-4 sm:px-6 lg:px-8 pt-20 bg-gradient-to-b from-black via-blue-950 to-black flex items-center">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Side: Text */}
          <div className="text-left lg:text-left">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold mb-4 bg-gradient-to-r from-pink-400 to-orange-500 bg-clip-text text-transparent ">
              Hi, I'm Pritesh Patel
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl mb-8">Java Full-Stack Developer</p>
            <a href="#projects" className="inline-block px-8 py-3 border border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300 text-lg">
              Explore My Work
            </a>
          </div>
          {/* Right Side: Photo with Amazing Styling */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src="/m3.png"
                alt="Pritesh Patel Profile"
                className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full border-8 border-gradient-to-r from-pink-400 via-purple-500 to-orange-500 shadow-2xl hover:scale-110 transition-all duration-700 ease-in-out animate-pulse"
              />
              {/* Additional Styling: Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400/20 via-purple-500/20 to-orange-500/20 blur-xl opacity-50 animate-ping"></div>
              {/* Floating Particles or Orbs (CSS-only) */}
              <div className="absolute top-0 left-0 w-4 h-4 bg-cyan-400 rounded-full opacity-75 animate-bounce"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 bg-orange-400 rounded-full opacity-75 animate-bounce delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen px-4 sm:px-6 lg:px-8 pt-20 bg-gradient-to-b from-blue-950 via-black to-blue-950 flex items-center">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Side: Photo with Amazing Styling */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <img
                src="/m3.png"
                alt="Pritesh Patel Profile"
                className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full border-8 border-gradient-to-r from-pink-400 via-purple-500 to-orange-500 shadow-2xl hover:scale-110 transition-all duration-700 ease-in-out animate-pulse"
              />
              {/* Additional Styling: Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400/20 via-purple-500/20 to-orange-500/20 blur-xl opacity-50 animate-ping"></div>
              {/* Floating Particles or Orbs (CSS-only) */}
              <div className="absolute top-0 left-0 w-4 h-4 bg-cyan-400 rounded-full opacity-75 animate-bounce"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 bg-orange-400 rounded-full opacity-75 animate-bounce delay-1000"></div>
            </div>
          </div>
          {/* Right Side: Text */}
          <div className="text-left lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-amber-500">About Me</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              I'm a passionate developer building creative, high-performance web experiences. I focus on clean design, efficient coding, and interactive UI development using modern tools like{' '}
              <span className="text-orange-400 font-semibold">React</span>, <span className="text-orange-400 font-semibold">Next.js</span>, and{' '}
              <span className="text-orange-400 font-semibold">TailwindCSS</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className=" py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-black via-blue-950 to-black">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10 text-amber-500">Projects</h2>
        <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-4 sm:gap-8 flex-row">
          {[{ title: "Virtual Assistant", img: "tri1.png" },
          { title: "Library Management System", img: "lms.png" },
          { title: "Database Management ", img: "crud.png" },
          
          ].map((p, i) => (
            <div key={i} className="bg-[#111] rounded-2xl overflow-hidden shadow-lg  hover:border-cyan-400 transition-all duration-500 hover:scale-105 border-3 border-lime-300">
              <img src={p.img} alt={p.title} className="w-full h-50 sm:h-56 object-cover opacity-80 hover:opacity-100 border-20 border-black" />
              <div className="p-4 sm:p-5">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-cyan-400">{p.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm">
                  A modern, feature-rich web solution with professional UI and secure backend.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-blue-950 via-black to-blue-950 border-black">
        <h2 className=" text-amber-500 text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10">Skills</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 sm:gap-6 text-center">
          {skills.map((skill, i) => (
            <div key={i} className="bg-[#111] py-4 rounded-lg  hover:border-cyan-400 hover:scale-110 transition-transform duration-300 flex flex-col items-center justify-center border-2 border-lime-300 animate-bounce">
              <img src={skill.logo} alt={skill.name} className="w-10 h-10 sm:w-12 sm:h-12 mb-1 sm:mb-2 " />
              <span className="text-gray-300 text-xs sm:text-sm">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="bg-gradient-to-b from-black via-blue-950 to-black py-16 sm:py-20 px-4 sm:px-6 border-y animate-slideUp border-black">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10 text-amber-500">Certificates</h2>
        <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-4 sm:gap-8">
          {[{ title: "TATA tcsion", img: "tcs.cirty.png" },
          { title: "Resume Writing & Job Interviewing", img: "cirty1.1.png" },
          { title: "Introduction to cybersecurity Awarness", img: "cirty2.2.png" },
          { title: "Data privacy Fundamentals", img: "cirty3.3.png" },
          { title: "Communication skill", img: "cirty4.jpg" },
          { title: "Database Management", img: "cirty2.2.png" }
          ].map((c, i) => (
            <div key={i} className="bg-[#111] rounded-xl overflow-hidden shadow-lg  hover:border-cyan-400 transition-all hover:scale-105 duration-500 border-3 border-lime-300">
              <img src={c.img} alt={c.title} className="w-full h-48 sm:h-56 object-cover opacity-80 hover:opacity-100 img-animate border-20 border-black"/>
              <div className="p-4 sm:p-5">
                <h3 className="text-lg sm:text-xl font-semibold text-cyan-400">{c.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm mt-1 sm:mt-2">Certified by ABC Institute</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 text-center animate-fadeIn bg-gradient-to-b from-blue-950 via-black to-blue-950 ">
        <h2 className=" text-amber-500 text-2xl sm:text-3xl font-bold mb-8 sm:mb-10">Contact Me</h2>
        <p className="text-gray-400 mb-6 text-sm sm:text-base">
          Let’s connect! I’m always open to discussing new projects and opportunities.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <a href="mailto:priteshpatel@email.com" className="border border-cyan-400 px-6 py-2 sm:px-8 sm:py-3 rounded-full text-cyan-400 btn-animate text-sm sm:text-base">
            Email Me
          </a>
          <a href="#" className="border border-gray-600 px-6 py-2 sm:px-8 sm:py-3 rounded-full text-gray-400 hover:border-cyan-400 hover:text-cyan-400 transition-all text-sm sm:text-base">
            LinkedIn
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-white border-t mt-10 text-xs sm:text-sm">
        © {new Date().getFullYear()} Pritesh Patel | All Rights Reserved
      </footer>
    </div>
  );
}
