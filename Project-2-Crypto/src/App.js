import React from "react";
import ButtonList from "./components/ButtonList";
import Coin from "./components/Coin";

class App extends React.Component{
    
    state = {
        coins : [
            {
                name: 'Bitcoin',
                image: 'https://bitcoin.org/img/icons/opengraph.png?1648897668',
                selected: false
            },
            {
                name: 'Ethereum',
                image: 'https://s2.coinmarketcap.com/static/img/coins/200x200/1027.png',
                selected: false
            },
            {
                name: 'Shiba Coin',
                image: 'https://s2.coinmarketcap.com/static/img/coins/200x200/5994.png',
                selected: false
            },
            {
                name: 'USDT',
                image: 'https://kriptoakademia.com/wp-content/uploads/2018/03/usdt.png',
                selected: false
            }
        ]
    }

    onClickHandle = (index) => _ => {
        this.setState({
            coins: this.state.coins.map( (coin, coinIndex) =>
                ( (coinIndex === index) ? ({...coin, selected: true}) : ({...coin, selected: false}))
            )
        });
    }

    render() {
        return(
            <div>
                <ButtonList onClickFunc={ this.onClickHandle } coins={ this.state.coins }/>
                <Coin selectedCoin={ this.state.coins.find(coin => coin.selected) }/>
            </div>
        )
    }

}

export default App;