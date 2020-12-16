import React, { Component } from "react";
import "./smallBox.css";

class SmallBox extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="col-sm-2 px-0 py-0">
          <div className="card">
            <div className="container">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Akshay_Kumar.jpg"
                class="card-img-top img-fluid"
                alt="Snow"
              />

              <button className="btn btn-primary btn-sm btn-outline-primary  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-mic-mute"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M10 8V3a2 2 0 1 0-4 0v5a2 2 0 1 0 4 0zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SmallBox;
