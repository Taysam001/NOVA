const steps = [
  ["01", "Discover", "Understand the business, audience and problem before making anything."],
  ["02", "Define", "Turn research and goals into a focused digital direction."],
  ["03", "Design", "Create an interface around clarity, usability and brand character."],
  ["04", "Develop", "Build a responsive, accessible experience with clean frontend architecture."],
  ["05", "Refine", "Test, polish and prepare the experience for launch."]
];

export default function Approach() {
  return (
    <section className="section approach container" id="approach">
      <div className="section-head">
        <p className="eyebrow">Our approach</p>
        <h2>Good work doesn't<br/>happen by <em>accident.</em></h2>
      </div>
      <div className="steps">
        {steps.map(([num, title, copy]) => (
          <article className="step" key={num}>
            <span>{num}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}