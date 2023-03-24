import React from "react";
import { Typography ,Grid} from "@mui/material";
import DailyActivities from "./DailyActivities";



const Process = () => {
     return( <Grid sx={{padding:"10% 0"}}>
        <Typography variant="h1" sx={{textAlign:"center"}}>How it works ?</Typography>
        <DailyActivities/>
      </Grid>
     );
}


export default Process;