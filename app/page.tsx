import Link from "next/link";

const plugins = [
  {
    name: "FREECODER",
    category: "Spectral Processor",
    description:
      "Spectral morphing workstation — capture any sound and use it as a living spectral donor for freeze, granular, phrase loop, and MIDI instrument processing.",
    price: "$29",
    link: "/freecoder",
  },
  {
    name: "HALATION",
    category: "Feedback Pitch Ecosystem",
    description:
      "Split your signal into up to eight pitch-shifted feedback paths that bloom from subtle harmonic doubler to self-generating ambient drone — shoegaze shimmer, dark overtone stacks, and everything between.",
    price: "$19",
    link: "#",
  },
];

export default function Home() {
  return (
    <>
      {/* Nav */}
      <nav className="site-nav">
        <span className="site-logo">AMENT AUDIO</span>
        <div className="nav-links">
          {["Plugins", "About", "Contact"].map((label) => (
            <a key={label} href={`#${label.toLowerCase()}`} className="nav-link">
              {label.toUpperCase()}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <h1 className="hero-title">AMENT AUDIO</h1>
        <p className="hero-sub">FREE VST PLUGINS FOR MODERN PRODUCERS</p>
        <a href="#plugins" className="hero-cta">
          EXPLORE PLUGINS
        </a>
      </section>

      {/* Plugins */}
      <section id="plugins" className="plugins-section">
        <h2 className="section-label">PLUGINS</h2>
        <div className="plugin-grid">
          {plugins.map((plugin) => (
            <div key={plugin.name} className="plugin-card">
              <div className="plugin-card-header">
                <span className="plugin-category">{plugin.category.toUpperCase()}</span>
                <span className="plugin-price">{plugin.price}</span>
              </div>
              <h3 className="plugin-name">{plugin.name}</h3>
              <p className="plugin-desc">{plugin.description}</p>
              <Link href={plugin.link} className="plugin-link">
                VIEW PLUGIN →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        © {new Date().getFullYear()} AMENT AUDIO — ALL RIGHTS RESERVED
      </footer>
    </>
  );
}
