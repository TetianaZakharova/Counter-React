//import React from 'react';
//import ReactDOM from 'react-dom';
//import './index.css';

class Button extends React.Component {
    render() {
        const { style, label, className } = this.props;

        return (
            <button style={style} onClick={this.props.onClick } className={className}>
                {label}
            </button>
        );
    }
}

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0, isVisible: true}
    }   
 
    render () {
      const {className} = this.props;
        return (
            <h1 className={className}>{this.props.count}</h1>
          );
    }
}

class Message extends React.Component {
  render(){
    const {className} = this.props;
      return(
          <h2 className={className}>{this.props.count === 10 ? "Урааа 10! Но это не точно..." : null}</h2>
      );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0, isVisible: true}
    
  }  
  increment = () => {
    this.setState((prevState, {count}) => 
    ({ count: prevState.count + 1 })
   );
  }

  decrement = () => {
    this.setState((prevState, {count}) => 
    ({ count: prevState.count - 1 })
    );
  }

  hideShowCounter = () => {
    const { isVisible } = this.state;
    this.setState({ isVisible: !isVisible })
  }

  render () {
    const { isVisible } = this.state;

    return (
      <React.Fragment> 
        {isVisible ? <Counter count={this.state.count} className="counterNow"/> : null}
        <Message className="textMessage" count={this.state.count}/>
        <div className="buttons">
        <Button className="decrementButton" label='-' onClick={this.decrement} />
        <Button className="incrementButton" label="+" onClick={this.increment}/>
        <Button className="visibleButton" label={isVisible ? 'HIDE' : 'SHOW'} 
                                         onClick={this.hideShowCounter}/>
        </div>
            </React.Fragment>
    )
  }
  
} 
    
    ReactDOM.render (
      <App />,
      document.querySelector('#container')
    );
   