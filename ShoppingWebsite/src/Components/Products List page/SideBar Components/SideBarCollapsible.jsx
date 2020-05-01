import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import List from "./List";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const ExpansionPanelDetailsEdited = withStyles({
  root: {
    padding: "0",
    borderTop: "0.065vw solid #ccc",
  },
})(ExpansionPanelDetails);

export default function SimpleExpansionPanel() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ marginBottom: "1vw" }}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{marginLeft: "-1.5vw"}}
        >
          <Typography className={classes.heading} style={{fontFamily: "shabnam"}}>برند</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetailsEdited>
          <Typography style={{width: "100%"}}>
            <List />
          </Typography>
        </ExpansionPanelDetailsEdited>
      </ExpansionPanel>
    </div>
  );
}
