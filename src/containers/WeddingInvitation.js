const WeddingInvitation = () => {
    return (
        <div>
            <div className="row">
                <div  >
                <img className="weddingImage"  src={require("../assets/images/bhavanaGovindam.JPG")} />
                </div>
            </div>
            <div  className="weddingBody d-flex flex-column align-items-center justify-content-center" >
                <div><h1>Welcome To Our New Begining</h1></div>
                <div style={{paddingTop:"250px"}} className="text-center">
                    <h3>We Cordially Invite You To Celibrate The Joyous Union Of </h3>
                    <h1>Wedding Reception</h1>

                <h3>D/o Mr Sankaran & Mrs Hema</h3>

                <strong><h1>Bhavana</h1></strong>
                <strong><h1>&</h1></strong>
                <strong><h1>Govind</h1></strong>
                <h3>D/o Mr Eswaran & Mrs Radha</h3>

                    
                </div>
                <div className="text-center">
                <strong><h1>Venue</h1></strong>
                <h3>Sreevalsam Building, Madathumpadi Temple Road, Payyanur, Kannur - 670307 (Behind Police Station)</h3>
                </div>
                </div>
        </div>
    )
}

export default WeddingInvitation;