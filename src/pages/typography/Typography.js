import React from "react";
import { Grid } from "@material-ui/core";

// styles
import useStyles from "./styles";

// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import { Typography } from "../../components/Wrappers";
import { black } from "color-name";

export default function TypographyPage() {
  var classes = useStyles();

  return (
    <>
      <PageTitle title={"Patient in Focus: Monster, Cookie"}/>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Widget title="Contact Info" disableWidgetMenu>
            <div className={classes.dashedBorder}>
              <Typography>
                <Typography color="primary">First Name:</Typography>Cap'n Horatio Magellan
              </Typography>
              <Typography>
                <Typography color="primary">Last Name:</Typography>Crunch
              </Typography>
              <Typography>
                <Typography color="primary">Preferred Name:</Typography>Cookie Monster
              </Typography>
              <Typography>
                <Typography color="primary">Sex:</Typography>Male
              </Typography>
              <Typography>
                <Typography color="primary">Age:</Typography>47
              </Typography>
              <Typography>
                <Typography color="primary">Date of Birth:</Typography>Nov. 2, 1973
              </Typography>
              <Typography>
                <Typography color="primary">Primary Residence:</Typography>123 Sesame Street
              </Typography>
              <Typography>
                <Typography color="primary">Primary Number:</Typography>123-4567
              </Typography>
              <Typography>
                <Typography color="primary">Emergency Contact Name:</Typography>Elmo
              </Typography>
              <Typography>
                <Typography color="primary">Emergency Contact Primary Number:</Typography>333-3333
              </Typography>
            </div>
          </Widget>
        </Grid>
        <Grid item xs={12} md={6}>
          <Widget title="History" disableWidgetMenu>
            <div className={classes.dashedBorder}>
              <Typography>
                <Typography color="primary">Height:</Typography>38"
              </Typography>
              <Typography>
                <Typography color="primary">Current Body Weight:</Typography>40 kg
              </Typography>
              <Typography>
                <Typography color="primary">Blood Type:</Typography>A-
              </Typography>
              <Typography>
                <Typography color="primary">Diet Restriction:</Typography>No fruits or vegetables
              </Typography>
              <Typography>
                <Typography color="primary">Religion:</Typography>Cookie Cult
              </Typography>
              <Typography>
                <Typography color="primary">Past Medical History:</Typography>Binge eating disorder, diabetes mellitus
                type II
              </Typography>
              <Typography>
                <Typography color="primary">Surgical History:</Typography>Surgical History: Gastric bypass (est. July
                2010)
              </Typography>
              <Typography>
                <Typography color="primary">Current Medications:</Typography>Metformin 850mg OD with meal
              </Typography>
              {/*              <Typography variant="h1" color="primary" className={classes.text}>
                h1. Heading
              </Typography>
              <Typography variant="h2" color="success" className={classes.text}>
                h2. Heading
              </Typography>
              <Typography
                variant="h3"
                color="secondary"
                className={classes.text}
              >
                h3. Heading
              </Typography>
              <Typography variant="h4" color="warning" className={classes.text}>
                h4. Heading
              </Typography>
              <Typography
                variant="h5"
                color="primary"
                colorBrightness="light"
                className={classes.text}
              >
                h5. Heading
              </Typography>
              <Typography variant="h6" color="info">
                h6. Heading
              </Typography>*/}
            </div>
          </Widget>
        </Grid>
        <Grid item xs={12} md={6}>
          <Widget title="Care Team" disableWidgetMenu>
            <div className={classes.dashedBorder}>
              <Typography>
                <Typography color="primary">General Physician:</Typography>Dr. Theodor Seuss
              </Typography>
              <Typography>
                <Typography color="primary">Most Responsible Provider:</Typography>Dr. Derek Shepherd
              </Typography>
              <Typography>
                <Typography color="primary">Primary RN:</Typography>Eli Lloyd
              </Typography>
              {/*             <Typography className={classes.text}>Basic text</Typography>
              <Typography className={classes.text} weight="light">
                Basic light text
              </Typography>
              <Typography className={classes.text} weight="medium">
                Basic medium text
              </Typography>
              <Typography className={classes.text} weight="bold">
                Basic bold text
              </Typography>
              <Typography className={classes.text}>
                BASIC UPPERCASE TEXT
              </Typography>
              <Typography className={classes.text}>
                basic lowercase text
              </Typography>
              <Typography className={classes.text}>
                Basic Capitalized Text
              </Typography>
              <Typography>
                <i>Basic Cursive Text</i>
              </Typography>*/}
            </div>
          </Widget>
        </Grid>
        <Grid item xs={12} md={6}>
          <Widget title="Advisory" disableWidgetMenu>
            <div className={classes.dashedBorder}>
              <Typography>
                <Typography color="primary">Allergies:</Typography>Fruits and vegetables
              </Typography>
              <Typography>
                <Typography color="primary">Alerts:</Typography>Flight risk
              </Typography>
              <Typography>
                <Typography color="primary">Code Status:</Typography>DNR M3
              </Typography>
 {/*             <Typography className={classes.text} size="sm">
                Heading Typography SM Font Size
              </Typography>
              <Typography className={classes.text}>
                Heading Typography Regular Font Size
              </Typography>
              <Typography className={classes.text} size="md">
                Heading Typography MD Font Size
              </Typography>
              <Typography className={classes.text} size="xl">
                Heading Typography XL Font Size
              </Typography>
              <Typography className={classes.text} size="xxl">
                Heading Typography XXL Font Size
              </Typography>*/}
            </div>
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}
