import React from "react";
import Calender from "./../components/home/Calender";
import { AiOutlineUser, AiOutlinePaperClip } from "react-icons/ai";
import { FaRecycle, FaRegPaperPlane } from "react-icons/fa";
import { BsFillBagCheckFill } from "react-icons/bs";
import { BiTimeFive, BiSolidKey } from "react-icons/bi";
import { CgSandClock } from "react-icons/cg";

import NewSignUps from "./NewSignUps";
import HomeNavbar from "../components/home/HomeNavbar";
import Card from "../components/home/Card";
import SeeAllButton from "../components/home/SeeAllButton";
import ListItem from "../components/home/ListItem";
import NewUser from "../components/home/NewUser";
import TimeLeft from "../components/home/TimeLeft";
import OnlineUser from "../components/home/OnlineUser";

const liveUsers = [
  {
    id: 1,
    image: "https://cdn-icons-png.flaticon.com/128/40/40157.png",
    name: "HUBX",
  },
  {
    id: 2,
    image: "https://cdn-icons-png.flaticon.com/128/40/40157.png",
    name: "HUBX",
  },
];

const Home = () => {
  return (
    <>
      <div className=" mt-5 h-72 flex flex-row justify-between">
        {/* calender */}
        <div className=" flex flex-col  w-2/3">
          <div className="flex justify-between mx-5  mt-3">
            <Calender />
            <HomeNavbar />
          </div>
          {/* calender graph */}
          <div className="p-2 mx-5">
            <NewSignUps />
          </div>
        </div>
        {/* card */}
        <div className="flex flex-row mr-20 mb-12">
          <div className="grid grid-cols-3 gap-4 justify-center items-center text-center">
            <Card number="1" title="All users">
              <AiOutlineUser size={40} />
            </Card>

            <Card number="1" title="All users">
              <FaRecycle size={40} />
            </Card>

            <Card number="1" title="All users">
              <BsFillBagCheckFill size={40} />
            </Card>

            <Card number="1" title="All users">
              <BiTimeFive size={40} />
            </Card>

            <Card number="1" title="All users">
              <FaRegPaperPlane size={40} />
            </Card>

            <Card number="1" title="All users">
              <AiOutlinePaperClip size={40} />
            </Card>
          </div>
        </div>
      </div>

      <div className=" mx-5 mt-4  flex flex-row space-x-12">
        {/* 1st div */}
        <div className="p-2 border-2 shadow-xl rounded-lg h-fit">
          <div className=" px-3 py-1 flex flex-col">
            <div className=" flex flex-row items-center">
              <div className="rounded-full p-1 text-primary">
                <AiOutlineUser size={20} />
              </div>
              <h1 className="text-neutral-600 text-md">New User</h1>
              <SeeAllButton />
            </div>
            <NewUser />
          </div>
        </div>
        {/* 2nd div */}

        <div className=" p-2 w-1/4 flex flex-col border-2 shadow-xl rounded-lg h-fit ">
          <div className=" flex flex-row items-center">
            <div className="rounded-full p-1 text-primary">
              <img
                className="mr-1"
                src="https://imgs.search.brave.com/X-T_ZXV6ZXhH51XJ5KilIoKIZE46ZFMb0-Il_9D01nk/rs:fit:32:32:1/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNjY5NTJmZjMz/NTlhZmJkNjgwMTQz/YzQyYzU4MjFlMGRj/OWE0YjQ0MzhiMzZl/MjU0ZDViZWU1NGZi/YTRkMGFmYS93d3cu/bGVhcm53b3JsZHMu/Y29tLw"
                alt=""
              />
            </div>
            <h1 className="text-neutral-600 text-md">
              How to sell courses blog
            </h1>
            <SeeAllButton />
          </div>
          <div>
            {/* list item */}
            <ListItem />
          </div>
        </div>
        {/* 3nd div */}
        <div className=" p-2 w-1/4 flex flex-col border-2 shadow-xl rounded-lg h-fit">
          <div className=" flex flex-row items-center ">
            <div className="rounded-full p-1 text-primary">
              <img
                className="mr-1 w-8"
                src="https://www.pngarts.com/files/11/Heartbeat-PNG-Image.png"
                alt=""
              />
            </div>
            <h1 className="text-neutral-600 text-md">Event Log</h1>
            <SeeAllButton />
          </div>
          <div className="flex flex-row justify-between mx-2 mt-2">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-neutral-500">
                  <BiSolidKey />
                </span>
                <h1 className="text-primary flex  items-center gap-2">HUBX</h1>
              </div>

              <h1>Logged In</h1>
              <h1 className="text-primary">More Info</h1>
            </div>
            <h1 className="text-neutral-500">22 min</h1>
          </div>
        </div>
        {/* 4nd div */}
        <div className=" px-3 py-1  w-1/4 flex flex-col">
          {/* trial period */}
          <div className="flex flex-col border-2 shadow-xl rounded-lg h-fit p-2 ">
            <div className="flex items-center justify-between">
              <h1 className="text-md font-semibold text-neutral-600">
                Trial period
              </h1>
              <CgSandClock className="text-primary" size={50} />
            </div>
            <div className="mt-8">
              <TimeLeft />
            </div>
            <div className="justify-end flex mt-4">
              <button
                className="mb-4 mr-4 flex justify-end bg-gradient-to-r from-pink-400 to-pink-600 p-2 rounded-lg text-white
            "
              >
                Update Now! &gt;&gt;
              </button>
            </div>
          </div>
          <div className=" mt-8 flex flex-col border-2 shadow-xl rounded-lg h-fit p-2">
            <div className=" flex flex-row items-center">
              <div className="rounded-full p-1 text-primary">
                <AiOutlineUser size={20} />
              </div>
              <h1 className="text-neutral-600 text-md">
                Online Users ({liveUsers.length})
              </h1>
            </div>
            <div>
              <OnlineUser onlineUsers={liveUsers} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
