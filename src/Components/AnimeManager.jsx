import React from "react";
import { getData, getStudios } from "../Utils/utils.js";
import AiringContainer from "./AiringContainer.jsx";
import PTWContainer from "./PTWContainer.jsx";
import AnimeInput from "./AnimeInput.jsx";
import hash from "object-hash";

class AnimeManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animeData: [],
      ptwData: [],
    };

    // Goofy ahh pending promise workaround (mfw constructors won't allow async/await)
    // A loading screen will pop up if the promise isn't fulfilled yet
    this.getAnimeData();
    this.onSetPTW = this.onSetPTW.bind(this);
    this.onRemovePTW = this.onRemovePTW.bind(this);
    this.onAddAnimePTW = this.onAddAnimePTW.bind(this);
  }

  onSetPTW(id) {
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
        if (anime.id === id) {
          anime.onPTW = false;
        }
        return anime.id !== id;
      }),
    });
  }

  onAddAnimePTW(anime) {
    this.setState((prevState) => {
      return { ptwData: [...prevState.ptwData, anime] };
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
      <div className="anime-manager">
        <h1>Current Anime Airing</h1>

        <AiringContainer
          data={this.state.animeData}
          onSet={this.onSetPTW}
          onDelete={this.onRemovePTW}
        />

        <h1>Plan to Watch</h1>
        <PTWContainer data={this.state.ptwData} onDelete={this.onRemovePTW} />

        <h1>Enter Your Anime Manually Here</h1>
        <AnimeInput onAddAnimePTW={this.onAddAnimePTW} />
      </div>
    );
  }
}

export default AnimeManager;
