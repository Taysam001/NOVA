import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="nav-wrap">
      <nav className="nav container">
        <a href="#top" className="brand" onClick={close}>NOVA<span>®</span></a>
        <div className={`nav-links ${open ? "open" : ""}`}>
          <a href="#work" onClick={close}>Work</a>
          <a href="#services" onClick={close}>Services</a>
          <a href="#approach" onClick={close}>Approach</a>
          <a href="#about" onClick={close}>About</a>
          <a href="#contact" className="nav-cta" onClick={close}>Start a project <ArrowUpRight size={15}/></a>
        </div>
        <button className="menu-btn" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
    </header>
  );
}