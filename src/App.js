import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { About } from "./about/About";
import { SideMenu } from "./side-menu/SideMenu";
import { ItemList } from "./items/ItemList";
import { ItemEditor } from "./items/editor/ItemEditor";
import { ItemViewer } from "./items/viewer/ItemViewer";
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
            <div className="container">
              <Route exact path="/" render={(props) => (<ItemList {...props} items={this.state.items}></ItemList>)} />
              <Route path="/about" component={About} />
              <Route path="/edit" exact component={(props) => (
                <ItemEditor {...props} item={this.state.items[this.state.items.push({ _id: this.getUniqueId() }) - 1]}></ItemEditor>
              )}></Route>
              <Route path="/edit/:id" component={(props) => (
                <ItemEditor {...props} item={this.state.items.filter(x => x._id === props.match.params.id)[0]} />
              )} />
              <Route path="/view/:id" component={(props) => (
                <ItemViewer {...props} item={this.state.items.filter(x => x._id === props.match.params.id)[0]} />
              )} />
            </div>
          </div>
        </div>
      </Router>
    );
  }

  getUniqueId() {
    return Math.random().toString(36).substr(2, 9);
  }
}

export default App;
