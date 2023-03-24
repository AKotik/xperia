import React from 'react';
import { Link } from 'react-router-dom';
import "./business2.css";

const Business2 = () => {
  return (
    <div>
      <div
        id="intro-example"
        className="p-5 text-center bg-image"
        style={{
          backgroundImage:
            "url('https://static.wixstatic.com/media/nsplsh_bba5a743782242f3bb1972c974289081~mv2.jpg/v1/fill/w_1349,h_645,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/nsplsh_bba5a743782242f3bb1972c974289081~mv2.jpg')",
          height: '500px',
          width: '100%',
        }}
      >
        <div className="mask ">
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-dark fw-bold mt-4 ">
              <h1 className="mb-3 heading-color">Join Xperia To</h1>
              <h1 className="mb-4">Create.Invite.Collborate</h1>
              <p>
                {' '}
                We invite writers, illustrators, bloggers, marketeers, and other talented
                individuals to collaborate on technical articles, software and hardware manuals, and
                other technology-related material for software and hardware companies.{' '}
              </p>
              <Link
                className="btn btn-outline-dark btn-lg m-2"
                to="/signin"
                role="button"
                rel="nofollow"
              >
                JOIN
              </Link>
              <Link className="btn btn-outline-dark btn-lg m-2" to="/signin" role="button">
                EXPLORE
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6 col-sm-12 p-5 mt-5 text-center">
            <h3 className="heading-color mt-5">
              Every One Has a Story, <br />
              Tell The World Yours
            </h3>
            <p>Start creating a short story and invite professionals to give it a shape</p>
            <Link to="/dashboard/story/upload" className="btn btn-outline-dark btn-lg">
              CREATE MY STORY
            </Link>
          </div>
          <div className="col-12 col-md-6 col-lg-6 col-sm-12 p-5 mt-5 text-center">
            <img
              src="http://st2.depositphotos.com/4817991/8153/i/450/depositphotos_81536454-Laptop-notebook-and-coffee-cup-on-work-desk.jpg"
              alt="trivadi"
              style={{ height: '300px', width: '100%' }}
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6 col-sm-12 p-5 mt-5 text-center">
            <img
              src="https://media-exp1.licdn.com/dms/image/C5612AQGOXN75MQCeqg/article-cover_image-shrink_720_1280/0/1596175310042?e=2147483647&v=beta&t=SzpoqyqH-8g4-OuOz9jB7Bf_QVlKMnzs8Wk8Xg3Wtcs"
              alt="trivadi"
              style={{ height: '300px', width: '100%' }}
            />
          </div>

          <div className="col-12 col-md-6 col-lg-6 col-sm-12 p-5 mt-5 text-center">
            <h3 className="heading-color mt-5">
              Call Upon the Artists, <br />
              Creators and Designers
            </h3>
            <p>Start creating a short story and invite professionals to give it a shape</p>
            <Link to="/signin" className="btn btn-outline-dark btn-lg">
              INVITE NOW
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className= "row">
          <div className="col-12 col-md-6 col-lg-6 col-sm-12 p-5 mt-5 text-center">
            <h3 className="heading-color mt-5">
              Collaborate with <br />
              Marketeers and Promotors
              <br />
              to Leave Your Mark
            </h3>
            <p>Start creating a short story and invite professionals to give it a shape</p>
            <Link to="/signin" className="btn btn-outline-dark btn-lg">
              COLLABORATE NOW
            </Link>
          </div>
          <div className="col-12S col-md-6 col-lg-6 col-sm-12 p-5 mt-5 text-center">
            <img
              src="https://freerangestock.com/sample/120367/colleagues-in-a-business-meeting.jpg"
              alt="trivadi"
              style={{ height: '300px', width: '100%' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Business2