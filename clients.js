import React from "react";
import "../styles/Clients.css";

function Clients() {
  return (
    <section className="clients">
      <h2>Our Clients</h2>
      <div className="client-list">
        <img src="/images/client1.png" alt="Client 1" />
        <img src="/images/client2.png" alt="Client 2" />
        <img src="/images/client3.png" alt="Client 3" />
        <img src="/images/client4.png" alt="Client 4" />
      </div>
    </section>
  );
}

export default Clients;

