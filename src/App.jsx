import React from "react";
import { useEffect, useRef, useState } from "react";
import {
  Menu, X, Instagram, Youtube, Twitch, Crosshair, Crown, Flame,
  Shield, ChevronRight, Play, Target, Zap, Trophy, Gamepad2
} from "lucide-react";

const instagram = "https://www.instagram.com/ismartgaming2026/";

function Avatar3D() {
  return (
    <div className="avatar-stage" aria-label="Stylized 3D futuristic gaming character">
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="floor-grid" />
      <div className="avatar-glow" />
      <div className="character">
        <div className="character-backpack" />
        <div className="character-body">
          <div className="shoulder shoulder-left" />
          <div className="shoulder shoulder-right" />
          <div className="armor-chest"><span>IS</span></div>
          <div className="belt" />
        </div>
        <div className="character-neck" />
        <div className="character-head">
          <div className="helmet-top" />
          <div className="helmet-side left" />
          <div className="helmet-side right" />
          <div className="visor"><i /><i /></div>
          <div className="mask" />
        </div>
        <div className="arm arm-left" />
        <div className="arm arm-right" />
        <div className="leg leg-left" />
        <div className="leg leg-right" />
      </div>
      <div className="avatar-caption"><span className="live-dot" /> PLAYER ONLINE <b>2026</b></div>
      <div className="floating-chip chip-top"><Crown size={15}/> ELITE PLAYER</div>
      <div className="floating-chip chip-bottom"><Crosshair size={15}/> AIM • SKILL • VICTORY</div>
    </div>
  );
}


function KDGrowth() {
  const [value, setValue] = useState(1.0);
  const [active, setActive] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setActive(true);
        observer.disconnect();
      }
    }, { threshold: 0.35 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!active) return;
    let frame;
    const start = performance.now();
    const duration = 1800;
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(1 + 3.2 * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active]);

  return (
    <div className={`kd-growth ${active ? "kd-active" : ""}`} ref={sectionRef}>
      <div className="kd-copy">
        <div className="kd-label"><span className="kd-pulse" /> K/D RATIO EVOLUTION</div>
        <h3>FROM <span>1.0</span> <b>TO</b> <strong>{value.toFixed(1)}</strong></h3>
        <p>Consistency. Better aim. Smarter fights. The grind never stops.</p>
        <div className="kd-track"><span /></div>
        <div className="kd-track-labels"><span>STARTING K/D · 1.0</span><span>CURRENT K/D · 4.2</span></div>
      </div>
      <div className="kd-visual">
        <div className="kd-ring"><div className="kd-ring-inner"><strong>+320%</strong><small>GROWTH</small></div></div>
        <div className="kd-spark spark-one" /><div className="kd-spark spark-two" />
      </div>
      <div className="kd-chart" aria-hidden="true">
        <svg viewBox="0 0 600 120" preserveAspectRatio="none">
          <defs><linearGradient id="kdLine" x1="0" x2="1"><stop offset="0%" stopColor="#ff8a32"/><stop offset="100%" stopColor="#ffd36c"/></linearGradient></defs>
          <path className="kd-chart-fill" d="M0 105 C65 100 75 87 130 91 S205 72 250 78 S315 53 365 61 S440 26 480 37 S545 8 600 12 L600 120 L0 120 Z"/>
          <path className="kd-chart-line" d="M0 105 C65 100 75 87 130 91 S205 72 250 78 S315 53 365 61 S440 26 480 37 S545 8 600 12"/>
        </svg>
      </div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="noise" />
      <header className="topbar">
        <a className="logo" href="#home" onClick={closeMenu}><span className="logo-mark"><Crown size={19}/></span><span>iSMART<span className="gold">GAMING</span><small>OFFICIAL PLAYER ZONE</small></span></a>
        <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#about" onClick={closeMenu}>ABOUT</a>
          <a href="#stats" onClick={closeMenu}>STATS</a>
          <a href="#highlights" onClick={closeMenu}>HIGHLIGHTS</a>
          <a href="#contact" onClick={closeMenu}>CONTACT</a>
          <a className="nav-cta" href={instagram} target="_blank" rel="noreferrer"><Instagram size={16}/> FOLLOW</a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line"/> BATTLEGROUNDS • PLAYER PROFILE</div>
            <div className="season-tag"><Flame size={14}/> SEASON 2026 <span> / </span> THE NEXT LEVEL</div>
            <h1>PLAY<br/><span className="outline-text">FEARLESS.</span><br/><span className="gold-text">WIN SMART.</span></h1>
            <p className="hero-description">Welcome to the battleground of <strong>iSmart Gaming</strong>. Skill, strategy and clutch moments — this is where every match becomes a story.</p>
            <div className="hero-actions">
              <a className="button button-primary" href={instagram} target="_blank" rel="noreferrer"><Instagram size={18}/> FOLLOW THE JOURNEY <ChevronRight size={17}/></a>
              <a className="button button-ghost" href="#highlights"><Play size={16}/> EXPLORE HIGHLIGHTS</a>
            </div>
            <div className="social-proof"><div className="social-icons"><span><Instagram size={15}/></span><span><Youtube size={15}/></span><span><Twitch size={15}/></span></div><div><b>JOIN THE SQUAD</b><small>@ismartgaming2026</small></div></div>
          </div>
          <div className="hero-visual"><div className="visual-corner corner-a"/><div className="visual-corner corner-b"/><Avatar3D/><div className="vertical-label">ISG // PLAYER ONE</div></div>
          <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><div className="scroll-line"/></div>
        </section>

        <section className="intro section-wrap" id="about">
          <div className="section-kicker">01 / PLAYER PROFILE</div>
          <div className="section-heading-row"><div><h2>BUILT FOR THE<br/><span className="gold-text">BATTLEGROUND.</span></h2></div><p className="section-lead">Not just another player. A mindset built around smart moves, sharp aim and fearless teamwork.</p></div>
          <div className="feature-grid">
            <article className="feature-card"><div className="feature-icon"><Target/></div><span className="card-number">01</span><h3>PRECISION AIM</h3><p>Every shot matters. Stay focused, control recoil and make every opportunity count.</p></article>
            <article className="feature-card featured"><div className="feature-icon"><Shield/></div><span className="card-number">02</span><h3>SMART STRATEGY</h3><p>Read the zone, plan the rotation and make the right move when it matters most.</p></article>
            <article className="feature-card"><div className="feature-icon"><Zap/></div><span className="card-number">03</span><h3>CLUTCH ENERGY</h3><p>Stay calm under pressure. Turn difficult situations into unforgettable moments.</p></article>
          </div>
        </section>

        <section className="stats-section" id="stats">
          <div className="section-wrap">
            <div className="section-kicker">02 / PLAYER DATA</div>
            <div className="section-heading-row"><h2>THE PLAYER<br/><span className="gold-text">NUMBERS.</span></h2><p className="section-lead">Your profile. Your progress. Update these placeholders with your real in-game stats.</p></div>
            <div className="stats-grid">
              <div className="stat-box"><Crosshair/><strong>--</strong><span>IN-GAME ID</span><small>PLAYER IDENTIFICATION</small></div>
              <div className="stat-box"><Trophy/><strong>--</strong><span>CURRENT TIER</span><small>RANKED SEASON</small></div>
              <div className="stat-box"><Target/><strong>--</strong><span>BEST K/D</span><small>PERSONAL RECORD</small></div>
              <div className="stat-box"><Gamepad2/><strong>--</strong><span>FAVOURITE MAP</span><small>YOUR BATTLEGROUND</small></div>
            </div>
            <KDGrowth />
          </div>
        </section>

        <section className="highlights section-wrap" id="highlights">
          <div className="section-kicker">03 / GAME MOMENTS</div>
          <div className="section-heading-row"><h2>HIGHLIGHT<br/><span className="gold-text">REEL.</span></h2><p className="section-lead">The plays worth watching twice. Add your YouTube videos or Instagram reels to these cards.</p></div>
          <div className="highlight-grid">
            <a className="highlight-card highlight-one" href={instagram} target="_blank" rel="noreferrer"><div className="play-circle"><Play fill="currentColor"/></div><div><small>01 / GAMEPLAY</small><h3>CLUTCH MOMENTS</h3><span>WATCH THE PLAY <ChevronRight size={14}/></span></div></a>
            <a className="highlight-card highlight-two" href={instagram} target="_blank" rel="noreferrer"><div className="play-circle"><Play fill="currentColor"/></div><div><small>02 / SQUAD</small><h3>SQUAD WIPE</h3><span>WATCH THE PLAY <ChevronRight size={14}/></span></div></a>
            <a className="highlight-card highlight-three" href={instagram} target="_blank" rel="noreferrer"><div className="play-circle"><Play fill="currentColor"/></div><div><small>03 / MONTAGE</small><h3>BEST FINISHES</h3><span>WATCH THE PLAY <ChevronRight size={14}/></span></div></a>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-panel"><div className="contact-emblem"><Crown size={34}/></div><div className="section-kicker">04 / YOUR NEXT MOVE</div><h2>READY TO<br/><span className="gold-text">SQUAD UP?</span></h2><p>Follow iSmart Gaming for new gameplay, highlights and battleground updates.</p><a className="button button-primary" href={instagram} target="_blank" rel="noreferrer"><Instagram size={18}/> @ISMARTGAMING2026 <ChevronRight size={17}/></a><div className="contact-glow"/></div>
        </section>
      </main>

      <footer className="footer"><a className="logo footer-logo" href="#home"><span className="logo-mark"><Crown size={17}/></span><span>iSMART<span className="gold">GAMING</span><small>OFFICIAL PLAYER ZONE</small></span></a><span>© 2026 iSMART GAMING. FAN-MADE PLAYER PORTFOLIO.</span><a href={instagram} target="_blank" rel="noreferrer"><Instagram size={17}/> INSTAGRAM</a></footer>
    </div>
  );
}

export default App;