import { Link, useActionData } from 'react-router-dom'
import { Form } from 'react-router-dom';
import FormInput from '../components/FormInput';
import { ImGoogle } from "react-icons/im";
import { UseRegister } from '../hook/UseRegister';
import { useEffect } from 'react';

export const action = async ({ request }) => {
  let formData = await request.formData();
  let Name = formData.get("Name");
  let Email = formData.get("Email");
  let Password = formData.get("Password");
  return { Name, Email, Password };
};


function Register() {
const { googleWithProvider,register } = UseRegister();
    const data = useActionData()
      useEffect(() => {
        if (data) {
          register(data);
        }
      }, [data]);


  return (
    <div>
      <div className="h-screen grid place-items-center bg-base-300">
        <Form className=" flex flex-col gap-y-2 " method="post">
          <div className="card w-96 p-8 bg-base-100 shadow-lg ">
            <h2 className="text-center font-bold text-3xl mb-2">Register</h2>
            {/* input */}
            <FormInput type="text" label=" Name:" name="Name" />
            <FormInput type="email" label=" Email:" name="Email" />
            <FormInput type="password" label=" Password:" name="Password" />
            {/* button */}
            <div className="mt-6">
              <button  className="btn btn-primary w-full">Register</button>
            </div>
            <button onClick={googleWithProvider} type='button' className="btn btn-secondary mt-4 ">
              <ImGoogle className="text-2xl" />
              <span className="text-xl">Google</span>
            </button>
            <p className="text-center mt-3">
              Not a memeber yet ?
              <Link to="/login" className="capitalize link-primary">
                Login
              </Link>
            </p>
          </div>
        </Form>
      </div>
      <Link to="/">home</Link>
    </div>
  );
}

export default Register