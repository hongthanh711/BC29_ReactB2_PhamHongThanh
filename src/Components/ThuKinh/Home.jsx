import React, { Component } from "react";
import home from "./Home.module.css";
import dataGlass from "./../../Data/dataGlasses.json";

export default class Home extends Component {
  state = {
    selectedGlass: dataGlass[0],
  };

  clickGlass = (id) => {
    const glass = dataGlass.find((item) => {
      return item.id === id;
    });

    this.setState({
      selectedGlass: glass,
    });
  };

  renderDataGlass = () => {
    const content = dataGlass.map((ele) => {
      return (
        <div
          onClick={() => {
            this.clickGlass(ele.id);
          }}
          className="col-2"
          key={ele.id}
        >
          <img className="img-fluid px-2" src={ele.url} alt="" />
        </div>
      );
    });
    return content;
  };

  render() {
    return (
      <div className={home.container}>
        <header>TRY GLASSES APP ONLINE</header>
        <div className="model d-flex justify-content-around">
          <div id={home.after}>
            <img src="./glassesImage/model.jpg" className="img-fluid" />

            <div id={home.glassAvatar}>
              <img src={this.state.selectedGlass.url} alt="" />
            </div>
            <div id={home.glassInfo}>
              <h3>{this.state.selectedGlass.name}</h3>
              <button className="btn btn-danger">
                ${this.state.selectedGlass.price}
              </button>
              <span className="text-success">Stocking</span>
              <p>{this.state.selectedGlass.desc}</p>
            </div>
          </div>
          <img src=" ./glassesImage/model.jpg" alt="" className="img-fluid" />
        </div>
        <div id="glass" className="row">
          {this.renderDataGlass()}
        </div>
      </div>
    );
  }
}
