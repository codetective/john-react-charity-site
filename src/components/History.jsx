import React from "react";
import {Link} from 'react-router-dom'
import "./about.css";

function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="timeline-item" title-is="20-07-1990">
          <h1>History</h1>
          <p>
            It all started in the Annual General Meeting of Aka Ikot Udo Eno
            Development Union (ADU) on Tuesday, December 26, 2000.
          </p>
          <p>
            Venue was the Gravel Union Community town hall. The idea was
            spontaneous and absolutely not premeditated.
            <br />
            The item on the agenda of the AGM was the financial report which
            showed an impressive revenue profile on the one side and a matching
            expenditure details on the other side over the year under review.
          </p>
          <small className="font-weight-bold d-block">The Problem.</small>
          <p>
            What was however discomforting and which spurred and agitated the
            mind was the narration of the expenditure items all of which had
            nothing to do with development and growth of the Community.
            <br />
            Items like settlement of policemen to resolve one case or another,
            payment of lawyers’ fees for court appearances, transport and
            logistics for community witnesses, and all similar line items. In
            fairness to the community leaders, these were expenditures and
            payments that had to be incurred in response to exigencies that
            arose in the course of the year.
          </p>
          <p>
            However not one of them touched on the real challenge of the
            community which is DEVELOPMENT. Yes development. After all, the name
            of the Union is Aka Ikot Udo Eno DEVELOPMENT Union. Development of
            human capital and infrastructure. As it turned out the development
            challenge of any hue was not listed and was not going to be
            mentioned in the year’s proceeding.
          </p>
          <small className="font-weight-bold d-block">
            Birth of the foundation
          </small>
          <p>
            The individual who picked up the gauntlet and responded to the
            dictates of his conscience was Engr. Anthony Udoekong, a young man
            in his 30s who spoke to announce the institution forthwith of an
            Education Trust Fund called James Udoekong Education Trust Fund in
            memory of his late father, who was a lover of education and its
            development potentials.
          </p>
          <p>
            He announced an immediate donation of N50,000 (Fifty Thousand
            Naira), at the time a substantial amount of money.
            <br /> He announced for clarity that the Fund was essentially a
            scholarship programme for students of Aka Ikot Udo Eno origin
            wherever they may be studying in tertiary institutions.
          </p>
          <small className="font-weight-bold d-block">The Way Forward.</small>
          <p>
            This was well received by the house with a thunderous ovation and
            immediately a board of Trustee was created and
            <mark>Mr. Joseph Akpan Ina</mark>
            was tasked to chair the board. <mark>
              Mr. Edet Vincent Udofia{" "}
            </mark>{" "}
            was named the Secretary and
            <mark>Magistrate Emilia Umoh and Mr. John Peter Umoren </mark> were
            nominated and ratified as members, with of course the life patron{" "}
            <mark>Engr. Anthony Michael Udoekong </mark>.
            <p>
              What followed soon was outpouring of support with pledges from
              many other well-meaning indigenes.
              <br />A bank account was opened thereafter at United Bank for
              Africa office on Abak Road Uyo to facilitate remittance of funds
              by the patron and the various donors. The Trustees met and
              fashioned out modalities and criteria for award and disbursement
              of the scholarship funds to qualified students.
            </p>
            <Link to="/board">
              <h3>See Board of Trustees</h3>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
