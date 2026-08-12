import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero container" id="top">
      <div className="hero-copy">
        <p className="eyebrow">Digital growth studio · Lagos / Worldwide</p>
        <h1>Digital experiences built to <em>move</em> your business forward.</h1>
        <p className="hero-sub">
          We design and develop high-performing websites and digital products
          for ambitious brands ready to grow.
        </p>
        <div className="hero-actions">
          <a className="btn btn-dark" href="#work">View our work <ArrowDownRight size={17}/></a>
          <a className="text-link" href="#contact">Start a project <ArrowUpRight size={16}/></a>
        </div>
      </div>

      <div className="hero-art" aria-label="Abstract digital interface artwork">
        <div className="orb orb-one"></div>
        <div className="orb orb-two"></div>
        <div className="hero-card hero-card-main">
          <span>NOVA / 01</span>
          <strong>Ideas<br/>into<br/><i>impact.</i></strong>
          <div className="card-line"></div>
          <small>Strategy · Design · Development</small>
        </div>
        <div className="hero-card hero-card-mini">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDownRight size={19}/>
        </div>
      </div>
    </section>
  );
}