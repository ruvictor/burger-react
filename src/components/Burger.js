import React, { Component } from 'react';
import './Burger.css';

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
                stateValue = lettuce;
                break;
            }
            case 'tomato':{
                stateValue = tomato;
                break;
            }
            case 'sausage':{
                stateValue = sausage;
                break;
            }
            case 'cheese':{
                stateValue = cheese;
                break;
            }
            default: break;
        }
        this.setState({
            [ingredient]: stateValue + 1
        });
    }

    render(){
        return (
            <>
                <div className="topSide"></div>
                <div className="bottomSide"></div>
                <div className="ingredientsBlock">
                    <button onClick={() => this.addIngredient('cheese')}>Add</button>
                </div>
            </>
        );
    }
}