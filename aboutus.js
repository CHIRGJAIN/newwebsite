// import React from "react";
// import "../styles/TrustedClients.css";

// import hcl from "../assets/hcl.png";
// import education from "../assets/education.png";
// import railways from "../assets/railways.png";
// import nixi from "../assets/nixi.png";
// import aviation from "../assets/aviation.png";
// import tata from "../assets/tata.png";
// import bcpl from "../assets/bcpl.png";
// import army from "../assets/indianarmy.png";
// import drdo from "../assets/drdo.png";

// const clients = [
//   { image: hcl, name: "HCL Technologies" },
//   { image: education, name: "Ministry of Education" },
//   { image: railways, name: "Ministry of Railways" },
//   { image: nixi, name: "NIXI" },
//   { image: aviation, name: "Aviation Authority" },
//   { image: tata, name: "TATA" },
//   { image: bcpl, name: "BCPL" },
//   { image: army, name: "Indian Army" },
//   { image: drdo, name: "DRDO" }
// ];


// function TrustedClients() {
//   return (
//     <section className="trusted-clients">
//       <h2>Trusted Clients</h2>
//       <div className="clients-grid">
//         {clients.map((client, index) => (
//           <div key={index} className="client-card">
//             <img src={client.image} alt={client.name} />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default TrustedClients;




import React from "react";
import "../styles/About.css";
import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";
import about3 from "../assets/about3.jpg";
// import icon from "../assets/icon.png"; // Update path if needed

function AboutUs() {
  return (
    <section className="about-section" style={{backgroundColor: "#4382EC", padding: "20px", borderRadius: "30px", color: "white"}}>
      {/* Who We Are Section */}
      <div className="who-we-are">
        <div className="text-content">
          <h2>ABOUT US</h2>
          <h1>Who We Are</h1>
          <p>
            With over 14 years of unwavering excellence in IT rentals and sales, 
            A&S Computer Services, headquartered in Delhi NCR, India, has positioned 
            itself as one of the fastest-growing and most trusted companies in the 
            IT solutions industry. Established in 2010 as SDR Infosystems Pvt. Ltd., 
            we rebranded in 2017 to A&S Computer Services, reflecting our evolving 
            expertise and focus on comprehensive IT service integration.
          </p>
          <p>
            At A&S Computer Services, we are dedicated to helping businesses modernize 
            and streamline their IT infrastructure. By offering a wide range of premium 
            solutions in IT rentals, IT sales, AMC & FMS services, and advanced printing 
            solutions, we ensure that our clients have access to the latest technology 
            and unparalleled support. Our commitment to quality and customer satisfaction 
            has made us a go-to partner for businesses looking to stay ahead in an ever-evolving 
            technological landscape.
          </p>
        </div>
        <div className="images">
          <img src={about1} alt="Tech Work" />
          <img src={about2} alt="Repairing Laptop" />
          <img src={about3} alt="Tech Engineer" />
        </div>
      </div>

      {/* Cards Section */}
      <div className="cards-section">
        <div className="card">
          {/* <img src={icon} alt="icon" className="card-icon" /> */}
          <h3>Qualified Service</h3>
          <p>
            Get top-quality laptops, MacBooks, and refurbished products with 
            support from our qualified engineers. Reliable, affordable, and eco-friendly!
          </p>
        </div>
        <div className="card">
          {/* <img src={icon} alt="icon" className="card-icon" /> */}
          <h3>Always Available</h3>
          <p>
            Count on us whenever you need! With a wide range of laptops, 
            MacBooks, and IT products, we’re ready to serve you anytime 
            with reliable solutions and support.
          </p>
        </div>
        <div className="card">
          {/* <img src={icon} alt="icon" className="card-icon" /> */}
          <h3>Quick Response</h3>
          <p>
            Your time matters! Our team ensures fast and efficient support, 
            providing solutions to your IT needs without delay. We're here 
            when you need us!
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
