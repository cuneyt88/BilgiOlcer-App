import React from 'react'
import Carousel1 from "../helpers/img/carousel-1.jpg"
import Carousel2 from "../helpers/img/carousel-2.jpg"
import Carousel3 from "../helpers/img/carousel-3.jpg"
import Carousel4 from "../helpers/img/carousel-4.jpg"
import Dsinif from "../helpers/img/9-Sinif.jpg"
import Onsinif from "../helpers/img/10-Sinif.jpg"
import OnBsinif from "../helpers/img/11-Sinif.jpg"
import Onİsinif from "../helpers/img/12-Sinif.jpg"
import { Link,NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      {/* <!--1- CAROUSEL --> */}
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={3} aria-label="Slide 4" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Carousel1} className="d-block w-100 h-100" alt="dog" />
          </div>
          <div className="carousel-item">
            <img src={Carousel2} className="d-block w-100" alt="cat" />
          </div>
          <div className="carousel-item">
            <img src={Carousel3} className="d-block w-100 h-100" alt="fish" />
          </div>
          <div className="carousel-item">
            <img src={Carousel4} className="d-block w-100 h-100" alt="bird" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* <!--2- CLASSES --> */}
      <section id="pets" className="container bg-light p-2">
        <h2 className="display-6 text-primary">Sınıflar</h2>
        <div id="dog" className="card-deck">
          <div className="row">
            <div className="card mb-2 col-md-12 col-lg-6">
              <a href="./sınıflar/9.sinif.html" className="card-body d-inline-flex">
                <img className="card-img-top" src={Dsinif} alt="Card image cap" />
                <div className="p-2">
                  <h5 className="card-title">9.Sınıf</h5>
                  <ul>
                    <li>
                      <p className="text-decoration-none">TYT Sınavları</p>
                    </li>
                    <li>
                      <p className="text-decoration-none">Testler</p>
                    </li>
                    <li><p className="text-decoration-none">Sınav Takvimi</p></li>
                  </ul>
                </div>
              </a>
            </div>
            <div id="cat" className="card mb-2 col-md-12 col-lg-6">
              <a href="./sınıflar/10.sinif.html" className="card-body d-inline-flex">
                <img className="card-img-top" src={Onsinif} alt="Card image cap" />
                <div className="p-2">
                  <h5 className="card-title">10.Sınıf</h5>
                  <ul>
                    <li>
                      <p className="text-decoration-none">TYT Sınavları</p>
                    </li>
                    <li>
                      <p className="text-decoration-none">Testler</p>
                    </li>
                    <li><p className="text-decoration-none">Sınav Takvimi</p></li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
          <div className="row">
            <div id="fish" className="card mb-2 col-md-12 col-lg-6">
              <div className="card-body d-inline-flex">
                <img className="card-img-top" src={OnBsinif} alt="Card image cap" />
                <div className="p-2">
                  <h5 className="card-title">11.Sınıf</h5>
                  <ul>
                    <li><p className="text-decoration-none">TYT Sınavları</p></li>
                    <li><p className="text-decoration-none">AYT Sınavları</p></li>
                    <li>
                      <p className="text-decoration-none">Testler
                      </p></li>
                  </ul>
                </div>
              </div>
            </div>
            <div id="bird" className="card mb-2 col-md-12 col-lg-6">
              <a href="./sınıflar/12.sinif.html" className="card-body d-inline-flex">
                <img className="card-img-top" src={Onİsinif} alt="Card image cap" />
                <div className="p-2">
                  <h5 className="card-title">12.Sınıf</h5>
                  <ul>
                    <li><p className="text-decoration-none">TYT Sınavları</p></li>
                    <li>
                      <p className="text-decoration-none">AYT Sınavları</p>
                    </li>
                    <li><p className="text-decoration-none">Testler</p></li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home