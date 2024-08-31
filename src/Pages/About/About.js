/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import RedLine from '../Home/RedLine';
import './About.css';

function About() {
  return (
    <>
      <section className="AboutMeInDetail">
        <span className="img">
          <img src="/images/profile-image.jpg" alt="Profile" />
        </span>

        <div className="infoAboutMe">
          <div className="image-wrapper">
            <img src="./images/about-us.png" alt="Salon" className="aboutus-image" />
          </div>

          <div className="aboutus-container">
            <h1>It's All About My Story</h1>
            <div className="p-text text-slate-200">I Have Been A Passionate Hair Dresser.</div>
            <p className="para text-justify text-slate-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, fuga. Quos obcaecati modi cupiditate tempora provident officiis ratione! Cupiditate facere quis blanditiis eius dolorum accusantium neque, cum quam minima iste consectetur nobis assumenda,
              <br /><br />
              voluptatibus error recusandae soluta similique amet dolore odit aspernatur. Similique, aperiam numquam laborum sed consectetur praesentium quis ipsam, odio cum quibusdam non laudantium explicabo, est cumque? Nihil corrupti nesciunt impedit similique eligendi qui dolorem. Facere assumenda cumque labore doloribus nemo voluptatibus, non necessitatibus architecto quo, accusantium dolor?
            </p>

            <h2 className="profile-name">Christina Kollar</h2>

            <div className="iconLink">
              <i className="fa-solid fa-phone">
                <a href="#">+91 2492088822</a>
              </i>
              <i className="fa-solid fa-envelope">
                <a href="#">aksalon@gmail.com</a>
              </i>
            </div>
          </div>
        </div>
      </section>

      <div className="redline">
        <RedLine />
      </div>

      <div className="text-container3">
        <h1 className="text-3xl font-bold text-white">Our Team</h1>
        <div className="image-wrapper">
          <img src="./images/team.png" alt="Team" className="team-image" />
        </div>
      </div>

      <div className="team-head">
        <section className="aboutTeam-Info">
          <div className="teamText">
            <div className="t-team text-white">Our Awesome Team</div>
            <div className="t-heading">We Have Solutions</div>
            <div className="t-lines text-slate-400">This is where you can introduce the experts in your team.</div>
          </div>

          <div className="teamImgInfo">
            <div className="box">
              <div className="img">
                <img src="./images/ralph edwards.jpg" alt="Team member" />
              </div>
              <div className="t-name">Christina Kollar</div>
              <div className="t-position">Owner</div>
            </div>
            <div className="box">
              <div className="img">
                <img src="./images/ralph edwards.jpg" alt="Team member" />
              </div>
              <div className="t-name">Christina Kollar</div>
              <div className="t-position">Owner</div>
            </div>
            <div className="box">
              <div className="img">
                <img src="./images/ralph edwards.jpg" alt="Team member" />
              </div>
              <div className="t-name">Christina Kollar</div>
              <div className="t-position">Owner</div>
            </div>
            <div className="box fourthBox">
              <div className="ak-disc">Book Your Appointment Now And Get 25% Off</div>
              <div className="ak-sale">Awesome Monsoon Sale - 25% off on All Professional Make Up from Only $59</div>
              <div className="btn">
                <a href="#">BOOK APPOINTMENT</a>
              </div>
            </div>
          </div>
        </section>

        <section className="our-works">
          <h1 className="shop-head-works text-primary">OUR WORKS</h1>
          <div className="our-works-images">
            <img className="our-works-image" src="./images/our-works-1.jpg" alt="Work 1" />
            <img className="our-works-image" src="./images/our-works-2.jpg" alt="Work 2" />
            <img className="our-works-image" src="./images/our-works-3.jpg" alt="Work 3" />
            <img className="our-works-image" src="./images/our-works-4.jpg" alt="Work 4" />
          </div>
        </section>

        <div className="redline2">
        <RedLine />
      </div>

      <div className="text-container3">
        <h1 className="text-3xl font-bold text-white">What Our Clients Say About Us</h1>
        <div className="image-wrapper">
          <img src="./images/reviews.png" alt="Team" className="review-image" />
        </div>
      </div>

        <section className="section-review">
          <h2 className='review-text'>Review Us</h2>
          <div className="icon">
            <a href="#" className="fa-brands fa-facebook-f"></a>
            <a href="#" className="fa-brands fa-google"></a>
            <a href="#" className="fa-brands fa-instagram"></a>
          </div>

          <div className="imgicon">
            <img src="./images/user-2.jpg" alt="Testimonial" />
            <i className="fa-solid fa-quote-right"></i>
          </div>

          <p className='text-slate-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A rem soluta cupiditate, asperiores consectetur voluptate, dolor deleniti assumenda laboriosam quae culpa natus iure eum quidem cum ducimus fugit tempora sint. 
            <small>Anmol Kecode</small></p>
        </section>
      </div>

      <section className="ready-to-transform">
        <h1>READY TO TRANSFORM?</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis earum ipsum error amet, iusto aut tempora numquam facilis alias eum!</p>
        <a href="#" className="second-btn">BOOK NOW</a>
      </section>
    </>
  );
}

export default About;
