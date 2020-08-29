import React from "react";
import "./style.css";

function Index() {
    // Setting the component's initial state

    return (

        <div className="aboutmecontainer mb-2 mt-5">

            <div className="row">
                <div className="col-md-4">
                    <img src="./images/picture of me 1.png" alt="Corey Spratlan" style={{ width: "100%" }} />
                </div>



                <div className="col-md-4">
                    <div className="border-dark mb-3" style={{ maxWidth: "35rem" }}>
                        <div className="card-header header bg-dark text-light text-center" style={{ text: "light" }}><b>About Me</b></div>
                        <br />
                        <div className="card-body text-dark aboutmecard">
                            <h3><b>History</b></h3>
                            <br />
                            <p style={{ fontSize: "20px" }}>A native to Austin, Corey began his coding studies through the UT Coding Bootcamp Full-Stack Develpment full-time program in June, 2020.
                            Corey was an orchestra teacher for the Round Rock Indepdendent School District as well as a conductor for the Austin Youth Orchestra,
                            a principal violinist for the Waco Symphony Orchestra, and a private violin teacher before he began his coding journey.

                </p>
                            <h3><b>Future</b></h3>
                            <br />
                            <p style={{ fontSize: "20px" }}>Upon graduation from the UT Coding Bootcamp, Corey will continue studying computer programming languages as he prepares to apply for
                            jobs in web delvelopment.
                </p>
                        </div>
                    </div>
                </div>



                <div className="col-md-4">
                    <div className="border-dark mb-3" style={{ maxWidth: "35rem" }}>
                        <div className="card-header header bg-dark text-light text-center"><b>Education / Experience</b></div>
                        <div className="card-body text-dark aboutmecard">
                            <br />
                            <h3 className="mb-2"><b>Education</b></h3>
                            <br />
                            <ul className="mb-2">
                                <li style={{ fontSize: "20px" }}>Baylor University: Bachelor of Music Education</li>
                                <li style={{ fontSize: "20px" }}>University of Texas at Austin: Master of Music</li>
                                <li style={{ fontSize: "20px" }}>UT Coding Bootcamp Full-Stack Web Development</li>
                            </ul>
                            <br />
                            <h3 className="mb-2"><b> Work Experience </b></h3>
                            <br />

                            <ul>
                                <li style={{ fontSize: "20px" }}>Waco Symphony - section violin, principal</li>
                                <li style={{ fontSize: "20px" }}>Central Texas String Academy, violin instructor</li>
                                <li style={{ fontSize: "20px" }}>Trinity Episcopal School, orchestra director</li>
                                <li style={{ fontSize: "20px" }}>Ridgeview Middle School, orchestra director</li>
                                <li style={{ fontSize: "20px" }}>Austin Youth Orchestra, conductor</li>
                                <li style={{ fontSize: "20px" }}>Clinician: Texas Music Educators Association All-Region conductor for Region 18 and Region 12</li>
                                <li style={{ fontSize: "20px" }}>Clinician: Texas Orchestra Directors Association conductor</li>
                            </ul>
                        </div>
                    </div>


                </div>
            </div>
        </div>

    );
}


export default Index;