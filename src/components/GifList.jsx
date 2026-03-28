import GifItem from "./GifItem";

import PropTypes from "prop-types";

const GifsList = ({ gifList }) => {
  return (
    <div className="row">
      {gifList.length ? gifList?.map((gif) => <GifItem gifItem={gif} key={gif.id} />) : (
        <p>Empty List</p>
      )}
    </div>
  );
};

GifsList.propTypes = {
  gifList: PropTypes.array.isRequired,
};

export default GifsList;
