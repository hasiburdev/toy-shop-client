import PropTypes from "prop-types";
const Container = ({ children, className = "" }) => {
  return (
    <div className={`max-w-[1200px] mx-auto ${className}`}>{children}</div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Container;
