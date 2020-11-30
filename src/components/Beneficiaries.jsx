import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { useCallback } from 'react';
import { useRef } from 'react';
import { context } from '../Provider';


function Beneficiaries() {
  let { loading, fetchBeneficiaries, beneficiaries, hasmore } = useContext(context);
  let [pageno, setPageno] = useState(1)
  useEffect(() => {
    fetchBeneficiaries(pageno)
  }, [])

  const observer = useRef()
  const lastItemref = useCallback(node => {
    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasmore) {
        setPageno(prev => prev + 1)
        fetchBeneficiaries(pageno + 1)
      }
    })
    if (node) observer.current.observe(node)
  }, [loading])

  return (
    <div className="beneficiaries mt-4">
      <main className="mb-3">
        <div className="container">
          <div style={{ color: "rgba(0, 0, 0, 0.7)", padding: "2em 2em 2em" }}>
            <h1 className="text-center display-5">Beneficiaries</h1>
            <small className="text-center d-block text-uppercase">
              Below is a list of our beneficiaries as at 2019
             </small>
            <br />

            <table className="tableizer-table m-auto">
              <thead>
                <tr className="tableizer-firstrow">

                  <th>S/N</th>
                  <th>NAME OF BENEFICIARY</th>
                  <th>COURSE OF STUDY</th>
                  <th>INSTITUTION OF LEARNING</th>

                </tr>
              </thead>
              <tbody>
                {beneficiaries.map((item, index) => {
                  if (beneficiaries.length === index + 1) {
                    return <tr ref={lastItemref} key={index}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.course}</td>
                      <td>{item.institution}</td>
                    </tr>
                  } else {

                    return <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.course}</td>
                      <td>{item.institution}</td>
                    </tr>
                  }
                }
                )
                }


              </tbody>
            </table>
            {loading && <>
              <div className="d-flex align-items-center justify-content-center">

                <div className="spinner-border text-success m-auto" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            </>}
            {!hasmore && <>
              <div className="text-secondary text-primary font-weight-bold" role="status">
                <span className="">You've reached the end!</span>
              </div>
            </>}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Beneficiaries
