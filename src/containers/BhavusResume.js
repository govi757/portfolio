import { Component } from "react";
import "./styles/resume.css";
import "../text.css";
class BhavusResume extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App ">
        <div className="row">
          <div className="col-4">
          <div className="img">
                <img className="img" src={require("../assets/bhavus_dp.jpg")} />
            </div>
          </div>
          <div className="col-8">
          <div className="top-section">
                <div className="xxlarge semi-bold pt-4">BHAVANA E</div>
                <div className="small">Research Biochemist</div>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-4 ">
            {/* <div className="img">
                <img className="img" src={require("../assets/bhavus_dp.jpg")} />
            </div> */}
            <div className="xlarge golden mb-2">Details</div>

            <div className="mb-3">
              <div className="medium mb-1 semi-bold">Address</div>
              <div className="small">
                Edakkattillam,Panapuzha(P/O),MM Bazar (via) , Kannur PAYYANNUR,
                670306 INDIA
              </div>
            </div>

            <div className="mb-3">
              <div className="medium mb-1 semi-bold">Phone</div>
              <div className="small">8921038690</div>
            </div>

            <div className="mb-3">
              <div className="medium mb-1 semi-bold">EMail</div>
              <div className="small">bhavana472000@gmail.com</div>
            </div>

            <div className="mb-3">
              <div className="medium mb-1 semi-bold">Date of birth</div>
              <div className="small">07/04/2000</div>
              {/* <div className="small">Payyannur</div> */}
            </div>

            {/* <div className="mb-5">
              <div className="medium mb-1 semi-bold">Nationality</div>
              <div className="small">Indian</div>
            </div> */}
            <div className="mb-3">
            <div className="xlarge golden mb-2">Links</div>
            <a href="https://www.linkedin.com/in/bhavana-edakkad-609613202/" className="small golden">https://www.linkedin.com/in/bhavana-edakkad-609613202/</a>
            </div>
            
            {/* <div className="mb-3">
            <div className="xlarge golden mb-2">Positives</div>
            <div className="medium mb-1 semi-bold "> Multi task,Hard working,Time management, Learning,Communication, Flexibility and Adaptability</div>
            

            </div> */}
            <div className="mb-3">
            <div className="xlarge golden mb-2">Skills</div>
            <div className="medium mb-1 semi-bold "> Laboratory skills, ELISA, Culture techniques, Research and development, Analysis,Multi task,Adapting,Communication</div>

            </div>

            

            <div className="mb-3">
            <div className="xlarge golden mb-2">Hobbies</div>

            <div className="medium mb-1 semi-bold ">Reading, Learning, Singing, Dancing</div>
            </div>

            <div className="mb-3">
            <div className="xlarge golden mb-2">Languages</div>

            <div className="medium mb-1 semi-bold ">English, Malayalam, Hindi, Tamil</div>
            </div>

          </div>

          <div className="col-8">
            {/* <div className="top-section">
                <div className="xxlarge semi-bold pt-4">BHAVANA E</div>
                <div className="small">Research Biochemist</div>
            </div> */}
            <div className="xlarge golden mb-2">Education</div>


            <div className="mb-3">
              <div className="semi-bold">
                St.Aloysius Autonomous College, Mangalore, Post Graduation
              </div>
              <div className="mb-2 small">Aug 2021 - june 2023 Mangalore</div>
              <div className="mb-1 small">Graduated with 85.1% score</div>
            </div>


            <div >
              <div className="semi-bold">
                GASC,Mathil, Under Graduation
              </div>
              <div className="mb-2 small">Jun 2018 — Jul 2021 Kannur</div>
              <div className="mb-1 small">Graduated with 89.58% score(3rd rank)</div>
            </div>


            {/* <div className="mb-3">
              <div className="semi-bold">
                CPNM GHSS MATHAMANGALAM, Higher secondary
              </div>
              <div className="mb-3 small">Mar 2016 — Mar 2018 Kannur</div>
              <div className="mb-1 small">Graduated with 92%</div>
            </div> */}



            <div className="mb-4">
              <div className="xlarge golden mb-2">Internships</div>
              <div className="semi-bold">
                Sampling and Testing , Molbio Diagnostic Verna, Goa
              </div>
              <div className="mb-3 small">Jul 2022 — Aug 2022 Goa</div>

              <div className="semi-bold">
                Centre of integrative omics data science, Yenapoya, Deemed to be university
              </div>
              <div className="small">Present</div>
            </div>

            <div className="mb-2">
              <div className="xlarge golden mb-2">Courses</div>
              <div className="semi-bold">
                Cancer Biology Specialization, Johns Hopkins University,
                Baltimore, Maryland
              </div>
              <div className="mb-2 small">Jan 2023 — Feb 2023</div>

              {/* <div className="semi-bold">
                Advanced Cell Biology, GASC, Mathil
              </div>
              <div className="mb-3 small">Dec 2020 — Jan 2021</div> */}
            </div>


            <div >
              <div className="xlarge golden mb-2">Projects</div>
              <div className="semi-bold">
              COMPARATIVE LIPID PROFILES IN PREMENOPAUSAL AND POSTMENOPAUSAL WOMEN
              </div>
              <div className="mb-3 small">2021 - AKG memorial Cooperative hospital, Kannur</div>

              <div className="semi-bold">
              SYNTHESIS AND BIOLOGICAL ACTIVITIES OF ALCOHOLIC EXTRACT OF CITRUS LIMON PEEL AND OCIMUM TENUIFLORUM LEAVES BASED ZINC OXIDE NANOPARTICLES AND THEIR CATALYTIC APPLICATIONS
              </div>
              <div className=" small mb-3">Sep 2022 - june 2023 - St. Aloysius Autonomous college Mangalore</div>
            </div>

            <div >
              <div className="xlarge golden mb-2">Achievements</div>
              <div className="semi-bold">
              Best Paper Award
              </div>
              <div className="mb-3 small">At an Alumni-sponsored National conference on Recent Innovations in Medical and Environmental Biotechnology at Alva's College, Moodubidire.</div>

              <div className="semi-bold">
              Student Resource Person
              </div>
              <div className=" small">At the National-level hands-on workshop on 'Bioanalysis-2023', held at St. Aloysius College, Mangaluru.</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BhavusResume;
