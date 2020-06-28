import React, { Component } from 'react';

export default class Burger extends Component {
    state = {
        lettuce: 0,
        tomato: 0,
        sausage: 0,
        cheese: 0
    }

    addIngredient = (ingredient) => {
        let {
            lettuce,
            tomato,
            sausage,
            cheese
        } = this.state;

        let stateValue;
        switch(ingredient){
            case 'lettuce':{
                stateValue = lettuce + 1;
                break;
            }
            case 'tomato':{
                stateValue = tomato + 1;
                break;
            }
            case 'sausage':{
                stateValue = sausage + 1;
                break;
            }
            case 'cheese':{
                stateValue = cheese + 1;
                break;
            }
            default: break;
        }
        this.setState({
            [ingredient]: stateValue
        });
    }

    render(){
        return (
            <>
                <button onClick={() => this.addIngredient('cheese')}>Add</button>
            </>
        );
    }
}