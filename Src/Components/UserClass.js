import React from 'react';

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 0,
    };
  }
  render() {
    return (
      <div className='userclass-card'>
        <h2>Name :{this.props.name}</h2>
        <h2>Count : {this.state.count}</h2>
        <h2>Count2 : {this.state.count2}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            });
          }}>
          Count Increase
        </button>
        <h3>Pune (from class)</h3>
        <h3>varsha.kadge</h3>
      </div>
    );
  }
}

export default UserClass;
