import React from 'react'
import Image from 'next/image';
import { useRouter } from "next/router";
import Link from 'next/link';

function Modal() {
  const router = useRouter();
  const { email } = router.query;
  const decodedEmail = email ? decodeURIComponent(email) : "";
  return (
    <div className="container  mx-auto flex justify-center items-center  my-0 sm:my-44 ">
      <div className="bg-white rounded-none sm:rounded-3xl p-0 sm:p-5 w-screen h-screen sm:h-1/2 sm:w-1/3">
        <div className="flex ">
          <div className="flex flex-col p-10 my-0 sm:my-10 text-left w-full  ">
            <div className='mt-10 sm:mt-0'>
              <Image
                src="/icon-success.svg"
                alt="success"
                width={50}
                height={50}
              />
            </div>

            <h1 className="text-3xl sm:text-6xl font-bold my-5 text-slate-800">Thanks for subscribing!</h1>
            <div className="text-sm  mt-4 w-full sm:w-11/12">
              <h1>
                A confirmation email has been sent to
                <span className='font-bold'> {decodedEmail} </span>. Please open it and click the
                button inside to confirm your subscription.
              </h1>
            </div>

            <Link
              href='/'
              className="mt-52 sm:mt-10 px-4 py-2 bg-slate-800 text-white rounded-md hover:bg-slate-600 w-full text-sm text-center"
            >
              Dismiss Message
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal