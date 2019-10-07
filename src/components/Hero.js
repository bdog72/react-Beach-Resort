import React from 'react';

const Hero = ({ children, hero }) => {
  return <header className="defaultHero">{children}</header>;
};

Hero.defaultProps = {
  hero: 'defaultHero'
};

export default Hero;
