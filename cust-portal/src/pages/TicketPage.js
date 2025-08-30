// src/pages/TicketPage.js
import React, { useState } from 'react';
import './TicketPage.css'; // Importing CSS file from the same folder
import Footer from '../components/Footer';

export default function TicketPage() {
  const [ticketDetails, setTicketDetails] = useState({ name: '', email: '', issue: '' });

  const handleSubmit = () => {
    alert('Ticket submitted successfully!');
  };

  return (
    <div className="ticket-page">
      <div className="form-card">
        <h2>Raise a Complaint / Ticket</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={ticketDetails.name}
              onChange={(e) => setTicketDetails({ ...ticketDetails, name: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={ticketDetails.email}
              onChange={(e) => setTicketDetails({ ...ticketDetails, email: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="issue">Issue</label>
            <textarea
              id="issue"
              rows="4"
              value={ticketDetails.issue}
              onChange={(e) => setTicketDetails({ ...ticketDetails, issue: e.target.value })}
            />
          </div>
          <button type="button" onClick={handleSubmit}>
            Submit Ticket
          </button>
        </form>
      </div>
      <Footer /> {/* Footer stays at bottom */}
    </div>
  );
}
