import React, { useState } from "react";
import { Grid, TextField } from "@material-ui/core";
import { Close as CloseIcon } from "@material-ui/icons";
import { ToastContainer, toast } from "react-toastify";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import classnames from "classnames";

// styles
import "react-toastify/dist/ReactToastify.css";
import useStyles from "./styles";

// components
import Widget from "../../components/Widget/Widget";
import PageTitle from "../../components/PageTitle/PageTitle";
import Notification from "../../components/Notification";
import { Typography, Button } from "../../components/Wrappers/Wrappers";



//###########################################
import MUIDataTable from "mui-datatables";
import Table from "../dashboard/components/Table/Table";

// data
import mock from "../dashboard/mock";

const datatableData = [
  ["Joe James", "2019-10-4", "2022-6-20", "Pending"],
  ["John Walsh", "2019-12-27", "2024-6-23", "Active"],
  ["Bob Herm", "2020-4-21", "2022-5-11", "Inactive"],
  ["James Houston", "2021-7-17", "2025-11-23", "Pending"],
  ["Prabhakar Linwood", "2015-6-15", "2021-7-26", "Active"],
  ["Kaui Ignace", "2016-5-7", "2026-11-10", "Inactive"],
  ["Esperanza Susanne", "2018-1-12", "2026-11-6", "Cancelled"],
  ["Christian Birgitte", "2018-5-28", "2023-10-16", "Active"]
];

//####################################################

const positions = [
  toast.POSITION.TOP_LEFT,
  toast.POSITION.TOP_CENTER,
  toast.POSITION.TOP_RIGHT,
  toast.POSITION.BOTTOM_LEFT,
  toast.POSITION.BOTTOM_CENTER,
  toast.POSITION.BOTTOM_RIGHT,
];

export default function NotificationsPage(props) {
  var classes = useStyles();

  // local
  var [notificationsPosition, setNotificationPosition] = useState(2);
  var [errorToastId, setErrorToastId] = useState(null);

  return (
    <>
      <PageTitle title="Patient Orders" />
      <Grid container spacing={4}>
        <ToastContainer
          className={classes.toastsContainer}
          closeButton={
            <CloseButton className={classes.notificationCloseButton} />
          }
          closeOnClick={false}
          progressClassName={classes.notificationProgress}
        />
        
        <Grid item xs={12}>
        <MUIDataTable
            title="Employee List"
            data={datatableData}
            columns={["Order Information", "Date Issued", "Ending Date", "Status"]}
            options={{
              filterType: "checkbox",
            }}
          />
        </Grid>

        

        <Grid item xs={12}>
        <Widget title="New Order Entry" disableWidgetMenu>
            <div className={classes.layoutContainer}>
            <input type="text" placeholder="Input order" id="myInput" width="2400" height="170"></input>
           
         

            <Button
                variant="contained"
                color="success"
                onClick={() => handleNotificationCall("success")}
                className={classnames(classes.notificationCallButton)}
              >
                Confirm Order 
              </Button>
        </div>
        </Widget>
        </Grid>

      </Grid>
    </>
  ); 

  // #############################################################
  function sendNotification(componentProps, options) {
    return toast(
      <Notification
        {...componentProps}
        className={classes.notificationComponent}
      />,
      options,
    );
  }

  function retryErrorNotification() {
    var componentProps = {
      type: "message",
      message: "Message was sent successfully!",
      variant: "contained",
      color: "success",
    };
    toast.update(errorToastId, {
      render: <Notification {...componentProps} />,
      type: "success",
    });
    setErrorToastId(null);
  }

  function handleNotificationCall(notificationType) {
    var componentProps;

    if (errorToastId && notificationType === "error") return;

    switch (notificationType) {
      case "info":
        componentProps = {
          type: "feedback",
          message: "New user feedback received",
          variant: "contained",
          color: "primary",
        };
        break;
      case "error":
        componentProps = {
          type: "message",
          message: "Message was not sent!",
          variant: "contained",
          color: "secondary",
          extraButton: "Resend",
          extraButtonClick: retryErrorNotification,
        };
        break;
      default:
        componentProps = {
          type: "shipped",
          message: "The order was confirmed!",
          variant: "contained",
          color: "success",
        };
    }

    var toastId = sendNotification(componentProps, {
      type: notificationType,
      position: positions[notificationsPosition],
      progressClassName: classes.progress,
      onClose: notificationType === "error" && (() => setErrorToastId(null)),
      className: classes.notification,
    });

    if (notificationType === "error") setErrorToastId(toastId);
  }

  function changeNotificationPosition(positionId) {
    setNotificationPosition(positionId);
  }
}

// #############################################################
function CloseButton({ closeToast, className }) {
  return <CloseIcon className={className} onClick={closeToast} />;
}