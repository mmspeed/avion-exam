import React from "react";

const JoinInput = () => {
  return (
    <div>
      <div className="text-center bg-slate-200">
        <h1 className="font-normal text-4xl pt-10 pb-2">
          Join the club and get the benefits
        </h1>
        <p className="font-normal text-base mb-10">
          Sign up for our newsletter and receive exclusive offers on new ranges,
          sales, pop up stores and more
        </p>
        <input
          className="border py-3 pl-3"
          type="text"
          placeholder="your@email.com"
        />
        <input
          className="mb-10 py-3 cursor-pointer px-5 bg-blue-950 text-white"
          type="submit"
          value="Sign Up"
        />
      </div>
    </div>
  );
};

export default JoinInput;
