/* eslint-disable react/prop-types */

import React from "react";
import Carousel from "react-material-ui-carousel";
// import {Link} from 'react-router-dom'
 
import "./styles.css";

import {
  // Card,
  Box,
  CardMedia,
  Typography,
  Grid,
  
  
  
} from '@mui/material';
 

function Banner(props) {
  // if (props.newProp) console.log(props.newProp);
  // const contentPosition = props.contentPosition
  //   ? props.contentPosition
  //   : "left";
  // const totalItems = props.length ? props.length : 3;
  const mediaLength = 1;

  const items = [];
  

  for (let i = 0; i < mediaLength; i++) {
    const {item} = props

    // const media = (
    //   <Grid item xs={12} key={item.Name}>
    //     <CardMedia className="Media" image={item.Image}  >
    //       <Box className="MediaCaption">
    //       <Typography sx={{fontSize:'50px'}} >{item.Name}</Typography>
    //       <Typography >{item.sub_title}</Typography>
          
    //       </Box>
    //     </CardMedia>
    //   </Grid>
    // );
    const media = (
      <Grid item xs={12} key={item.Name}>
        <CardMedia className="Media" image={item.Image}  >
         <Grid className="MediaCaption" >
           <Typography className="title">{item.title}</Typography>
           <Typography className="SubTitle">{item.sub_title}</Typography>
            {/* <Button className="WhiteBtn" variant="contained" ><Link to="/login">Get started</Link></Button> */}
         </Grid>
        </CardMedia>
      </Grid>
    );

    items.push(media);
  }

  // if (contentPosition === "left") {
  //   items.unshift(content);
  // } else if (contentPosition === "right") {
  //   items.push(content);
  // } else if (contentPosition === "middle") {
  //   items.splice(items.length / 2, 0, content);
  // }

  return (
    <Box raised className="Banner">
      <Grid container spacing={0} className="BannerGrid">
        {items}
      </Grid>
    </Box>
  );
}


class BannerSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      autoPlay: true,
      animation: "fade",
      indicators: true,
      timeout: 500,
      navButtonsAlwaysVisible: true,
      navButtonsAlwaysInvisible: false,
      cycleNavigation: true,
      items : this.props.items
    };

     
  }

  toggleAutoPlay = () =>{
    this.setState(prevState=>({
      autoPlay: !prevState.autoPlay
    }));
  }

  toggleIndicators=()=> {
    this.setState(prevState=>({
      indicators: !prevState.indicators
    }));
  }

  toggleNavButtonsAlwaysVisible= ()=> {
    this.setState(prevState=>({
      navButtonsAlwaysVisible: !prevState.navButtonsAlwaysVisible
    }));
  }

  toggleNavButtonsAlwaysInvisible=() =>{
    this.setState(prevState=>({
      navButtonsAlwaysInvisible: !prevState.navButtonsAlwaysInvisible
    }));
  }

  toggleCycleNavigation =() =>{
    this.setState(prevState=>({
      cycleNavigation: !prevState.cycleNavigation
    }));
  }

  changeAnimation=(event)=> {
    this.setState({
      animation: event.target.value
    });
  }

  changeTimeout= value=> {
    this.setState({
      timeout: value
    });
  }

  render() {
    return (
      <Box style={{ marginTop: "20px", color: "#494949" }}  >
      

        <Carousel
          
          className="Example"
          autoPlay={this.state.autoPlay}
          animation={this.state.animation}
          indicators={this.state.indicators}
          timeout={this.state.timeout}
          cycleNavigation={this.state.cycleNavigation}
          navButtonsAlwaysVisible={this.state.navButtonsAlwaysVisible}
          navButtonsAlwaysInvisible={this.state.navButtonsAlwaysInvisible}
          next={(now, previous) =>
            console.log(
              `Next User Callback: Now displaying child${now}. Previously displayed child${previous}`
            )
          }
          prev={(now, previous) =>
            console.log(
              `Prev User Callback: Now displaying child${now}. Previously displayed child${previous}`
            )
          }
          onChange={(now, previous) =>
            console.log(
              `OnChange User Callback: Now displaying child${now}. Previously displayed child${previous}`
            )
          }
          // fullHeightHover={false}
          // navButtonsProps={{style: {backgroundColor: 'cornflowerblue', borderRadius: 0}}}
          // navButtonsWrapperProps={{style: {bottom: '0', top: 'unset', }}}
          // indicatorContainerProps={{style: {margin: "20px"}}}
          // NextIcon='next'
        >
          {this.state.items.map((item) => {
            return (
              <Banner
                item={item}
               
                contentPosition={item.contentPosition}
              />
            );
          })}
        </Carousel>
      </Box>
    );
  }
}

   

export default BannerSlider;
