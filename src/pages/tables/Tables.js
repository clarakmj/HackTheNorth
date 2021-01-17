import React, { useState } from "react";
import { Button, CircularProgress, Fade, Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MUIDataTable from "mui-datatables";

// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import Table from "../dashboard/components/Table/Table";

// data
import mock from "../dashboard/mock";
import { Typography } from "../../components/Wrappers";
import { loginUser } from "../../context/UserContext";

const datatableData = [
  ["Joe James", "Example Inc.", "Yonkers", "NY"],
  ["John Walsh", "Example Inc.", "Hartford", "CT"],
  ["Bob Herm", "Example Inc.", "Tampa", "FL"],
  ["James Houston", "Example Inc.", "Dallas", "TX"],
  ["Prabhakar Linwood", "Example Inc.", "Hartford", "CT"],
  ["Kaui Ignace", "Example Inc.", "Yonkers", "NY"],
  ["Esperanza Susanne", "Example Inc.", "Hartford", "CT"],
  ["Christian Birgitte", "Example Inc.", "Tampa", "FL"],
  ["Meral Elias", "Example Inc.", "Hartford", "CT"],
  ["Deep Pau", "Example Inc.", "Yonkers", "NY"],
  ["Sebastiana Hani", "Example Inc.", "Dallas", "TX"],
  ["Marciano Oihana", "Example Inc.", "Yonkers", "NY"],
  ["Brigid Ankur", "Example Inc.", "Dallas", "TX"],
  ["Anna Siranush", "Example Inc.", "Yonkers", "NY"],
  ["Avram Sylva", "Example Inc.", "Hartford", "CT"],
  ["Serafima Babatunde", "Example Inc.", "Tampa", "FL"],
  ["Gaston Festus", "Example Inc.", "Tampa", "FL"],
];

const useStyles = makeStyles(theme => ({
  tableOverflow: {
    overflow: 'auto'
  }
}))

export default function Tables() {
  var [firstNameValue, setFirstNameValue] = useState("");
  var [lastNameValue, setLastNameValue] = useState("");
  var [birthday, setBirthday] = useState("");
  var [sex, setSex] = useState("");
  var [phone, setPhone] = useState("");
  var [healthNumberValue, setHealthNumberValue] = useState("");
  var [reasonForVisit, setReasonForVisit] = useState("");
  var [admittingDx, setAdmittingDx] = useState("");
  var [admittingUnit, setAdmittingUnit] = useState("");
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
  }

  const classes = useStyles();
  return (
    <>
      <PageTitle title="Admission" />
      {/*<Grid container spacing={2}>*/}
        <Widget title="Admit New Patient" disableWidgetMenu>
          <div className={classes.dashedBorder}>

            <React.Fragment>
              <div className={classes.formDividerContainer}>
                <div className={classes.formDivider} />
                {/*<Typography className={classes.formDividerWord}>or</Typography>*/}
                <div className={classes.formDivider} />
              </div>
              <form >First Name
              <TextField
                id="email"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={firstNameValue}
                onChange={e => setFirstNameValue(e.target.value)}
                margin="normal"
                type="firstName"
                fullWidth
              />
              </form>
              <form >Last Name
                <TextField
                  id="email"
                  InputProps={{
                    classes: {
                      underline: classes.textFieldUnderline,
                      input: classes.textField,
                    },
                  }}
                  value={lastNameValue}
                  onChange={e => setLastNameValue(e.target.value)}
                  margin="normal"
                  type="firstName"
                  fullWidth
                />
              </form>
              <form >Date of Birth
                <TextField
                  id="email"
                  InputProps={{
                    classes: {
                      underline: classes.textFieldUnderline,
                      input: classes.textField,
                    },
                  }}
                  value={birthday}
                  onChange={e => setBirthday(e.target.value)}
                  margin="normal"
                  type="firstName"
                  fullWidth
                />
              </form>
              <form >Sex
                <TextField
                  id="email"
                  InputProps={{
                    classes: {
                      underline: classes.textFieldUnderline,
                      input: classes.textField,
                    },
                  }}
                  value={sex}
                  onChange={e => setSex(e.target.value)}
                  margin="normal"
                  type="firstName"
                  fullWidth
                />
              </form>
              <form >Primary Phone Number
                <TextField
                  id="email"
                  InputProps={{
                    classes: {
                      underline: classes.textFieldUnderline,
                      input: classes.textField,
                    },
                  }}
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  margin="normal"
                  type="firstName"
                  fullWidth
                />
              </form>
              <form >Personal Health Number
                <TextField
                  id="email"
                  InputProps={{
                    classes: {
                      underline: classes.textFieldUnderline,
                      input: classes.textField,
                    },
                  }}
                  value={healthNumberValue}
                  onChange={e => setHealthNumberValue(e.target.value)}
                  margin="normal"
                  type="firstName"
                  fullWidth
                />
              </form>
              <form >Reason for Visit
                <TextField
                  id="email"
                  InputProps={{
                    classes: {
                      underline: classes.textFieldUnderline,
                      input: classes.textField,
                    },
                  }}
                  value={reasonForVisit}
                  onChange={e => setReasonForVisit(e.target.value)}
                  margin="normal"
                  type="firstName"
                  fullWidth
                />
              </form>
              <form >Admitting Diagnosis
                <TextField
                  id="email"
                  InputProps={{
                    classes: {
                      underline: classes.textFieldUnderline,
                      input: classes.textField,
                    },
                  }}
                  value={admittingDx}
                  onChange={e => setAdmittingDx(e.target.value)}
                  margin="normal"
                  type="firstName"
                  fullWidth
                />
              </form>
              <form >Admitting Unit
                <TextField
                  id="email"
                  InputProps={{
                    classes: {
                      underline: classes.textFieldUnderline,
                      input: classes.textField,
                    },
                  }}
                  value={admittingUnit}
                  onChange={e => setAdmittingUnit(e.target.value)}
                  margin="normal"
                  type="firstName"
                  fullWidth
                />
              </form>
              <div className={classes.formButtons}>
                <Button
                  color="primary"
                  size="large"
                  className={classes.forgetButton}
                >
                  Admit
                </Button>
              </div>
            </React.Fragment>
          </div>
        </Widget>
  {/*      <Grid item xs={12}>
          <MUIDataTable
            title="New Admission"
            // data={datatableData}
            // columns={["Name", "Company", "City", "State"]}
            options={{
              filterType: "form",
            }}
          />

        </Grid>*/}
        {/*<Grid item xs={12}>
          <Widget title="Material-UI Table" upperTitle noBodyPadding bodyClass={classes.tableOverflow}>
            <Table data={mock.table} />
          </Widget>
        </Grid>*/}

      {/*</Grid>*/}
    </>
  );
}
