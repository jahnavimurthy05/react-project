import React from 'react'
import '../pages/OurDentist.css'
export const P3Content = () => {
  return (
    <>
    <div className="page3">
      <h1>Our Dentists</h1>
      <div className="parent3">
        <div className="c31">
          <img src="../public/doc1.png" alt="john" width="100px" height="100px" />
          <h2>Dr. John Doe</h2>
          <h3>Oral Surgeon</h3>
        </div>
        <div className="c32">
          <img src="../public/doc2.png" alt="jane" width="100px" height="100px" />
          <h2>Dr. Jane Smith</h2>
          <h3>Oral Surgeon</h3>
        </div>
        <div className="c33">
          <img src="../public/doc3.png" alt="bob" width="100px" height="100px" />
          <h2>Dr. Bob Johnson</h2>
          <h3>Oral Surgeon</h3>
        </div>
      </div>
      <h2 id="meet-our-team">Meet Our Team</h2>
    </div>
    </>
  )
}
