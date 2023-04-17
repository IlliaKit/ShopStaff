import React from "react";
import { BsTrashFill } from "react-icons/bs";

export class Order extends React.Component {
  render() {
    return (
      <div className="item">
        <img alt="" src={"./img/" + this.props.item.img} />
        <h2>{this.props.item.title}</h2>

        <tr>
          <td>{this.props.item.price}$ </td>
          <td>{this.props.item.count} </td>

          <td>
            {parseInt(this.props.item.price * this.props.item.count * 100) /
              100}
            ${" "}
          </td>
        </tr>

        <BsTrashFill
          className="delete-icon"
          onClick={() => {
            this.props.onDelete(this.props.item.id, this.props.item.count);
          }}
        />
      </div>
    );
  }
}

export default Order;
