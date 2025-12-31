import React from 'react';

const styles = {
  footer: {
    marginTop: 'auto',
    padding: '2rem',
    textAlign: 'center',
    color: 'var(--text-muted)',
    fontSize: '0.8rem',
    borderTop: '1px solid #111',
    width: '100%',
  }
};

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>For educational & security research only</p>
      <p>© {new Date().getFullYear()} Cyber Subdomain Scanner</p>
    </footer>
  );
};

export default Footer;
