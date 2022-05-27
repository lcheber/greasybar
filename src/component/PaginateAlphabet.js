import React, { useState } from "react";

import Keyboard from "./Keyboard";

function PaginationAlphabet(props) {
  const [state, setState] = useState(
    "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("")
  );
  return (
    <>
      <Keyboard alphabet={state} action={props.action} />
    </>
  );
}

export default PaginationAlphabet;
