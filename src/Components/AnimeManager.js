import React from "react";
import { getData, getStudios } from "../Utils/utils.js";
import AiringContainer from "./AiringContainer.js";
import PTWContainer from "./PTWContainer.js";
import hash from "object-hash";

class AnimeManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animeData: [],
      ptwData: [],
    };

    // Goofy ahh pending promise workaround (mfw constructors won't allow async/await)
    // A loading screen will pop up if the promise isn't fulfilled yet (see the ternary operator at render() method)
    this.getAnimeData();
    this.onSetPTW = this.onSetPTW.bind(this);
    this.onRemovePTW = this.onRemovePTW.bind(this);
  }

  onSetPTW(id) {
    // This causes React to update the page (normal)
    // See AiringCard.js

    const newPtwAnime = this.state.animeData.find((anime) => {
      if (anime.id === id) {
        anime.onPTW = true;
        console.log(anime);
      }
      console.log(anime.id === id);
      return anime.id === id;
    });
    console.log(newPtwAnime);
    const ptwAnime = [...this.state.ptwData, newPtwAnime];
    this.setState({ ptwData: ptwAnime });
  }

  onRemovePTW(id) {
    this.setState({
      ptwData: this.state.ptwData.filter((anime) => {
        anime.onPTW = false;
        return anime.id !== id;
      }),
    });
  }

  async getAnimeData() {
    const unfilteredData = await getData();
    const filteredData = unfilteredData.map((anime, index) => {
      return {
        title: anime.title,
        studio: getStudios(anime.studios),
        img: anime.images.jpg.image_url,
        onPTW: false,
        createdAt: +new Date(),
        id: hash({
          title: anime.title,
          studio: getStudios(anime.studios),
          index: index,
          onPTW: false,
        }),
      };
    });

    this.setState((prevState) => {
      console.log(filteredData);
      return {
        animeData: filteredData,
        ptwData: prevState.ptwData,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Current anime airing</h1>

        <AiringContainer
          data={this.state.animeData}
          onSet={this.onSetPTW}
          onDelete={this.onRemovePTW}
        />

        <h1>Plan to Watch</h1>
        <PTWContainer data={this.state.ptwData} onDelete={this.onRemovePTW} />
      </div>
    );
  }
}

export default AnimeManager;
