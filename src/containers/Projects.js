import { Component } from "react";
import { isInViewport } from "../util";
import "./styles/project.css";
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      element: null,
      heading: "",
      selectedTab: "All",
      projectList: projectList
    };
  }

  componentDidMount() {
    this.setState({
      element: document.getElementById("my-projects"),
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

  makeAnimatedHeader(title = "_My_Projects") {
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
  tabSelected(tab) {
    this.setState({
      selectedTab: tab
    });
    let tempProjectList = projectList;
    if(tab === 'Mobile') {
      tempProjectList = projectList.filter(project => {
        return project.technology.includes("React Native")
        ||project.technology.includes("Flutter")
      });
    } else if(tab === 'Web') {
      tempProjectList = projectList.filter(project => {
        return project.technology.includes("React") || project.technology.includes("Vue") || project.technology.includes("Angular") || project.technology.includes("HTML")
      }); 
    } else if(tab === 'Others') {
      tempProjectList = projectList.filter(project => {
        return project.technology.includes("Electron") 
      }); 
    }
    this.setState({
      projectList: [...tempProjectList]
    });
  }
  render() {
    return (
      <div className="appContainer">
        <h1  id="my-projects" className="xxlarge grey heading">{this.state.heading}</h1>
        <div className="d-flex">
        {tabList.map(tab => {
          return (
            <div onClick={() => this.tabSelected(tab)} role="button" className={`text-center large px-2 ${this.state.selectedTab === tab?'active':''}`} key={tab}>
              {tab}
              </div>
          )
        })}
        </div>

        <div className="projectContainer">
          <div className="row">
            {this.state.projectList.map((project) => (
              <div key={project.title} className="col-md-4 my-3">
                <div className="card ">
                  <div className="card-top">
                  <img
                    className="projectImg"
                    src={project.img}
                    alt="Card image cap"
                  />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text description">
                      {project.description}
                    </p>
                    <div className="flex-row chip-container">
                    {
                      project.technology.map(tech => {
                        return(
                          <div key={project.title + tech} className="chip">
                            {tech}
                            </div>
                        )
                      })
                    }
                    </div>
                    {/* {project.links&&<a href={project.links} class="btn">
                      Go somewhere
                    </a>} */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const tabList = [
  "All","Mobile","Web","Others"
];

const projectList = [
  {
    title: `Spine`,
    description: `This is a vue js application which is used to manage the sales and operations of a debt settlement company called FREED.`,
    technology: ["Vue", "JS", "HTML", "CSS"],
    img: require("../assets/images/projects/freed-home.png"),
  },
  {
    title: `Self enroll app`,
    description: `This is a vue js application where a user who is in a debt trap can register to freed with necessary details.`,
    technology: ["Vue", "JS", "HTML", "CSS"],
    img: require("../assets/images/projects/freed-home.png"),
    links: "https://app.freed.care",
  },
  // {
  //   title: `Freed`,
  //   description: `Freed is a debt settlement organization and this is a web app which is used for managing their daily sales`,
  //   technology: ["Vue", "JS", "HTML", "CSS"],
  //   img: require("../assets/images/projects/freed-home.png"),
  // },
  {
    title: `Freed.care Website`,
    description: `Freed.care is the official website of FREED.`,
    technology: ["Next", "HTML", "CSS"],
    img: require("../assets/images/projects/freed-home.png"),
  },
  {
    title: `Bizgo EasyKhata App`,
    description: `BIZGO EasyKhata (easy Ledger Account Book) - Replace your traditional Udhar bahi khata with a new digital ledger book`,
    technology: ["React Native", "Redux", "JS"],
    img: require("../assets/images/projects/bizgo-easy.png"),
  },
  {
    title: `Xcelerator App`,
    description: `Xcelerator app(Exn app) is a hybrid mobile application developed using react native.Its a learning application as well as job seeking application which allows user to build a portfolio`,
    technology: ["React Native", "Redux", "JS"],
    img: require("../assets/images/projects/exn.png"),
  },
  {
    title: `BizgoJi App`,
    description: `Bizgoji app(Exn app) is a hybrid mobile application developed using react native.Its a bussiness application for Traders and Wholesalers .`,
    technology: ["React Native", "Redux", "JS"],
    img: require("../assets/images/projects/bizgoji.png"),
  },
  {
    title: `Telecommunication Management`,
    description: `Telecommunication Management System is a management system developed for Tata Communications. It is used for managing the fiber communication table and inventory `,
    technology: ["React", "Redux", "JS", "HTML"],
    img: require("../assets/images/projects/electron.png"),
  },
  {
    title: `ABC LMS`,
    description: `LMS is a learning management system thats developed for ABCForTechnology. This is useful for users who are searching for online courses on various technologies`,
    technology: ["Vue", "JS", "HTML", "CSS"],
    img: require("../assets/images/projects/abc-atoms.png"),
  },
  {
    title: `ABC ATOMS`,
    description: `ATOMS is a training operation management system thats developed for ABCForTechnology. This is useful for managing their offline training processes `,
    technology: ["Vue", "JS", "HTML", "CSS"],
    img: require("../assets/images/projects/abc-atoms.png"),
  },
  {
    title: `Blend`,
    description: `Its a Mac book application where we can configure the data base, apis and data types of an express app as well as will develop the code for react front end`,
    technology: ["Electron", "React", "Redux"],
    img: require("../assets/images/projects/electron.png"),
  },
  {
    title: `ATOMS APP`,
    description: `ATOMS App is used to manage students activity for a trainer which includes a qrcode scanner for marking the attendance of students .`,
    technology: ["Flutter"],
    img: require("../assets/images/projects/abc-atoms.png"),
  },
  {
    title: `Ampliz Extension`,
    description: `Ampliz extension can be used to get the information of the websites which includes their revenues, employees etc.`,
    technology: ["Angular", "HTML", "CSS"],
    img: require("../assets/images/projects/angular.png"),
  },

  {
    title: `VITA Web`,
    description: `VITA is a Virtual interactive training and assessment platform where we can create trainings via phone calls based on IVR. We are using the apis provided by variform solutions `,
    technology: ["Angular", "HTML", "CSS"],
    img: require("../assets/images/projects/angular.png"),
  },
];

export default Projects;
