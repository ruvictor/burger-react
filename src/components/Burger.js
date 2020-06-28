import React, { Component } from 'react';
import './Burger.css';

export default class Burger extends Component {
    state = {
        lettuce: 0,
        tomato: 0,
        meat: 0,
        cheese: 0
    }

    addIngredient = (ingredient) => {
        let {
            lettuce,
            tomato,
            meat,
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
            case 'meat':{
                stateValue = meat;
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

    burgerContent = () => {
        let meat = <div className="meatSide"></div>;
        return meat;
    }

    render(){
        return (
            <>
                <div className="topSide"></div>
                {this.burgerContent()}
                <div className="bottomSide"></div>
                <div className="ingredientsBlock">
                    <p>Lettuce</p>
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={() => this.addIngredient('lettuce')}>Add</button>
                        <button className="ingrBtn" onClick={() => this.addIngredient('lettuce')}>Remove</button>
                    </div>
                    <p>TOMATO</p>
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={() => this.addIngredient('tomato')}>Add</button>
                        <button className="ingrBtn" onClick={() => this.addIngredient('tomato')}>Remove</button>
                    </div>
                    <p>MEAT</p>
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={() => this.addIngredient('meat')}>Add</button>
                        <button className="ingrBtn" onClick={() => this.addIngredient('meat')}>Remove</button>
                    </div>
                    <p>CHEESE</p>
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={() => this.addIngredient('cheese')}>Add</button>
                        <button className="ingrBtn" onClick={() => this.addIngredient('cheese')}>Remove</button>
                    </div>
                    </div>
            </>
        );
    }
}