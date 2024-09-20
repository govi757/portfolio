import { Component, createElement } from "react";

import "./styles/mainpage.css";
import "../text.css";
import {
  FaBirthdayCake,
  FaFacebook,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import {
  MdMail,
  MdPhone,
  MdCalendarToday,
  MdLocationCity,
} from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import moment from "moment";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      experience: 2,
      email: "govi757@gmail.com",
      phone: "9495017767",
      age: "28",
      address: "VV Mana , Niduvappuram, Karivellur(p/o), Kannur, Kerala",
      dateOfJoining: "2018-01-28",
      dateOfBirth: "1995-07-28",
    };
  }

  componentDidMount() {
    this.setState({
      age: this.calculateAge(),
      experience: this.calculateExperience(),
    });
  }

  calculateAge() {
    return `${moment().diff(moment(this.state.dateOfBirth), "years")}`;
  }

  calculateExperience() {
    return `${moment().diff(moment(this.state.dateOfJoining), "years")} Years,
    ${moment().diff(moment(this.state.dateOfJoining), "months") % 12} Months`;
  }
  render() {
    return (
      <div className="appContainer main-page">
        <img
                className="dpMob"
                src={require("../assets/images/govidp3.jpeg")}
              />
        <div className="d-flex">
          <div className="dp-container">
            <div className="dp-abs-container">
              <div>
                <div className="xlarge white text-center ">Govind VE</div>
                <div className="large white text-center mb-2">
                  Software Developer
                </div>
              </div>
              <img
                className="dp"
                src={require("../assets/images/govidp3.jpeg")}
              />
            </div>
          </div>
          <div className="flex1">
            <div className="name-desg-cont">
              <div className="xlarge white text-center mx-3">Govind VE</div>
              <div className="large white text-center mx-3 mb-4">
                Software Developer
              </div>
            </div>
            {personalDetailsList.map((personalDetails) => {
              return (
                <div
                  key={personalDetails.key}
                  className="large white flex-row  py-2 align-center"
                >
                  <div className="detailsTitle flex-row">
                    <div>
                      {createElement(personalDetails.icon, {
                        className: "mx-3",
                      })}
                    </div>
                    {personalDetails.label}
                  </div>
                  <div className="flex1">
                    : {this.state[personalDetails.key]}
                  </div>
                </div>
              );
            })}
            <div className="social d-flex xxlarge white">
              {socialLinks.map((socialLink) => {
                return (
                  <a className="socialHref" target="_blank" href={socialLink.url}  key={socialLink.label}>
                    {createElement(socialLink.icon, { className: "mx-3" })}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const personalDetailsList = [
  {
    label: "Email",
    icon: MdMail,
    key: "email",
  },
  {
    label: "Phone",
    icon: MdPhone,
    key: "phone",
  },
  {
    label: "Experience",
    icon: MdCalendarToday,
    key: "experience",
  },
  {
    label: "Age",
    icon: FaBirthdayCake,
    key: "age",
  },
  {
    label: "Address",
    icon: MdLocationCity,
    key: "address",
  },
];

const socialLinks = [
  {
    label: "Linked In",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/govind-v-e-577a39b7/",
  },
  {
    label: "Facebook",
    icon: FaFacebookSquare,
    url: "https://www.facebook.com/govind.ve.5",
  },

  {
    label: "InstaGram",
    icon: FaInstagramSquare,
    url: "https://www.instagram.com/govind_v_e?utm_source=qr&igsh=MTkwNGw4cGRtNWR5dw==",
  },
];

export default MainPage;
