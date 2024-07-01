import React from "react";
import Navbar from "../Navbar";
import PropTypes from "prop-types";

function Baselayout(props) {
  const { showLogin, handleLogout, children } = props;
  return (
    <>
      <Navbar showLogin={showLogin} handleLogout={handleLogout} />
      {children}
    </>
  );
}

Baselayout.propTypes = {
  showLogin: PropTypes.bool,
  handleLogout: PropTypes.func,
  children: PropTypes.node,
};

Baselayout.defaultProps = {
  showLogin: false,
  handleLogout: () => {},
};

export default React.memo(Baselayout);
