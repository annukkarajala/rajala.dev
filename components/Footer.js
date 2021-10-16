export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__copyright">
          <small>&copy; {new Date().getFullYear()} — Rajala.dev</small>
        </div>
      </div>
    </footer>
  );
}
