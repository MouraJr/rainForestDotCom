import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Cart from './components/Cart/Cart';
import Home from './components/Home/Home';
import FrontPage from './components/FrontPage/FrontPage';
import { CartProvider } from 'react-use-cart';

import { fetchData } from './data';
import Categories from './components/Categories/Categories';
import MainNavbar from './components/MainNavbar/MainNavbar';

class App extends React.Component {
  state = {
    data: [],
    loggedIn: false,
    category: '',
    visible: true,
    itemCount: 29,
    username: 'Guest',
  }

  async componentDidMount() {
    const data = await fetchData();

    // set the state
    this.setState({ data })
  }


  handleCategoryClick = async (category) => {
    const data = await fetchData(category);

    this.setState({ data })
    this.setState({ category: category })
    this.setState({ visible: false })
  }

  handleLogin = async (username) => {
    this.setState({ loggedIn: true })
    this.setState({ username: username })
  }

  handleCategoryButton = async () => {
    this.setState({ visible: true })
  }

  render() {
    const { data } = this.state;
    const { category } = this.state;
    const { username } = this.state;

    return (
      <div className="App">
        {this.state.loggedIn ?
          <CartProvider>
            <MainNavbar handleCategoryButton={this.handleCategoryButton} />

            {this.state.visible ?
              <Categories username={username} handleCategoryClick={this.handleCategoryClick} />
              : <>
                <Home data={data} category={category} />
                <Cart />
              </>
            }
          </CartProvider>
          : <FrontPage handleLogin={this.handleLogin} />
        }
      </div>
    );
  }
}

export default App;