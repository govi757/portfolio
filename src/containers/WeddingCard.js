import { FaMap, FaSearchLocation } from "react-icons/fa";
import { MdLocationOn, MdPhone } from "react-icons/md";

export const WeddingCard = () => {
  return (
    <div
      style={{ background: "#fffff8", position: "relative", }}
      className="col d-flex flex-column align-items-center chilanka-regular"
    >
      <div
        style={{ height: "100vh", position: "relative" }}
        className="d-flex flex-column align-items-center col-12"
      >
        <img
          src={require("./../assets/images/invitation-background.png")}
          style={{ position: "absolute", width: "42.85vw", height: "65vw", }}
        />
        <div className="pt-3 d-flex flex-column align-items-center">
          <h3 className="pt-2"><strong>വിവാഹം</strong></h3>
          {/* <h6>
        2024 മെയ് 10 വെള്ളിയാഴ്ച
        </h6> */}
        </div>
        <div className="d-flex flex-fill flex-column align-items-center mb-1">
          {/* <div className="d-flex my-4">
          <div className="col-6 ">
            <h6 className="text-end me-4">
            ശ്രീ. വിവി ഈശ്വരൻ നമ്പൂതിരി &<br/> ശ്രീമതി. രാധ ഈശ്വരൻ,<br/> വാച്ചവാദ്ധ്യാൻ
            ഇല്ലം ,നിടുവപ്പുറം , കരിവെള്ളൂർ പി.ഒ, കണ്ണൂർ ജില്ല
            </h6>
          </div>

          <div className="col-6 ">
          <h6 className="ms-4">
            ശ്രീ. എടക്കാട് ശങ്കരൻ നമ്പൂതിരി &<br/> ശ്രീമതി. ഹേമലത,<br/> എടക്കാട്ടില്ലം,
            പാണപ്പുഴ പി ഒ, കണ്ണൂർ ജില്ല
            </h6>
          </div>
        </div> */}
          {/* <h6 className="text-center my-3">ഞങ്ങളുടെ മക്കളുടെ വിവാഹം 2024 മെയ് 10 (1199 മേടം 27 ) വെള്ളിയാഴ്ച രാവിലെ 7 .39 നും 10 .39 നും ഇടയിലുള്ള ശുഭ മുഹൂർത്തത്തിൽ 

വരന്റെ ഗൃഹത്തിൽ (വാച്ചവാദ്ധ്യാൻ ഇല്ലം ,നിടുവപ്പുറം , കരിവെള്ളൂർ) വെച്ച് നടത്തുകയാണ് .താങ്കളുടെ സകുടുംബ സാന്നിദ്ധ്യം സാദരം ക്ഷണിച്ചു കൊള്ളുന്നു .</h6> */}
          <img
            style={{ height: 90, width: 90 }}
            src={require("./../assets/images/ganapathi-colored.png")}
          />

          <div className="text-center p-3">
            <h4>
              <strong>വരൻ</strong>{" "}
            </h4>
            <h6 style={{ marginTop: -15 }}>---------- </h6>
            <h3 style={{ marginTop: -15 }}>
              <strong>ഗോവിന്ദ് വി.ഇ.</strong>{" "}
            </h3>
            <h6>
              (പുത്രൻ : ശ്രീ. വി.വി. ഈശ്വരൻ നമ്പൂതിരി (വേണു) & ശ്രീമതി. രാധ
              ഈശ്വരൻ
            </h6>
            <h6>
              പൗത്രൻ : പരേതനായ വാച്ചവാദ്ധ്യാൻ വിഷ്ണു നമ്പൂതിരി & ശ്രീമതി. ഗൗരി
              അന്തർജ്ജനം,{" "}
            </h6>
            <h6>
              പരേതനായ പരിപ്പായി ഗോവിന്ദൻ നമ്പൂതിരി & ശ്രീമതി. സരസ്വതി അന്തർജ്ജനം
              ){" "}
            </h6>

            <h4 className="mt-3">
              <strong>വധു</strong>{" "}
            </h4>
            <h6 style={{ marginTop: -15 }}>-------- </h6>
            <h3 style={{ marginTop: -15 }}>
              <strong>ഭാവന ഇ.</strong>{" "}
            </h3>
            <h6>(പുത്രി :ശ്രീ. എടക്കാട് ശങ്കരൻ നമ്പൂതിരി & ശ്രീമതി. ഹേമലത </h6>
            <h6>
              പൗത്രി : പരേതനായ എടക്കാട് വിഷ്ണു നമ്പൂതിരി & ശ്രീമതി. ദേവകി
              അന്തർജ്ജനം ,
            </h6>
            <h6>
              ശ്രീ. നീലമന ശങ്കരൻ എമ്പ്രാന്തിരി & ശ്രീമതി. ഗൗരി അന്തർജ്ജനം ){" "}
            </h6>
          </div>

          <h4>
            <strong>വിവാഹ സുദിനം</strong>{" "}
          </h4>
          <h4 style={{ marginTop: -15 }}>--------------------- </h4>

          <h6 style={{ marginTop: -15 }}>
            2024 മെയ് 10 (1199 മേടം 27 ) വെള്ളിയാഴ്ച{" "}
          </h6>
          <h4>
            <strong>മുഹൂർത്തം</strong>{" "}
          </h4>
          <h6 style={{ marginTop: -15 }}>----------------</h6>

          <h6 style={{ marginTop: -15 }}>7.40 നും 10.40 നും മദ്ധ്യേ </h6>

          <h4>
            <strong>വിവാഹ വേദി </strong>{" "}
          </h4>
          <h6 style={{ marginTop: -15 }}>-------------------- </h6>

          <h6 style={{ marginTop: -15 }}>
            വാച്ചവാദ്ധ്യാൻ ഇല്ലം ,നിടുവപ്പുറം , കരിവെള്ളൂർ, കണ്ണൂർ ജില്ല{" "}
          </h6>
          <div className="d-flex mb-4">
            <h6>
              <MdPhone /> 9188744757{" "}
            </h6>
            ,<h6 className="ms-3"> 9495017767 </h6>
          </div>

          {/* <div className="d-flex">
            <div className="d-flex flex-column align-items-center">
              <MdLocationOn size={20} style={{ marginBottom: -12 }} />
              <img
                style={{ height: 80, marginTop: 10 }}
                src={require("./../assets/images/qrcode.png")}
              />
            </div>
          </div> */}
        </div>
        <div style={{ marginTop: -20, marginBottom: 10 }} className="d-flex">
          <div className="text-center d-flex flex-column mx-2 align-items-center me-3">
            Friday
            <img
              style={{ height: 80, marginTop: -2 }}
              src={require("./../assets/images/may-10-edit.jpg")}
            />
          </div>

          {/* <div className="text-center d-flex flex-column mx-2 align-items-center me-3">
            7.40am - 10.40am
            <img
              style={{ height: 80, marginTop: -2, borderRadius:8 }}
              src={require("./../assets/images/clock.png")}
            />
          </div> */}

          <div className="text-center d-flex flex-column mx-2 align-items-center me-3">
            വാച്ചവാദ്ധ്യാൻ ഇല്ലം
            <img
              style={{ height: 80, marginTop: -2, borderRadius:8 }}
              src={require("./../assets/images/vadhyan-illam.jpeg")}
            />
          </div>

          
          <div className="text-center d-flex flex-column mx-2 align-items-center me-3">
            <MdLocationOn size={25} />
            <img
              style={{ height: 80, marginTop: -2 }}
              src={require("./../assets/images/vadhyanQrcode.png")}
            />
          </div>
        </div>
        <h5 className="pb-2 pt-3">
          <strong>
            താങ്കളുടെ സകുടുംബ സാന്നിദ്ധ്യം സാദരം ക്ഷണിച്ചു കൊള്ളുന്നു .
          </strong>
        </h5>
        {/* <div  className="p-3 d-flex flex-column align-items-center" style={{backgroundColor:"#fcb2a9",color:"#fff",width:"100%"}}>
      <h6 >താങ്കളുടെ സകുടുംബ സാന്നിദ്ധ്യം സാദരം ക്ഷണിച്ചു കൊള്ളുന്നു .</h6>
        </div> */}
      </div>
    </div>
  );
};
