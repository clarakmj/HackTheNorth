import React, { useState } from "react";
import {
  Typography,
  Grid,
  Tabs,
  Tab,
  Paper,
  Menu,
  MenuItem,
  Button,
} from "@material-ui/core";
import * as Icons from "@material-ui/icons";

// styles
import useStyles from "./styles";

// components
import PageTitle from "../../components/PageTitle/PageTitle";
import Widget from "../../components/Widget";
import classnames from "classnames";

// icons sets
import "font-awesome/css/font-awesome.min.css";
// #######################################

// import {
//   LinearProgress,
//   Select,
//   OutlinedInput,

// } from "@material-ui/core";
// import { useTheme } from "@material-ui/styles";
// import {
//   ResponsiveContainer,
//   ComposedChart,
//   AreaChart,
//   LineChart,
//   Line,
//   Area,
//   PieChart,
//   Pie,
//   Cell,
//   YAxis,
//   XAxis,
// } from "recharts";

// // components
// import mock from "./mock";
// import Widget from "../../components/Widget";
// import Dot from "../../components/Sidebar/components/Dot";
// import Table from "./components/Table/Table";
// import BigStat from "./components/BigStat/BigStat";

// const mainChartData = getMainChartData();
// const PieChartData = [
//   { name: "Group A", value: 400, color: "primary" },
//   { name: "Group B", value: 300, color: "secondary" },
//   { name: "Group C", value: 300, color: "warning" },
//   { name: "Group D", value: 200, color: "success" },
// ];


export default function IconsPage() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  var classes = useStyles();

  // local
  var [activeTabId, setActiveTabId] = useState(0);
  var classes = useStyles();
  //var theme = useTheme();

  // local
  //var [mainChartState, setMainChartState] = useState("monthly");
  

  return (
    <>
      <PageTitle title="Documentation" button={(
        <>
          <Button
            variant="contained"
            size="medium"
            color="secondary"
            onClick={e => handleClick(e)}
          >
            Actions
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}><Icons.Print style={{ marginRight: 16 }}/> Print PDF</MenuItem>
            <MenuItem onClick={handleClose}><Icons.GetApp style={{ marginRight: 16 }}/> Download</MenuItem>
            <MenuItem onClick={handleClose}><Icons.Email style={{ marginRight: 16 }}/>Send by mail</MenuItem>
            <MenuItem onClick={handleClose}><Icons.Share style={{ marginRight: 16 }}/>Share</MenuItem>
          </Menu>
        </>
      )}/>
      <Paper className={classes.iconsContainer}>
        <Tabs
          indicatorColor="primary"
          textColor="primary"
          value={activeTabId}
          onChange={(e, id) => setActiveTabId(id)}
          className={classes.iconsBar}
        >
          <Tab label="Assessment Findings" classes={{ root: classes.tab }}/>
          <Tab label="Imaging" classes={{ root: classes.tab }}/>
          <Tab label="Lab Work" classes={{ root: classes.tab }}/>
        </Tabs>
        {activeTabId === 0 && (
          
           <Grid container spacing={4}>
             <Grid item xs={12} md={6}>
              <Widget title="Patient Monster, Cookie" disableWidgetMenu>
                <div className={classes.dashedBorder}>
            {/* // ====================================================== */}
                 <Button
                 variant="contained"
                 color="success"
                 className={classnames(classes.notificationCallButton)}
                 >
                  Open Findings 
                 </Button>
        
            
                </div>
               </Widget>
            </Grid>
          </Grid>
        )}

        {activeTabId === 1 && (
          <div>
            <Grid container spacing={2} className="icon-list">
            {/* // ====================================================== */}
            <Grid container spacing={4}>
             <Grid item xs={12} md={6}>
              <Widget title="Patient Monster, Cookie" disableWidgetMenu>
                <div className={classes.dashedBorder}>
                 <Button
                 variant="contained"
                 color="success"
                 alignment="center"
                 className={classnames(classes.notificationCallButton)}
                 >
                  View CT Scan 
                 </Button>
                </div>
               </Widget>
            </Grid>
          </Grid>
            </Grid>
          </div>

        )}

        {activeTabId === 2 && (
          <div>
            <Grid container spacing={2} className="icon-list">
            {/* // ====================================================== */}
            <Grid container spacing={4}>
             <Grid item xs={12} md={6}>
              <Widget title="Patient Monster, Cookie" disableWidgetMenu>
                <div className={classes.dashedBorder}>
                 <Button
                 variant="contained"
                 color="success"
                 className={classnames(classes.notificationCallButton)}
                 >
                  View Lab Work 
                 </Button>
            
                </div>
               </Widget>
            </Grid>
          </Grid>
            </Grid>
          </div>
        )}
    
      </Paper>
          <div></div>
      <Grid item xs={12}>
        <Widget title="New Documentation Entry" disableWidgetMenu>
            <div className={classes.layoutContainer}>

            <Button
                variant="contained"
                color="success"

                className={classnames(classes.notificationCallButton)}
              >
                Confirm Entry 
              </Button>
        </div>
        </Widget>
        </Grid>
        </>
    );

  
}