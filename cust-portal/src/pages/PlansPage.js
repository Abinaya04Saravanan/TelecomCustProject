// src/pages/PlansPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import './PlansPage.css';

const plansData = [
  { name: 'Data Plan', description: '1GB/day for 30 days', price: 20, duration: 'Monthly' },
  { name: 'Voice Plan', description: 'Unlimited calls for 30 days', price: 15, duration: 'Monthly' },
  { name: 'Combo Plan', description: '2GB/day & Unlimited Calls', price: 30, duration: 'Monthly' },
  { name: 'Quarterly Plan', description: '3GB/day & Unlimited Calls', price: 80, duration: 'Quarterly' },
  { name: 'Half-Yearly Plan', description: '4GB/day & Unlimited Calls', price: 150, duration: 'Half-Yearly' },
  { name: 'Annual Plan', description: '5GB/day & Unlimited Calls', price: 280, duration: 'Annually' },
];

export default function PlansPage() {
  const navigate = useNavigate();

  return (
    <div className="plans-container">
      <h2 className="plans-heading">Available Plans</h2>
      <div className="plans-grid">
        {plansData.map((plan, index) => (
          <div className="plan-card" key={index}>
            <div className="plan-body">
              <h5 className="plan-title">{plan.name}</h5>
              <p className="plan-description">{plan.description}</p>
              <p className="plan-price">₹{plan.price * 82}</p> {/* USD to INR conversion approx */}
              <button
                className="btn-recharge"
                onClick={() => navigate('/payments')} // Navigate to PaymentsPage
              >
                Recharge Now
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
