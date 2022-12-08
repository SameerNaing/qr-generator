import React from "react";

import AppLogo from "src/assets/logo.png";

interface props {
  className?: string;
}

const Logo: React.FC<props> = ({ className = "" }) => {
  return (
    <img className={className} height="100px" alt="app-logo" src={AppLogo} />
  );
};

export default Logo;
