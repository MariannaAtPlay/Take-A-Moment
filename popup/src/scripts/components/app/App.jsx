import React, {Component} from 'react';
import {connect} from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import TimePicker from 'material-ui/TimePicker';
import {Card, CardText} from 'material-ui/Card';
import {pink700, grey400, grey700} from 'material-ui/styles/colors';



// import MyAwesomeReactComponent from './MyAwesomeReactComponent';

// This replaces the textColor value on the palette
// and then update the keys for each component that depends on it.
// More on Colors: http://www.material-ui.com/#/customization/colors
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: pink700,
    primary2Color: pink700,
    primary3Color: pink700,
    accent1Color: grey400,
    accent2Color: grey400,
    accent3Color: grey400,
    textColor: grey700,
    alternateTextColor: grey700,
    canvasColor: grey400,
    pickerHeaderColor: pink700
  },
  appBar: {
    height: 50,
  },
});

class App extends Component {

  constructor() {
    super();
    this.state = {
      now: new Date(),
      timeLeft: null
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, time) {
    //setTime dispatches an action
    //sets time on the store state
    this.props.setTime(time);

  }

  // componentDidMount() {

  // }

  componentWillReceiveProps() {
    // timerID is needed to clearInterval later
    //start the timer only after user chooses break time, which will give new props to the component
    this.timerID = setInterval(
        () => this.tick(),
        1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      now: new Date(),
      timeLeft: this.props.time - this.state.now
    });
  }

  millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return (seconds == 60 ? (minutes+1) + ":00" : minutes + ":" + (seconds < 10 ? "0" : "") + seconds);
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar title="Take A Moment" />
            <Card>
              <CardText>
                <h2 style={{color: grey700}}>When would you like to take a break?</h2>
                <TimePicker value={this.props.time} hintText="12hr Format" onChange={this.handleChange}/>
                <h2 style={{color: grey700}}>
                  {this.state.timeLeft && 
                  `Your break is coming up in ${this.millisToMinutesAndSeconds(this.state.timeLeft)} minutes`} 
                </h2>
              </CardText>
            </Card>
        </div>  
      </MuiThemeProvider>
    );
  }
}


const mapStateToProps = (state) => {
  let theDate;
  if (state.moment && state.moment.time) {
    //make a new Date object based on the representation on the state
    theDate = new Date(state.moment.time);
  }
  return {
    time: theDate
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTime: (time) => {
      // Date.prototype.getTime()
      //Returns the numeric value of the specified date as the number of milliseconds since January 1, 1970, 00:00:00 UTC
      //this is how it'll be stored on the state, because just assigning the tme (Date) object to the time key is not working...
      dispatch({
        type: 'SET_TIME', 
        time: time.getTime()
      })
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);