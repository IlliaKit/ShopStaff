import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      showFullItem: false,
      fullItem: {},
      tempItems: [],
      items: [
        {
          id: 1,
          title: "Chair",
          img: "chair.jpg",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing",
          category: "chairs",
          price: "49.99",
          count: 1,
        },
        {
          id: 2,
          title: "Table",
          img: "table.jpg",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing",
          category: "tables",
          price: "149.99",
          count: 1,
        },
        {
          id: 3,
          title: "Sofa",
          img: "sofa.jpg",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing",
          category: "sofa",
          price: "549.99",
          count: 1,
        },
        {
          id: 4,
          title: "Lamp",
          img: "lamp.jpg",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing",
          category: "light",
          price: "25.99",
          count: 1,
        },
        {
          id: 5,
          title: "Whait chair",
          img: "white_chair.jpg",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing",
          category: "chairs",
          price: "49.99",
          count: 1,
        },
      ],
    };
    this.state.tempItems = this.state.items;
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategories = this.chooseCategories.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }
  render() {
    return (
      <div className="wrap">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategories={this.chooseCategories} />
        <Items
          onShowItem={this.onShowItem}
          items={this.state.currentItems}
          onAdd={this.addToOrder}
        />
        {this.state.showFullItem && (
          <ShowFullItem
            onAdd={this.addToOrder}
            onShowItem={this.onShowItem}
            item={this.state.fullItem}
          />
        )}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
  }

  chooseCategories(category) {
    if (category === "all") {
      this.setState({ currentItems: this.state.items });
      return;
    }
    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
  }

  deleteOrder(id, count) {
    if (count === 1) {
      this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
    } else {
      const { items } = this.state;
      items[id - 1].count -= 1;
      this.setState({ items });
    }
  }

  addToOrder(item) {
    let isinArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) {
        const { items } = this.state;
        items[item.id - 1].count += 1;
        this.setState({ items });
        isinArray = true;
      }
    });
    if (!isinArray) {
      this.setState({ orders: [...this.state.orders, item] });
    }
  }
}
export default App;
