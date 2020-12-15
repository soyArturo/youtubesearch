import React, { Component } from "react";
import SearchBar from "./components/searchBar";
import video from "./api/video";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Themes";
import "./App.css";
import VideoList from "./components/videoList";
import VideoDetail from "./components/videoDetails";
import Toggle from "./components/Toggler";

class App extends Component {
  state = { videos: [], selectedVideo: null, theme: "light" };

  onSearchSubmit = async (term) => {
    const response = await video.get("/search", {
      params: { q: term },
    });
    console.log(response.data.items);
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    const { videos, selectedVideo, theme } = this.state;
    const themeToggler = () => {
      theme === "light"
        ? this.setState({ theme: "dark" })
        : this.setState({ theme: "light" });
    };
    return (
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <div className="container-fluid pt-5" id="main">
          <div className="mb-3 ">
            <Toggle theme={theme} toggleTheme={themeToggler} />
          </div>
          <SearchBar onSubmit={this.onSearchSubmit} videos={videos} />
          {videos.length > 0 ? (
            <div className="row">
              <div className="col-md-8">
                <VideoDetail video={selectedVideo} />
              </div>
              <div className="col-md-4 mt-5">
                <VideoList onVideoSelect={this.onVideoSelect} videos={videos} />
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
