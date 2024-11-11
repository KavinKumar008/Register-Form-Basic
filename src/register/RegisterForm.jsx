import React from "react";
import home from "../assets/register.jpg";

const RegisterForm = () => {
  console.log(home);
  return (
    <main className="flex">
      <section className="w-4/5 h-screen  flex flex-col justify-center items-center bg-slate-200">
        <div className="">
          <h3 className="text-lg font-bold">Register</h3>
          <p className="text-sm text-gray-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            repellat.
          </p>
          {/* </section> */}
          {/* <section> */}
          <div className=" flex flex-col gap-3">
            <div className="flex gap-10 ">
              <label htmlFor="fname">
                <p>First Name</p>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  className="pt-3 px-4"
                />
              </label>
              <label htmlFor="lname">
                <p>Last Name</p>
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  className="pt-3 px-4"
                />
              </label>
            </div>
            <div>
              <label htmlFor="email">
                <p>Email Address</p>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full pt-3"
                />
              </label>
            </div>
            <div className="flex gap-10 ">
              <label htmlFor="phone">
                <p>Phone Number</p>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="pt-3 px-4"
                />
              </label>
              <label htmlFor="website">
                <p>Website</p>
                <input
                  type="text"
                  id="website"
                  name="website"
                  className="pt-3 px-4"
                />
              </label>
            </div>
            <div className="flex gap-10">
              <label htmlFor="pass">
                <p>Password</p>
                <input
                  type="password"
                  id="pass"
                  name="pass"
                  className="pt-3 px-4"
                />
              </label>
              <label htmlFor="repass">
                <p>Re-type Password</p>
                <input
                  type="password"
                  id="repass"
                  name="repass"
                  className="pt-3 px-4"
                />
              </label>
            </div>
          </div>
          {/* </section> */}
          {/* <section> */}
          <p className="py-4 text-sm">
            Creating an account means you are ok with our
            <a href="#" className=" underline">
              Terms and conditions
            </a>
            and
            <a href="#" className="underline ">
              Privacy Policy.
            </a>
          </p>
          <button
            type="button"
            className="mt-4 bg-orange-600 text-white px-4 py-2 rounded-md font-bold"
          >
            Register
          </button>
        </div>
      </section>
      <section
        style={{ backgroundImage: `url(${home})` }}
        className="w-1/5 bg-cover bg-no-repeat"
      >
        kavin
      </section>
    </main>
  );
};

export default RegisterForm;
