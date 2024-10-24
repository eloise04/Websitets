import React from 'react';

interface FooterPropsI {
  year?: number;
  companyName?: string;
}

const Footer = ({ year = new Date().getFullYear(), companyName = "My Company" }: FooterPropsI) => {
  return (
    <footer>
      <p>© {year} {companyName}. All rights reserved.</p>
      <nav>
        <ul>
          <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
