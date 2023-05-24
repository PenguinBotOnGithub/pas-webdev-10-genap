import React from "react";
import { getData, getStudios } from "../utils.js";
import AiringContainer from "./AiringContainer.js";
import hash from "hash-it";

class AnimeManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animeData: [],
      ptwData: [],
    };

    // Goofy ahh promise workaround (mfw class won't allow async/await)
    this.getAnimeData();
  }

  async getAnimeData() {
    const unfilteredData = await getData();
    const filteredData = unfilteredData.map((anime, index) => {
      return {
        title: anime.title,
        studio: getStudios(anime.studios),
        img: anime.images.jpg.image_url,
        onPTW: false,
        hash: hash({
          title: anime.title,
          studio: getStudios(anime.studios),
          index: index,
        }),
      };
    });

    this.setState({ animeData: filteredData });
  }

  render() {
    const data = this.state.animeData;
    return (
      <div>
        <h1>Current anime airing</h1>
        {data ? (
          <AiringContainer data={data} />
        ) : (
          <img
            src="/images/loading.png"
            alt="loading"
            className="loading-image"
          />
        )}
        <img
          src="/images/loading.png"
          alt="loading"
          className="loading-image"
        />
      </div>
    );
  }
}

export default AnimeManager;
