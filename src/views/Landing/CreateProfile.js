import React from 'react';
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Card,
  Typography,
  FormControlLabel,
   
} from '@mui/material';
import axios from 'axios';
import { useFormik } from 'formik';
import CustomTextField from '../../components/forms/custom-elements/CustomTextField';
import CustomCheckbox from '../../components/forms/custom-elements/CustomCheckbox';
import CustomFormLabel from '../../components/forms/custom-elements/CustomFormLabel';
import CustomSelect from '../../components/forms/custom-elements/CustomSelect';
import CustomFileUpload from '../../components/forms/custom-elements/CustomeFileUpload';


const steps = ['Account', 'Work Details', 'Agreement', 'Finish'];
const skills = ["Author","Illustrator","Designer","Editor"]


 


const CreateProfile = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  // const [skipped, setSkipped] = React.useState(new Set());

  // const isStepOptional = (step) => step === 1;

  // const isStepSkipped = (step) => skipped.has(step);

  const handleNext = () => {
    // let newSkipped = skipped;
    // if (isStepSkipped(activeStep)) {
    //   newSkipped = new Set(newSkipped.values());
    //   newSkipped.delete(activeStep);
    // }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const formik = useFormik({
    initialValues: {},
    onSubmit:(values)=>{
      axios({
        method : 'post',
        url:"http://localhost:8080/api/v1/profiles/new",
        data: values
       }).then(res =>{
        console.log(res.data)
       })
      console.log(values);
      handleNext();
    }
  });

  // const handleSkip = () => {
  //   if (!isStepOptional(activeStep)) {
  //     // You probably want to guard against something like this,
  //     // it should never occur unless someone's actively trying to break something.
  //     throw new Error("You can't skip a step that isn't optional.");
  //   }

  // setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // setSkipped((prevSkipped) => {
  //   const newSkipped = new Set(prevSkipped.values());
  //   newSkipped.add(activeStep);
  //   return newSkipped;
  // });
  // };

  // eslint-disable-next-line consistent-return
  const handleSteps = (step) => {
    switch (step) {
      case 0:
        return (
          <Box sx={{ p: 3, width: '80%' }}>
            <CustomFormLabel htmlFor="Name">Name</CustomFormLabel>
            <CustomTextField
              id="Name"
              size="small"
              variant="outlined"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              fullWidth
              sx={{ mt: 1, mb: 3 }}
            />
            <CustomFormLabel htmlFor="Email">Email</CustomFormLabel>
            <CustomTextField
              id="Email"
              size="small"
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              variant="outlined"
              fullWidth
              sx={{ mt: 1, mb: 3 }}
            />
            <CustomFormLabel htmlFor="Password">Password</CustomFormLabel>
            <CustomTextField
              id="Password"
              size="small"
              type="password"
              variant="outlined"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              fullWidth
              sx={{ mt: 1, mb: 3 }}
            />
            <CustomFormLabel htmlFor="Password">Confirm Password</CustomFormLabel>
            <CustomTextField
              id="confirm_password"
              size="small"
              type="password"
              variant="outlined"
              name="confirm_password"
              value={formik.values.confirm_password}
              onChange = {formik.handleChange}
              fullWidth
              sx={{ mt: 1, mb: 3 }}
            />
          </Box>
        );
      case 1:
        return (
          <Box sx={{ p: 3 }}>
            <CustomFormLabel htmlFor="skills">Select Your Skill Set </CustomFormLabel>
             <CustomSelect id="skills" items={ skills} value={formik.values.skill} onChange={ (e)=> formik.setFieldValue("skills",e.target.value)}/>
            <CustomFormLabel htmlFor="Lname">Portfolio Or Bio Link</CustomFormLabel>
            <CustomTextField
              id="Lname"
              size="small"
              type="text"
              variant="outlined"
              fullWidth
              sx={{ mt: 1, mb: 3 }}
            />
            <CustomFormLabel htmlFor="file">Upload Your Work Files</CustomFormLabel>
            <CustomFileUpload
               name="file"
               onChange={(event) => {
                formik.setFieldValue("file", event.currentTarget.files[0]);
              }}

                />
          </Box>
        );
      case 2:
        return (
          <Box sx={{ p: 3 }}>
            <Typography variant="h5">Terms and condition</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Sard about this site or you have been to it, but you cannot figure out what it is or
              what it can do. MTA web directory isSard about this site or you have been to it, but
              you cannot figure out what it is or what it can do. MTA web directory is
            </Typography>
            <FormControlLabel
              control={<CustomCheckbox defaultChecked />}
              label="Agree with terms?"
            />
          </Box>
        );
      default:
        break;
    }
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <Box sx={{ padding: '5% 10%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => {
          const stepProps = {};
          const labelProps = {};
          //  if (isStepOptional(index)) {
          //    labelProps.optional = <Typography variant="caption">Optional</Typography>;
          //  }
          //  if (isStepSkipped(index)) {
          //    stepProps.completed = false;
          //  }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <Card>
        <Box sx={{ width: '100%' }}>
          {activeStep === steps.length ? (
            <>
              <Box sx={{ m: 3, p: 2, backgroundColor: 'primary.light', borderRadius: 1 }}>
                All steps completed - you&apos;re finished
              </Box>

              <Box display="flex" sx={{ flexDirection: 'row', p: 3 }}>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button onClick={handleReset} variant="contained" color="error">
                  Reset
                </Button>
              </Box>
            </>
          ) : (
            <>
              <Box>{handleSteps(activeStep)}</Box>

              <Box display="flex" sx={{ flexDirection: 'row', p: 3 }}>
                <Button
                  color="inherit"
                  variant="contained"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />
                {/* {isStepOptional(activeStep) && (
                    <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                      Skip
                    </Button>
                  )} */}

               {activeStep === steps.length - 2 ?  
                
                <Button
                  
                  onClick={formik.handleSubmit}
                  variant="contained"
                  color= 'success' 
                >
                   Create Profile
                </Button>
                :
                <Button
                  
                  onClick={handleNext}
                  variant="contained"
                  color= 'secondary'
                >
                   Next
                </Button>}
              </Box>
            </>
          )}
        </Box>
      </Card>
    </Box>
  );
};

export default CreateProfile;
