import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

function Form() {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setEmail(e.target.value);
    setIsValid(true); // Reset validation on each change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Simple email validation
    if (!/\S+@\S+\.\S+/.test(email)) {
      setIsValid(false);
      return;
    }

    // Email is valid, handle form submission here
    const encodedEmail = encodeURIComponent(email);
    router.push(`/modal?email=${encodedEmail}`);
  };
  return (
    <div className="bg-white rounded-none sm:rounded-3xl h-screen sm:h-full p-0 sm:p-5 ">
      <div className="flex bg-white  rounded-none sm:rounded-3xl flex-col sm:flex-row-reverse gap-5">
        <div className="hidden md:flex ">
          <Image
            src="/illustration-sign-up-desktop.svg"
            width={400}
            height={400}
            alt="img"
          />
        </div>
        <div className="flex md:hidden">
          <Image
            src="/illustration-sign-up-mobile.svg"
            width={600}
            height={400}
            alt="img"
          />
        </div>
        <div className="flex flex-col p-10 my-0 sm:my-10 text-left w-full sm:w-2/4 ">
          <div className="text-4xl sm:text-5xl text-left font-bold text-slate-800">
            <h1>Stay updated !</h1>
          </div>
          <div className="text-sm  mt-4 w-full sm:w-11/12">
            <h1>Join 60,000+ product managers receiving monthly updates on:</h1>
          </div>
          <div className="flex flex-col mt-10 gap-5">
            <div className="flex flex-row gap-4 ">
              <div>
                <Image src="icon-list.svg" alt="iconn" width={20} height={20} />
              </div>

              <div className="text-sm">
                <h1>Product discovery and building what matters</h1>
              </div>
            </div>
            <div className="flex flex-row gap-4 ">
              <div>
                <Image src="icon-list.svg" alt="iconn" width={20} height={20} />
              </div>

              <div className="text-sm">
                <h1>Measuring to ensure updates are a success</h1>
              </div>
            </div>
            <div className="flex flex-row gap-4 ">
              <div>
                <Image src="icon-list.svg" alt="iconn" width={20} height={20} />
              </div>

              <div className="text-sm">
                <h1>And much more!</h1>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <div className="flex flex-row items-center justify-between">
                  <label
                    htmlFor="email"
                    className="text-sm font-bold text-gray-700"
                  >
                    Email address
                  </label>
                  {!isValid && isSubmitted && (
                    <span className=" text-xs font-bold text-red-500">
                      Valid email required
                    </span>
                  )}
                </div>

                <input
                  type="email"
                  id="email"
                  className={`mt-1 px-4 py-2 rounded-md border  ${
                    isValid
                      ? "border-gray-300 focus:border-indigo-500"
                      : "border-red-500 focus:border-red-500"
                  }`}
                  value={email}
                  onChange={handleChange}
                  placeholder="email@company.com"
                />
              </div>

              <button
                type="submit"
                className="mt-4 px-4 py-2 bg-slate-800 text-white rounded-md hover:bg-slate-600 w-full text-sm"
              >
                Subscribe to monthly newsletter
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
