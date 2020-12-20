import React from "react";
import Button from "../../components/Button";
import Layout from "../../components/Layout";

export default function Login() {
  return (
    <Layout title="Login">
      <div className="container">
        <div className="flex">
          <div className="w-full lg:w-1/3">
            <div className="p-4 bg-gray-50 border rounded-lg">
              <form>
                <div className="mb-5">
                  <label className="block mb-2 text-sm">Email</label>
                  <input
                    type="email"
                    className="w-full border shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-100 transition duration-200 rounded-lg h-10 focus:outline-none px-3"
                  />
                </div>

                <div className="mb-5">
                  <label className="block mb-2 text-sm">Gender</label>

                  <select className="w-full border shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-100 transition duration-200 rounded-lg h-10 focus:outline-none px-3">
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>

                <Button.Primary>Login</Button.Primary>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
