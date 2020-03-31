import React from "react";
import PropTypes from "prop-types";

const City = props => {
  return (
    <div>
      <div>
        {props.city.state}, {props.city.city}
      </div>
      {props.city.zip.map(z => (
        <div key={z}>{z}</div>
      ))}
    </div>
  );
};

City.propTypes = {
  city: PropTypes.shape({
    state: PropTypes.string,
    city: PropTypes.string,
    zip: PropTypes.arrayOf(PropTypes.string)
  })
};

export default City;
