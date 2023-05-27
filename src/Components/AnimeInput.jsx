import React from "react";
import hash from "object-hash";

class AnimeInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      studios: "",
      image: "/images/blehh_anime.jpg",
      imageType: "Default",
    };

    this.onImageTypeChange = this.onImageTypeChange.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onStudioChange = this.onStudioChange.bind(this);
    this.onImageLinkChange = this.onImageLinkChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onNameChange(event) {
    this.setState(() => {
      return { name: event.target.value };
    });
  }

  onStudioChange(event) {
    this.setState(() => {
      return { studios: event.target.value };
    });
  }

  onImageTypeChange(event) {
    if (event.target.value === "Default") {
      this.setState({ image: "/images/blehh_anime.jpg" });
    } else {
      this.setState({ image: "" });
    }
    this.setState(() => {
      return { imageType: event.target.value };
    });
  }

  onImageLinkChange(event) {
    this.setState(() => {
      return { image: event.target.value };
    });
  }

  onSubmit(event) {
    event.preventDefault();
    if (this.state.name === "" || this.state.studios === "") {
      return;
    }
    if (this.state.imageType === "Link" && this.state.image === "") {
      return;
    }

    // Code full of bs but eh
    const newAnime = {
      title: this.state.name,
      studio: this.state.studios,
      img: this.state.image,
      onPTW: true,
      createdAt: +new Date(),
    };

    const newAnimeWithHash = {
      ...newAnime,
      id: hash({
        ...newAnime,
      }),
    };

    this.props.onAddAnimePTW(newAnimeWithHash);
    this.setState({
      name: "",
      studios: "",
      image: "",
      imageType: "Default",
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="input-form">
        <label className="input-name">
          Anime name:
          <input
            placeholder="Name"
            value={this.state.name}
            onChange={this.onNameChange}
          ></input>
        </label>
        <label className="input-studio">
          Studio(s):
          <input
            placeholder="Studio"
            value={this.state.studios}
            onChange={this.onStudioChange}
          ></input>
        </label>
        <label className="input-image">
          Poster image:
          <select
            onChange={this.onImageTypeChange}
            value={this.state.imageType}
          >
            <option value="Default">Default</option>
            <option value="Link">Link</option>
          </select>
          {this.state.imageType === "Default" ? null : (
            <input
              placeholder="Image link"
              value={this.state.image}
              onChange={this.onImageLinkChange}
            ></input>
          )}
        </label>
        <button type="submit" className="input-submit">
          Add
        </button>
      </form>
    );
  }
}

export default AnimeInput;
