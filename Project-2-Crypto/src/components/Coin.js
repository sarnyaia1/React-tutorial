import React from "react";

class Coin extends React.Component{

    state = {
        name: null,
        image: null
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            name: nextProps.selectedCoin.name,
            image: nextProps.selectedCoin.image
        })
    }

    render() {

        console.log(this.props);

        return(
            <div>
                { this.state.name && 
                    <div> 
                        <h2> {this.state.name} </h2> 
                        <img src={this.state.image} alt="img" />
                    </div> }
            </div> 
        )
    }

}

export default Coin;