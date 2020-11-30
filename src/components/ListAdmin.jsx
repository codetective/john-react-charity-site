import Axios from "axios";
import React, { useCallback, useContext, useRef, useState } from "react";
import { context } from "../Provider";
import cogoToast from 'cogo-toast';
import { MdDeleteForever, MdEdit, MdRefresh } from 'react-icons/md'


const API_PATH_DEL = window.location.protocol + '//' + window.location.hostname + '/static/delete.php'

const API_PATH_EDIT = window.location.protocol + '//' + window.location.hostname + '/static/edit.php'


function Modal(props) {
  let { editee, setBeneficiaries, fetchBeneficiaries, setHasmore } = useContext(context);

  const [name, setName] = useState(editee.name);
  const [loadin, setLoading] = useState(false);
  const [course, setCourse] = useState(editee.course);
  const [institution, setInstitution] = useState(editee.institution);
  let editBeneficiary = (e) => {
    e.preventDefault()
    try {
      setLoading(true)

      Axios({
        method: "put",
        url: API_PATH_EDIT,
        headers: {
          "content-type": "application/json",
        },
        data: {
          id: editee.id,
          name,
          course,
          institution
        },
      })
        .then((result) => {
          if (result.data.edited) {
            cogoToast.loading('Reloading List...')
            setLoading(false)
            setHasmore(true)
            props.setShow()
            setBeneficiaries([])
            props.setPage(1)
            fetchBeneficiaries(1)


          } else {
            setLoading(false)
            cogoToast.error(result.data.error)
          }
        })
        .catch((error) => {
          setLoading(false)

          cogoToast.error(error.message)
        }
        );
    } catch (err) {
      setLoading(false)
      cogoToast.error(err.toString)
    }
  }
  if (!props.show) return null
  return (
    <div id='admin-edit-modal' style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      minHeight: '100vh',
      padding: '40px 0',
      flexDirection: 'column',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'white'
    }}>
      <button style={{
        position: 'absolute',
        right: '20px',
        top: '20px',
      }} onClick={() => props.setShow()} className="btn btn-danger" >Close</button>
      <h4>Edit Beneficiary</h4>
      <form
        onSubmit={editBeneficiary}
        style={{ maxWidth: "500px", margin: "auto" }}
      >
        <div className="form-group">
          <label htmlFor="name">Name of beneficiary</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            placeholder="Enter Name"
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="course">Course of study</label>
          <input
            type="text"
            id="course"
            name="course"
            className="form-control"
            placeholder="Enter Course"
            value={course}
            onChange={(e) => {
              setCourse(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inst">Institution attended</label>
          <input
            type="text"
            id="inst"
            name="institution"
            className="form-control"
            placeholder="Enter institution"
            value={institution}
            onChange={(e) => {
              setInstitution(e.target.value);
            }}
          />
        </div>

        <button type="submit" disabled={loadin} className="btn mt-2 btn-primary btn-block">
          {loadin && 'Sending..'}
          {!loadin && 'Submit'}
        </button>
      </form>
    </div>

  )
}


function ListAdmin() {
  const [show, setShow] = useState(false)

  let { reload, loading, fetchBeneficiaries, beneficiaries, hasmore, setHasmore, setEdited, setBeneficiaries } = useContext(context);
  let [pageno, setPageno] = useState(1)

  let loadList = () => {
    fetchBeneficiaries(pageno)
  }
  let refreshList = () => {
    setHasmore(true)
    cogoToast.loading('Refreshing list...')
    setPageno(1)
    setBeneficiaries([])
    reload(1)
  }

  let confirmDelete = (item) => {
    if (window.confirm('Are you sure you want to delete ' + item.name + "'s entry?")) {
      deleteBeneficiary(item.id)
    }
  }
  let deleteBeneficiary = (id) => {
    try {

      Axios({
        method: "delete",
        url: API_PATH_DEL,
        headers: {
          "content-type": "application/json",
        },
        data: {
          id
        },
      })
        .then((result) => {
          if (result.data.deleted) {
            cogoToast.loading('Reloading List...')
            setHasmore(true)
            setBeneficiaries([])
            setPageno(1)
            reload(1)

          } else {

            cogoToast.error(result.data.error)
          }
        })
        .catch((error) => {

          cogoToast.error(error.message)
        }
        );
    } catch (err) {
      cogoToast.error(err.toString)
    }
  }

  let triggerModal = (item) => {
    setHasmore(true)
    setShow(!show)
    setEdited(item)
  }

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

  return (<>

    {show && <Modal show={show} setShow={setShow} setPage={setPageno} reload={loadList} />}

    <fieldset>
      <span className="d-flex">

        <h4>Edit or Delete Beneficiaries</h4>
        {beneficiaries.length !== 0 && <button onClick={refreshList} className="ml-2 btn btn-small p-1 btn-warning"><MdRefresh /></button>}
      </span>


      {beneficiaries.length == 0 && <span onClick={loadList}
        type="button" style={{ width: '100px' }} className="btn mt-2 btn-primary d-block m-auto">
        Load list
          </span>}

      {!beneficiaries.length == 0 && <table className="tableizer-table m-auto">
        <thead>
          <tr className="tableizer-firstrow">

            <th>S/N</th>
            <th>NAME OF BENEFICIARY</th>
            <th>COURSE OF STUDY</th>
            <th>INSTITUTION OF LEARNING</th>
            <th>Actions</th>

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
                <td>
                  <span onClick={() => {
                    triggerModal(item)
                  }} className="btn btn-primary btn-small p-1 mx-2"><MdEdit /></span>


                  <span onClick={() => {
                    setHasmore(true)
                    setPageno(1)


                    confirmDelete(item)
                  }} className="btn btn-small p-1 btn-danger m-1"><MdDeleteForever /></span>
                </td>
              </tr>
            } else {

              return <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.course}</td>
                <td>{item.institution}</td>
                <td>
                  <span onClick={() => {
                    triggerModal(item)
                  }} className="btn btn-primary btn-small p-1 mx-2"><MdEdit /></span>


                  <span onClick={() => {
                    confirmDelete(item)
                  }} className="btn btn-small p-1 btn-danger m-1"><MdDeleteForever /></span>
                </td>

              </tr>
            }
          }
          )
          }


        </tbody>
      </table>}
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
    </fieldset>
  </>
  )
}

export default ListAdmin
