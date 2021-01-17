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


// icons sets
import "font-awesome/css/font-awesome.min.css";

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Sector,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// components
import Widget from "../../components/Widget/Widget";
import ApexLineChart from "./components/ApexLineChart";
import ApexHeatmap from "./components/ApexHeatmap";

const lineChartData = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const pieChartData = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];


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
          <div>
            <Grid container spacing={2} className="icon-list">
            <Grid item xs={12} md={6}>
          <Widget title="Apex Line Chart" upperTitle noBodyPadding>
            <ApexLineChart />
          </Widget>
        </Grid>
        <Grid item xs={12} md={6}>
          <Widget title="Apex Heatmap" upperTitle noBodyPadding>
            <ApexHeatmap />
          </Widget>
        </Grid>
            </Grid>
          </div>
        )}

        {activeTabId === 1 && (
          <div>
            <Grid container spacing={2} className="icon-list">
              
            </Grid>
          </div>

        )}

        {activeTabId === 2 && (
          <div>
            <Grid container spacing={2} className="icon-list">
              
            </Grid>
          </div>


        )}
      </Paper>
    </>
  );
}
