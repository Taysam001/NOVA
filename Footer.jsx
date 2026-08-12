import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-cta">
          <p className="eyebrow">Have an idea worth building?</p>
          <h2>Let's make<br/><em>something matter.</em></h2>
          <a className="btn btn-light" href="mailto:hello@nova.studio">Start a project <ArrowUpRight size={17}/></a>
        </div>
        <div className="footer-bottom">
          <div><a className="brand footer-brand" href="#top">NOVA<span>®</span></a><p>Digital experiences for ambitious brands.</p></div>
          <div className="footer-links">
            <a href="#work">Work</a><a href="#services">Services</a><a href="#about">About</a><a href="mailto:hello@nova.studio">Email</a>
          </div>
          <div className="footer-social"><a href="#">LinkedIn</a><a href="#">GitHub</a><a href="#">Instagram</a></div>
        </div>
        <div className="copyright"><span>© 2026 NOVA Studio</span><span>Built with intention.</span></div>
      </div>
    </footer>
  );
}