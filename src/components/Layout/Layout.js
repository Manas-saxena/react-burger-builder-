import React,{Component} from 'react';
import Aux from '../../hoc/Auxi';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
class layout extends Component {

    state={
        showSideDrawer:false
    }
    sideDrawerOpenHandler =() =>{
     this.setState({showSideDrawer:true})
    }   
     sideDrawerClosedHandler =() =>{
        this.setState({showSideDrawer:false});
    } 
        render() {
        return (
        <Aux>
        <Toolbar open={this.sideDrawerOpenHandler}/>
        <SideDrawer open ={this.state.showSideDrawer}
        close={this.sideDrawerClosedHandler}></SideDrawer>
        <main className={classes.Content}>
            {this.props.children}
        </main>
        </Aux>
    );
}
};
export default layout 