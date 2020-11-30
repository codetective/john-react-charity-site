import React from 'react'

function BoardCard({name, image, email, phone, title}) {
  return (
     <div className="col-md-6 col-lg-4 col-sm-6 my-2">
              <div className="">
                <div className="card" style={{ margin: "auto" }}>
                  <img
                    className="card-img-top"
                    src={image}
                    alt={name}
                  />
                  <div className="card-body">
            <h5 className="card-title">{name}</h5>
                    <small className="font-weight-bold">{title}</small>
                    <br />
                    <small>{email || 'user@email.com'}</small>
                    <br />
                    <small>{phone || '0900000000'}</small>
                  </div>
                </div>
              </div>
            </div>
  )
}
export default BoardCard