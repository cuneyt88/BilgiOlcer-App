import React from 'react'
import TYT from "../helpers/img/tyt.png"
import Test from "../helpers/img/test.jpg"
import Calendar from "../helpers/img/calendar.png"

const Classes = () => {
  return (
    <div>
      <section id="pets" className="container bg-light p-2">
        <div id="dog" className="card-deck">
          <div className="row">
            <div className="card mb-2 col-md-12 col-lg-6">
              <a href="../pages/tyt.html" className="card-body d-inline-flex">
                <img className="card-img-top rounded-circle" src={TYT} alt="Card image cap" />
                <div className="p-2">
                  <h5 className="card-title">TYT Denemeleri</h5>
                </div>
              </a>
            </div>
            <div id="cat" className="card mb-2 col-md-12 col-lg-6">
              <a href="../pages/tests9-10.html" className="card-body d-inline-flex">
                <img className="card-img-top rounded-circle" src={Test} alt="Card image cap" />
                <div className="p-2">
                  <h5 className="card-title">Testler</h5>
                </div>
              </a>
            </div>
          </div>
          <div className="row">
            <div id="bird" className="card mb-2 col-md-12">
              <a href="../pages/calendar.html" className="card-body d-inline-flex">
                <img className="card-img-top rounded-circle" src={Calendar} alt="Card image cap" />
                <div className="p-2">
                  <h5 className="card-title">Sınav Takvimi</h5>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Classes