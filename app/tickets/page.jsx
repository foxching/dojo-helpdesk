import React from "react";
import TicketList from "./TicketList";

export default function Tickets() {
  return (
    <main>
      <h1>Tickets</h1>
      <p>Currently open tickets</p>
      <TicketList />
    </main>
  );
}
