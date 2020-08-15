import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

/**
 * @description This component is a like a ⛑️ helmet for each page that shows the description and
 * title on the topbar (next to the favicon) of the browser. This should be used on all the views.
 * Imagine you are going to a war 👨‍🚀 without a helmet you might be 🔫 shot dead 😅. So basically this
 * component helps in maintaining the head of the html page for better 🚩 SEO.
 *
 *
 * @param {object} props - consists of title of the page, description and keywords
 */
const SeoHelmet = (props) => {
  const { title, keywords, description } = props;
  const metaKeywords = keywords && keywords.length > 0
    ? { name: 'keywords', content: keywords.join(', ') }
    : [];
  return (
    <Helmet
      title={title} // Page title
      titleTemplate={`%s | ${title}`}
      meta={
          [
            { name: 'description', content: description }, // Page description
          ].concat(metaKeywords) // Keywords
        }
    />
  );
};

SeoHelmet.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.arrayOf(PropTypes.string),
};

SeoHelmet.defaultProps = {
  keywords: [],
};
