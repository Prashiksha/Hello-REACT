'use strict';

const ele = React.createElement;

class Hello extends React.Component{
  constructor(){
    super();
  }

    render(){
      return ele(
      "div",
      null,
      "HELLO REACT",
      );
    }
  }

const element_container = document.querySelector("#hello_react");
ReactDOM.render(ele(Hello), element_container);
