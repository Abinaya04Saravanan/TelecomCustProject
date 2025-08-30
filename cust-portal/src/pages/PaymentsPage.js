import React, { useState } from 'react';
import './PaymentsPage.css';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

export default function PaymentsPage() {
  const [paymentDetails, setPaymentDetails] = useState({ cardNumber: '', expiryDate: '', cvv: '' });
  const navigate = useNavigate();

  const handlePayment = () => {
    alert('Payment processed successfully!');
    navigate('/dashboard'); // redirect after payment
  };

  return (
    <div className="payment-page-wrapper"> {/* NEW WRAPPER */}
      <div className="payment-container">
        <div className="payment-card">
          <h2 className="payment-title">Enter Payment Details</h2>
          <form>
            <div className="form-group">
              <label htmlFor="cardNumber">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                className="form-control"
                placeholder="1234 5678 9012 3456"
                value={paymentDetails.cardNumber}
                onChange={(e) => setPaymentDetails({ ...paymentDetails, cardNumber: e.target.value })}
              />
            </div>
            <div className="form-row">
              <div className="form-group half-width">
                <label htmlFor="expiryDate">Expiry Date</label>
                <input
                  type="text"
                  id="expiryDate"
                  className="form-control"
                  placeholder="MM/YY"
                  value={paymentDetails.expiryDate}
                  onChange={(e) => setPaymentDetails({ ...paymentDetails, expiryDate: e.target.value })}
                />
              </div>
              <div className="form-group half-width">
                <label htmlFor="cvv">CVV</label>
                <input
                  type="text"
                  id="cvv"
                  className="form-control"
                  placeholder="123"
                  value={paymentDetails.cvv}
                  onChange={(e) => setPaymentDetails({ ...paymentDetails, cvv: e.target.value })}
                />
              </div>
            </div>
            <button type="button" className="btn-pay" onClick={handlePayment}>
              Proceed
            </button>
          </form>
        </div>
      </div>
      <Footer /> {/* Footer stays at bottom */}
    </div>
  );
}
