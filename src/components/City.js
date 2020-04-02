import React from "react";
import PropTypes from "prop-types";
const City = props => {
  return (
    <div>
      {props.city.key}
      {props.city.city}, {props.city.state}
    </div>
  );
};
City.propTypes = {
  //shape->describes the object type City has and what data it has
  city: PropTypes.shape({
    id: PropTypes.number,
    city: PropTypes.string,
    state: PropTypes.string,
    zip: PropTypes.arrayOf(PropTypes.string)
  })
  //
};
export default City;
