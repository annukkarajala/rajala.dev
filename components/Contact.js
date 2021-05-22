import ContactIllustr from '../svgs/contact-letter.svg';

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact__illustr">
        <ContactIllustr />
      </div>
      <div className="contact__text">
        <h2>Kiinnostuitko?</h2>
        <p>
          Tiputa viesti postilaatikkooni osoitteeseen{' '}
          <a href="mailto:annukka@rajala.dev">annukka@rajala.dev</a> tai ota yhteyttä{' '}
          <a
            href="https://www.linkedin.com/in/annukkarajala/"
            target="_blank"
            rel="noopener noreferrer">
            LinkedIn
          </a>
          in kautta.
        </p>
      </div>
    </div>
  );
}
