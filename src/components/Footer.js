import '../App.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="copyright-area">
        <p><a href="mailto:info@eufondovi.eu.hr">info@eufondovi.eu.hr</a></p>
        <p>&copy; {year} Sva prava pridržana.</p>
      </div>
    </footer>
  );
};

export default Footer;