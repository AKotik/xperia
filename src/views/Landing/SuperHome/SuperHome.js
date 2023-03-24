import React from 'react';
import { Link } from 'react-router-dom';
import AddToHomeScreenIcon from '@mui/icons-material/AddToHomeScreen';
import AcUnit from '@mui/icons-material/AcUnit';
import AdjustIcon from '@mui/icons-material/Adjust';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import BrushIcon from '@mui/icons-material/Brush';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import Fingerprint from '@mui/icons-material/Fingerprint';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import Heroimg from '../../../assets/images/backgrounds/hero-img.png';
// import Countimg from '../../../assets/images/backgrounds/counts-img.svg';

import './superhome.css';

const SuperHome = () => {
  return (
    <div>
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up">
                Create, Collaborate, and Customize publishing with Xperia. Be part of our innovative
                and eclectic publishing team.
              </h1>
              <h2 data-aos="fade-up" data-aos-delay="400">
                Xperia is a collaborative platform for content creation & publishing fiction and
                business documents.
              </h2>
              <div data-aos="fade-up" data-aos-delay="800">
                <Link to="/fiction" className="btn-get-started scrollto ">
                  Fiction
                </Link>

                <Link to="/business2" className="btn-get-started scrollto ">
                  Business
                </Link>
              </div>
            </div>
            <div
              className="col-lg-6 order-1 order-lg-2 hero-img"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <img src={Heroimg} className="img-fluid animated " alt="" />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>About Us</h2>
          </div>

          <div className="row content">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="150">
              <p>We are a team of publishing experts who come together to create literary works.</p>
              <ul>
                <li>
                  <i className="ri-check-double-line">.</i> We team with like-minded artists to
                  develop stories and create experiences for our readers.
                </li>
                <li>
                  <i className="ri-check-double-line">.</i> We allow artistic collaborations that
                  can bring your written word alive and make your story engaging.
                </li>
                <li>
                  <i className="ri-check-double-line">.</i> We offer a platform where artists may
                  work together on a piece of literature and publish it to the global market.
                </li>
              </ul>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0" data-aos="fade-up" data-aos-delay="300">
              <p>
                We are authors, illustrators, designers, artists, composers, singers, musicians,
                movie makers, videographers, marketeers, and other talented publishing experts.
                Projects we engage in are literary works like novels, plays, stories, and other
                imaginary or real expressions. Our offerings range from fact to fiction, from
                mystical to magical, from musical to dramatization, from poetries to mysteries, and
                from children’s books to universal literature.
              </p>
              <Link to="/" className="btn-learn-more">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="counts" className="counts">
        <div className="container">
          <div className="row">
            <div
              className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start"
              data-aos="fade-right"
              data-aos-delay="150"
            >
              <img src={Countimg} alt="" className="img-fluid" />
            </div>

            <div
              className="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <div className="content d-flex flex-column justify-content-center">
                <div className="row">
                  <div className="col-md-6 d-md-flex align-items-md-stretch">
                    <div className="count-box">
                      <i className="bi bi-emoji-smile">.</i>
                      <span
                        data-purecounter-start="0"
                        data-purecounter-end="65"
                        data-purecounter-duration="1"
                        className="purecounter"
                      >
                        .
                      </span>
                      <p>
                        <strong>Access to Artists and Works</strong> Sign on as a member to gain
                        access to our database of experts and their works ready for publication.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6 d-md-flex align-items-md-stretch">
                    <div className="count-box">
                      <i className="bi bi-journal-richtext">.</i>
                      <span
                        data-purecounter-start="0"
                        data-purecounter-end="85"
                        data-purecounter-duration="1"
                        className="purecounter"
                      >
                        .
                      </span>
                      <p>
                        <strong>A Venue for Collaboration</strong> Choose from the creative options
                        to see where and how you may collaborate and immediately have the potential
                        to earn royalties.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6 d-md-flex align-items-md-stretch">
                    <div className="count-box">
                      <i className="bi bi-clock">.</i>
                      <span
                        data-purecounter-start="0"
                        data-purecounter-end="18"
                        data-purecounter-duration="1"
                        className="purecounter"
                      >
                        .
                      </span>
                      <p>
                        <strong>Opportunity for Marketeers</strong> Use your expertise to market the
                        literary works and become part of the team and enjoy the upside of the sale.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6 d-md-flex align-items-md-stretch">
                    <div className="count-box">
                      <i className="bi bi-award">.</i>
                      <span
                        data-purecounter-start="0"
                        data-purecounter-end="15"
                        data-purecounter-duration="1"
                        className="purecounter"
                      >
                        .
                      </span>
                      <p>
                        <strong> Ability to Publish Online or In Print</strong> Directly publish to
                        a online digital platform or allow your reader to send it on to be printed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section id="services" className="services">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Services</h2>
            <p>Magnam dolores commodi suscipit eius consequatur ex aliquid fug</p>
          </div>

          <div className="row">
            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                <div className="icon">
                  <AddToHomeScreenIcon style={{ marginTop: '9px' }} />
                </div>
                <h4 className="title">
                  <a href="">Access to Artists and Works</a>
                </h4>
                <p className="description">
                  Sign on as a member to gain access to our database of experts and their works
                  ready for publication
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                <div className="icon">
                  <AcUnit style={{ marginTop: '9px' }} />
                </div>
                <h4 className="title">
                  <a href="">A Venue for Collaboration</a>
                </h4>
                <p className="description">
                  Choose from the creative options to see where and how you may collaborate and
                  immediately have the potential to earn royalties.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
                <div className="icon">
                  <AddCircleOutlineIcon style={{ marginTop: '9px' }} />
                </div>
                <h4 className="title">
                  <a href="">Opportunity for Marketeers</a>
                </h4>
                <p className="description">
                  Use your expertise to market the literary works and become part of the team and
                  enjoy the upside of the sale.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
                <div className="icon">
                  <AdjustIcon style={{ marginTop: '9px' }} />
                </div>
                <h4 className="title">
                  <a href="">Ability to Publish Online or In Print</a>
                </h4>
                <p className="description">
                  Directly publish to a online digital platform or allow your reader to send it on
                  to be printed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="features">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Features</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem</p>
          </div>

          <div className="row" data-aos="fade-up" data-aos-delay="300">
            <div className="col-lg-3 col-md-4">
              <div className="icon-box">
                <BrushIcon />
                <h3>
                  <a href=""> Artistic Partnerships</a>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
              <div className="icon-box">
                <AutoStoriesIcon />
                <h3>
                  <a href=""> Body of Books </a>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
              <div className="icon-box">
                <CompareArrowsIcon />
                <h3>
                  <a href="">Collaborative Creative Cuts</a>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
              <div className="icon-box">
                <LocalPrintshopIcon />
                <h3>
                  <a href="">Digital and Printed Options</a>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <Fingerprint />
                <h3>
                  <a href=""> Easy Access to Experts</a>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <OndemandVideoIcon />
                <h3>
                  <a href=""> Free Previews and Clips</a>
                </h3>
              </div>
            </div>
            {/* <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i className="ri-file-list-3-line">.</i>
                <h3>
                  <a href="">Digital/Physical</a>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i className="ri-price-tag-2-line">.</i>
                <h3>
                  <a href="">Printing</a>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i className="ri-anchor-line">.</i>
                <h3>
                  <a href="">Dirada Pack</a>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i className="ri-disc-line">.</i>
                <h3>
                  <a href="">Moton Ideal</a>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i className="ri-base-station-line">.</i>
                <h3>
                  <a href="">Verdo Park</a>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i className="ri-fingerprint-line">.</i>
                <h3>
                  <a href="">Flavor Nivelanda</a>
                </h3>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuperHome;
