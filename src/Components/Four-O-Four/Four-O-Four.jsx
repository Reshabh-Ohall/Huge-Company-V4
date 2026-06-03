import { Link } from "react-router-dom";
import "./Four-O-Four.css";

export default function NotFoundC() {
  return (
    <div className="nf-container">
      <div className="nf-card">
        <h1 className="nf-code">404</h1>
        <h2 className="nf-title">Page Not Found</h2>
        <p className="nf-text">
          This page is under development or doesn’t exist yet.
        </p>

        <div className="nf-actions">
          <Link to="/home/" className="nf-btn primary">Go Home</Link>
          <Link to="/contact/" className="nf-btn secondary">Contact</Link>
        </div>

        <div className="nf-links">
          <Link to="/about/">About</Link>
          <Link to="/platform/">Platform</Link>
          <Link to="/market/">Market</Link>
        </div>
      </div>
    </div>
  );
}