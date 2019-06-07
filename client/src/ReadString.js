import React from "react";

class ReadString extends React.Component{
  state = {datakey: null};

  componentDidMount(){
    const { drizzle } = this.props;
    const contract = drizzle.contracts.MyStringStore;

    // let drizzle know we want to watch the `myString` method
    const dataKey = contract.methods["myString"].cacheCall();

    // save the `dataKey` to local component state for later reference
    this.setState({ dataKey });
  }

  render(){
    const {MyStringStore} = this.props.drizzleState.contracts;
    const myString = MyStringStore.myString[this.state.datakey];

    return<p>my stored string : {myString && myString.value}</p>
  }

}

export default ReadString;