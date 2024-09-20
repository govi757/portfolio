import { Component } from "react";
import { isInViewport } from "../util";
import "./styles/about.css";
class SRP extends Component {
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
    });
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = (event) => {
    if (isInViewport(this.state.aboutElement)) {
      window.removeEventListener("scroll", this.handleScroll);
      this.makeAnimatedHeader();
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
      <div id="about-me" className="appContainer  about-page mt-5">
        <h6 style={{position:"fixed",zIndex:999,left:400,top:245,fontStyle:"italic",fontWeight:"bold"}}>Bhavana E</h6>
        <img src={require("../assets/images/StudentResource.png")} />
        
      </div>
    );
  }
}

export default SRP;
