import React from 'react'

const Contact = () => {
  return (
    <div>
       <section id="contact" className="container bg-light p-3">
        <h2 className="display-6 text-primary">İLETİŞİM</h2>
        <p>Lütfen bizimle iletişime geçin, size yardımcı olmaktan mutluluk duyarız.</p>
        <article>
          <div className="row g-4 p-3">
            <div className="col-md-4">
              <i className="fas fa-phone fa-2x text-danger" />
              <h4>Phone</h4>
              <a href="tel:+90234556565">+90234556565</a>
            </div>
            <div className="col-md-4">
              <i className="fab fa-whatsapp fa-3x text-danger" />
              <h4>Whatsapp</h4>
              <a href="https://wa.me/+90234556565">+90234556565</a>
            </div>
            <div className="col-md-4">
              <i className="fas fa-envelope fa-2x text-danger" />
              <h4>Email</h4>
              <a href="mailto:info@bilgiolcer.com">info@bilgiolcer.com</a>
            </div>
          </div>
          <form className="row g-3" id="form-post" action="result.html" method="GET">
            {/* USERNAME */}
            <div className="col-md-6 input-group">
              {/* <label for="username">Name</label> */}
              <input className="form-control" type="text" id="username" placeholder="İsim" name="username" /> 
              <p />
            </div>
            {/* EMAIL */}
            <div className="col-md-6 input-group">
              {/* <label for="email">Email</label> */}
              <input className="form-control" type="email" id="email" placeholder="Email" name="email" />
              <p />
            </div>
            {/* NUMBER */}
            <div className="col-md-6 input-group">
              {/* <label for="number">Number</label> */}
              <input className="form-control" type="number" id="number" placeholder="Telefon Numarası" name="number" /> 
              <p />
            </div>
            {/* FILE */}
            <div className="col-md-6 input-group">
              {/* <label for="file">Dosya</label> */}
              <input className="form-control" type="file" id="document" placeholder="Upload your document" name="file" />
            </div>
            {/* commenttext */}
            <div className="col-12 form-floating input-group">
              <textarea className="form-control" type="comment-text" id="comment-text" placeholder="enter your comment" name="comment-text" defaultValue={""} />
              <p />
            </div>
            {/* button */}
            <div className="col-12 p-4">
              <button type="submit" className="btn btn-danger" style={{width: '7rem'}}>
                Mesaj Gönder
              </button>
            </div>
          </form>
        </article>
      </section>
    </div>
  )
}

export default Contact