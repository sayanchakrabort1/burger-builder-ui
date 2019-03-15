import React, {Component} from 'react';
import Burger from '../../components/Burger/Burger'
import Aux from '../../HOC/Auxi1';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
const INGREDIENT_PRICES={
    salad: 20,
    cheese: 40,
    bacon: 120,
    meat: 100
}

class BurgerBuilder extends Component {

    state={
        ingredients: {
            salad: 0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice: 50,
        purchase: false,
        purchasing: false
    }

    updatePurchase (ingredients) {
        //const ingredients = {...this.state.ingredients};
        let sum= Object.keys(ingredients)

        .map(igKey => {
            return ingredients[igKey];
        })
        .reduce((sum, el) => {
            return sum+el;
        },0)
        this.setState({purchase: sum>0 });

    }

    addIngredientHandler= (type) => {
        let oldCount= this.state.ingredients[type];
        let updatedCount= oldCount+1;
        let updateIngredients = {...this.state.ingredients};
        updateIngredients[type]= updatedCount;

       

            
            

        

        let priceAddition = INGREDIENT_PRICES[type];
        let oldPrice= this.state.totalPrice;
        let newPrice= oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updateIngredients})
        this.updatePurchase(updateIngredients);
        
    }

    removeIngredientHandler= (type) =>{
        let oldCount= this.state.ingredients[type];
        let updatedCount= oldCount-1;
        let updateIngredients= {...this.state.ingredients};
        updateIngredients[type]= updatedCount;

        if(updatedCount>=0){

        let priceReduction= INGREDIENT_PRICES[type];
        let oldPrice= this.state.totalPrice;
        let newPrice= oldPrice - priceReduction;
        this.setState({totalPrice: newPrice , ingredients: updateIngredients}) }
        this.updatePurchase(updateIngredients);
        
    }

    purchaseHandler= () => {
        this.setState({purchasing: true})
    }

    purchaseCancelHandler= () => {
        this.setState({purchasing: false})
    }

    resetStateHandler =() => {

        this.setState({ingredients: {salad: 0,
            bacon:0,
            cheese:0,
            meat:0

        }, totalPrice: 50,
           purchasing:false,
        purchase: false });
    }
        

    
    
    render(){
        const disabledInfo= {...this.state.ingredients};
        const disabledMoreInfo= {...this.state.ingredients};

        for(let key in disabledInfo){
            disabledInfo[key]= disabledInfo[key] <= 0
        }

        for(let key in disabledMoreInfo){
            disabledMoreInfo[key]= disabledMoreInfo[key] >= 3
        }
        
        return (
            <Aux>
                
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}
                cancelButtonHit={this.purchaseCancelHandler}>
                <OrderSummary TotalPrice={this.state.totalPrice}ingredients={this.state.ingredients}/></Modal>
                <Burger ingredients={this.state.ingredients} /> 
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    purchase={!this.state.purchase}
                    disabledLess={disabledInfo}
                    disabledMore={disabledMoreInfo}
                    price={this.state.totalPrice} 
                    ingredientRemoved={this.removeIngredientHandler}
                    purchasingFinal={this.purchaseHandler}
                    reset={this.resetStateHandler}/>
                {console.log(this.state.purchasing)}
            </Aux>
        );
    }
}

export default BurgerBuilder;