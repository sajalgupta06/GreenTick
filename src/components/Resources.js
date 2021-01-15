import React, { Component } from "react";
import { RESOURCES, VIDEOS } from "../database";

class Resource extends Component {
  render() {
    const table = RESOURCES.map((res) => {
      return (
        <b>
          <li>{res}</li>
        </b>
      );
    });
    const Videos = VIDEOS.map((vid) => {
      return (
        <div
          class="card"
          style={{ width: "25vw", height: "40vh", background: "#F1F1F1" }}
        >
          <img src="..." class="card-img-top" alt={vid}></img>
        </div>
      );
    });
    return (
      <div class="container">
        <div
          class="row mt-5 "
          style={{ justifyContent: "center", background: "#F1F1F1" }}
        >
          <button
            style={{ background: "#FFFFFF" }}
            type="button"
            class="btn btn-outline-dark mt-4 mb-4 mr-2"
          >
            <b style={{ color: "#000000" }}>Resources</b>
          </button>
          <button
            style={{ background: "#FFFFFF" }}
            type="button"
            class="btn btn-outline-dark mt-4 mb-4 ml-2"
          >
            <b style={{ color: "#000000" }}>Practice</b>
          </button>
        </div>
        <div class="row mt-5" style={{ justifyContent: "center" }}>
          <h2>Arrays</h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto",
            justifyItems: "center",
          }}
        >
          {table}
        </div>
        <div
          class="mt-5"
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto",
            justifyItems: "center",
          }}
        >
          {Videos}
        </div>
      </div>
    );
  }
}
export default Resource;
