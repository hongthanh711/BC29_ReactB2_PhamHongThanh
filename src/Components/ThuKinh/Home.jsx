import React, { Component } from "react";
import home from "./Home.module.css";
import dataGlass from "./../../Data/dataGlasses.json";

export default class Home extends Component {
  clickGlass = (id) => {
    const glass = dataGlass.find((item) => {
      return (item.id = id);
    });
    console.log(glass);
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
            <img src=" ./glassesImage/model.jpg" className="img-fluid" />

            <div id={home.glassAvatar}></div>
            <div id={home.glassInfo}>
              <h3>$chanel</h3>
              <button class="btn btn-danger">$200</button>{" "}
              <span class="text-success">Stocking</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur eligendi nesciunt dicta quisquam velit voluptatem
                fuga, tempora eaque ut nobis repellat cumque sint totam
                voluptatum? Reprehenderit modi excepturi et dolores.
              </p>
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
