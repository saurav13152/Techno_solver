import React from "react";
import vg from "../assets/pic2.png.webp";

import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="homeDiv" id="home">
        <main>
          <h1>Techno Solver </h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="homeDiv2" id="">
        <img src={vg} alt="Graphics" />
        <p>
          We are your one and only solutions to the tech problems you face
          everyday.We are leading tech company whose aim is to increase the
          problem solving ability and to provide efficient solutions.
        </p>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
          {/* Welcome to our company, a leading provider of full-stack, peer-to-peer, and cloud computing solutions. Our team is committed to providing innovative and comprehensive technology solutions to meet the evolving needs of businesses across various industries. */}

We offer a wide range of services, including cloud infrastructure development, peer-to-peer networking solutions, and full-stack application development. Our team of experts combines technical expertise with a deep understanding of our clients' unique needs to deliver customized solutions that maximize performance, reliability, and security.Our cloud computing solutions provide businesses with the scalability, flexibility, and agility they need to succeed in today's fast-paced and constantly evolving marketplace. Whether you need public, private, or hybrid cloud solutions, we can design, deploy, and manage the perfect cloud infrastructure to meet your business's unique requirements.Our peer-to-peer networking solutions enable real-time data sharing, collaboration, and communication, providing businesses with an efficient and secure way to connect with colleagues, partners, and customers.At our company, we understand that application development is not just about coding; it's about creating software solutions that are intuitive, user-friendly, and visually appealing. Our full-stack application development services provide businesses with comprehensive solutions that address all aspects of application development, from design to deployment.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
