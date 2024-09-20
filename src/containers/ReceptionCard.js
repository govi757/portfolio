import { FaMap, FaSearchLocation } from "react-icons/fa";
import { MdLocationOn, MdPunchClock } from "react-icons/md";

export const ReceptionCard = () => {
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
        <h2 className="mt-1 pb-2" ><strong>RECEPTION</strong></h2>
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
          <h6>TO GRACE THE WEDDING RECEPTION OF OUR SON</h6>

          <h1 className="mt-5"><strong>GOVIND</strong></h1>

          <h1>&</h1>

          <h1 className="mb-5"><strong>BHAVANA</strong></h1>

          <h6>D/O MR. SANKARAN & MRS. HEMA</h6>
          <h6>EDAKKATTILLAM, PANAPPUZHA,KANNUR DIST</h6>
          </div>
          <h6 className="mt-5">ON 16TH MAY 2024, THURSDAY</h6>

          <h6 className="pb-2">BETWEEN 11AM to 2PM</h6>
          <h6 className="mt-5">VENUE: SREEVALSAM AUDITORIUM,MADATHUMPADI TEMPLE ROAD,</h6>
          <h6 className="mb-2"> PAYYANNUR, KANNUR - 670307 (BEHIND POLICE STATION)</h6>

          <div className="d-flex align-items-center mx-5 mt-4">
            <div className="text-center d-flex flex-column mx-2">
              <strong>THURSDAY</strong>
              <img
                src={require("./../assets/images/may-16-edit.png")}
                style={{ height: 80 }}
              />
            </div>
            <div className="text-center d-flex flex-column mx-2 align-items-center">
              <strong>11AM to 2PM</strong>
              <img
                src={require("./../assets/images/clock-edit.png")}
                style={{ height: 80 }}
              />
              {/* <img src={require("./../assets/images/may16.png")} style={{height:100}}/> */}
            </div>
            <div className="text-center d-flex flex-column mx-2 align-items-center">
              <strong>SREEVALSAM</strong>
              <img
                src={require("./../assets/images/sreevalsam.jpeg")}
                style={{ height: 80,borderRadius:8 }}
              />
              {/* <img src={require("./../assets/images/may16.png")} style={{height:100}}/> */}
            </div>
            <div className="text-center d-flex flex-column mx-2 align-items-center">
              <MdLocationOn size={25} />
              <img
                src={require("./../assets/images/sreevalsamqrcode.png")}
                style={{ height: 80 }}
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
