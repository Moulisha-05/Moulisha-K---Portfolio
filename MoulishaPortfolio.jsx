import { useState, useEffect } from "react";

const NAV_ITEMS = ["About", "Skills", "Projects", "Experience", "Contact"];

const SKILLS = {
  Technical: [
    { name: "Python", level: 65 },
    { name: "C", level: 65 },
    { name: "HTML", level: 40 },
    { name: "Java", level: 50 },
  ],
  Soft: ["Communication", "Time Management", "Problem Solving", "Continuous Learning"],
  Languages: [
    { lang: "Tamil", note: "Native" },
    { lang: "English", note: "Fluent" },
    { lang: "Hindi", note: "Spoken" },
    { lang: "Japanese", note: "N4" },
  ],
};

const PROJECTS = [
  {
    title: "Chat Application",
    tech: "Java",
    desc: "A real-time chat application built using Java, demonstrating socket programming and multi-threading concepts.",
    icon: "💬",
  },
  {
    title: "Hospital Management System",
    tech: "C",
    desc: "A comprehensive hospital management system in C for managing patient records, appointments, and staff information.",
    icon: "🏥",
  },
];

const CERTS = [
  { name: "Business Analytics & Project Management", org: "Coursera" },
  { name: "Blockchain Technology", org: "NPTEL" },
  { name: "Japanese Language Proficiency Test", org: "N5 Certified" },
];

const ACHIEVEMENTS = [
  { icon: "🏆", text: "Participated in Flipkart GRID 6.0" },
  { icon: "🥉", text: "Problem Solver Bronze Badge on CodeChef" },
  { icon: "📊", text: "Coursera Certification in Business Analysis" },
  { icon: "🎌", text: "Japanese Language Proficiency N4" },
];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("About");
  const [visible, setVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "Computer Science Student & Web Developer";

  useEffect(() => {
    setVisible(true);
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
  };

  return (
    <div style={styles.root}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0a0a0f; }
        ::-webkit-scrollbar-thumb { background: #d4a853; border-radius: 2px; }
        html { scroll-behavior: smooth; }

        .nav-link {
          background: none; border: none; cursor: pointer;
          font-family: 'DM Sans', sans-serif; font-size: 13px;
          letter-spacing: 2px; text-transform: uppercase;
          color: #888; padding: 6px 0; transition: color 0.3s;
          position: relative;
        }
        .nav-link::after {
          content: ''; position: absolute; bottom: 0; left: 0;
          width: 0; height: 1px; background: #d4a853; transition: width 0.3s;
        }
        .nav-link:hover { color: #d4a853; }
        .nav-link:hover::after, .nav-link.active::after { width: 100%; }
        .nav-link.active { color: #d4a853; }

        .skill-bar-fill {
          height: 100%; background: linear-gradient(90deg, #d4a853, #f0c878);
          border-radius: 2px; transition: width 1.5s ease;
        }

        .project-card {
          background: rgba(255,255,255,0.03); border: 1px solid rgba(212,168,83,0.15);
          border-radius: 2px; padding: 32px; transition: all 0.3s;
          cursor: default;
        }
        .project-card:hover {
          background: rgba(212,168,83,0.05);
          border-color: rgba(212,168,83,0.4);
          transform: translateY(-4px);
        }

        .cert-tag {
          display: inline-block; padding: 6px 14px;
          border: 1px solid rgba(212,168,83,0.3);
          color: #d4a853; font-size: 12px; letter-spacing: 1px;
          font-family: 'DM Sans', sans-serif;
          border-radius: 1px; margin: 4px;
          text-transform: uppercase;
        }

        .social-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 12px 24px; border: 1px solid rgba(212,168,83,0.4);
          color: #d4a853; text-decoration: none;
          font-family: 'DM Sans', sans-serif; font-size: 13px;
          letter-spacing: 1.5px; text-transform: uppercase;
          transition: all 0.3s; border-radius: 1px;
        }
        .social-btn:hover {
          background: rgba(212,168,83,0.1);
          border-color: #d4a853;
        }

        .section-appear {
          opacity: 0; transform: translateY(30px);
          animation: appear 0.8s ease forwards;
        }
        @keyframes appear {
          to { opacity: 1; transform: translateY(0); }
        }

        .float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }

        .grain-overlay {
          position: fixed; top: 0; left: 0; width: 100%; height: 100%;
          pointer-events: none; z-index: 0; opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
        }
      `}</style>

      <div className="grain-overlay" />

      {/* Decorative orbs */}
      <div style={{
        position: "fixed", top: "10%", right: "5%", width: 300, height: 300,
        borderRadius: "50%", background: "radial-gradient(circle, rgba(212,168,83,0.08) 0%, transparent 70%)",
        pointerEvents: "none", zIndex: 0
      }} />
      <div style={{
        position: "fixed", bottom: "10%", left: "5%", width: 400, height: 400,
        borderRadius: "50%", background: "radial-gradient(circle, rgba(212,168,83,0.04) 0%, transparent 70%)",
        pointerEvents: "none", zIndex: 0
      }} />

      {/* Nav */}
      <nav style={styles.nav}>
        <div style={styles.navInner}>
          <span style={styles.navLogo}>MK</span>
          <div style={styles.navLinks}>
            {NAV_ITEMS.map(item => (
              <button key={item} className={`nav-link ${activeSection === item ? "active" : ""}`}
                onClick={() => scrollTo(item)}>
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="About" style={styles.hero}>
        <div style={{ ...styles.heroContent, opacity: visible ? 1 : 0, transition: "opacity 1s ease 0.3s" }}>
          <div className="float" style={styles.heroMonogram}>M</div>
          <p style={styles.heroEyebrow}>✦ Available for Internships</p>
          <h1 style={styles.heroName}>Moulisha K</h1>
          <p style={styles.heroTagline}>
            <span style={{ color: "#d4a853" }}>{typedText}</span>
            <span style={{ color: "#d4a853", animation: "pulse 1s infinite" }}>|</span>
          </p>
          <p style={styles.heroBio}>
            A passionate Computer Science Engineering student at M Kumarasamy College of Engineering, Karur,
            with a CGPA of 7.7. I thrive at the intersection of technology and creativity, building practical
            software solutions while continuously expanding my horizons — including learning Japanese to explore
            global opportunities.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center", marginTop: 40 }}>
            <a href="https://www.linkedin.com/in/moulisha-k-" target="_blank" rel="noreferrer" className="social-btn">
              LinkedIn ↗
            </a>
            <a href="https://github.com/Moulisha-05" target="_blank" rel="noreferrer" className="social-btn">
              GitHub ↗
            </a>
            <a href="mailto:moulishak05@gmail.com" className="social-btn">
              Email ↗
            </a>
          </div>
        </div>
        <div style={styles.heroScroll}>
          <span style={styles.scrollLine} />
          <span style={styles.scrollLabel}>Scroll</span>
        </div>
      </section>

      {/* Skills */}
      <section id="Skills" style={styles.section}>
        <div style={styles.container} className="section-appear">
          <p style={styles.sectionEyebrow}>✦ Capabilities</p>
          <h2 style={styles.sectionTitle}>Skills & Languages</h2>

          <div style={styles.skillsGrid}>
            {/* Technical */}
            <div>
              <h3 style={styles.skillGroupTitle}>Technical</h3>
              {SKILLS.Technical.map(({ name, level }) => (
                <div key={name} style={{ marginBottom: 24 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                    <span style={styles.skillName}>{name}</span>
                    <span style={{ color: "#d4a853", fontSize: 13 }}>{level}%</span>
                  </div>
                  <div style={styles.skillBarBg}>
                    <div className="skill-bar-fill" style={{ width: `${level}%` }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div>
              <h3 style={styles.skillGroupTitle}>Languages</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                {SKILLS.Languages.map(({ lang, note }) => (
                  <div key={lang} style={styles.langCard}>
                    <div style={styles.langName}>{lang}</div>
                    <div style={styles.langNote}>{note}</div>
                  </div>
                ))}
              </div>
              <h3 style={{ ...styles.skillGroupTitle, marginTop: 36 }}>Soft Skills</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {SKILLS.Soft.map(s => (
                  <span key={s} className="cert-tag">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="Projects" style={{ ...styles.section, background: "rgba(255,255,255,0.01)" }}>
        <div style={styles.container} className="section-appear">
          <p style={styles.sectionEyebrow}>✦ Portfolio</p>
          <h2 style={styles.sectionTitle}>Projects</h2>
          <div style={styles.projectsGrid}>
            {PROJECTS.map((p) => (
              <div key={p.title} className="project-card">
                <div style={{ fontSize: 40, marginBottom: 20 }}>{p.icon}</div>
                <div style={styles.techTag}>{p.tech}</div>
                <h3 style={styles.projectTitle}>{p.title}</h3>
                <p style={styles.projectDesc}>{p.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 64 }}>
            <h3 style={styles.skillGroupTitle}>Certifications</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 20 }}>
              {CERTS.map(c => (
                <div key={c.name} style={styles.certCard}>
                  <div style={styles.certName}>{c.name}</div>
                  <div style={styles.certOrg}>{c.org}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="Experience" style={styles.section}>
        <div style={styles.container} className="section-appear">
          <p style={styles.sectionEyebrow}>✦ Journey</p>
          <h2 style={styles.sectionTitle}>Experience & Activities</h2>

          <div style={styles.timelineGrid}>
            {/* Internship */}
            <div style={styles.timelineItem}>
              <div style={styles.timelineDot} />
              <div style={styles.timelineDate}>Jul – Aug 2024</div>
              <h3 style={styles.timelineTitle}>Web Development Intern</h3>
              <div style={styles.timelineOrg}>Technohacks</div>
              <p style={styles.timelineDesc}>Gained hands-on experience in web development technologies during a focused internship program.</p>
            </div>
            <div style={styles.timelineItem}>
              <div style={styles.timelineDot} />
              <div style={styles.timelineDate}>2024</div>
              <h3 style={styles.timelineTitle}>MAKE-A-THON</h3>
              <div style={styles.timelineOrg}>M Kumarasamy College of Engineering</div>
              <p style={styles.timelineDesc}>Participated in a competitive hackathon focused on building innovative solutions.</p>
            </div>
            <div style={styles.timelineItem}>
              <div style={styles.timelineDot} />
              <div style={styles.timelineDate}>2023</div>
              <h3 style={styles.timelineTitle}>Paper Presentation</h3>
              <div style={styles.timelineOrg}>Bannari Amman College of Engineering, Erode</div>
              <p style={styles.timelineDesc}>Presented academic research paper at an inter-college technical symposium.</p>
            </div>
            <div style={styles.timelineItem}>
              <div style={styles.timelineDot} />
              <div style={styles.timelineDate}>2023</div>
              <h3 style={styles.timelineTitle}>Flipkart GRID 6.0</h3>
              <div style={styles.timelineOrg}>Flipkart</div>
              <p style={styles.timelineDesc}>Participated in Flipkart's prestigious national-level engineering challenge.</p>
            </div>
          </div>

          <div style={{ marginTop: 64 }}>
            <h3 style={styles.skillGroupTitle}>Achievements</h3>
            <div style={styles.achieveGrid}>
              {ACHIEVEMENTS.map(({ icon, text }) => (
                <div key={text} style={styles.achieveCard}>
                  <span style={{ fontSize: 28 }}>{icon}</span>
                  <span style={styles.achieveText}>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="Contact" style={{ ...styles.section, background: "rgba(255,255,255,0.01)" }}>
        <div style={{ ...styles.container, textAlign: "center" }} className="section-appear">
          <p style={styles.sectionEyebrow}>✦ Get In Touch</p>
          <h2 style={styles.sectionTitle}>Let's Connect</h2>
          <p style={{ color: "#888", fontFamily: "'DM Sans', sans-serif", maxWidth: 480, margin: "0 auto 40px", lineHeight: 1.8 }}>
            I'm actively looking for internships and opportunities to grow. Whether you have a project idea or just want to say hi — my inbox is always open.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
            <a href="mailto:moulishak05@gmail.com" className="social-btn" style={{ fontSize: 14 }}>
              moulishak05@gmail.com
            </a>
            <a href="tel:+919342762568" className="social-btn" style={{ fontSize: 14 }}>
              +91 93427 62568
            </a>
          </div>
          <p style={{ marginTop: 16, color: "#555", fontFamily: "'DM Sans', sans-serif", fontSize: 13 }}>
            📍 Trichy, Tamilnadu
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <span style={{ color: "#d4a853", fontFamily: "'Playfair Display', serif", fontSize: 18 }}>MK</span>
        <span style={{ color: "#444", fontFamily: "'DM Sans', sans-serif", fontSize: 12, letterSpacing: 2 }}>
          © 2024 MOULISHA K
        </span>
      </footer>
    </div>
  );
}

const styles = {
  root: {
    background: "#0a0a0f",
    color: "#e8e8e8",
    minHeight: "100vh",
    fontFamily: "'DM Sans', sans-serif",
    position: "relative",
  },
  nav: {
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
    background: "rgba(10,10,15,0.85)", backdropFilter: "blur(20px)",
    borderBottom: "1px solid rgba(212,168,83,0.1)",
  },
  navInner: {
    maxWidth: 1100, margin: "0 auto", padding: "20px 32px",
    display: "flex", alignItems: "center", justifyContent: "space-between",
  },
  navLogo: {
    fontFamily: "'Playfair Display', serif", fontSize: 24,
    color: "#d4a853", fontWeight: 900,
  },
  navLinks: { display: "flex", gap: 32 },

  hero: {
    minHeight: "100vh", display: "flex", flexDirection: "column",
    alignItems: "center", justifyContent: "center",
    textAlign: "center", padding: "120px 32px 80px", position: "relative",
  },
  heroContent: { maxWidth: 700, zIndex: 1 },
  heroMonogram: {
    fontFamily: "'Playfair Display', serif", fontSize: 120, fontWeight: 900,
    color: "rgba(212,168,83,0.06)", position: "absolute", top: "50%",
    left: "50%", transform: "translate(-50%, -55%)", lineHeight: 1, zIndex: 0,
    userSelect: "none", pointerEvents: "none",
  },
  heroEyebrow: {
    color: "#d4a853", fontSize: 12, letterSpacing: 3,
    textTransform: "uppercase", marginBottom: 24, fontWeight: 500,
  },
  heroName: {
    fontFamily: "'Playfair Display', serif", fontSize: 72, fontWeight: 900,
    lineHeight: 1.05, marginBottom: 20,
    background: "linear-gradient(135deg, #ffffff 40%, #d4a853 100%)",
    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
  },
  heroTagline: {
    fontSize: 18, color: "#aaa", marginBottom: 24,
    fontFamily: "'DM Sans', sans-serif", minHeight: 28,
  },
  heroBio: {
    color: "#666", lineHeight: 1.9, fontSize: 15,
    fontFamily: "'DM Sans', sans-serif", maxWidth: 580, margin: "0 auto",
  },
  heroScroll: {
    position: "absolute", bottom: 40, display: "flex",
    flexDirection: "column", alignItems: "center", gap: 8,
  },
  scrollLine: {
    display: "block", width: 1, height: 50,
    background: "linear-gradient(to bottom, #d4a853, transparent)",
    animation: "scroll-pulse 2s ease-in-out infinite",
  },
  scrollLabel: { color: "#555", fontSize: 11, letterSpacing: 3, textTransform: "uppercase" },

  section: { padding: "100px 32px" },
  container: { maxWidth: 1100, margin: "0 auto" },
  sectionEyebrow: {
    color: "#d4a853", fontSize: 12, letterSpacing: 3,
    textTransform: "uppercase", marginBottom: 16, fontWeight: 500,
  },
  sectionTitle: {
    fontFamily: "'Playfair Display', serif", fontSize: 48, fontWeight: 700,
    marginBottom: 56, color: "#fff",
  },

  skillsGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 },
  skillGroupTitle: {
    fontFamily: "'Playfair Display', serif", fontSize: 20, color: "#d4a853",
    marginBottom: 24, fontWeight: 600, letterSpacing: 1,
  },
  skillName: { color: "#ccc", fontSize: 14, fontWeight: 500 },
  skillBarBg: {
    height: 3, background: "rgba(255,255,255,0.06)",
    borderRadius: 2, overflow: "hidden",
  },
  langCard: {
    background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,168,83,0.12)",
    borderRadius: 2, padding: "20px 16px",
  },
  langName: { fontFamily: "'Playfair Display', serif", fontSize: 18, color: "#fff", marginBottom: 4 },
  langNote: { color: "#d4a853", fontSize: 12, letterSpacing: 1, textTransform: "uppercase" },

  projectsGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 },
  techTag: {
    display: "inline-block", padding: "4px 12px",
    background: "rgba(212,168,83,0.1)", color: "#d4a853",
    fontSize: 11, letterSpacing: 2, textTransform: "uppercase",
    borderRadius: 1, marginBottom: 16,
  },
  projectTitle: {
    fontFamily: "'Playfair Display', serif", fontSize: 24, color: "#fff",
    marginBottom: 12,
  },
  projectDesc: { color: "#777", lineHeight: 1.8, fontSize: 14 },

  certCard: {
    background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,168,83,0.1)",
    borderRadius: 2, padding: "20px 24px", flex: "0 0 auto",
  },
  certName: { color: "#ddd", fontSize: 14, marginBottom: 6, fontWeight: 500 },
  certOrg: { color: "#d4a853", fontSize: 12, letterSpacing: 1, textTransform: "uppercase" },

  timelineGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 },
  timelineItem: {
    background: "rgba(255,255,255,0.02)", border: "1px solid rgba(212,168,83,0.1)",
    borderRadius: 2, padding: "28px 28px 28px 40px", position: "relative",
  },
  timelineDot: {
    position: "absolute", left: 16, top: 32, width: 8, height: 8,
    borderRadius: "50%", background: "#d4a853",
  },
  timelineDate: { color: "#d4a853", fontSize: 12, letterSpacing: 2, textTransform: "uppercase", marginBottom: 10 },
  timelineTitle: { fontFamily: "'Playfair Display', serif", fontSize: 18, color: "#fff", marginBottom: 4 },
  timelineOrg: { color: "#666", fontSize: 13, marginBottom: 12 },
  timelineDesc: { color: "#666", fontSize: 13, lineHeight: 1.7 },

  achieveGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 20 },
  achieveCard: {
    display: "flex", alignItems: "center", gap: 16,
    background: "rgba(255,255,255,0.02)", border: "1px solid rgba(212,168,83,0.08)",
    borderRadius: 2, padding: "16px 20px",
  },
  achieveText: { color: "#aaa", fontSize: 14, lineHeight: 1.5 },

  footer: {
    borderTop: "1px solid rgba(212,168,83,0.1)", padding: "32px",
    display: "flex", justifyContent: "space-between", alignItems: "center",
    maxWidth: 1100, margin: "0 auto",
  },
};
