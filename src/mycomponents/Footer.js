import React from 'react';

const Footer = () => {
  let footerstyle = {
    position: "fixed",
    bottom: 0,
    width: "100%"
  };

  return (
    <footer className="bg-dark text-light" style={footerstyle}>
      <p className="text-center py-3">
        Copyright &copy; mytodolist.com
      </p>
    </footer>
  );
};

export default Footer;
