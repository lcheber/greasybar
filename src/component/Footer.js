import React from "react";
import Box from "@mui/material/Box";
import logoUnicornKitchen12 from "./images/logoUnicornKitchen12.png";

var styleFooter = {
  backgroundColor: "#FFBF39",
  left: "0",
  width: "100vw",
  height: "15vh",
  marginTop: "40px",
  textAlign: 'center'
};

function Footer() {
  return (
    <Box variant="h6" component="div" sx={{ flexGrow: 1 }} pr={0} height={10}>
      <div style={styleFooter}>
        <br></br>
        <img src={logoUnicornKitchen12} alt="" width={120} />
        <p>
          <a> © 2022 </a>
          <a href="/">Greasybar </a>
          <span>|</span>
          <a href="MentionsLegales"> Mentions légales </a>
          <span>|</span>
          <a href="CGU"> CGU </a>
          <span>|</span>
          <a href="Contact"> Contact </a>
        </p>
      </div>
    </Box>
  );
}
export default Footer;

