import React from 'react'
import p1 from '../img/p1.jpg'
import p2 from '../img/p2.jpg'
import coin from '../img/coin.svg'
// import love from '../img/love.svg'
import share from '../img/share.svg'
// import baby from '../img/baby.svg'
import { Link } from 'react-router-dom'
import './home.css'
function Home() {
  return (
    <>
      <div className="home">
        <section
          className="mission-quote section mt-5 mb-5 text-center"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <div className="container">
            <small className="small-text text-uppercase font-weight-bold">
              our mission
            </small>
            <h5 className="mt-3 mb-4">
              The James Udoekong Education Trust Fund has been envisioned to
              provide hope, encouragement and motivation to all sons and
              daughters of Aka Ikot Udo Eno desirous to pursue higher education
              irrespective of their parental background.
              <span className="block-fluid-text"> </span>
            </h5>
            <div className="quote-border"></div>
          </div>
        </section>

        <section id="history-section mb-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6 box">
                <div
                  id="history-text"
                  className="d-flex flex-column justify-content-center"
                >
                  <small className="small-text pb-1 text-uppercase font-weight-bold">
                    Our history
                  </small>

                  <h3 className="mb-1">
                    <span className="block-text">
                      ...shaping the society by motivating and supporting
                      academic dreams of students since 2000{" "}
                    </span>{" "}
                  </h3>
                  <p>
                    Engr. Anthony Udoekong, a young man in his 30s who spoke to
                    announce the institution forthwith of an Education Trust
                    Fund ...in memory of his late father, a lover of education
                    and its development potentials announced an immediate
                    donation of N50,000 (Fifty Thousand Naira) which marked the
                    beginning of a scholarship programme for students of Aka
                    Ikot Udo Eno origin wherever they may be studying in
                    tertiary institutions.{" "}
                  </p>
                  <Link to="/history">
                    <small className="small-text text-uppercase font-weight-bold">
                      learn more
                    </small>
                  </Link>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  id="history-img"
                  className="d-flex flex-column justify-content-center"
                >
                  <img
                    src={p1}
                    alt="unity among races"
                    className="image-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="stats" className="py-5" style={{ display: "none" }}>
          <div className="container d-flex justify-content-between text-center">
            <div className="row">
              <div className="stats-value col-sm-4 py-3">
                <h1>17,000</h1>
                <small>
                  lives touched
                  <br />
                  per year
                </small>
              </div>
              <div className="stats-value col-sm-4 py-3">
                <h1>20,000</h1>
                <small>
                  student's dreams
                  <br />
                  actualized
                </small>
              </div>
              <div className="stats-value col-sm-4 py-3">
                <h1>450</h1>
                <small>
                  partners involved
                  <br />
                  in our programs
                </small>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonial-section" className="mt-5">
          <div className="container">
            <div className="row t-row">
              <div className="col-md-6 t-img-col">
                <div
                  id="testimonial-img"
                  className="d-flex flex-column justify-content-center"
                >
                  <img
                    src={p2}
                    alt="person happy"
                    className="image-fluid m-auto mb-md-4 mb-sm-4"
                  />
                </div>
              </div>

              <div className="col-md-6 t-text-box pb-4">
                <div
                  id="testimonial-text"
                  className="d-flex flex-column justify-content-center"
                >
                  <small className="small-text pb-1 text-uppercase font-weight-bold">
                    Testimonial
                  </small>

                  <h3>
                    I'm so grateful to Engr. Udoekong and the entire
                    organisation for the financial support during my studies in
                    the university.
                    <small className="text-uppercase mt-2">Anonymous</small>
                  </h3>
                  {/* <a href="#">
              <small className="small-text text-uppercase font-weight-bold">read more &longrightarrow;</small>
            </a> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="mission-quote section mt-5 mb-5 text-center"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <div className="container">
            <small className="small-text text-uppercase font-weight-bold">
              how to help
            </small>
            <h5 className="mt-3 mb-4">
              With your support, we can do more,
              <span className="block-fluid-text">
                {" "}
                you too can help us sponsor more students via our scholarship
                scheme!
              </span>
            </h5>
            <div className="quote-border"></div>
          </div>
        </section>

        <section
          data-aos="fade-up"
          data-aos-duration="1000"
          id="info-action"
          className="container"
        >
          <div className="row text-center justify-content-center">
            <div className="card my-2 mx-2">
              <a href="/donate">
                <h1 className="icons">
                  <img src={coin} alt="" />
                </h1>
                <h2 className="title">Donate</h2>
                <p>
                  Donations are important to our work as an organisation, hence
                  we can support more students with your funds.
                </p>
              </a>
            </div>

            {/* <div className="card my-2 mx-2">
              <a href="##">
                <h1 className="icons">
                  <img src={baby} width="51" alt="" />
                </h1>
                <h2 className="title">Touch lives</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Accusamus, praesentium.
                </p>
              </a>
            </div> */}

            <div className="card my-2 mx-2">
              <a href="##">
                <h1 className="icons">
                  <img src={share} alt="" />
                </h1>
                <h2 className="title">Share with Friends</h2>
                <a
                  href="https://www.facebook.com/James-Udoekong-Education-Trust-Fund-117624183436700/"
                  id="fb-share-button"
                  className="my-4"
                >
                  <svg viewBox="0 0 12 12" preserveAspectRatio="xMidYMid meet">
                    <path
                      className="svg-icon-path"
                      d="M9.1,0.1V2H8C7.6,2,7.3,2.1,7.1,2.3C7,2.4,6.9,2.7,6.9,3v1.4H9L8.8,6.5H6.9V12H4.7V6.5H2.9V4.4h1.8V2.8 c0-0.9,0.3-1.6,0.7-2.1C6,0.2,6.6,0,7.5,0C8.2,0,8.7,0,9.1,0.1z"
                    ></path>
                  </svg>
                  <span>Share</span>
                </a>
              </a>
            </div>

            {/* <div className="card my-2 mx-2">
              <a href="##">
                <h1 className="icons">
                  <img src={love} alt="" />
                </h1>
                <h2 className="title">Assist</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Accusamus, praesentium.
                </p>
              </a>
            </div> */}
          </div>
        </section>
        <section id="p-foot" className="mt-5 text-center">
          <div className="container">
            <h2>Education is vital but can be expensive.</h2>

            <p>
              The James Udoekong Education Trust Fund will be a veritable source
              of financial assistance to Aka Ikot Udo Eno indigenes and its
              environs and will grow into one of the top five scholarship
              programmes for indigent students of Ibiono Ibom Local Government
              Area by 2030.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home
