import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AboutPage } from './about/About';
import { NavMenu } from './nav-menu/NavMenu';
import { Header } from './header/Header';
import { ItemList } from './items/ItemList';
import { ItemEditor } from './items/editor/ItemEditor';
import { ItemViewer } from './items/viewer/ItemViewer';
import SocialButtons from './nav-menu/social-buttons/SocialButtons';
import { HomePage } from './home/Home';
import { Cart } from './cart/Cart';
import { LoginPage } from './login/LoginPage';
import withAuthGuard from './AuthRouteGuard';
import './App.scss';
import { ContactPage } from './contact/Contact';

class App extends Component {
  CartWithAuth = withAuthGuard(Cart, () => this.state.isLoggedIn, '/login');

  constructor() {
    super();
    this.state = {
      items: [],
      cartItems: [],
      loading: true,
      isLoggedIn: false
    };
  }

  componentDidMount() {
    fetch('/item-list.json').then(res => {
      res.json().then(data => {
        this.setState({
          items: data,
          loading: false
        });
      })
    });
  }

  render() {


    if (this.state.loading) {
      return <div>loading...</div>
    }
    return (
      <div>
        <Header></Header>
        <Router>
          <div className='app-content container'>
            <div className="side-panel d-flex flex-column justify-content-between">
              <NavMenu isLoggedIn={this.state.isLoggedIn}
                totalCart={this.getTotalCart()}
                onLoggedOut={this.logout.bind(this)}></NavMenu>
              <div className="social-panel">
                <SocialButtons></SocialButtons>
              </div>
            </div>
            <div className='main-content'>
              <div className='container'>
                <Switch>
                  <Route exact path='/' render={(props) => (<HomePage {...props} items={this.state.items}></HomePage>)} />
                  <Route exact path='/products' render={(props) => (<ItemList {...props} items={this.state.items}></ItemList>)} />
                  <Route path='/login' render={(props) => (<LoginPage {...props} onLogin={this.updateLoginState.bind(this, true)}></LoginPage>)} />
                  <Route path='/cart' >
                    <this.CartWithAuth
                      addItem={this.addItem.bind(this)}
                      removeItem={this.removeItem.bind(this)}
                      items={this.state.cartItems}
                    ></this.CartWithAuth>
                  </Route>
                  <Route path='/about' component={AboutPage} />
                  <Route path='/contact' component={ContactPage} />
                  <Route path='/add' component={(props) => (
                    <ItemEditor {...props} onUpdate={this.itemSaved.bind(this)}></ItemEditor>
                  )}></Route>
                  <Route path='/products/:id' component={(props) => (
                    <ItemViewer {...props}
                      addItem={this.addItem.bind(this)}
                      isLoggedIn={this.state.isLoggedIn}
                      item={this.state.items.filter(x => x._id === props.match.params.id)[0]} />
                  )} />
                </Switch>
              </div>
            </div>
          </div>
        </Router>
      </div>
    );
  }

  addItem(item) {
    const cart = this.state.cartItems;
    const target = cart[item._id];
    if (target) {
      target.count++;
    } else {
      cart[item._id] = { item: item, count: 1 };
    }

    this.setState({ cart: Object.assign({}, cart) });
  }

  removeItem(item) {
    const cart = this.state.cartItems;
    const target = cart[item._id];
    if (!target) {
      return;
    }
    target.count--;
    if (target.count === 0) {
      delete cart[item._id];
    }

    this.setState({ cart: Object.assign({}, cart) });
  }

  getTotalCart() {
    var res = Object.keys(this.state.cartItems)
      .reduce((prev, cur) => {
        const target = this.state.cartItems[cur];
        return prev += target.count * target.item.price;
      }, 0);
    return res;
  }

  logout() {
    this.setState({ isLoggedIn: false });
  }

  updateLoginState(isLoggedIn) {
    this.setState({ isLoggedIn: isLoggedIn });
  }
}

export default App;
