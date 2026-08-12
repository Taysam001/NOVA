const services = [
  ["01", "Web Development", "Responsive websites and web interfaces engineered for speed, clarity and real-world use."],
  ["02", "Product Design", "Interfaces shaped around people, business goals and the moments that matter."],
  ["03", "Brand Identity", "Distinct visual systems that give ambitious businesses a recognizable point of view."],
  ["04", "Digital Strategy", "Clear digital direction connecting business objectives with meaningful experiences."]
];

export default function Services() {
  return (
    <section className="section container" id="services">
      <div className="section-head">
        <p className="eyebrow">What we do</p>
        <h2>Strategy, design<br/>and <em>technology.</em></h2>
      </div>
      <div className="service-grid">
        {services.map(([num, title, copy]) => (
          <article className="service" key={num}>
            <span className="service-num">{num}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
            <span className="service-arrow">↗</span>
          </article>
        ))}
      </div>
    </section>
  );
}