import React, { Component } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { Progressbar } from "../components/progressbar";
import { TimeLineBar } from "../components/timelinebar";
import { isInViewport } from "../util";

class MyResume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      element: null,
      heading: "",
    };
  }
  componentDidMount() {
    // this.myRef = React.createRef();
    this.setState({
      element: document.getElementById("my-resume"),
    },() => {
      window.addEventListener("scroll", this.handleScroll);
    });
    
  }


  handleScroll = (event) => {
    if (isInViewport(this.state.element)) {
      window.removeEventListener("scroll", this.handleScroll);
      this.makeAnimatedHeader();
    }
  };

  makeAnimatedHeader(title = "_My_Resume") {
    let temp = title;
    const resumeInterval = setInterval(() => {
      this.setState(
        {
          heading: this.state.heading + "" + temp.charAt(0),
        },
        () => {
          temp = temp.substring(1);
          if (temp.length === 0) {
            clearInterval(resumeInterval);
          }
        }
      );
    }, 100);
  }
  
  render() {
    return (
      <div   className="appContainer myResumeContainer " ref={this.myRef}>
        
        <h1 id="my-resume" className="heading xxlarge grey">{this.state.heading}</h1>

        <div className="large col-11 normal">
          Have experience in veriety of programmic languages mostly focused on
          front end Frameworks such as react, angular , vue
        </div>
        <div className="mx-xl-5 my-3">
        <div className="xlarge grey my-3">
            Experience <FaGraduationCap />
          </div>
          <TimeLineBar itemList={expList} />
          <div className="xlarge my-3 grey">
            Education <FaGraduationCap />
          </div>
          <TimeLineBar itemList={educationList} />

          
          <div className="xlarge grey my-3">
            Skills <FaGraduationCap />
          </div>
          <div className="row">
          {
            skillList.map(skill => {
                return <div key={skill.skill} className="col-md-6 my-3"><Progressbar title={skill.skill} value={skill.confidence} /></div>
            })
          }
        </div>
        </div>
      </div>
    );
  }
}

export default MyResume;

const educationList = [
  {
    title: "SSLC, HCCEMHSS SNEHAGIRI",
    date: "2010",
    subTitle: "Kerala State Syllabus",
  },
  {
    title: "HIGHER SECONDARY, GOVERNMENT SAMITHY HSS MELADOOR",
    date: "2010-2012",
    subTitle: "Kerala State Syllabus",
  },
  {
    title: "BTECH, SNGCET PAYYANNUR",
    date: "2013-2017",
    subTitle: "KANNUR UNIVERSITY",
  },
];

const expList = [
  {
    title: "IOOLABS PVT LTD",
    date: "2018-2022",
    subTitle: "Software Engineer",
  },
  {
    title: "Freed",
    date: "2022 - current",
    subTitle: "Software Engineer",
  },
];

const skillList = [
    {
      skill: "HTML",
      confidence: 90,
    },
    {
        skill: "Java script",
        confidence: 90,
    },
    {
        skill: "CSS",
        confidence: 80,
    },
    {
        skill: "React",
        confidence: 90,
    },
    {
      skill: "Next js",
      confidence: 80,
  },
    {
        skill: "Angular",
        confidence: 80,
    },
    {
        skill: "Vue",
        confidence: 80,
    },
    {
        skill: "React Native",
        confidence: 80,
    },
    {
        skill: "Flutter",
        confidence: 70,
    },
    {
        skill: "Express js",
        confidence: 70,
    },
    // {
    //     skill: "Java",
    //     confidence: 40,
    // },

  ];
