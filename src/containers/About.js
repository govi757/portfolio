import { Component } from "react";
import { isInViewport } from "../util";
import "./styles/about.css";
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutElement: null,
      heading: "",
    };
  }

  componentDidMount() {
    this.setState({
      aboutElement: document.getElementById("about-me"),
    },() => {
    });
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = (event) => {
    if (isInViewport(this.state.aboutElement)) {
      
      this.makeAnimatedHeader();
      window.removeEventListener("scroll", this.handleScroll);
    }
  };

  makeAnimatedHeader(title = "_About_Me") {
    let temp = title;
    const interval = setInterval(() => {
      this.setState(
        {
          heading: this.state.heading + "" + temp.charAt(0),
        },
        () => {
          temp = temp.substring(1);
          if (temp.length === 0) {
            clearInterval(interval);
          }
        }
      );
    }, 100);
  }
  render() {
    return (
      <div  className="appContainer  about-page mt-5">
        <h1 id="about-me" className="xxlarge grey heading">{this.state.heading}</h1>

        <div className="large col-11 normal">
          I am a software developer who wish to obtain a responsible,
          challenging, and awarding position in a software development
          organization with an established record of accomplishment where my
          skills, abilities and technical abilities can be utilized.
        </div>
        <div className="mt-4">
        <a className="resumeButton text-left " href="https://drive.usercontent.google.com/u/0/uc?id=1bA2YKpzmziTbhIy77Xte6uEOlE5fa9Ra&export=download" target="_blank" >Download Resume</a>
        </div>
      </div>
    );
  }
}

export default About;
