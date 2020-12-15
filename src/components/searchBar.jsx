import React, { Component } from "react";
import "./searchBar.css";

class SearchBar extends Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
    console.log("Submitted");
  };

  render() {
    const { videos } = this.props;
    return (
      <div
        className="card mx-auto"
        style={{
          borderRadius: "10px",
          //   border: "2px solid #616161",
        }}>
        <div className="card-body">
          <form onSubmit={this.onFormSubmit}>
            <div className="mb3">
              <label className="form-label fw-bold">Video Search</label>
              <input
                type="text"
                className="form-control"
                value={this.state.term}
                onChange={(e) => this.setState({ term: e.target.value })}
              />
            </div>
          </form>
          <div className="mt-1 text-end">
            <p className="">Found: {videos.length} videos</p>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
