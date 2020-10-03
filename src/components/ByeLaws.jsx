import React from 'react'

function ByeLaws() {
  // return (
  //   <div>
  //     Laws governing the association Each beneficiary of the Trust Fund must be
  //     a student of any of the following institutions: The University (ii) The
  //     Polytechnic (iii) College of Education. He or she must be an indigene of
  //     Aka Ikot Udo Eno. The parents must contribute meaningfully towards the
  //     progress of the village. The beneficiary should fill necessary forms for
  //     approval which must be accompanied with Letters of admission from the
  //     institution. Current payment receipts from the institution as evidence of
  //     his/her studentship. The student identity Certificate of origin Original
  //     of the credentials should be submitted on the day of the award and the
  //     beneficiary must appear in person for necessary interaction Remedial
  //     students are not qualified for the award. Loan of any kind is not allowed
  //     False information should be treated as sabotage and legal action taken
  //     accordingly. Repeaters are not entitled Non-indigene may be given special
  //     consideration based on the commitment of either the father or mother to
  //     the village Special consideration should be given to final year students
  //     Form must be renewed yearly Each member of the Trustee must serve a three
  //     year term, can be re-elected for a second tenure but not exceeding two
  //     serving terms
  //   </div>
  // );
   return (
     <div className="laws">
       <main className="mb-3">
         <div className="container">
           <div style={{ color: "rgba(0, 0, 0, 0.7)", padding: "2em 2em 2em" }}>
             <h1 class="text-center display-5">Bye Laws & Eligibility</h1>
             <small class="text-center d-block text-uppercase">
               Laws Governing The Organisation
             </small>
             <br />
             <ul>
               <li>
                 Each beneficiary of the Trust Fund must be a student of any of
                 the following institutions:
                 <ol>
                   <li>The University</li>
                   <li>The Polythechnic</li>
                   <li>College of Education.</li>
                 </ol>
               </li>
               <li>He or she must be an indigene of Aka Ikot Udo Eno.</li>
               <li>
                 The parents must contribute meaningfully towards the progress
                 of the village.
               </li>
               <li>
                 The beneficiary should fill necessary forms for approval which
                 must be accompanied with
                 <ol>
                   <li>Letters of admission from the institution. </li>
                   <li>
                     Current payment receipts from the institution as evidence
                     of his/her studentship.
                   </li>
                   <li>The student identity </li>
                   <li>Certificate of origin</li>
                   <li>
                     Original of the credentials should be submitted on the day
                     of the award and the beneficiary must appear in person for
                     necessary interaction
                   </li>
                 </ol>
               </li>
               <li>Remedial students are not qualified for the award.</li>
               <li>Loan of any kind is not allowed</li>
               <li>
                 False information should be treated as sabotage and legal
                 action taken accordingly.
               </li>
               <li>Repeaters are not entitled.</li>
               <li>
                 Non-indigene may be given special consideration based on the
                 commitment of either the father or mother to the village.
               </li>
               <li>
                 Special consideration should be given to final year students{" "}
               </li>
               <li>Form must be renewed yearly</li>
               <li>
                 Each member of the Trustee must serve a three year term, can be
                 re-elected for a second tenure but not exceeding two serving
                 terms.
               </li>
             </ul>
           </div>
         </div>
       </main>
     </div>
   );
}

export default ByeLaws
