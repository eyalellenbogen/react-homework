import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { About } from "./about/About";
import { SideMenu } from "./side-menu/SideMenu";
import { ItemList } from "./items/ItemList";
import { ItemEditor } from "./items/editor/ItemEditor";
import './App.scss';

class App extends Component {

  constructor() {
    super();
    this.state = { items: [], loading: true }
  }

  componentDidMount() {
    fetch('/item-list.json').then(res => {
      res.json().then(data => {
        this.setState({ items: data, loading: false });
      })
    });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>
    }
    return (
      <Router>
        <div>
          <SideMenu></SideMenu>
          <div className="main-content">
            <Route exact path="/" render={(props) => (<ItemList {...props} items={this.state.items}></ItemList>)} />
            <Route path="/about" component={About} />
            <Route path="/edit/:id" component={(props) => (
              <ItemEditor {...props} item={this.state.items.filter(x => x._id === props.match.params.id)[0]} />
            )} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
