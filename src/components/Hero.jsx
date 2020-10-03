import React from 'react'
import {Link} from 'react-router-dom'

function Hero() {
  return (
    <div className="hero mt-5">
      <div data-aos="fade-up" data-aos-duration="1200" id="header-text">
        <small className="text-uppercase text-muted">Welcome to</small>
        <h1 className="display-3">James Udoekong Education Trust Fund</h1>

        <p className="mt-3 mb-4">
          We motivate and support students through our robust{" "}
          <span>
            <small>Education trust fund.</small>
          </span>
        </p>
        <button className="btn donate-btn">
          <Link
            to="/donate"
            className="text-white font-weight-bold text-uppercase"
          >
            Donate
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Hero
