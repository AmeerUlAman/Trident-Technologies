import Link from "next/link";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Branding Section */}
        <div className="footer-branding">
          <h2>Trident Softwares</h2>
          <p>Innovating the Future with Tech Solutions</p>
        </div>

        {/* Navigation Section */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Social Section */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <ul>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Trident Softwares. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
