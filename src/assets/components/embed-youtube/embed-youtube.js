import React from 'react';
import PropTypes from 'prop-types';
import * as sc from './embed-youtube.styled';

const EmbedYoutube = ({ embedId, width, height }) => (
  <sc.VideoResponsive>
    <sc.VideoResponsiveIframe
      width={width}
      height={height}
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
      title='Embedded youtube'
    />
  </sc.VideoResponsive>
);

EmbedYoutube.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default EmbedYoutube;