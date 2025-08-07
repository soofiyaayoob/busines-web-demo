import React from 'react';
import './Pricing.css';
import tick from '../../assets/tick.svg'; 
import arrowIcon from '../../assets/ArrowIconBlack.svg'; 
import Faster from '../../assets/faster.svg';
function Pricing() {
  return (
    <section className="pricing-wrapper"  id='pricing'>
      
      <div className="pricing-header">
        <div className="pricing-badge badge">Pricing</div>
        <h2 className="pricing-heading">
          Choose the relevant plan to build,<br />
          grow and fasten your team
        </h2>
      </div>

      
      <div className="pricing-cards">

      
        <div className="pricing-card card">
          <div className="pricing-type">STANDARD</div>
          <div className="pricing-price">
            $150<span className="pricing-period">/month</span>
          </div>
          <div className="pricing-note">One request at a time</div>
          <div className="pricing-includes">What’s included:</div>
          <ul className="pricing-features">
            <li><img src={tick} alt="" className="icon" /> Unlimited requests</li>
            <li><img src={tick} alt="" className="icon" /> ~48 hours delivery</li>
            <li><img src={tick} alt="" className="icon" /> Unlimited brands</li>
            <li><img src={tick} alt="" className="icon" /> Weekly meetings</li>
            <li><img src={tick} alt="" className="icon" /> Pause and cancel anytime</li>
            <li><img src={tick} alt="" className="icon" /> Managed via Slack and Trello</li>
            <li><img src={tick} alt="" className="icon" /> All services except Webflow</li>
          </ul>
          <div className="pricing-actions">
            <button className="pricing-btn filled">
              Subscribe <img src={arrowIcon} alt="" />
            </button>
            <button className="pricing-btn outlined">Book a demo</button>
          </div>
        </div>

        
        <div className="pricing-card card">
          <div className="badge-top-right">Faster <img src={Faster} alt="" /></div> 
          <div className="pricing-type">STANDARD</div>
          <div className="pricing-price">
            $150<span className="pricing-period">/month</span>
          </div>
          <div className="pricing-note">One request at a time</div>
          <div className="pricing-includes">What’s included:</div>
          <ul className="pricing-features">
            <li><img src={tick} alt="" className="icon" /> Unlimited requests</li>
            <li><img src={tick} alt="" className="icon" /> ~48 hours delivery</li>
            <li><img src={tick} alt="" className="icon" /> Unlimited brands</li>
            <li><img src={tick} alt="" className="icon" /> Weekly meetings</li>
            <li><img src={tick} alt="" className="icon" /> Pause and cancel anytime</li>
            <li><img src={tick} alt="" className="icon" /> Managed via Slack and Trello</li>
            <li><img src={tick} alt="" className="icon" /> All services except Webflow</li>
          </ul>
          <div className="pricing-actions">
            <button className="pricing-btn filled">
              Subscribe <img src={arrowIcon} alt="" />
            </button>
            <button className="pricing-btn outlined">Book a demo</button>
          </div>
        </div>

       
        <div className="pricing-project-card card">
          <div className="project-info">
            <div className="pricing-type">PROJECT-BASED</div>
            <div className="pricing-desc">
              For a custom fee delivered in milestones.<br />
              Ideal for specific goals. Custom project scope.
            </div>
            <div className="pricing-includes">What’s included:</div>
            <ul className="pricing-features">
              <li><img src={tick} alt="" className="icon" /> Fixed scope of work</li>
              <li><img src={tick} alt="" className="icon" /> Delivered in milestones</li>
            </ul>
            <button className="project-btn">Send email</button>
          </div>

          <div className="referral-box">
            <div className="referral-texts">
              <h3>Refer & earn</h3>
              <p>Receive $150 for each referral!</p>
            </div>
            <button className="join-btn">Join now</button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Pricing;
