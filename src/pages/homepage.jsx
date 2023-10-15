import React, { useEffect } from "react";
import "../styles/HomePage.css";




export default function HomePage() {
  useEffect(() => {
    const eg = document.getElementById("eg");
    eg.play();
  }, []);

  return (
    <section className="hp">
      {/* <img className="img-responsive" alt="" src={bg} /> 
       <iframe  src="https://youtu.be/RFeW8fhUeeQ" /> */}

      <video className="img-responsive" id="eg" autoPlay muted={true} loop>
        <source src="assets/eagle.mp4" type="video/mp4" />
      </video>
      <div className="coming-soon">
        <div>Coming Soon</div>
      </div>
      <div className="offer">
     
          <h1>Get ready for the change.</h1>
          <p>Website coming soon. Please check back to know more. Shoot us an email if you're curious.</p>
        
      </div>
     <button type="submit" className="cta" style={{ position: "absolute", right: "15px", bottom: "15%" }}>
  Send us an email
</button>

      <footer>
        <div class="curve">
          <div class="left"></div>
          <div class="right"></div>
          <small>Copyright @ ManageMe 2023</small>
        </div>
      </footer>
    </section>
  );
}
