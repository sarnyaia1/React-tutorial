import React from "react";

class ButtonList extends React.Component{
    
    renderButton = (coin, index) => {
        return (
            <button 
                onClick={ this.props.onClickFunc(index) }
                style={{ margin: "20px", padding: "5px", borderRadius: "5px" }} 
                type="button" 
                key="index"
            >
                { coin.name }
            </button>
        )
    }

    render() {
        return(
            <div>
                { this.props.coins.map(this.renderButton) }
            </div>
        )
    }

}

export default ButtonList;