import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export function CompleteProfile() {
  //   const [avatar, setAvatar] = useState("");
  const [bio, setBio] = useState("");
  // const [name, setName] = useState("");
  const navigate = useNavigate();

  // useEffect(() => {
  //   async function fetchUserData() {
  //     try {
  //       const token = localStorage.getItem("token");
  //       if (!token) {
  //         console.log("token not found");
  //         return;
  //       }
  //       const response = await axios.get<{ name: string }>(
  //         `${BACKEND_URL}/api/v1/user`,
  //         {
  //           headers: { Authorization: token },
  //         }
  //       );
  //       setName(response.data.name);
  //     } catch (error) {
  //       console.error("Error fetching user data", error);
  //     }
  //   }
  //   fetchUserData();
  // }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("handleSubmit called")
    try {
      const token = localStorage.getItem("token");
      console.log(token)
      if (!token) {
        console.log("error while fetching the token");
        return;
      }

      await axios.post(
        `${BACKEND_URL}/api/v1/user/complete-profile`,
        { bio },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      navigate("/blogs");
    } catch (error) {
      console.error("Error completing profile: ", error);
    }
  }

  function handleSkip() {
    navigate("/blogs");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-500">
      <div className="w-[600px] bg-neutral-700 border-2 border-orange-600 rounded-lg shadow pt-4 shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="">
            <div className="flex flex-col items-center pb-10">
              <div className="flex flex-col items-center pb-10">
                {/* <CompAvatar name={name} /> */}
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  {/* {name} */}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Author
                </span>
                <div className="flex flex-col mt-4 md:mt-6 w-full max-w-xs">
                  <textarea
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    className="w-full mb-4 px-3 py-2 border rounded-lg resize-y min-h-[100px]"
                    placeholder="lol"
                  />
                  <button
                    type="submit"
                    className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                  >
                    submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <button onClick={handleSkip}
      className="absolute bottom-4 right-4 text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 text-center" >Skip</button>
    </div>
  );
}

function CompAvatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .filter((word) => word.length > 0)
    .map((word) => word[0].toUpperCase())
    .slice(0, 2)
    .join("");
  return (
    <div
      className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-300 dark:bg-gray-600 rounded-full border-2 border-orange-600  w-24 h-24`}
    >
      <span className={` font-extralight text-gray-600 dark:text-gray-300`}>
        {initials}
      </span>
    </div>
  );
}
