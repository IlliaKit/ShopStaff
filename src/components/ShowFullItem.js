import React, { Component } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
export default class ShowFullItem extends Component {
  render() {
    return (
      <div className="full-item">
        <div>
          <AiFillCloseCircle
            className="item-close"
            onClick={() => this.props.onShowItem(this.props.item)}
          />
          <img
            alt=""
            src={"./img/" + this.props.item.img}
            onClick={() => this.props.onShowItem(this.props.item)}
          />
          <h2>{this.props.item.title}</h2>
          <p>{this.props.item.desc}</p>
          <b>{this.props.item.price}$</b>

          <div
            className="add-to-cart"
            onClick={() => this.props.onAdd(this.props.item)}
          >
            +
          </div>
        </div>
      </div>
    );
  }
}
