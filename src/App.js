import React, {Component} from 'react';
import { connect } from 'react-redux'

    class App extends Component{
        render(){
         return(
             <div className="App">
                 <h2>Счетчик:{this.props.counter}</h2>
                 <div>
                     <button onClick = {this.props.onAdd}>Plus</button>
                     <button onClick = {this.props.onSub}>Minus</button>
                 </div>
             </div>
          )
        }
    }

    function mapStateToProps(state){
    return{
     counter:state.counter
     }
    }

    function mapDispatchToProps(dispatch){
    return{
        onAdd:() => dispatch({type:'ADD'}),
        onSub:() => dispatch({type:'SUB'})
    }
    }

    export default connect(mapStateToProps,mapDispatchToProps)(App)