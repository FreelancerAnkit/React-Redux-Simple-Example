import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { TouchableOpacity,TextInput } from "react-native";
import { connect } from "react-redux";

 class CounterApp extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection:'row',width:200,justifyContent:'space-around'}}>
          <TouchableOpacity onPress={()=>{this.props.decrease()}}>
            <Text>Decrement</Text>
          </TouchableOpacity>
          <Text>{this.props.counter}</Text>
          <TouchableOpacity onPress={()=>{this.props.increase()}}>
            <Text>Increment</Text>
          </TouchableOpacity>

        </View>
        <View style={{flexDirection: 'column'}}>
          <TextInput  keyboardType='decimal-pad' placeholder='Enter A' onChangeText={(text) => this.setState({a:text})}></TextInput>
          <TextInput keyboardType='decimal-pad'  placeholder='Enter B' onChangeText={(text) => this.setState({b:text})}></TextInput>
          <Text>Result: {this.props.result}</Text>
          <Button title='ADD' onPress={()=>{this.props.add()}}></Button>
        </View>


      </View>
    );
  }
  
}

mapStateToProps = (state) =>{
  return{
    counter: state.counter, //Takes state.counter from Store and Maps it with Props of this class
    result: state.result 
  }
}
mapDispatchToProps = (dispatch) =>{
  return {
    increase:()=> dispatch({type:'increase'}),
    decrease:()=> dispatch({type:'decrease'}),
    add:()=> dispatch({type:'add'}),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CounterApp)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
