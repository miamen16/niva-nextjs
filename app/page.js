import { getExplainers } from "../lib/wordpress";
import SectionHeading from "../components/SectionHeading";
import ResourceCards from "../components/ResourceCards";
import ClimateQuiz from "../components/ClimateQuiz";

const actions = [
  { type: "5-STEP CHECKLIST", title: "Waste Less Food", desc: "Simple choices that can reduce food waste.", color: "yellow", symbol: "✳" },
  { type: "5-STEP CHECKLIST", title: "Save Water at Home", desc: "Practical ideas to make every drop count.", color: "blue", symbol: "◌" },
  { type: "HOW-TO GUIDE", title: "Create a Mini Food Garden", desc: "Turn a balcony or rooftop into a greener space.", color: "mint", symbol: "♧" },
  { type: "HOW-TO GUIDE", title: "Cope with a Heatwave", desc: "Stay safer and support others during extreme heat.", color: "coral", symbol: "☼" },
];

function ActionCards({ items }) {
  return (
    <div className="cards">
      {items.map((item, index) => (
        <a className="card" href="https://ourclimateourcommunity.org/" key={item.title}>
          <div className={`art ${item.color}`}><span>{item.symbol}</span><small>{String(index + 1).padStart(2, "0")}</small></div>
          <div className="card-copy"><small>{item.type}</small><h3>{item.title}</h3><p>{item.desc}</p><b aria-hidden="true">↗</b></div>
        </a>
      ))}
    </div>
  );
}

export default async function Home() {
  const explainers = await getExplainers(4);

  return (
    <>
      <header className="header">
        <a className="brand" href="#home"><span>◒</span><b>Our Climate<br />Our Community</b></a>
        <nav aria-label="Main navigation"><a href="#understand">Understand</a><a href="#take-action">Take Action</a><a href="#quiz">Quiz</a><a href="#educators">Teach & Facilitate</a><a href="#directory">Get Involved</a></nav>
        <span className="lang">EN⌄</span>
      </header>
      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">✳ ONE SEA. MANY SHORES. ONE FUTURE.</p>
            <h1>Our Climate.<br /><em>Our Community.</em></h1>
            <p className="hero-desc">What climate change really means for life around the Mediterranean — and what we can do about it, together.</p>
            <div className="hero-actions"><a className="button dark" href="#understand">Explore the issues ↗</a><a className="text-link" href="#take-action">Find ways to act →</a></div>
            <p className="hero-note">Science made simple. <b>Action made possible.</b></p>
          </div>
          <div className="hero-art" role="img" aria-label="Illustration of a Mediterranean coastal landscape"><span className="sun" /><span className="art-caption">THE MEDITERRANEAN</span><div className="hill" /><div className="sea" /><div className="coast" /><span className="plant">♧</span><span className="art-bottom">OUR SHARED HOME ✳</span></div>
          <div className="hero-foot"><span>01 / UNDERSTAND</span><span>CLIMATE EDUCATION FOR THE MEDITERRANEAN</span><span>SCROLL TO EXPLORE ↓</span></div>
        </section>

        <section className="section" id="understand">
          <SectionHeading eyebrow="UNDERSTAND" title="Understanding Climate Change" accent="in the Mediterranean" description="Explore explainers published by Our Climate Our Community, loaded directly from the WordPress REST API." />
          <ResourceCards items={explainers} emptyMessage="We couldn't load explainers right now. Please try again in a moment." />
          <div className="section-foot"><span>KNOWLEDGE IS A STARTING POINT</span><a href="https://ourclimateourcommunity.org/" target="_blank" rel="noreferrer">Explore all resources →</a></div>
        </section>

        <section className="section alternate" id="take-action">
          <SectionHeading eyebrow="TAKE ACTION" title="Small steps." accent="Shared impact." description="Discover practical ways to make a difference — individually, with your family, and in your community." />
          <ActionCards items={actions} />
          <div className="section-foot"><span>EVERY ACTION COUNTS</span><a href="https://ourclimateourcommunity.org/" target="_blank" rel="noreferrer">Explore all guides →</a></div>
        </section>

        <ClimateQuiz />

        <section className="section educators" id="educators">
          <div><p className="eyebrow">✳ TEACH & FACILITATE</p><h2>Learn together.<br /><em>Shape tomorrow.</em></h2><p>Ready-to-use activities and tools for educators working with young people across the Mediterranean. Bring climate conversations into classrooms, youth groups and community spaces.</p><a className="button dark" href="https://ourclimateourcommunity.org/" target="_blank" rel="noreferrer">Explore teaching resources ↗</a></div>
          <div className="edu-art"><span>✳</span><b>IDEAS GROW<br />WHEN WE SHARE.</b></div>
        </section>

        <section className="section directory" id="directory">
          <p className="eyebrow">✳ GET INVOLVED</p><h2>Good things happen<br /><em>when we connect.</em></h2><p>Connect with organizations working on climate action, community empowerment, education and youth engagement across the Mediterranean.</p><a className="button dark" href="https://ourclimateourcommunity.org/" target="_blank" rel="noreferrer">Explore the organization directory ↗</a>
        </section>

        <section className="section newsletter">
          <div><p className="eyebrow">✳ STAY CONNECTED</p><h2>One Mediterranean.<br /><em>Many ways to make a difference.</em></h2><p>Get stories, updates and practical climate tips from across our shared region.</p></div>
          <form onSubmit={(event) => { event.preventDefault(); alert("Connect a newsletter provider before launch."); }}><label htmlFor="email">YOUR EMAIL ADDRESS</label><div className="email-row"><input id="email" type="email" placeholder="you@example.com" required /><button aria-label="Subscribe">↗</button></div><small>Newsletter integration required before launch.</small></form>
        </section>
      </main>
      <footer className="footer">
        <div className="footer-top"><a className="brand" href="#home"><span>◒</span><b>Our Climate<br />Our Community</b></a><p>Protecting what we share:<br /><strong>our climate and our Mediterranean.</strong></p><div><a href="#understand">Understand</a><a href="#take-action">Take action</a><a href="#educators">Teach & facilitate</a><a href="#directory">Get involved</a></div></div>
        <div className="partners"><span>IN COLLABORATION WITH</span><b>WES-BCA</b><b>European Union</b><b>Mediterranean Partners</b></div>
        <p className="copyright">© 2026 Our Climate – Our Community · Next.js</p>
      </footer>
    </>
  );
}
