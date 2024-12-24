import "./App.css";
import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Nisrine JAAOT",
        bio: "I am a web developer",
        imgSrc: "https://via.placeholder.com/150",
        profession: "full stack developer",
      },
      shows: false,
      timeInterval: 0,
    };
    this.toggleShow = this.toggleShow.bind(this);
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        timeInterval: prevState.timeInterval + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  toggleShow() {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  }

  render() {
    const { person, shows, timeInterval } = this.state;

    return (
      <div>
        <button onClick={this.toggleShow}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>

        {shows && (
          <div>
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt={person.fullName} />
            <h2>{person.profession}</h2>
          </div>
        )}

        <div>
          <h3>Time since component mounted: {timeInterval} seconds</h3>
        </div>
      </div>
    );
  }
}

export default App;