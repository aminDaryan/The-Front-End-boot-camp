import React, { Component } from "react";
import SideBarCollapsible from "./SideBarCollapsible";
import ToggleBar from "./ToggleBar";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#f0b90b",
    },
  },
});

export default class SideBar extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <SideBarCollapsible />
          <ToggleBar />
        </MuiThemeProvider>
      </div>
    );
  }
}
