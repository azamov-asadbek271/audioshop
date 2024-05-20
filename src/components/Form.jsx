import React from "react";
import FormInput from "./FormInput";

function Form() {
  return (
    <div className="bg-slate-200 flex flex-col gap-5 p-10 rounded-xl">
      <h3 className="h3-sty mb-10">CHECKOUT</h3>
      <p className="text-[#D87D4A] sub-title-sty capitalize">BILLING DETAILS</p>
      <div className="billing flex flex-wrap gap-4 mb-10">
        <FormInput
          name="Name"
          label="Name"
          type="text"
          placeholder="Alexei Ward"
        />
        <FormInput
          name="Email"
          label="Email"
          type="Email"
          placeholder="alexei@mail.com"
        />
        <FormInput
          name="phone"
          label="Phone Number"
          type="tel"
          placeholder="+1 202-555-0136"
        />
      </div>
      <p className="text-[#D87D4A] sub-title-sty capitalize">SHIPPING INFO</p>
      <div className="billing flex flex-wrap gap-4 mb-10">
        <FormInput
          name="Address"
          label="Address"
          type="Address"
          placeholder="1137 Williams Avenue"
        />
        <FormInput
          name=" Code"
          label="ZIP Code"
          type="text"
          placeholder="10001"
        />
        <FormInput
          name=" City"
          label="City"
          type="text"
          placeholder="Farg'ona"
        />
        <FormInput
          name=" Country"
          label="Country"
          type="text"
          placeholder="Uzbekistan"
        />
      </div>
    </div>
  );
}

export default Form;
