import React, { Component } from 'react';

export default class Burger extends Component {
    state = {
        lettuce: 0,
        tomato: 0,
        sausage: 0,
        cheese: 0
    }

    addIngredient = (ingredient) => {
        this.setState({
            [ingredient]: this.state.lettuce + 1
        });
    }

    render(){
        return (
            <>

            </>
        );
    }
}