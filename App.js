import React from 'react';
import CounterApp from "./src/CounterApp";
import { createStore } from "redux";
import { Provider } from "react-redux";

const reducers = (state={counter:0,result:0,a:0,b:0},action)=>{
  if(action.type === 'increase'){
    return {counter: state.counter +1}
  }
  if(action.type === 'decrease'){
    return {counter:state.counter -1}
  }
  if(action.type === 'add'){
    return {result: state.a+ state.b}
  }
  return state
}

const store = createStore(reducers);

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <CounterApp/>
      </Provider>
    );
  }
}