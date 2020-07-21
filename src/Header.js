import React from "react";
import Title from "./Title";

const Header = ({ className }) => {
  return (
    <div className={className}>
      <Title name="Simple Job Board" />
    </div>
  );
};

export default Header;
