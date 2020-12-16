import React, { Component } from "react";
import SmallBox from "./smallBox";

class Box extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-sm">
            <div className="d-flex flex-start flex-row bd-highlight  ">
              <SmallBox />
              <SmallBox />
              <SmallBox />
            </div>
            <div className="d-flex flex-row bd-highlight  ">
              <SmallBox />
              <SmallBox />
              <SmallBox />
            </div>
            <div className="d-flex flex-row bd-highlight ">
              <SmallBox />
              <SmallBox />
              <SmallBox />
            </div>
          </div>
          <div className="col-sm">
            <div className="d-flex flex-row-reverse bd-highlight">
              <SmallBox />
              <SmallBox />
              <SmallBox />
            </div>
            <div className="d-flex flex-row-reverse bd-highlight">
              <SmallBox />
              <SmallBox />
              <SmallBox />
            </div>
            <div className="d-flex flex-row-reverse bd-highlight">
              <SmallBox />
              <SmallBox />
              <SmallBox />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Box;
