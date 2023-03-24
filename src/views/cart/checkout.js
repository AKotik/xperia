import React from 'react';
import {
  Grid,
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Card,
  CardContent,
  Typography,
  FormControlLabel,
  CardHeader,
  Table,
  TableContainer,
  TableRow,
  TableCell,
  TableHead,
  Divider,
  TableBody,
  Collapse,
  TextField,
  Stack,
  InputAdornment,
} from '@mui/material';
import PageContainer from '../../components/container/PageContainer';
import Breadcrumb from '../../layouts/full-layout/breadcrumb/Breadcrumb';

import CustomTextField from '../../components/forms/custom-elements/CustomTextField';
import CustomCheckbox from '../../components/forms/custom-elements/CustomCheckbox';
import CustomFormLabel from '../../components/forms/custom-elements/CustomFormLabel';
import Scrollbar from '../../components/custom-scroll/Scrollbar';

const steps = ['Cart', 'Billing', 'Payment'];

const BCrumb = [
  {
    to: '/app',
    title: 'home',
  },
  {
    title: 'Shop',
  },
  {
    title: 'checkout',
  },
];

const ProductCheckout = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => step === 1;

  const isStepSkipped = (step) => skipped.has(step);

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  // eslint-disable-next-line consistent-return
  const handleSteps = (step) => {
    switch (step) {
      case 0:
        return (
          <Card>
            <CardHeader
              title={
                <Typography variant="h6">
                  Card
                  <Typography component="span" sx={{ color: 'text.secondary' }}>
                    &nbsp;{1} item
                  </Typography>
                </Typography>
              }
              sx={{ mb: 3 }}
            />
            <Scrollbar>
              <TableContainer sx={{ minWidth: 720 }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Product</TableCell>
                      <TableCell align="left">Price</TableCell>
                      <TableCell align="left">Quantity</TableCell>
                      <TableCell align="right">Total Price</TableCell>
                      <TableCell align="right" />
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                           
                          <Box>
                            <Typography noWrap variant="subtitle2" sx={{ maxWidth: 240 }}>
                              product name
                            </Typography>

                            <Box
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                              }}
                            >
                              <Typography variant="body2">
                                <Typography
                                  component="span"
                                  variant="body2"
                                  sx={{ color: 'text.secondary' }}
                                >
                                  size:&nbsp;
                                </Typography>
                                22
                              </Typography>
                              <Divider orientation="vertical" sx={{ mx: 1, height: 16 }} />
                              <Typography variant="body2">
                                <Typography
                                  component="span"
                                  variant="body2"
                                  sx={{ color: 'text.secondary' }}
                                >
                                  color:&nbsp;
                                </Typography>
                                color
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      </TableCell>

                      <TableCell align="left"> $22</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Scrollbar>
          </Card>
        );
      case 1:
        return (
          <Box sx={{ p: 3 }}>
            <CustomFormLabel htmlFor="email">Email</CustomFormLabel>
            <CustomTextField
              id="email"
              size="small"
              variant="outlined"
              fullWidth
              sx={{ mt: 1, mb: 3 }}
            />
             
          </Box>
        );
      case 2:
        return (
          <Box>
          <Box sx={{ p: 3 }}>
            <Collapse in="creditcard" sx={{ width: 1 }}>
              <TextField select fullWidth label="Cards">

                <option>
                  SDE
                </option>

              </TextField>

              <Button
                size="small"
                width={20} height={20} 
              sx={{ my: 3 }}
              >
              Add new card
            </Button>
          </Collapse>
          <FormControlLabel
              control={<CustomCheckbox defaultChecked />}
              label="Agree with terms?" 
          />
          </Box>
          </Box>
        );
      default:
        break;
    }
  };

  const handleReset = () => {
    
  };

  return (
    <PageContainer title="Create a new Product" description="this is Shop Detail page">
      <Breadcrumb title="Create a new Product" items={BCrumb} />
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12} lg={8}>
          <Card>
            <CardContent>
              <Box sx={{ width: '100%' }}>
                <Stepper activeStep={activeStep}>
                  {steps.map((label) => {
                    const stepProps = {};
                    const labelProps = {};
                    // if (isStepOptional(index)) {
                    //   labelProps.optional = <Typography variant="caption">Optional</Typography>;
                    // }
                    // if (isStepSkipped(index)) {
                    //   stepProps.completed = false;
                    // }
                    return (
                      <Step key={label} {...stepProps}>
                        <StepLabel {...labelProps}>{label}</StepLabel>
                      </Step>
                    );
                  })}
                </Stepper>
                {activeStep === steps.length ? (
                  <>
                    <Box sx={{ m: 3, p: 2,   borderRadius: 1 }}>
                    <Card>
                       <Typography variant="h2">Thank You For Your Purchase</Typography>
                      <Typography variant="subtitle">Thanks for placing order</Typography>
                       </Card>
                    </Box>

                    <Box display="flex" sx={{ flexDirection: 'row', p: 3 }}>
                      <Box sx={{ flex: '1 1 auto' }} />
                      <Button onClick={handleReset} variant="outlinned" color="error">
                        continue Shopping
                      </Button>
                      <Button onClick={handleReset} variant="contained" color="success">
                        Download as PDF
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
                      {isStepOptional(activeStep) && (
                        <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                          Skip
                        </Button>
                      )}

                      <Button
                        onClick={handleNext}
                        variant="contained"
                        color={activeStep === steps.length - 1 ? 'success' : 'secondary'}
                      >
                        {activeStep === steps.length - 1 ? 'Order Complete' : 'Next'}
                      </Button>
                    </Box>
                  </>
                )}
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} lg={4} md={4}>
        <Card sx={{ mb: 3 }}>
        <CardHeader
          title="Order Summary"
          
        />
  
        <CardContent>
          <Stack spacing={2}>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Sub Total
              </Typography>
              <Typography variant="subtitle2">$16.9</Typography>
            </Stack>
  
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Discount
              </Typography>
              <Typography variant="subtitle2">-</Typography>
            </Stack>
  
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Shipping
              </Typography>
              <Typography variant="subtitle2">free</Typography>
            </Stack>
  
            <Divider />
  
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="subtitle1">Total</Typography>
              <Box sx={{ textAlign: 'right' }}>
                <Typography variant="subtitle1" sx={{ color: 'error.main' }}>
                  $16.45
                </Typography>
                <Typography variant="caption" sx={{ fontStyle: 'italic' }}>
                  (VAT included if applicable)
                </Typography>
              </Box>
            </Stack>
  
            
              <TextField
                fullWidth
                placeholder="Discount codes / Gifts"
                value="DISCOUNT5"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button sx={{ mr: -0.5 }}>
                        Apply
                      </Button>
                    </InputAdornment>
                  ),
                }}
              />
            
          </Stack>
        </CardContent>
      </Card>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default ProductCheckout;
