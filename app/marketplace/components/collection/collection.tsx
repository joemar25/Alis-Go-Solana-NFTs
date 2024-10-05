import "./collection.css";
import Trending from "../trending/trending";

const Collection = () => {
  return (
    <main className="collection--container dark:bg-gray-800 dark:text-white bg-white text-black">
      <div>
        <h1>Collections</h1>
        <div className="label--container">
          <div>Welcome to your Collection</div>
          <div id="label">
            <div id="home">Home</div>
            <div>{`>`}</div>
            <div id="collections">Collections</div>
          </div>
        </div>
        <div id="selector">
          <div id="selected" className="selector--item">
            All
          </div>
          <div className="selector--item">Artwork</div>
          <div className="selector--item">Music</div>
        </div>
      </div>
      <Trending />
    </main>
  );
};

export default Collection;
