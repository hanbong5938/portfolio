import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        <br className="sm:block hidden" />
      </p>
      <Link to={'/contact'} className="btn">
        Contact
      </Link>
    </section>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default CTA;
