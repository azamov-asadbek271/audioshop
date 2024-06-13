import React from "react";
import Form from "../components/Form";
import Continyu from "../components/Continyu";

function Checkout() {
  return (
    <div className="con-align ">
      <p className="para-sty mt-10 mb-10">Go Back</p>

      <div className="flex flex-grow gap-5">
        <Form />
        <Continyu />
      </div>
    </div>
  );
}

export default Checkout;
