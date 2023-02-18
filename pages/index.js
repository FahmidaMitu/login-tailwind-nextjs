import Head from 'next/head';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGoogle,
  FaRegEnvelope,
} from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex=col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-3/5 p-5">
            <div className="text-left font-bold">
              <span className="text-green-500">Website</span>Name
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold text-green-500 mb-2">
                Sign in to Account
              </h2>
              <div className="border-2 w-16 border-green-500 inline-block mb-2"></div>
              <div className="flex justify-center my-2">
                <a
                  href=""
                  className="border-2 rounded-full border color-gray-200 p-3 mx-1 hover:bg-green-500"
                >
                  <FaFacebookF className="text-sm"></FaFacebookF>
                </a>
                <a
                  href=""
                  className="border-2 rounded-full border color-gray-200 p-3 mx-1 hover:bg-green-500"
                >
                  <FaLinkedinIn className="text-sm"></FaLinkedinIn>
                </a>
                <a
                  href=""
                  className="border-2 rounded-full border color-gray-200 p-3 mx-1 hover:bg-green-500"
                >
                  <FaGoogle className="text-sm"></FaGoogle>
                </a>
              </div>
              <p className="text-gray-400">or use your email account</p>
              <div className="flex flex-col items-center ">
                <div className="bg-gray-200 w-64 p-2 flex items-center">
                  <FaRegEnvelope className="text-gray-500 m-2" />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="bg-gray-200 outline-none text-sm flex-1"
                  />
                </div>
                <div className="bg-gray-200 w-64 p-2 flex items-center m-3">
                  <MdLockOutline className="text-gray-500 m-2" />

                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="bg-gray-200 outline-none text-sm flex-1"
                  />
                </div>
                <div className="flex w-64 mb-5 justify-between">
                  <label className="flex items-center text-xs">
                    <input type="checkbox" name="remember" className="m-1" />
                    Remember me
                  </label>
                  <a href="#" className="text-xs">
                    Forgot password?
                  </a>
                </div>
                <a
                  href="#"
                  className="border-2 border-green-400 text-green-400 rounded-full px-8 py-2 inline-block font-semibold hover:bg-green-400 hover:text-white"
                >
                  Sign In
                </a>
              </div>
            </div>
          </div>
          <div className="w-3/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            <h1 className="text-3xl font-bold">Hello, Dear!</h1>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="m-2 p-2">
              Fill up personal information to get registered
            </p>
            <a
              href="#"
              className="border-2 border-white rounded-full px-8 py-2 inline-block font-semibold hover:bg-white hover:text-green-500 text-white"
            >
              Sign Up
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
