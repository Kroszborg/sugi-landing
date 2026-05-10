const LandingPage = () => {
  const SERIF = "'Playfair Display', Georgia, serif";
  const MONO  = "'DM Mono', 'Courier New', monospace";
  const FG    = "#e8e0d0";
  const MUTED = "#6b6b6b";
  const DIM   = "#2a2a2a";
  const BG    = "#0a0a0a";
  const SURF  = "#0f0f0f";
  const GOLD  = "#c9a96e";

  const scrollTo = (id) => { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: "smooth" }); };

  const features = [{"num":"01","title":"Intuitive Git Panels","desc":"Easily manage branches, commits, and files with interactive UI."},{"num":"02","title":"Multi-Account Support","desc":"Effortlessly switch between GitHub and GitLab accounts."},{"num":"03","title":"AI-Powered Commit Messages","desc":"Generate meaningful commit messages with AI assistance."}];
  const steps    = [{"num":"1","title":"Install Sugi","desc":"Download and set up Sugi in your terminal."},{"num":"2","title":"Connect Your Accounts","desc":"Link your GitHub and GitLab accounts for seamless access."},{"num":"3","title":"Explore Features","desc":"Navigate through branches, commits, and PRs effortlessly."}];

  return (
    <div style={{ background: BG, color: FG, fontFamily: MONO, minHeight: "100vh", overflowX: "hidden" }}>

      {/* NAV */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "rgba(10,10,10,0.92)", backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${DIM}`, padding: "0 48px", height: 64,
        display: "flex", alignItems: "center", justifyContent: "space-between"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 8, height: 8, background: GOLD, borderRadius: "50%" }} />
          <span style={{ fontFamily: SERIF, fontSize: 18, fontWeight: 600, letterSpacing: "-0.02em" }}>
            "sugi"
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 40 }}>
          <span onClick={() => scrollTo("features")} style={{ color: MUTED, fontSize: 12, cursor: "pointer", letterSpacing: "0.04em" }}>Features</span>
          <span onClick={() => scrollTo("how")} style={{ color: MUTED, fontSize: 12, cursor: "pointer", letterSpacing: "0.04em" }}>How it works</span>
          <button onClick={() => window.open("https://github.com/Kroszborg/sugi", "_blank")} style={{
            background: FG, color: BG, border: "none", cursor: "pointer",
            padding: "9px 22px", fontSize: 12, fontFamily: MONO, fontWeight: 600, letterSpacing: "0.04em"
          }}>
            "Get Started Now"
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        {/* Grid bg */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 0,
          backgroundImage: "linear-gradient(rgba(42,42,42,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(42,42,42,0.25) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 20%, black 60%, transparent)",
          maskImage: "linear-gradient(to bottom, transparent, black 20%, black 60%, transparent)"
        }} />
        {/* Glow */}
        <div style={{
          position: "absolute", top: -200, left: "50%", transform: "translateX(-50%)",
          width: 700, height: 700, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,169,110,0.06) 0%, transparent 70%)", zIndex: 0
        }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto", padding: "140px 48px 120px" }}>
          {/* Eyebrow */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 44 }}>
            <div style={{ width: 32, height: 1, background: GOLD }} />
            <span style={{ color: GOLD, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 500 }}>
              "Git management, simplified."
            </span>
          </div>
          {/* Headline split */}
          <h1 style={{
            fontFamily: SERIF, fontWeight: 700, lineHeight: 1.0,
            fontSize: "clamp(3.2rem, 6.5vw, 7rem)", letterSpacing: "-0.04em",
            margin: "0 0 8px 0", maxWidth: 880
          }}>
            "Master Git with"
          </h1>
          <h1 style={{
            fontFamily: SERIF, fontWeight: 700, fontStyle: "italic", lineHeight: 1.0,
            fontSize: "clamp(3.2rem, 6.5vw, 7rem)", letterSpacing: "-0.04em",
            margin: "0 0 48px 0", maxWidth: 880, color: "#c8bfaf"
          }}>
            "a terminal UI."
          </h1>
          {/* Sub + CTA row */}
          <div style={{ display: "flex", alignItems: "flex-end", gap: 80, flexWrap: "wrap" }}>
            <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.8, maxWidth: 420, margin: 0 }}>
              "Sugi enhances your Git workflow with intuitive panels and AI features. Manage everything from pull requests to interactive rebases seamlessly."
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, flexShrink: 0 }}>
              <button onClick={() => window.open("https://github.com/Kroszborg/sugi", "_blank")} style={{
                background: FG, color: BG, border: "none", cursor: "pointer",
                padding: "16px 40px", fontSize: 13, fontFamily: MONO, fontWeight: 600,
                letterSpacing: "0.06em", whiteSpace: "nowrap"
              }}>
                {"Get Started Now →"}
              </button>
              <span style={{ color: MUTED, fontSize: 11, textAlign: "center", letterSpacing: "0.04em" }}>
                Free to use. No account needed.
              </span>
            </div>
          </div>
        </div>
        {/* Scroll hint */}
        <div style={{ borderTop: `1px solid ${DIM}` }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 48px" }}>
            <span style={{ color: MUTED, fontSize: 11, letterSpacing: "0.12em" }}>SCROLL TO EXPLORE</span>
            <span style={{ color: DIM, fontSize: 11 }}>↓</span>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" style={{ background: SURF }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 48px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 56 }}>
            <p style={{ color: MUTED, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.2em", margin: 0 }}>What you get</p>
            <span style={{ color: DIM, fontSize: 11 }}>03 features</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0 }}>
            {features.map((f, i) => (
              <div key={i} style={{
                padding: "40px 36px 44px",
                borderTop: `1px solid ${DIM}`, borderBottom: `1px solid ${DIM}`,
                borderLeft: `1px solid ${DIM}`,
                borderRight: i === 2 ? `1px solid ${DIM}` : "none",
                position: "relative"
              }}>
                <div style={{
                  fontFamily: SERIF, fontSize: 80, fontWeight: 700,
                  color: "rgba(42,42,42,0.6)", position: "absolute",
                  top: 16, right: 20, lineHeight: 1, userSelect: "none"
                }}>{f.num}</div>
                <div style={{ width: 28, height: 2, background: GOLD, marginBottom: 28 }} />
                <h3 style={{ fontFamily: SERIF, fontSize: 21, fontWeight: 600, marginBottom: 14, lineHeight: 1.2, maxWidth: 200 }}>{f.title}</h3>
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.75, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" style={{ borderTop: `1px solid ${DIM}` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 48px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 64 }}>
            <p style={{ color: MUTED, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.2em", margin: 0 }}>How it works</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 48 }}>
            {steps.map((s, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
                  <div style={{
                    width: 40, height: 40, border: `1px solid ${DIM}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: SERIF, fontSize: 16, color: GOLD, flexShrink: 0
                  }}>{s.num}</div>
                  {i < 2 && <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${DIM}, transparent)` }} />}
                </div>
                <h4 style={{ fontFamily: SERIF, fontSize: 19, fontWeight: 600, marginBottom: 12, lineHeight: 1.2 }}>{s.title}</h4>
                <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.75, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section style={{
        borderTop: `1px solid ${DIM}`,
        background: "linear-gradient(135deg, #0f0e0c 0%, #0a0a0a 50%, #0d0c0a 100%)",
        position: "relative", overflow: "hidden"
      }}>
        <div style={{
          position: "absolute", top: -100, right: -100, width: 400, height: 400, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,169,110,0.05) 0%, transparent 70%)"
        }} />
        <div style={{
          maxWidth: 1100, margin: "0 auto", padding: "100px 48px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: 48, position: "relative", zIndex: 1
        }}>
          <div>
            <p style={{ color: GOLD, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 20 }}>Ready to ship?</p>
            <h2 style={{
              fontFamily: SERIF, fontWeight: 700, lineHeight: 1.05,
              fontSize: "clamp(2.2rem, 4.5vw, 4rem)", letterSpacing: "-0.03em", margin: 0, maxWidth: 560
            }}>
              Stop waiting.<br/>
              <em style={{ fontStyle: "italic", color: "#c8bfaf" }}>Start launching.</em>
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-end", flexShrink: 0 }}>
            <button onClick={() => window.open("https://github.com/Kroszborg/sugi", "_blank")} style={{
              background: FG, color: BG, border: "none", cursor: "pointer",
              padding: "18px 48px", fontSize: 14, fontFamily: MONO, fontWeight: 600,
              letterSpacing: "0.06em", whiteSpace: "nowrap"
            }}>
              {"Get Started Now →"}
            </button>
            <span style={{ color: MUTED, fontSize: 11 }}>Free · No signup · Instant results</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: `1px solid ${DIM}`, padding: "28px 48px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 6, height: 6, background: GOLD, borderRadius: "50%" }} />
          <span style={{ fontFamily: SERIF, fontSize: 15, color: MUTED }}>"sugi"</span>
        </div>
        <span style={{ color: DIM, fontSize: 11, letterSpacing: "0.08em" }}>Built with LaunchKit</span>
      </footer>

    </div>
  );
};