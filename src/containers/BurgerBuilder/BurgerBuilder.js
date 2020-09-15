import React ,{Component} from 'react';
import Aux from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';
class BurgerBuilder extends Component{
    state={
        ingredients:{
            salad:1,
            bacon:2,
            cheese:2,
            meat:2
        }
    }
    render(){
            return (
                <Aux>
                    <div>
                        <Burger ingredients={this.sate.ingredients}  />
                    </div>
                    <div>
                        Build control
                    </div>
                </Aux>
            );
    }
}
export default BurgerBuilder;