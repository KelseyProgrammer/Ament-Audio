import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FREECODER — User Manual",
  description: "Complete user manual for FREECODER Spectral Morphing Workstation v0.2.13",
};

const s: Record<string, React.CSSProperties> = {
  page: { fontFamily: "'Courier New', monospace", color: "#e0e0e0", background: "rgba(8,8,10,0.88)", minHeight: "100vh" },
  topnav: { padding: "1.25rem 2rem", borderBottom: "1px solid #1e1e1e", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" as const, gap: "1rem" },
  backLink: { color: "#39ff6a", textDecoration: "none", fontSize: "0.75rem", letterSpacing: "0.15em" },
  navLinks: { display: "flex", gap: "1.5rem", flexWrap: "wrap" as const },
  navLink: { color: "rgba(255,255,255,0.55)", textDecoration: "none", fontSize: "0.7rem", letterSpacing: "0.12em" },
  wrap: { maxWidth: "780px", margin: "0 auto", padding: "0 2rem 6rem" },
  header: { padding: "4rem 0 2.5rem", textAlign: "center" as const },
  h1: { fontFamily: "var(--font-abril), Georgia, serif", fontSize: "clamp(2rem, 7vw, 4rem)", letterSpacing: "0.2em", color: "#fff", marginBottom: "0.75rem", lineHeight: 1 },
  subtitle: { fontSize: "0.8rem", letterSpacing: "0.15em", color: "#39ff6a" },
  divider: { borderTop: "1px solid #1e1e1e", margin: "3rem 0" },
  sectionLabel: { fontSize: "0.6rem", letterSpacing: "0.3em", color: "#888", marginBottom: "1.25rem" },
  h2: { fontSize: "1rem", fontWeight: 700, letterSpacing: "0.15em", color: "#fff", marginBottom: "1.25rem", marginTop: "2.5rem" },
  h3: { fontSize: "0.8rem", letterSpacing: "0.15em", color: "#39ff6a", marginBottom: "0.75rem", marginTop: "1.75rem" },
  p: { fontSize: "0.85rem", color: "#ccc", lineHeight: 1.85, marginBottom: "1rem" },
  ol: { fontSize: "0.85rem", color: "#ccc", lineHeight: 1.85, marginBottom: "1rem", paddingLeft: "1.5rem" },
  ul: { fontSize: "0.85rem", color: "#ccc", lineHeight: 1.85, marginBottom: "1rem", paddingLeft: "1.5rem" },
  tip: { background: "#001a08", border: "1px solid #003a14", padding: "1rem 1.25rem", fontSize: "0.78rem", color: "#39ff6a", lineHeight: 1.8, marginTop: "1rem", marginBottom: "1rem" },
  note: { background: "#1a1200", border: "1px solid #3a2a00", padding: "1rem 1.25rem", fontSize: "0.78rem", color: "#aa8800", lineHeight: 1.8, marginTop: "1rem", marginBottom: "1rem" },
  table: { width: "100%", borderCollapse: "collapse" as const, marginBottom: "1.5rem", fontSize: "0.78rem" },
  th: { textAlign: "left" as const, padding: "0.6rem 0.75rem", fontSize: "0.65rem", letterSpacing: "0.12em", color: "#888", borderBottom: "1px solid #2a2a2a", whiteSpace: "nowrap" as const },
  td: { padding: "0.65rem 0.75rem", color: "#ccc", borderBottom: "1px solid #1a1a1a", verticalAlign: "top" as const },
  tdLabel: { padding: "0.65rem 0.75rem", color: "#39ff6a", borderBottom: "1px solid #1a1a1a", whiteSpace: "nowrap" as const, verticalAlign: "top" as const, fontSize: "0.78rem" },
  toc: { background: "#0d0d0d", border: "1px solid #1e1e1e", padding: "1.5rem 2rem", marginBottom: "3rem" },
  tocItem: { display: "block", color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: "0.8rem", lineHeight: 2, letterSpacing: "0.05em" },
  tocSub: { display: "block", color: "rgba(255,255,255,0.4)", textDecoration: "none", fontSize: "0.75rem", lineHeight: 1.8, letterSpacing: "0.05em", paddingLeft: "1.25rem" },
  footer: { borderTop: "1px solid #1e1e1e", padding: "2rem", textAlign: "center" as const, fontSize: "0.7rem", letterSpacing: "0.1em", color: "#888" },
};

export default function FreecoderManual() {
  return (
    <div style={s.page}>
      {/* Top nav */}
      <div style={s.topnav}>
        <Link href="/freecoder" style={s.backLink}>← FREECODER</Link>
        <div style={s.navLinks}>
          {[["Quick Start", "#quick-start"], ["Controls", "#controls"], ["Workflows", "#workflows"], ["MIDI Mode", "#midi"], ["Presets", "#presets"], ["Tips", "#tips"]].map(([label, href]) => (
            <a key={label} href={href} style={s.navLink}>{label.toUpperCase()}</a>
          ))}
        </div>
      </div>

      <div style={s.wrap}>
        {/* Header */}
        <header style={s.header}>
          <h1 style={s.h1}>FREECODER</h1>
          <p style={s.subtitle}>USER MANUAL — v0.2.13</p>
        </header>

        {/* TOC */}
        <div style={s.toc}>
          <div style={{ ...s.sectionLabel, marginBottom: "1rem" }}>CONTENTS</div>
          {[
            ["1. Quick Start", "#quick-start"],
            ["2. How It Works", "#how-it-works"],
            ["3. Controls Reference", "#controls"],
            ["4. Display Panel", "#display"],
            ["5. Effect Mode Workflows", "#workflows"],
            ["6. MIDI Instrument Mode", "#midi"],
            ["7. Presets", "#presets"],
            ["8. Import / Export", "#import-export"],
            ["9. Tips & Techniques", "#tips"],
          ].map(([label, href]) => (
            <a key={label} href={href} style={s.tocItem}>{label}</a>
          ))}
        </div>

        {/* 1. Quick Start */}
        <section id="quick-start">
          <div style={s.sectionLabel}>01</div>
          <h2 style={{ ...s.h2, marginTop: 0 }}>QUICK START</h2>
          <p style={s.p}>The plugin requires a donor recording. Initial workflow:</p>
          <ol style={s.ol}>
            <li>Route audio into the DAW track (vocals, guitar, synth pad, etc.)</li>
            <li>Press REC; LED lights green. Perform for up to 5 seconds.</li>
            <li>Press REC again to stop (or auto-stop at record length)</li>
            <li>Press FREEZE. Live input now morphs with donor&apos;s spectral character.</li>
            <li>Sweep MORPH to blend phrase playback (left) with spectral freeze (right)</li>
            <li>Adjust DRY·WET to preference</li>
          </ol>
          <div style={s.tip}>Tip: Enable AUTO before recording — FREEZE will engage automatically the moment recording stops.</div>
        </section>

        <div style={s.divider} />

        {/* 2. How It Works */}
        <section id="how-it-works">
          <div style={s.sectionLabel}>02</div>
          <h2 style={{ ...s.h2, marginTop: 0 }}>HOW IT WORKS</h2>
          <p style={s.p}>FREECODER splits processing into two independent paths, blended via the MORPH knob:</p>

          <h3 style={s.h3}>SPECTRAL FREEZE PATH (MORPH → RIGHT)</h3>
          <p style={s.p}>Every 512 samples, a 2048-point FFT analyzes both live input and donor recording. The donor&apos;s magnitude spectrum blends onto the live input&apos;s magnitudes. Phase vocoder processing maintains stable frozen sound rather than metallic artifacts. Live signal continuously cross-pollinates with donor&apos;s timbral character.</p>

          <h3 style={s.h3}>PHRASE LOOP PATH (MORPH → LEFT)</h3>
          <p style={s.p}>Donor recording plays back as looping audio phrase, pitch-shifted and/or scattered by PITCH and SCATTER controls. With FORMANT increased, the phrase&apos;s spectral envelope reshapes through donor&apos;s vowel character — maintains tonal consistency during aggressive pitch-shifting.</p>

          <h3 style={s.h3}>GRANULAR LAYER</h3>
          <p style={s.p}>Independent of freeze and phrase, up to 16 Hann-windowed grains scatter across donor buffer according to GRAIN and SCATTER. Creates cloud-like texture or choppy glitch effects based on settings.</p>
        </section>

        <div style={s.divider} />

        {/* 3. Controls */}
        <section id="controls">
          <div style={s.sectionLabel}>03</div>
          <h2 style={{ ...s.h2, marginTop: 0 }}>CONTROLS REFERENCE</h2>

          <h3 style={s.h3}>FOOTSWITCHES</h3>
          <table style={s.table}>
            <thead><tr><th style={s.th}>BUTTON</th><th style={s.th}>TYPE</th><th style={s.th}>DESCRIPTION</th></tr></thead>
            <tbody>
              <tr><td style={s.tdLabel}>REC</td><td style={s.td}>Toggle</td><td style={s.td}>Edge-triggered. First press starts recording into active donor slot (up to set record length). Second press or auto-stop ends recording. LED green during recording.</td></tr>
              <tr><td style={s.tdLabel}>FREEZE</td><td style={s.td}>Toggle</td><td style={s.td}>Engages spectral freeze and phrase playback. When lit, donor is active and processing begins. Disengaging smoothly fades effect out. With ADSR on, envelope shapes engage transition.</td></tr>
            </tbody>
          </table>

          <h3 style={s.h3}>STRIP SLIDERS</h3>
          <table style={s.table}>
            <thead><tr><th style={s.th}>CONTROL</th><th style={s.th}>RANGE</th><th style={s.th}>DESCRIPTION</th></tr></thead>
            <tbody>
              <tr><td style={s.tdLabel}>MORPH</td><td style={s.td}>0 – 1</td><td style={s.td}>Blends between processing paths. Full left = phrase loop dominates. Full right = spectral freeze dominates. Centre position mixes both evenly.</td></tr>
              <tr><td style={s.tdLabel}>DRY·WET</td><td style={s.td}>0 – 1</td><td style={s.td}>Final blend between unprocessed (dry) signal and FREECODER output (wet). 0 = transparent; 1 = fully wet. For subtle blending, set 0.3–0.5.</td></tr>
            </tbody>
          </table>

          <h3 style={s.h3}>PAD KNOBS</h3>
          <table style={s.table}>
            <thead><tr><th style={s.th}>KNOB</th><th style={s.th}>RANGE</th><th style={s.th}>DESCRIPTION</th></tr></thead>
            <tbody>
              <tr><td style={s.tdLabel}>GRAIN</td><td style={s.td}>0 – 1</td><td style={s.td}>Amount of granular texture mixed in. 0 = grain engine silent. 1 = dense overlapping grains continuously scrub donor buffer. Works independently of FREEZE and PHRASE.</td></tr>
              <tr><td style={s.tdLabel}>SCATTER</td><td style={s.td}>0 – 1</td><td style={s.td}>Controls position randomisation for grains and phrase playhead. 0 = grains evenly spaced, phrase loops cleanly. Higher values = increasingly chaotic, stutter-like playback.</td></tr>
              <tr><td style={s.tdLabel}>FORMANT</td><td style={s.td}>0 – 1</td><td style={s.td}>In spectral freeze mode: how strongly donor&apos;s spectral envelope transfers onto live input. In phrase mode: routes phrase playback through spectral shaping applying donor&apos;s formant envelope.</td></tr>
              <tr><td style={s.tdLabel}>PITCH</td><td style={s.td}>−12 – +12 st</td><td style={s.td}>Pitch-shifts phrase playback in semitones. Does not affect spectral freeze path. Fractional values (e.g. −0.3 st) valid for subtle detune effects.</td></tr>
            </tbody>
          </table>

          <h3 style={s.h3}>PHRASE CONTROLS</h3>
          <table style={s.table}>
            <thead><tr><th style={s.th}>BUTTON</th><th style={s.th}>DESCRIPTION</th></tr></thead>
            <tbody>
              <tr><td style={s.tdLabel}>PHRASE</td><td style={s.td}>Independently engages phrase loop playback. PHRASE and FREEZE can be on simultaneously — useful for layering looping phrase under frozen spectral bed.</td></tr>
              <tr><td style={s.tdLabel}>REVERSE</td><td style={s.td}>Reverses phrase loop playback direction. Takes effect immediately without clicking. Also reverses scatter jumps so stutter texture stays coherent.</td></tr>
            </tbody>
          </table>

          <h3 style={s.h3}>RECORD OPTIONS</h3>
          <table style={s.table}>
            <thead><tr><th style={s.th}>CONTROL</th><th style={s.th}>RANGE</th><th style={s.th}>DESCRIPTION</th></tr></thead>
            <tbody>
              <tr><td style={s.tdLabel}>LENGTH</td><td style={s.td}>1, 2, 3, 5 s</td><td style={s.td}>Maximum record duration, snapped to four values. Shorter lengths = tighter, more rhythmic loops; longer lengths = capture full phrases or chords.</td></tr>
              <tr><td style={s.tdLabel}>AUTO</td><td style={s.td}>Toggle</td><td style={s.td}>When on, FREEZE automatically engages moment recording stops. Eliminates gap between capture and playback — useful for live performing.</td></tr>
            </tbody>
          </table>

          <h3 style={s.h3}>DONOR SLOTS (A / B / C)</h3>
          <p style={s.p}>Three independent donor slots maintain separate recordings. Clicking A, B, or C switches active slot instantly, applying that slot&apos;s audio to all processing.</p>
          <ul style={s.ul}>
            <li>Record into active slot by pressing REC</li>
            <li>Switch slots mid-performance for three completely different timbres</li>
            <li>Slots preserved when saving user preset (all three stored)</li>
            <li>Use IMP to load audio file into active slot</li>
          </ul>

          <h3 style={s.h3}>ADSR ENVELOPE</h3>
          <table style={s.table}>
            <thead><tr><th style={s.th}>CONTROL</th><th style={s.th}>RANGE</th><th style={s.th}>DESCRIPTION</th></tr></thead>
            <tbody>
              <tr><td style={s.tdLabel}>ATTACK</td><td style={s.td}>0.001 – 5 s</td><td style={s.td}>Time to reach full amplitude from silence.</td></tr>
              <tr><td style={s.tdLabel}>DECAY</td><td style={s.td}>0.001 – 5 s</td><td style={s.td}>Time to fall from peak to sustain level.</td></tr>
              <tr><td style={s.tdLabel}>SUSTAIN</td><td style={s.td}>0 – 1</td><td style={s.td}>Amplitude held while note / FREEZE is held on.</td></tr>
              <tr><td style={s.tdLabel}>RELEASE</td><td style={s.td}>0.001 – 10 s</td><td style={s.td}>Fade-out time after note off or FREEZE disengagement.</td></tr>
            </tbody>
          </table>
          <p style={s.p}>In effect mode, ADSR only active when toggled on, shaping FREEZE engage/disengage transition. In MIDI mode, ADSR always active and applied per-voice.</p>
        </section>

        <div style={s.divider} />

        {/* 4. Display Panel */}
        <section id="display">
          <div style={s.sectionLabel}>04</div>
          <h2 style={{ ...s.h2, marginTop: 0 }}>DISPLAY PANEL</h2>

          <h3 style={s.h3}>SPECTRUM VIEW (UPPER AREA)</h3>
          <p style={s.p}>Dual-layer FFT spectrum refreshes at ~15 Hz. Green filled area shows donor&apos;s magnitude spectrum. Dim white outline shows live input spectrum. Vertical scale: 0 dBFS (top) to −60 dBFS (bottom), with horizontal grid lines at −12, −24, −36, −48 dBFS.</p>

          <h3 style={s.h3}>WAVEFORM VIEW (LOWER AREA)</h3>
          <p style={s.p}>Donor buffer&apos;s waveform displayed as peak-normalised overview. When PHRASE engaged, vertical white line shows current playhead position moving through recording in real time. Playhead respects REVERSE direction and SCATTER jumps.</p>

          <h3 style={s.h3}>TUNER</h3>
          <p style={s.p}>Continuously estimates fundamental pitch of live input using FFT peak detection. Shows detected note name, MIDI note number, and cents offset (±50¢ relative equal temperament). Useful for tuning before recording or setting PITCH knob accurately.</p>
        </section>

        <div style={s.divider} />

        {/* 5. Workflows */}
        <section id="workflows">
          <div style={s.sectionLabel}>05</div>
          <h2 style={{ ...s.h2, marginTop: 0 }}>EFFECT MODE WORKFLOWS</h2>

          <h3 style={s.h3}>CLASSIC SPECTRAL FREEZE</h3>
          <ol style={s.ol}>
            <li>Set MORPH to full right, SCATTER to 0, GRAIN to 0</li>
            <li>Record held chord or sustained note. Hit FREEZE.</li>
            <li>Live playing now spectrally coloured by frozen chord. Adjust FORMANT to taste.</li>
          </ol>

          <h3 style={s.h3}>PHRASE LOOP WITH FORMANT SHAPING</h3>
          <ol style={s.ol}>
            <li>Set MORPH to left half. Record vocal phrase or melodic riff.</li>
            <li>Press PHRASE to start loop.</li>
            <li>Turn up FORMANT to route loop through donor&apos;s spectral envelope.</li>
            <li>Add SCATTER for rhythmic stutter. Add REVERSE for backwards playback.</li>
          </ol>

          <h3 style={s.h3}>GRANULAR CLOUD</h3>
          <ol style={s.ol}>
            <li>Record any textural source — room tone, breath, pad.</li>
            <li>Turn GRAIN to 0.7–1.0 and SCATTER to 0.4–0.8.</li>
            <li>Leave FREEZE off. Grain engine runs independently.</li>
            <li>DRY·WET at 0.4–0.6 blends cloud under live signal.</li>
          </ol>

          <h3 style={s.h3}>STACKED FREEZE + PHRASE</h3>
          <p style={s.p}>Both FREEZE and PHRASE can be active simultaneously. Layer looping phrase underneath spectral bed — phrase adds rhythmic movement while freeze provides sustained harmonic texture. Set MORPH to middle for even blend.</p>
          <div style={s.tip}>Tip: Use three donor slots to prepare three different donors (e.g. a pad, a rhythm, a melodic phrase) and switch between them live with A / B / C for instant timbre changes mid-performance.</div>
        </section>

        <div style={s.divider} />

        {/* 6. MIDI */}
        <section id="midi">
          <div style={s.sectionLabel}>06</div>
          <h2 style={{ ...s.h2, marginTop: 0 }}>MIDI INSTRUMENT MODE</h2>
          <p style={s.p}>Toggle EFFECT / MIDI button to switch FREECODER into polyphonic instrument. In MIDI mode, donor recording becomes playable chromatic instrument mapped across keyboard.</p>

          <h3 style={s.h3}>SETUP</h3>
          <ol style={s.ol}>
            <li>Record a donor sound — single note, chord, vowel, any timbre.</li>
            <li>Press EFFECT to switch to MIDI mode (button text changes).</li>
            <li>Set Root Note slider to match recorded pitch (e.g. C4 = 60). Tuner readout helps identify.</li>
            <li>Play notes from MIDI keyboard. Each note pitch-shifts donor playback relative to root note.</li>
          </ol>

          <h3 style={s.h3}>POLYPHONY & VOICES</h3>
          <p style={s.p}>Up to 8 simultaneous voices supported. Each voice has independent phrase playhead, pitch rate, and ADSR envelope. When all 8 voices occupied and new note arrives, oldest active voice stolen.</p>

          <h3 style={s.h3}>LATCH MODE</h3>
          <p style={s.p}>Enable LATCH to hold notes without keeping keys held. Each new note-on adds to held cluster; pressing held note again releases it. Useful for building sustained chords or live looping workflows without sustain pedal.</p>

          <h3 style={s.h3}>ADSR IN MIDI MODE</h3>
          <p style={s.p}>ADSR always active in MIDI mode. Each voice gets independent envelope instance triggered by note-on and released by note-off. Short attack + zero sustain = pluck; long attack + high sustain = pad swell.</p>

          <div style={s.tip}>Tip: Record a vowel sound (e.g. a held &quot;aah&quot;) and use it as MIDI instrument with FORMANT at 0.7. Melody notes will carry vowel&apos;s spectral character up and down scale — similar to formant-locked vocoder but fully polyphonic.</div>
          <div style={s.note}>Note: MIDI mode uses phrase playback internally. FREEZE button and spectral freeze path inactive in MIDI mode. Return to EFFECT mode to use spectral freeze.</div>
        </section>

        <div style={s.divider} />

        {/* 7. Presets */}
        <section id="presets">
          <div style={s.sectionLabel}>07</div>
          <h2 style={{ ...s.h2, marginTop: 0 }}>PRESETS</h2>
          <p style={s.p}>Use &lt; and &gt; to cycle presets; SAVE to save current state as named user preset. Factory presets restore parameters only — donor recordings preserved. User presets store everything including all three donor slots.</p>

          <h3 style={s.h3}>FACTORY PRESETS</h3>
          <table style={s.table}>
            <thead><tr><th style={s.th}>NAME</th><th style={s.th}>MODE</th><th style={s.th}>DESCRIPTION</th></tr></thead>
            <tbody>
              {[
                ["Init", "Freeze", "Neutral starting point. MORPH centre, all effects moderate."],
                ["Deep Freeze", "Freeze", "Full spectral freeze, no scatter, high formant. Dense, sustaining freeze effect."],
                ["Shimmer Freeze", "Freeze", "Full freeze with gentle scatter for slight shimmer texture."],
                ["Glitch Freeze", "Freeze", "Full scatter and grain over hard freeze. Broken, digital artifacts."],
                ["Phrase Loop", "Phrase", "Basic phrase loop playback with PHRASE pre-engaged. Morph left, minimal processing."],
                ["Phrase+Formant", "Phrase", "Phrase loop with high FORMANT. Good for pitch-shifting vocal phrases while preserving vowel character."],
                ["Phrase Scatter", "Phrase", "Looping phrase with heavy scatter — produces rhythmic stutter from any source."],
                ["Grain Cloud", "Grain", "Dense granular texture with high scatter. No freeze or phrase — pure grain engine."],
                ["Octave Shimmer", "Pitch", "PITCH at +12 st with moderate freeze. Adds shimmering octave-up layer."],
                ["Pitch Down", "Pitch", "PITCH at −12 st. Drop recorded phrase full octave."],
                ["MIDI Pad", "MIDI", "Slow attack, moderate release, high sustain. Best with held chord or pad donor."],
                ["MIDI Pluck", "MIDI", "Near-instant attack, zero sustain, short release. Produces pluck or pizzicato character from any donor."],
              ].map(([name, mode, desc]) => (
                <tr key={name}>
                  <td style={s.tdLabel}>{name}</td>
                  <td style={{ ...s.td, color: "#888", whiteSpace: "nowrap" }}>{mode}</td>
                  <td style={s.td}>{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3 style={s.h3}>SAVING USER PRESETS</h3>
          <p style={s.p}>Press SAVE to open save dialog. Preset file (<span style={{ color: "#39ff6a" }}>.freecoder</span>) stores complete state plus all three donor slot recordings. Store presets in <span style={{ color: "#aaa" }}>~/Documents/Ament Audio/FREECODER/Presets/</span> and they appear automatically in preset browser on next load.</p>
        </section>

        <div style={s.divider} />

        {/* 8. Import / Export */}
        <section id="import-export">
          <div style={s.sectionLabel}>08</div>
          <h2 style={{ ...s.h2, marginTop: 0 }}>IMPORT / EXPORT</h2>

          <h3 style={s.h3}>EXPORT DONOR TO WAV</h3>
          <p style={s.p}>Press EXP to export active donor slot&apos;s audio as standard WAV file. Useful for sharing captured timbre, using in another tool, or archiving performance recording.</p>

          <h3 style={s.h3}>IMPORT AUDIO FILE AS DONOR</h3>
          <p style={s.p}>Press IMP to load any audio file from disk (WAV, AIFF, FLAC, etc.) directly into active donor slot. File resampled to current session sample rate if needed. Lets you use pre-made samples, field recordings, or exported donors from other projects without re-recording live.</p>
          <div style={s.tip}>Tip: Import a drone or texture from your sample library as donor slot B, keep your live recording in slot A, and switch between them mid-session with a single button press.</div>
        </section>

        <div style={s.divider} />

        {/* 9. Tips */}
        <section id="tips">
          <div style={s.sectionLabel}>09</div>
          <h2 style={{ ...s.h2, marginTop: 0 }}>TIPS & TECHNIQUES</h2>

          <h3 style={s.h3}>GETTING THE BEST DONOR RECORDING</h3>
          <ul style={s.ul}>
            <li><span style={{ color: "#e0e0e0" }}>Sustained sounds work best</span> for spectral freeze — held chords, bowed strings, pad synths, vocals on vowel.</li>
            <li><span style={{ color: "#e0e0e0" }}>Rhythmic content</span> works better in phrase and grain modes — short loops, drum hits, stabs.</li>
            <li>Record at healthy level. Quiet donors produce noisy freeze output.</li>
            <li>Tuner helps match root note before switching to MIDI mode.</li>
          </ul>

          <h3 style={s.h3}>LAYERING WITH YOUR DRY SIGNAL</h3>
          <ul style={s.ul}>
            <li>Below 0.5 DRY·WET, spectral effect sits underneath unprocessed signal.</li>
            <li>Full wet (1.0) works well for totally transformed, stand-alone textures.</li>
            <li>For subtle harmonic thickening, try FREEZE at 0.3 wet with MORPH centre.</li>
          </ul>

          <h3 style={s.h3}>CONTROLLING SCATTER WITHOUT CRACKLING</h3>
          <p style={s.p}>SCATTER jumps phrase playhead instantaneously, but 512-sample crossfade applied automatically to prevent clicks. Very high scatter at high DRY·WET levels can still sound abrupt — intentional for glitch aesthetics. For smoother stutter, keep scatter below 0.6 and DRY·WET around 0.7.</p>

          <h3 style={s.h3}>MIDI + GRAIN LAYERING</h3>
          <p style={s.p}>In MIDI mode, GRAIN knob still runs grain engine. Turning GRAIN up in MIDI mode adds cloud of granular texture beneath pitched voices — effectively layering grain pad with melodic MIDI playing.</p>

          <h3 style={s.h3}>LATENCY COMPENSATION</h3>
          <p style={s.p}>FREECODER reports processing latency (~46 ms at 44.1 kHz, 2048 samples) to host. Modern DAWs compensate automatically on tracked instruments. If experiencing sync drift, check plugin delay compensation (PDC) enabled in DAW.</p>
          <div style={s.note}>Mono Input: FREECODER expects stereo in + stereo out. If DAW sends mono, duplicate input to both channels or use a utility plugin to make stereo before the FREECODER insert.</div>
        </section>
      </div>

      {/* Footer */}
      <footer style={s.footer}>
        FREECODER ·{" "}
        <a href="https://github.com/KelseyProgrammer/FREECODER" target="_blank" rel="noopener noreferrer" style={{ color: "#39ff6a", textDecoration: "none" }}>GITHUB</a>
        {" · "}
        <Link href="/freecoder" style={{ color: "#888", textDecoration: "none" }}>← FREECODER</Link>
        {" · "}© {new Date().getFullYear()} AMENT AUDIO · v0.2.13
      </footer>
    </div>
  );
}
