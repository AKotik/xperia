import React from 'react';

import { Formik, Form, Field } from 'formik';
import { Typography } from '@mui/material';
 
// import * as Yup from "yup";
const initialValues = {
  name: '',
  email: '',
  phone: '',
  xpress: '',
  xpress_roles: '',
  xpand: '',
  xpand_roles: '',
  xcel: '',
  xcel_roles: '',
  message: '',
  upload: '',
};
// const validationSchema = Yup.object({
//   name: Yup.string().required("Required"),
//   email: Yup.string().email("Invalid email format").required("Required"),
//   phone: Yup.string().required("Required"),
//   message: Yup.string().required("Required"),
// });

const onSubmit = (data) => {
  console.log(data);
};

const Collaborators = () => {
  return (
    
      <div className="container">
        <div className="row">
          <h3 className="text-center">Collaborate With us</h3>
          <h5 className="text-center">send us a message to collaborate with us!</h5>
        </div>
        <div className="row">
          <div className="col-md-8 offset-2 border  shadow p-3 mb-5 bg-body rounded">
            <Formik
              initialValues={initialValues}
              // validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({ values }) => {
                return (
                  <Form>
                    <div className="mb-3">
                      {/* <label for="name" className="form-label">
                        Full Name
                      </label> */}
                      <Field
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="enter full name here"
                      />
                    </div>
                    {/* <ErrorMessage /> */}
                    <div className="mb-3">
                      {/* <label for="email" className="form-label">
                        Email
                      </label> */}
                      <Field
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="email@example.com"
                      />
                    </div>
                    {/* <ErrorMessage /> */}
                    <div className="mb-3">
                      {/* <label for="phone" className="form-label">
                        Phone
                      </label> */}
                      <Field
                        type="text"
                        className="form-control"
                        id="phone"
                        name="phone"
                        placeholder="phone number"
                      />
                    </div>
                    <Typography> Which area(s) would you like to collaborate on?</Typography>

                    <div className=" d-flex">
                      <div className="mb-3 form-check m-2">
                        <Field
                          type="checkbox"
                          className="form-check-input"
                          id="exampleCheck1"
                          name="xpress"
                        />
                        <Typography>Xpress:Creative Collaborators</Typography>
                      </div>

                      {/* <ErrorMessage /> */}
                      <div className="mb-3 form-check m-2">
                        <Field
                          type="checkbox"
                          className="form-check-input"
                          id="exampleCheck2"
                          name="xpand"
                        />
                        <Typography>Xpand:Marketing/PR</Typography>
                      </div>
                      {/* <ErrorMessage /> */}
                      <div className="mb-3 form-check m-2">
                        <Field
                          type="checkbox"
                          className="form-check-input"
                          id="exampleCheck3"
                          name="xcel"
                        />
                        <Typography>Xcel:Sales/Purchace</Typography>
                      </div>
                    </div>

                    {values.xpress ? (
                      <Field
                        as="select"
                        name="xpress_roles"
                        className="form-select mb-3"
                        aria-label="Default select example"
                      >
                        <option value="Singer">Singer</option>
                        <option value="Musician">Musician</option>
                        <option value="Writer">Writer</option>
                        <option value="Artist">Artist</option>
                        <option value="Poet">Poet</option>
                        <option value="Illustrator">Illustrator</option>
                        <option value="Actor">Actor</option>
                        <option value="Flim_Maker">Flim Maker</option>
                        <option value="Translator">Translator</option>
                      </Field>
                    ) : null}

                    {values.xpand ? (
                      <Field
                        as="select"
                        name="xpand_roles"
                        className="form-select mb-3"
                        aria-label="Default select example"
                      >
                        <option value="Publicist">Publicist</option>
                        <option value="Agent">Agent</option>
                        <option value="Marketer">Marketer</option>
                        <option value="Influencer">Influencer</option>
                        <option value="Reviewer">Reviewer</option>
                        <option value="Promoter">Illustrator</option>
                        <option value="Digital_Sales_Company">Digital Sales Company</option>
                        <option value="Marketing_Agency">Marketing Agency</option>
                        <option value="Individual_Vendor">Individual Vendor</option>
                      </Field>
                    ) : null}

                    {values.xcel ? (
                      <Field
                        as="select"
                        name="xcel_roles"
                        className="form-select mb-3"
                        aria-label="Default select example"
                      >
                        <option value="Sales_Representative">Sales Representative</option>
                        <option value="Vendor">Vendor</option>
                        <option value="Reseller">Reseller</option>
                        <option value="Home_Based_Business">Home Based Business</option>
                        <option value="Distributor">Distributor</option>
                      </Field>
                    ) : null}

                    {/* <ErrorMessage /> */}

                    <div className="mb-3">
                      {/* <label for="upload" className="form-label">
                        Upload Document
                      </label> */}
                      <Field
                        type="file"
                        className="form-control"
                        id="message"
                        name="file"
                        placeholder="Upload Document"
                      />
                    </div>
                    <div className="mb-3">
                      {/* <label for="message" className="form-label">
                        Message
                      </label> */}
                      <Field
                        type="text"
                        className="form-control"
                        id="message"
                        name="message"
                        placeholder="Message"
                        style={{ height: '10rem' }}
                      />
                    </div>

                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
     
  );
};

export default Collaborators;
