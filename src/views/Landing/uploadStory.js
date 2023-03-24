import React from 'react'
import {Link} from 'react-router-dom'
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
import {useFormik} from 'formik'


import CustomTextField from '../../components/forms/custom-elements/CustomTextField';
// import CustomCheckbox from '../../components/forms/custom-elements/CustomCheckbox';
import CustomFormLabel from '../../components/forms/custom-elements/CustomFormLabel';
import CustomFileUpload from '../../components/forms/custom-elements/CustomeFileUpload';
import QuillEditor from '../quill-editor/QuillEditor';



const steps = ['Story Details', 'Upload', 'Finish'];

const UploadStory = () => {

  

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const formik = useFormik({
    initialValues :{
      name: "",
      email: "",
      contact:  "",
      title: "",
      sub_title: "",
      description: "",
      content: "",
    },
    onSubmit : (values)=>{
       axios({
        method : 'post',
        url:"http://localhost:3000/api/v1/stories/new",
        data: values
       }).then(res =>{
        console.log(res.data)
       })
      console.log( values)
      handleNext();
    }
  });


  // eslint-disable-next-line consistent-return
  const handleSteps = (step) => {
    switch (step) {
      
        
      case 0:
        return (
          <Box sx={{ p: 3 }}>
            <CustomFormLabel htmlFor="title">Title</CustomFormLabel>
            <CustomTextField
              id="title"
              size="small"
              variant="outlined"
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              fullWidth
              sx={{ mt: 1, mb: 3 }}
            />
            <CustomFormLabel htmlFor="sub_title">Sub Title</CustomFormLabel>
            <CustomTextField
              id="sub_title"
              size="small"
              type="text"
              name="sub_title"
              value={formik.values.sub_title}
              onChange={formik.handleChange}
              variant="outlined"
              fullWidth
              sx={{ mt: 1, mb: 3 }}
            />
            <CustomFormLabel htmlFor="description">Description</CustomFormLabel>
            <CustomTextField
              id="description"
              multiline
              rows={4}
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              variant="outlined"
              fullWidth
              sx={{ mt: 1, mb: 3 }}
            />
          </Box>
        );
      case 1:return(
        <Box sx={{ p: 0 }}>
              <QuillEditor 
              value={formik.values.content} 
              onChange={(value) => {
                formik.setFieldValue("content", value);
              }}/>
              
              <CustomFileUpload
               name="file"
               onChange={(event) => {
                formik.setFieldValue("file", event.currentTarget.files[0]);
              }}

                />

        </Box>
      )
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
              control={ <input
                id="terms_accepted"
                type="checkbox"
                name="terms_accepted"
                checked={formik.values.terms_accepted}
                onChange={(e)=>{
                  const { checked } = e.target;
                  if (checked) {
                                  formik.setFieldValue("terms_accepted", true);
                                } else {
                                  formik.setFieldValue("terms_accepted", false);
                                 
                            }
                }}
              />}
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
    
     <Box sx={{padding:'5% 10%'}}>
     <Stepper activeStep={activeStep}>
     {steps.map((label) => {
       const stepProps = {};
       const labelProps = {};
       
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
              <Typography variant='h4'>Thank you ! Your request has been submitted successfully ...!</Typography>
              </Box>

              <Box display="flex" sx={{ flexDirection: 'row', p: 3 }}>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button onClick={handleReset} variant="contained" color="error">
                <Link to="/">Go to home</Link> 
                </Button>
              </Box>
            </>
          ) : (
            <form>
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
                
                {activeStep === steps.length - 1 ?  
                
                <Button
                  
                  onClick={formik.handleSubmit}
                  variant="contained"
                  color= 'success' 
                >
                   Submit For Review
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
            </form>
          )}
        </Box>
      </Card>
      </Box>
  );
};
 
export default UploadStory;