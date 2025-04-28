import React from 'react';
import userContext from './Utils/UserContext';

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
        <h2 className='font-bold text-2xl flex py-4'>
          User :
          <userContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className='font-light text-2xl'>{loggedInUser}</h1>
            )}
          </userContext.Consumer>{' '}
        </h2>
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
