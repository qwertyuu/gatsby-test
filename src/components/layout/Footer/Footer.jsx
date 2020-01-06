import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import UserLinks from '@/components/UserLinks/UserLinks';
import './Footer.css';

const Footer = ({ config }) => {
  const url = config.siteRss;
  const { copyright } = config;
  if (!copyright) {
    return null;
  }
  return (
    <footer className="footer">
      <UserLinks config={config} labeled />
      <div className="notice-container">
        <h4>{copyright}</h4>

        <Link to={url}>
          <button type="button">Subscribe</button>
        </Link>
        <h4>
          Based on
          {' '}
          <a href="https://github.com/Vagr9K/gatsby-advanced-starter">
              Gatsby Advanced Starter
          </a>
            .
        </h4>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  config: PropTypes.object.isRequired,
};

export default Footer;