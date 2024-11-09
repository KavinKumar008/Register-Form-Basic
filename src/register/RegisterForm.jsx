import React from "react";

const RegisterForm = () => {
  return (
    <main>
      <section className="w-4/5 h-screen border-2 border-green-400 flex flex-col justify-center items-center bg-slate-300">
        <div>
          <h3>Register</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            repellat.
          </p>
        </div>
        {/* </section> */}
        {/* <section> */}
        <div>
          <label htmlFor="fname">
            First Name
            <input type="text" id="fname" name="fname" />
          </label>
          <label htmlFor="lname">
            Last Name
            <input type="text" id="lname" name="lname" />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            Email Address
            <input type="email" id="email" name="email" />
          </label>
        </div>
        <div>
          <label htmlFor="phone">
            Phone Number
            <input type="tel" id="phone" name="phone" />
          </label>
          <label htmlFor="website">
            Website
            <input type="text" id="website" name="website" />
          </label>
        </div>
        <div>
          <label htmlFor="pass">
            Password
            <input type="password" id="pass" name="pass" />
          </label>
          <label htmlFor="repass">
            Re-type Password
            <input type="password" id="repass" name="repass" />
          </label>
        </div>
        {/* </section> */}
        {/* <section> */}
        <p>
          Creating an account means you are ok with our
          <a href="#">Terms and conditions</a>
          and
          <a href="#">Privacy Policy</a>
        </p>
        <button type="button">Register</button>
      </section>
      <section></section>
    </main>
  );
};

export default RegisterForm;
