import React, { Component } from "react";
import { Box, Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { myTheme2 } from "../Theme";

class Keyboard extends Component {
  render() {
    return (
      <ThemeProvider theme={myTheme2}>
        <Box>
          {this.props.alphabet.map((letter, key) => {
            return (
              <Button
                variant="outlined"
                key={"keyboard_" + key}
                onClick={() => {
                  this.props.action(letter);
                }}
              >
                {letter}
              </Button>
            );
          })}
        </Box>
      </ThemeProvider>
    );
  }
}

export default Keyboard;
