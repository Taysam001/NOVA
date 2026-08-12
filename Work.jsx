import { ArrowUpRight } from "lucide-react";
import { projects } from "./projects";

export default function Work() {
  return (
    <section className="section work-section container" id="work">
      <div className="section-head work-head">
        <div>
          <p className="eyebrow">Selected work</p>
          <h2>Built with intent.<br/><em>Designed to matter.</em></h2>
        </div>
        <a className="text-link" href="#contact">View all work <ArrowUpRight size={16}/></a>
      </div>
      <div className="project-list">
        {projects.map((project) => (
          <article className="project" key={project.name}>
            <div className={`project-visual ${project.className}`}>
              <div className="visual-label">{project.name}</div>
              <div className="visual-window">
                <div className="window-top"><span></span><span></span><span></span></div>
                <div className="window-content"></div>
              </div>
            </div>
            <div className="project-meta">
              <span>{project.number}</span>
              <div>
                <h3>{project.name}</h3>
                <p>{project.category}</p>
              </div>
              <p className="project-desc">{project.description}</p>
              <ArrowUpRight className="project-icon" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
