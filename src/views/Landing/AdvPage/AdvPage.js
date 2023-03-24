import React from 'react';
import './advpage.css';
import horn from '../../../assets/horn.gif';

const AdvPage = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6 col-sm-12 p-5 mt-5 text-center">
            <h1 className="heading-color mt-5">
              Take your future <br />
              by its horns
            </h1>
            <h4>Unleash you creative potential</h4>
            <button type="button" className="btn btn-outline-dark btn-lg mt-3">
              CREATE MY STORY
            </button>
          </div>
          <div className="col-12 col-md-6 col-lg-6 col-sm-12 p-4 text-center">
            <img src={horn} alt="trivadi" style={{ height: '400px', width: '100%' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvPage;
