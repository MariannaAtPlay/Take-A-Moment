import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    document.addEventListener('click', () => {
      this.setState({
        count: this.state.count + 1
      });
    });
  }

  render() {
    return (
      <div>
        <h3>
        Your break is coming soon!
        </h3>
      </div>
    );
  }
}

export default App;
