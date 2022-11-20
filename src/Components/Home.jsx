import React from 'react'
import{AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"


import vg from "../assets/2.webp";


const Home = () => {
  return (
    <>
      <div className="home">
        <main>
            <h1>SERVENOW</h1>
            <p>Solution To All Your Problems</p>
        </main>
    </div>

    <div className="home2">
      <img src={vg} alt="Graphics" />

      <div>
        <p>
          We are your one and only solutions for all your tech problems
          you face.
          We are the leading tech company here to solve your 
          problems efficiently.
        </p>
      </div>


    </div>

    <div className="home3" id="about">
      <div>
        <h1>Who we are?</h1>
        <p>
            SERVENOW was founded in 1999 , and we have accomplished so much over the years. 
            To create a world where solving business problems through technology has always been our goal.
            Our Founder and CEO Mr.Ratan was inspired to start this company by seeing the amount of digital revolution aroung the globe.
            At SERVENOW, we empower out clients to do business by providing the necessary technological expertise in various domains.
        </p>
      </div>
    </div>


    <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div style={{
              animationDelay: "0.3s",
            }}>
                <AiFillGoogleCircle/>
                <p>Google</p>
            </div>

            <div style={{
              animationDelay: "0.5s",
            }}>
                <AiFillAmazonCircle/>
                <p>Amazon</p>
            </div>

            <div style={{
              animationDelay: "0.7s",
            }}>
                <AiFillYoutube/>
                <p>Youtube</p>
            </div>

            <div style={{
              animationDelay: "0.9s",
            }}>
                <AiFillInstagram/>
                <p>Instagram</p>
            </div>
          </article>
        </div>

    </div>
    
    </>
  )
}

export default Home