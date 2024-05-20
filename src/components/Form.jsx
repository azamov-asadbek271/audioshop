import React from 'react'
import FormInput from './FormInput';

function Form() {
  return (
    <div className="bg-slate-200 flex flex-col gap-5 p-10 rounded-xl">
      <h3 className="h3-sty mb-10">CHECKOUT</h3>
      <p className="text-[#D87D4A] sub-title-sty capitalize">Billing Details</p>
      <div className="billing flex flex-wrap gap-4">
        <FormInput name="Name" label="Name" type="text" />
        <FormInput name="Email" label="Email" type="Email" />
        <FormInput name="phone" label="Phone Number" type="tel" />
      </div>
    </div>
  );
}

export default Form