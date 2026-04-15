import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    // Star Generation
    const bg = document.getElementById('bgCanvas');
    if (bg && bg.children.length === 0) {
      for (let i = 0; i < 100; i++) {
        const s = document.createElement('div');
        s.className = 'star';
        const sz = Math.random() * 2.2 + 0.6;
        s.style.cssText = `width:${sz}px;height:${sz}px;left:${Math.random() * 100}%;top:${Math.random() * 100}%;animation-duration:${Math.random() * 3 + 2}s;animation-delay:${Math.random() * 5}s;`;
        bg.appendChild(s);
      }
    }

    // Typing Effect
    const phrases = ['full stack  developer', 'uniview studio 2026', 'front - end developer', 'JavaScript Developer', 'Problem Solver'];
    let pi = 0, ci = 0, del = false;
    const el = document.getElementById('typed-text');

    function type() {
      if (!el) return;
      const cur = phrases[pi];
      if (!del) {
        el.textContent = cur.slice(0, ci + 1);
        ci++;
        if (ci === cur.length) {
          del = true;
          setTimeout(type, 2000);
          return;
        }
      } else {
        el.textContent = cur.slice(0, ci - 1);
        ci--;
        if (ci === 0) {
          del = false;
          pi = (pi + 1) % phrases.length;
        }
      }
      setTimeout(type, del ? 50 : 85);
    }
    const typingTimeout = setTimeout(type, 1200);

    // Intersection Observer for Reveal
    const revEls = document.querySelectorAll('.reveal,.reveal-left,.reveal-right');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => {
            e.target.classList.add('visible');
            e.target.querySelectorAll('.progress-fill').forEach(b => {
              b.style.width = (b.dataset.w || 0) + '%';
            });
          }, i * 80);
        }
      });
    }, { threshold: 0.1 });
    revEls.forEach(r => obs.observe(r));

    // Project Card Tilt Logic
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
      const handleMove = (e) => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `translateY(-10px) rotateX(${y * -9}deg) rotateY(${x * 9}deg)`;
      };
      const handleLeave = () => { card.style.transform = ''; };

      card.addEventListener('mousemove', handleMove);
      card.addEventListener('mouseleave', handleLeave);
    });

    return () => {
      clearTimeout(typingTimeout);
      obs.disconnect();
    };
  }, []);

  // Native Functions
  const goTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    document.getElementById('navLinks').classList.remove('open');
  };

  const toggleNav = () => {
    document.getElementById('navLinks').classList.toggle('open');
  };

  const showTab = (name, event) => {
    const btn = event.currentTarget;
    document.querySelectorAll('.skill-category').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.stab').forEach(b => b.classList.remove('active'));
    document.getElementById('tab-' + name).classList.add('active');
    btn.classList.add('active');
    document.querySelectorAll('#tab-' + name + ' .progress-fill').forEach(b => {
      b.style.width = '0%';
      requestAnimationFrame(() => requestAnimationFrame(() => {
        b.style.width = (b.dataset.w || 0) + '%';
      }));
    });
  };

  return (
    <>
      <style>{`
        *{margin:0;padding:0;box-sizing:border-box;}html{scroll-behavior:smooth;}
        body{font-family:'Rajdhani',sans-serif;background:#050b18;color:#e0e8ff;overflow-x:hidden;}
        :root{--accent:#00d4ff;--accent2:#7c3aed;--accent3:#00ff9d;--fg:rgba(224,232,255,0.7);--card:rgba(255,255,255,0.025);}
        .bg-canvas{position:fixed;top:0;left:0;width:100%;height:100%;z-index:0;background:radial-gradient(ellipse at 20% 50%,#0d1a3a 0%,#050b18 60%);overflow:hidden;}
        .star{position:absolute;border-radius:50%;background:white;animation:twinkle linear infinite;}
        @keyframes twinkle{0%,100%{opacity:0.15;transform:scale(1)}50%{opacity:1;transform:scale(1.7)}}
        .grid-overlay{position:fixed;top:0;left:0;width:100%;height:100%;z-index:0;
          background-image:linear-gradient(rgba(0,212,255,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(0,212,255,0.035) 1px,transparent 1px);
          background-size:65px 65px;animation:gridMove 22s linear infinite;}
        @keyframes gridMove{0%{background-position:0 0}100%{background-position:65px 65px}}
        .orb{position:fixed;border-radius:50%;filter:blur(80px);opacity:0.11;pointer-events:none;animation:orbFloat ease-in-out infinite;}
        .orb1{width:500px;height:500px;background:#7c3aed;top:-150px;left:-150px;animation-duration:9s;}
        .orb2{width:350px;height:350px;background:#00d4ff;bottom:-120px;right:-120px;animation-duration:12s;}
        .orb3{width:250px;height:250px;background:#00ff9d;top:40%;left:50%;animation-duration:15s;}
        @keyframes orbFloat{0%,100%{transform:translate(0,0)}50%{transform:translate(35px,-45px)}}
        nav{position:fixed;top:0;left:0;right:0;z-index:300;display:flex;align-items:center;justify-content:space-between;
          padding:0 52px;height:64px;background:rgba(5,11,24,0.82);backdrop-filter:blur(28px);border-bottom:1px solid rgba(0,212,255,0.1);}
        .logo{font-family:'Orbitron',monospace;font-size:17px;font-weight:900;letter-spacing:3px;
          background:linear-gradient(90deg,#00d4ff,#7c3aed);-webkit-background-clip:text;-webkit-text-fill-color:transparent;}
        .nav-links{display:flex;gap:30px;align-items:center;}
        .nav-links a{color:rgba(224,232,255,0.6);text-decoration:none;font-size:12px;letter-spacing:2px;font-weight:600;
          transition:color 0.3s;cursor:pointer;position:relative;text-transform:uppercase;}
        .nav-links a::after{content:'';position:absolute;bottom:-4px;left:0;width:0;height:1px;background:var(--accent);transition:width 0.3s;}
        .nav-links a:hover{color:var(--accent);}.nav-links a:hover::after{width:100%;}
        .nav-hire{padding:8px 20px;border-radius:50px;font-size:12px;font-weight:700;
          background:linear-gradient(135deg,#00d4ff,#7c3aed);color:white;border:none;cursor:pointer;
          letter-spacing:1px;text-transform:uppercase;font-family:'Rajdhani',sans-serif;
          transition:transform 0.2s,box-shadow 0.2s;box-shadow:0 0 20px rgba(0,212,255,0.3);}
        .nav-hire:hover{transform:translateY(-2px);box-shadow:0 6px 28px rgba(0,212,255,0.5);}
        .hamburger{display:none;flex-direction:column;gap:5px;cursor:pointer;}
        .hamburger span{width:24px;height:2px;background:var(--accent);}
        section{position:relative;z-index:10;min-height:100vh;display:flex;align-items:center;justify-content:center;}
        #hero{padding:80px 48px;flex-direction:column;text-align:center;}
        .cube-wrapper{perspective:700px;width:110px;height:110px;margin:0 auto 36px;}
        .cube{width:110px;height:110px;position:relative;transform-style:preserve-3d;animation:rotateCube 9s linear infinite;}
        @keyframes rotateCube{0%{transform:rotateX(0)rotateY(0)}100%{transform:rotateX(360deg)rotateY(360deg)}}
        .face{position:absolute;width:110px;height:110px;border:1.5px solid rgba(0,212,255,0.5);background:rgba(0,212,255,0.035);
          display:flex;align-items:center;justify-content:center;font-family:'Orbitron',monospace;font-size:13px;font-weight:700;color:var(--accent);}
        .face.front{transform:translateZ(55px);}.face.back{transform:rotateY(180deg) translateZ(55px);}
        .face.left{transform:rotateY(-90deg) translateZ(55px);}.face.right{transform:rotateY(90deg) translateZ(55px);}
        .face.top{transform:rotateX(90deg) translateZ(55px);}.face.bottom{transform:rotateX(-90deg) translateZ(55px);}
        .hero-badge{display:inline-flex;align-items:center;gap:8px;padding:7px 22px;border:1px solid rgba(0,212,255,0.3);border-radius:50px;
          font-size:12px;color:var(--accent);letter-spacing:2px;margin-bottom:22px;background:rgba(0,212,255,0.07);font-weight:600;text-transform:uppercase;}
        .hero-name{font-family:'Orbitron',monospace;font-size:clamp(28px,5vw,64px);font-weight:900;line-height:1.1;
          background:linear-gradient(135deg,#fff 0%,#a0c4ff 45%,#7c3aed 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;
          margin-bottom:10px;letter-spacing:2px;}
        .hero-sub{font-size:clamp(13px,1.8vw,18px);color:rgba(224,232,255,0.5);margin-bottom:6px;letter-spacing:1px;}
        .hero-college{font-size:clamp(11px,1.4vw,14px);color:var(--accent);letter-spacing:2px;margin-bottom:28px;opacity:0.75;}
        .typed-wrapper{font-size:clamp(14px,2vw,20px);color:var(--accent3);min-height:32px;margin-bottom:40px;font-weight:600;letter-spacing:1px;}
        .cursor{display:inline-block;width:2px;height:1.1em;background:var(--accent3);margin-left:2px;animation:blink 0.8s steps(1) infinite;vertical-align:text-bottom;}
        @keyframes blink{50%{opacity:0}}
        .hero-btns{display:flex;gap:14px;flex-wrap:wrap;justify-content:center;margin-bottom:20px;}
        .btn-primary{padding:13px 36px;border-radius:50px;font-size:13px;font-weight:700;cursor:pointer;
          background:linear-gradient(135deg,#00d4ff,#7c3aed);border:none;color:white;letter-spacing:1px;text-transform:uppercase;
          transition:transform 0.2s,box-shadow 0.2s;box-shadow:0 0 28px rgba(0,212,255,0.3);font-family:'Rajdhani',sans-serif;}
        .btn-primary:hover{transform:translateY(-3px);box-shadow:0 10px 38px rgba(0,212,255,0.55);}
        .btn-outline{padding:12px 36px;border-radius:50px;font-size:13px;font-weight:700;cursor:pointer;background:transparent;
          border:1px solid rgba(0,212,255,0.4);color:var(--accent);letter-spacing:1px;text-transform:uppercase;
          transition:all 0.3s;font-family:'Rajdhani',sans-serif;}
        .btn-outline:hover{background:rgba(0,212,255,0.1);}
        .hero-stats{display:flex;gap:32px;justify-content:center;margin-top:32px;flex-wrap:wrap;}
        .h-stat{text-align:center;}
        .h-stat-num{font-family:'Orbitron',monospace;font-size:26px;font-weight:900;background:linear-gradient(90deg,#00d4ff,#7c3aed);-webkit-background-clip:text;-webkit-text-fill-color:transparent;}
        .h-stat-label{font-size:10px;color:rgba(224,232,255,0.38);letter-spacing:2px;text-transform:uppercase;margin-top:2px;}
        .h-divider{width:1px;background:rgba(0,212,255,0.18);}
        .scroll-ind{position:absolute;bottom:24px;left:50%;transform:translateX(-50%);
          display:flex;flex-direction:column;align-items:center;gap:7px;color:rgba(224,232,255,0.3);
          font-size:10px;letter-spacing:3px;animation:bounce 2s ease infinite;text-transform:uppercase;}
        .scroll-arrow{width:16px;height:16px;border-right:2px solid rgba(0,212,255,0.35);border-bottom:2px solid rgba(0,212,255,0.35);transform:rotate(45deg);}
        @keyframes bounce{0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(8px)}}
        .section-tag{font-size:11px;letter-spacing:4px;color:var(--accent);margin-bottom:10px;text-transform:uppercase;font-family:'Orbitron',monospace;font-weight:700;}
        .section-title{font-size:clamp(24px,3.5vw,40px);font-weight:700;margin-bottom:16px;line-height:1.2;}
        .hl{background:linear-gradient(90deg,#00d4ff,#7c3aed);-webkit-background-clip:text;-webkit-text-fill-color:transparent;}
        #about{padding:80px 48px;}
        .about-grid{display:grid;grid-template-columns:1fr 1.3fr;gap:64px;max-width:1100px;align-items:center;}
        .about-visual{position:relative;display:flex;align-items:center;justify-content:center;}
        .avatar-ring{width:230px;height:230px;border-radius:50%;border:2px solid transparent;
          background:linear-gradient(#050b18,#050b18) padding-box,linear-gradient(135deg,#00d4ff,#7c3aed,#00ff9d) border-box;
          display:flex;align-items:center;justify-content:center;animation:rotateBorder 5s linear infinite;}
        @keyframes rotateBorder{0%{filter:hue-rotate(0deg)}100%{filter:hue-rotate(360deg)}}
        .avatar-inner{width:198px;height:198px;border-radius:50%;background:linear-gradient(135deg,#0d1a3a,#1a0a3a);
          display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;}
        .avatar-initials{font-family:'Orbitron',monospace;font-size:28px;font-weight:900;background:linear-gradient(135deg,#00d4ff,#7c3aed);-webkit-background-clip:text;-webkit-text-fill-color:transparent;letter-spacing:2px;}
        .avatar-role{font-size:10px;color:rgba(224,232,255,0.4);letter-spacing:2px;text-transform:uppercase;}
        .about-pills{position:absolute;display:flex;flex-direction:column;gap:10px;right:-15px;}
        .pill{background:rgba(5,11,24,0.93);border:1px solid rgba(0,212,255,0.25);padding:9px 16px;border-radius:10px;font-size:12px;white-space:nowrap;backdrop-filter:blur(14px);font-weight:600;letter-spacing:0.5px;}
        .pill span{color:var(--accent);font-weight:700;}
        .about-text{color:var(--fg);line-height:1.85;font-size:15px;margin-bottom:18px;}
        .chip-group{display:flex;flex-wrap:wrap;gap:9px;margin-top:8px;}
        .chip{padding:6px 14px;border-radius:6px;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;
          background:rgba(0,212,255,0.07);border:1px solid rgba(0,212,255,0.2);color:var(--accent);transition:all 0.25s;cursor:default;}
        .chip:hover{background:rgba(0,212,255,0.18);transform:translateY(-2px);}
        #skills{padding:80px 48px;flex-direction:column;}
        .skills-wrapper{max-width:1100px;width:100%;margin-top:52px;}
        .skill-tabs{display:flex;gap:12px;margin-bottom:32px;flex-wrap:wrap;}
        .stab{padding:8px 22px;border-radius:50px;font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;
          cursor:pointer;transition:all 0.25s;border:1px solid rgba(0,212,255,0.2);color:rgba(224,232,255,0.5);background:transparent;font-family:'Rajdhani',sans-serif;}
        .stab.active,.stab:hover{background:rgba(0,212,255,0.12);border-color:rgba(0,212,255,0.5);color:var(--accent);}
        .skill-category{display:none;}
        .skill-category.active{display:grid;grid-template-columns:repeat(auto-fill,minmax(185px,1fr));gap:18px;}
        .skill-card{background:var(--card);border:1px solid rgba(0,212,255,0.1);border-radius:14px;padding:22px;position:relative;overflow:hidden;transition:all 0.3s;cursor:default;}
        .skill-card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,#00d4ff,#7c3aed);transform:scaleX(0);transform-origin:left;transition:transform 0.4s;}
        .skill-card:hover{transform:translateY(-6px);border-color:rgba(0,212,255,0.28);background:rgba(0,212,255,0.05);}
        .skill-card:hover::before{transform:scaleX(1);}
        .sk-icon{font-size:28px;margin-bottom:12px;display:block;}
        .sk-name{font-size:14px;font-weight:700;margin-bottom:4px;letter-spacing:0.5px;}
        .sk-level{font-size:10px;color:rgba(224,232,255,0.4);margin-bottom:12px;letter-spacing:0.5px;text-transform:uppercase;}
        .progress-bar{height:3px;background:rgba(255,255,255,0.07);border-radius:2px;overflow:hidden;}
        .progress-fill{height:100%;border-radius:2px;background:linear-gradient(90deg,#00d4ff,#7c3aed);width:0%;transition:width 1.2s ease;}
        #projects{padding:80px 48px;flex-direction:column;}
        .projects-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:24px;max-width:1100px;width:100%;margin-top:52px;}
        .project-card{background:var(--card);border:1px solid rgba(255,255,255,0.07);border-radius:20px;overflow:hidden;transition:all 0.4s;position:relative;transform-style:preserve-3d;}
        .project-card:hover{transform:translateY(-10px) rotateX(2deg);border-color:rgba(0,212,255,0.28);box-shadow:0 24px 60px rgba(0,0,0,0.5),0 0 30px rgba(0,212,255,0.1);}
        .project-card.featured{border-color:rgba(0,212,255,0.3);}
        .featured-badge{position:absolute;top:14px;right:14px;z-index:2;padding:4px 12px;border-radius:4px;font-size:10px;font-weight:700;background:rgba(0,212,255,0.15);color:var(--accent);border:1px solid rgba(0,212,255,0.35);letter-spacing:1px;text-transform:uppercase;}
        .project-banner{height:165px;display:flex;align-items:center;justify-content:center;font-size:52px;position:relative;overflow:hidden;}
        .project-banner::after{content:'';position:absolute;inset:0;background:linear-gradient(to bottom,transparent 40%,rgba(5,11,24,0.85));}
        .p-lifi{background:linear-gradient(135deg,#061828,#0a2035);}
        .p-web{background:linear-gradient(135deg,#070a28,#160a35);}
        .p-algo{background:linear-gradient(135deg,#0a1428,#120a28);}
        .lifi-beam{position:absolute;z-index:1;width:3px;height:55%;top:10%;left:50%;background:linear-gradient(to bottom,rgba(0,212,255,0),rgba(0,212,255,1),rgba(0,212,255,0));border-radius:4px;transform:translateX(-50%);animation:beamPulse 1.4s ease-in-out infinite;}
        @keyframes beamPulse{0%,100%{opacity:0.4;transform:translateX(-50%) scaleY(0.8)}50%{opacity:1;transform:translateX(-50%) scaleY(1.3)}}
        .project-info{padding:22px;}
        .project-tags{display:flex;gap:7px;flex-wrap:wrap;margin-bottom:12px;}
        .tag{font-size:10px;padding:3px 10px;border-radius:4px;font-weight:700;letter-spacing:0.8px;text-transform:uppercase;background:rgba(124,58,237,0.15);color:#c4b5fd;border:1px solid rgba(124,58,237,0.25);}
        .project-name{font-size:17px;font-weight:700;margin-bottom:8px;letter-spacing:0.3px;}
        .project-desc{font-size:13px;color:rgba(224,232,255,0.55);line-height:1.75;margin-bottom:18px;}
        .project-links{display:flex;gap:10px;}
        .proj-btn{padding:8px 18px;border-radius:8px;font-size:11px;font-weight:700;cursor:pointer;transition:all 0.2s;letter-spacing:0.8px;text-transform:uppercase;font-family:'Rajdhani',sans-serif;text-decoration:none;display:inline-block;}
        .proj-btn.primary{background:rgba(0,212,255,0.1);border:1px solid rgba(0,212,255,0.3);color:var(--accent);}
        .proj-btn.primary:hover{background:rgba(0,212,255,0.22);}
        .proj-btn.ghost{background:transparent;border:1px solid rgba(255,255,255,0.1);color:rgba(224,232,255,0.5);}
        .proj-btn.ghost:hover{border-color:rgba(255,255,255,0.25);color:#fff;}
        #experience{padding:80px 48px;flex-direction:column;}
        .timeline{max-width:740px;width:100%;margin-top:52px;position:relative;}
        .timeline::before{content:'';position:absolute;left:16px;top:0;bottom:0;width:2px;background:linear-gradient(to bottom,#00d4ff,#7c3aed,transparent);}
        .timeline-item{padding-left:58px;margin-bottom:44px;position:relative;}
        .tl-dot{position:absolute;left:7px;top:6px;width:18px;height:18px;border-radius:50%;background:linear-gradient(135deg,#00d4ff,#7c3aed);box-shadow:0 0 14px rgba(0,212,255,0.8);animation:pulse 2s ease infinite;}
        @keyframes pulse{0%,100%{box-shadow:0 0 14px rgba(0,212,255,0.6)}50%{box-shadow:0 0 28px rgba(0,212,255,1)}}
        .tl-year{font-size:11px;color:var(--accent);letter-spacing:3px;margin-bottom:5px;font-family:'Orbitron',monospace;font-weight:700;}
        .tl-title{font-size:18px;font-weight:700;margin-bottom:4px;}
        .tl-company{font-size:12px;color:rgba(224,232,255,0.42);margin-bottom:10px;letter-spacing:0.5px;}
        .tl-desc{font-size:13px;color:var(--fg);line-height:1.78;}
        #contact{padding:80px 48px;flex-direction:column;text-align:center;}
        .contact-wrap{max-width:680px;width:100%;margin-top:52px;}
        .contact-card{background:var(--card);border:1px solid rgba(0,212,255,0.14);border-radius:24px;padding:48px;position:relative;overflow:hidden;}
        .contact-card::before{content:'';position:absolute;inset:0;border-radius:24px;background:radial-gradient(circle at 50% 0%,rgba(0,212,255,0.07),transparent 68%);pointer-events:none;}
        .contact-label{font-size:11px;letter-spacing:3px;color:rgba(224,232,255,0.4);text-transform:uppercase;margin-bottom:8px;}
        .contact-email{font-size:clamp(13px,2vw,18px);font-weight:700;color:var(--accent);margin-bottom:36px;word-break:break-all;font-family:'Orbitron',monospace;}
        .social-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px;}
        .social-btn{padding:14px 16px;border-radius:14px;font-size:13px;font-weight:700;cursor:pointer;border:1px solid rgba(0,212,255,0.18);background:rgba(0,212,255,0.04);color:rgba(224,232,255,0.75);transition:all 0.3s;display:flex;align-items:center;justify-content:center;gap:9px;letter-spacing:0.5px;font-family:'Rajdhani',sans-serif;text-decoration:none;}
        .social-btn:hover{background:rgba(0,212,255,0.14);border-color:rgba(0,212,255,0.45);color:var(--accent);transform:translateY(-3px);}
        .social-btn.github:hover{background:rgba(124,58,237,0.14);border-color:rgba(124,58,237,0.45);color:#c4b5fd;}
        footer{position:relative;z-index:10;text-align:center;padding:24px 20px;color:rgba(224,232,255,0.2);font-size:11px;letter-spacing:2px;text-transform:uppercase;border-top:1px solid rgba(255,255,255,0.04);}
        .reveal{opacity:0;transform:translateY(30px);transition:opacity 0.75s ease,transform 0.75s ease;}
        .reveal.visible{opacity:1;transform:translateY(0);}
        .reveal-left{opacity:0;transform:translateX(-40px);transition:opacity 0.75s ease,transform 0.75s ease;}
        .reveal-left.visible{opacity:1;transform:translateX(0);}
        .reveal-right{opacity:0;transform:translateX(40px);transition:opacity 0.75s ease,transform 0.75s ease;}
        .reveal-right.visible{opacity:1;transform:translateX(0);}
        @media(max-width:900px){.about-grid{grid-template-columns:1fr;}.about-visual{margin-bottom:36px;}.about-pills{right:0;}}
        @media(max-width:700px){nav{padding:0 20px;}.nav-links{display:none;flex-direction:column;gap:18px;position:absolute;top:64px;left:0;right:0;padding:24px;background:rgba(5,11,24,0.98);border-bottom:1px solid rgba(0,212,255,0.12);}.nav-links.open{display:flex;}.nav-hire{display:none;}.hamburger{display:flex;}#hero,#about,#skills,#projects,#experience,#contact{padding:80px 20px;}.hero-stats{gap:16px;}.h-divider{display:none;}}
      `}</style>

      <div className="bg-canvas" id="bgCanvas"></div>
      <div className="grid-overlay"></div>
      <div className="orb orb1"></div><div className="orb orb2"></div><div className="orb orb3"></div>

      <nav>
        <div className="logo">PRITESH PATEL/&gt;</div>
        <div className="nav-links" id="navLinks">
          <a onClick={() => goTo('about')}>About</a>
          <a onClick={() => goTo('skills')}>Skills</a>
          <a onClick={() => goTo('projects')}>Projects</a>
          <a onClick={() => goTo('experience')}>Timeline</a>
          <a onClick={() => goTo('contact')}>Contact</a>
        </div>
        <button className="nav-hire" onClick={() => goTo('contact')}>Hire Me</button>
        <div className="hamburger" onClick={toggleNav}><span></span><span></span><span></span></div>
      </nav>

      <section id="hero">
        <div className="cube-wrapper">
          <div className="cube">
            <div className="face front">Java</div><div className="face back">php</div>
            <div className="face left">&lt;/&gt;</div><div className="face right">python</div>
            <div className="face top">JS</div><div className="face bottom">react</div>
          </div>
        </div>
        <div className="hero-badge">&#127979; IT Student &middot; SEM II &middot; CHARUSAT</div>
        <h1 className="hero-name">PRITESH PATEL</h1>
        <p className="hero-sub">Full Stack Developer &amp; UI/UX Designer</p>
        <p className="hero-college">CHARUSAT &mdash; UNIVERSITY</p>
        <div className="typed-wrapper"><span id="typed-text"></span><span className="cursor"></span></div>
        <div className="hero-btns">
          <button className="btn-primary" onClick={() => goTo('projects')}>&#128196; View Projects</button>
          <button className="btn-outline" onClick={() => window.open('https://github.com/priteshpatel1509', '_blank')}>&#129419; GitHub</button>
          <button className="btn-outline" onClick={() => goTo('contact')}>Let's Talk</button>
          <button className="btn-outline" href="pritesh_resume.pdf">Resume</button>
        </div>
        <div className="hero-stats">
          <div className="h-stat"><div className="h-stat-num">SEM II</div><div className="h-stat-label">M.Sc. IT</div></div>
          <div className="h-divider"></div>
          <div className="h-stat"><div className="h-stat-num">03+</div><div className="h-stat-label">Projects Deployed</div></div>
          <div className="h-divider"></div>
          <div className="h-stat"><div className="h-stat-num">25+</div><div className="h-stat-label">Skills</div></div>
          <div className="h-divider"></div>
        </div>
        <div className="scroll-ind"><span>Scroll</span><div className="scroll-arrow"></div></div>
      </section>

      <section id="about">
        <div className="about-grid">
          <div className="about-visual reveal-left">
            <div className="avatar-ring">
              <div className="avatar-inner">
                <div className="avatar-initials">Pritesh</div>
                <div className="avatar-role">Full Stack Developer</div>
              </div>
            </div>
            <div className="about-pills">
              <div className="pill">M.Sc. IT <span>SEM II</span></div>
              <div className="pill">Design <span>UI/UX</span></div>
              <div className="pill">FULL-STACK <span>DEVELOPER</span></div>
              <div className="pill">CHARUSAT <span>UNIVERSITY</span></div>
            </div>
          </div>
          <div className="reveal-right">
            <p className="section-tag">// About Me</p>
            <h2 className="section-title">Architecting Digital <span className="hl">Experiences</span></h2>
            <p className="about-text">I'm Pritesh Patel, a professional developer and UI/UX designer and full-stack development. I bridge the gap between aesthetics and functionality to create high-performance systems.</p>

            <div className="chip-group">
              <span className="chip">C / C++</span><span className="chip">Python</span><span className="chip">JavaScript</span>
              <span className="chip">React / Next.js</span><span className="chip">Flutter</span><span className="chip">PHP (MVC)</span>
              <span className="chip">Node.js</span><span className="chip">PostgreSQL</span><span className="chip">MySQL</span><span className="chip">Blockchain</span>
            </div>
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="reveal" style={{ textAlign: 'center' }}>
          <p className="section-tag">// Expertise</p>
          <h2 className="section-title">Professional <span className="hl">Tech Stack</span></h2>
          <p style={{ color: 'rgba(224,232,255,0.5)', fontSize: '14px', maxWidth: '480px', margin: '0 auto' }}>A curated selection of modern technologies used to power scalable enterprise solutions.</p>
        </div>
        <div className="skills-wrapper reveal">
          <div className="skill-tabs">
            <button className="stab active" onClick={(e) => showTab('frontend', e)}>&#128187; Frontend</button>
            <button className="stab" onClick={(e) => showTab('backend', e)}>&#9881; Backend</button>
            <button className="stab" onClick={(e) => showTab('databases', e)}>&#128203; Databases</button>
            <button className="stab" onClick={(e) => showTab('core', e)}>&#127970; Core CS</button>
          </div>
          <div className="skill-category active" id="tab-frontend">
            <div className="skill-card"><span className="sk-icon">⚛️</span><div className="sk-name">React.js</div><div className="sk-level">Advanced</div><div className="progress-bar"><div className="progress-fill" data-w="90"></div></div></div>
            <div className="skill-card"><span className="sk-icon">▲</span><div className="sk-name">Next.js</div><div className="sk-level">Professional</div><div className="progress-bar"><div className="progress-fill" data-w="85"></div></div></div>
            <div className="skill-card"><span className="sk-icon">🅰️</span><div className="sk-name">Angular.js</div><div className="sk-level">Intermediate</div><div className="progress-bar"><div className="progress-fill" data-w="70"></div></div></div>
            <div className="skill-card"><span className="sk-icon">🌐</span><div className="sk-name">HTML5</div><div className="sk-level">Expert</div><div className="progress-bar"><div className="progress-fill" data-w="95"></div></div></div>
            <div className="skill-card"><span className="sk-icon">🎨</span><div className="sk-name">CSS3 / SCSS</div><div className="sk-level">Expert</div><div className="progress-bar"><div className="progress-fill" data-w="92"></div></div></div>
            <div className="skill-card"><span className="sk-icon">📜</span><div className="sk-name">JavaScript</div><div className="sk-level">Advanced</div><div className="progress-bar"><div className="progress-fill" data-w="88"></div></div></div>
          </div>
          <div className="skill-category" id="tab-backend">
            <div className="skill-card"><span className="sk-icon">☕</span><div className="sk-name">Java</div><div className="sk-level">Advanced</div><div className="progress-bar"><div className="progress-fill" data-w="85"></div></div></div>
            <div className="skill-card"><span className="sk-icon">🐍</span><div className="sk-name">Python</div><div className="sk-level">Advanced</div><div className="progress-bar"><div className="progress-fill" data-w="82"></div></div></div>
            <div className="skill-card"><span className="sk-icon">🟢</span><div className="sk-name">Node.js</div><div className="sk-level">Intermediate</div><div className="progress-bar"><div className="progress-fill" data-w="78"></div></div></div>
            <div className="skill-card"><span className="sk-icon">💠</span><div className="sk-name">.NET</div><div className="sk-level">Professional</div><div className="progress-bar"><div className="progress-fill" data-w="65"></div></div></div>
            <div className="skill-card"><span className="sk-icon">🐘</span><div className="sk-name">PHP (MVC)</div><div className="sk-level">Advanced</div><div className="progress-bar"><div className="progress-fill" data-w="85"></div></div></div>
            <div className="skill-card"><span className="sk-icon">💻</span><div className="sk-name">C++</div><div className="sk-level">Advanced</div><div className="progress-bar"><div className="progress-fill" data-w="80"></div></div></div>
          </div>
          <div className="skill-category" id="tab-databases">
            <div className="skill-card"><span className="sk-icon">🐬</span><div className="sk-name">MySQL</div><div className="sk-level">Advanced</div><div className="progress-bar"><div className="progress-fill" data-w="88"></div></div></div>
            <div className="skill-card"><span className="sk-icon">🍃</span><div className="sk-name">MongoDB</div><div className="sk-level">Intermediate</div><div className="progress-bar"><div className="progress-fill" data-w="72"></div></div></div>
            <div className="skill-card"><span className="sk-icon">🐘</span><div className="sk-name">PostgreSQL</div><div className="sk-level">Intermediate</div><div className="progress-bar"><div className="progress-fill" data-w="65"></div></div></div>
          </div>
          <div className="skill-category" id="tab-core">
            <div className="skill-card"><span className="sk-icon">🛡️</span><div className="sk-name">Cybersecurity</div><div className="sk-level">Advanced</div><div className="progress-bar"><div className="progress-fill" data-w="85"></div></div></div>
            <div className="skill-card"><span className="sk-icon">⛓️</span><div className="sk-name">Blockchain</div><div className="sk-level">Intermediate</div><div className="progress-bar"><div className="progress-fill" data-w="68"></div></div></div>
            <div className="skill-card"><span className="sk-icon">🔍</span><div className="sk-name">Forensics</div><div className="sk-level">Advanced</div><div className="progress-bar"><div className="progress-fill" data-w="82"></div></div></div>
            <div className="skill-card"><span className="sk-icon">🗃️</span><div className="sk-name">DBMS</div><div className="sk-level">Expert</div><div className="progress-bar"><div className="progress-fill" data-w="90"></div></div></div>
            <div className="skill-card"><span className="sk-icon">⚙️</span><div className="sk-name">OS Architecture</div><div className="sk-level">Intermediate</div><div className="progress-bar"><div className="progress-fill" data-w="75"></div></div></div>
            <div className="skill-card"><span className="sk-icon">📱</span><div className="sk-name">Flutter</div><div className="sk-level">Advanced</div><div className="progress-bar"><div className="progress-fill" data-w="80"></div></div></div>
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="reveal" style={{ textAlign: 'center' }}>
          <p className="section-tag">// Portfolio</p>
          <h2 className="section-title">Signature <span className="hl">Work</span></h2>
        </div>
        <div className="projects-grid">
          <div className="project-card featured reveal">
            <div className="featured-badge">&#11088; Featured</div>
            <div className="project-banner p-lifi"><div className="lifi-beam"></div>&#128161;</div>
            <div className="project-info">
              <div className="project-tags"><span className="tag">Next.js</span><span className="tag">React.js</span><span className="tag">JavaScript</span><span className="tag">TailwindCss</span></div>
              <div className="project-name">Uniview Studio Pro</div>
              <div className="project-desc">A Universal File Openar That can open all files including audio,video,code,database,pdf,word and many more.</div>
              <div className="project-links">
                <a className="proj-btn primary" href="https://uniview-studio-pro.netlify.app/" target="_blank" rel="noreferrer">View Project</a>
              </div>
            </div>
          </div>
          <div className="project-card reveal">
            <div className="project-banner p-web">&#128187;</div>
            <div className="project-info">
              <div className="project-tags"><span className="tag">React</span><span className="tag">UI/UX</span><span className="tag">Vite</span></div>
              <div className="project-name">3D Professional Portfolio</div>
              <div className="project-desc">Built with React.js and deployed on Vercel. Features interactive 3D elements, futuristic animations, and full mobile responsiveness for a professional presence.</div>
              <div className="project-links">
                <a className="proj-btn primary" href="https://github.com/vanrajsinh0011" target="_blank" rel="noreferrer">GitHub &rarr;</a>
                <a className="proj-btn primary" href="https://pritesh-patel-portfolio.netlify.app/" target="_blank" rel="noreferrer">View Project</a>
              </div>
            </div>
          </div>
          <div className="project-card reveal">
            <div className="project-banner p-algo">&#9881;</div>
            <div className="project-info">
              <div className="project-tags"><span className="tag">PHP</span><span className="tag">MVC</span><span className="tag">SQL</span></div>
              <div className="project-name">Library Management System</div>
              <div className="project-desc">A Library Management System that manage the books records and store the information of book published,user,rent and over diew for user.</div>
              <div className="project-links">
                <a className="proj-btn primary" href="https://github.com/vanrajsinh0011" target="_blank" rel="noreferrer">GitHub &rarr;</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience">
        <div className="reveal" style={{ textAlign: 'center' }}>
          <p className="section-tag">// Timeline</p>
          <h2 className="section-title">My <span className="hl">Journey</span></h2>
        </div>
        <div className="timeline">
          <div className="timeline-item reveal">
            <div className="tl-dot"></div>
            <div className="tl-year">2026 &mdash; Present</div>
            <div className="tl-title">M.Sc. (IT) || SEM II</div>
            <div className="tl-company">CHARUSAT UNIVERSITY &middot; Information Technology</div>
            <div className="tl-desc">Deepening expertise in  advanced web systems,database and cloud storage, application development,full stack development( MEAN & MERN ) as part of the Master's program.</div>
          </div>
          <div className="timeline-item reveal">
            <div className="tl-dot"></div>
            <div className="tl-year">2026</div>
            <div className="tl-title">Uniview Studio Pro &amp; Created using Next.js , tailwindcss and JavaScript </div>
            <div className="tl-company">next js techonology developer</div>
            <div className="tl-desc">Developed and deployed the universal file openar that can open all files including audio,video,code,database,pdf,word and many more.</div>
          </div>
          <div className="timeline-item reveal">
            <div className="tl-dot"></div>
            <div className="tl-year">2025</div>
            <div className="tl-title">Library Management System &amp; Created using PHP (MVC) and SQL</div>
            <div className="tl-company">website developer</div>
            <div className="tl-desc">Mastered React (Vite), PHP (MVC), and Flutter development.</div>
          </div>
          <div className="timeline-item reveal">
            <div className="tl-dot" style={{ boxShadow: '0 0 14px rgba(0,255,157,0.8)', background: 'linear-gradient(135deg,#00ff9d,#00d4ff)' }}></div>
            <div className="tl-year" style={{ color: 'var(--accent3)' }}>Future</div>
            <div className="tl-title">Strategic Collaboration</div>
            <div className="tl-company">Available for High-Impact Projects</div>
            <div className="tl-desc">Seeking opportunities to lead UI/UX and full-stack development initiatives for innovative tech firms and research labs.</div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="reveal" style={{ textAlign: 'center' }}>
          <p className="section-tag">// Connect</p>
          <h2 className="section-title">Let's <span className="hl">Build Together</span></h2>
          <p style={{ color: 'rgba(224,232,255,0.5)', fontSize: '15px', maxWidth: '500px', margin: '0 auto' }}>Currently available for professional collaboration and senior development roles.</p>
        </div>
        <div className="contact-wrap reveal">
          <div className="contact-card">
            <div className="contact-label">Primary Email</div>
            <div className="contact-email">pp0777814@gmail.com</div>
            <div className="social-grid">
              <a className="social-btn github" href="https://github.com/priteshpatel1509" target="_blank" rel="noreferrer">&#129419; GitHub</a>
              <a className="social-btn" href="gmaill:pp0777814@gmail.com">&#9993; Email Me</a>
              <a className="social-btn" href="https://www.linkedin.com/in/pritesh-patel-283ba830b/" target="_blank" rel="noreferrer">&#128279; LinkedIn</a>
              <a className="social-btn" href="#" target="_blank" rel="noreferrer">&#128196; Portfolio PDF</a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>Architected &amp; Developed by Pritesh Patel &nbsp;&middot;&nbsp; M.Sc. IT &nbsp;&middot;&nbsp; 2026</p>
      </footer>
    </>
  );
};

export default App;
