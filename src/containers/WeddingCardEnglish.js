import { FaMap, FaSearchLocation } from "react-icons/fa";
import { MdLocationOn, MdPunchClock } from "react-icons/md";

export const WeddingCardEnglish = () => {
  return (
    <div
      style={{ background: "#fffff8", position:"relative",fontFamily:"Handlee", }}
      className="col d-flex flex-column align-items-center"
    >
        <img src={require("./../assets/images/invitation-background.png")} style={{position:"absolute",width: "42.85vw", height: "65vw",}}/>
      <div
        style={{ height: "100vh" }}
        className="d-flex flex-column align-items-center col-12 my-5"
      >
        <img
            style={{ height: 110, position:"absolute",left:"33%",top:"40%" }}
            src={require("./../assets/images/ganapathi-colored.png")}
          />
          <img
            style={{ height: 110, position:"absolute",right:"33%",top:"40%" }}
            src={require("./../assets/images/lakshmi-colored.png")}
          />
        <h1 className="mt-1 pb-2" style={{color:"#cca464",}}><strong>WEDDING</strong></h1>
        <div className="d-flex flex-fill flex-column align-items-center mt-1 mb-1">
            {/* <div className="text-center mt-3">
          <h6>MR. SANKARAN & MRS HEMA</h6>
          <h6 className="pb-2">EDAKKATTILLAM, PANAPPUZHA,KANNUR DIST</h6>

          <h6 className="pt-2">WE CORDIALLY INVITE YOUR PRESENCE AND PRAYERS WITH  FAMILY  </h6>
          <h6>TO GRACE THE WEDDING RECEPTION OF OUR DAUGHTER</h6>

          <h1 className="mt-5"><strong>BHAVANA</strong></h1>

          <h1>&</h1>

          <h1 className="mb-5"><strong>GOVIND</strong></h1>

          <h6>S/O MR. ESWARAN V.V & MRS RADHA ESWARAN</h6>
          <h6>VACHA VADHYAN ILLAM , KARIVELLUR, KANNUR DIST</h6>
          </div> */}

        <div className="text-center mt-3">
          <h6>MR. ESWARAN V.V & MRS RADHA ESWARAN</h6>
          <h6 className="pb-2">VACHA VADHYAN ILLAM , KARIVELLUR, KANNUR DIST</h6>

          <h6 className="pt-2">WE CORDIALLY INVITE YOUR PRESENCE AND PRAYERS WITH  FAMILY  </h6>
          <h6>TO GRACE THE WEDDING OF OUR SON</h6>

          <h1 className="mt-5"><strong>GOVIND</strong></h1>

          <h1>&</h1>

          <h1 className="mb-5"><strong>BHAVANA</strong></h1>

          <h6>D/O MR. SANKARAN & MRS. HEMA</h6>
          <h6>EDAKKATTILLAM, PANAPPUZHA,KANNUR DIST</h6>
          </div>
          <h6 className="mt-5">ON 10TH MAY 2024, FRIDAY</h6>

          <h6 className="pb-2">BETWEEN 7.40AM to 10.40AM</h6>
          <h6 className="mt-5">VENUE: VACHA VADHYAN ILLAM , KARIVELLUR,</h6>
          <h6 className="mb-2"> KANNUR - 670521 </h6>

          <div className="d-flex align-items-center mx-5 mt-4">
            <div className="text-center d-flex flex-column mx-2">
            <strong>FRIDAY</strong>
            <img
              style={{ height: 80, marginTop: -2 }}
              src={require("./../assets/images/may-10-edit.jpg")}
            />
            </div>
            <div className="text-center d-flex flex-column mx-2 align-items-center">
              <strong>7.40AM to 10.40AM</strong>
              <img
                src={require("./../assets/images/clock-edit.png")}
                style={{ height: 80 }}
              />
              {/* <img src={require("./../assets/images/may16.png")} style={{height:100}}/> */}
            </div>
            <div className="text-center d-flex flex-column mx-2 align-items-center">
              <strong>VACHA VADHYAN</strong>
              <img
              style={{ height: 80, marginTop: -2, borderRadius:8 }}
              src={require("./../assets/images/vadhyan-illam.jpeg")}
            />
              {/* <img src={require("./../assets/images/may16.png")} style={{height:100}}/> */}
            </div>
            <div className="text-center d-flex flex-column mx-2 align-items-center">
              <MdLocationOn size={25} />
              <img
              style={{ height: 80, marginTop: -2 }}
              src={require("./../assets/images/vadhyanQrcode.png")}
            />
            </div>
          </div>

          {/* <h6>at</h6>
        <h1>Sreevalsam Auditorium</h1>
        <h6>Madathumpadi Temple Road,</h6>
        <h6>Payyannur, Kannur Dist</h6> */}
        </div>
      </div>
    </div>
  );
};
