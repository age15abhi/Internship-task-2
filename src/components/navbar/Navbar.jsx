import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineQuestion } from "react-icons/ai";
import { FiEye } from "react-icons/fi";
import { RiShutDownLine } from "react-icons/ri";

import Container from "../Container";
import Logo from "./Logo";
import List from "./List";
import { Link } from "react-router-dom";
import Modal from "../Modal";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className=" w-full bg-gradient-to-l from-blue-400 to-emerald-400 z-10 shadow-sm">
        <div
          className="
        py-4
        border-b-[1px]"
        >
          <Container>
            <div
              className="
                  flex
                  flex-row 
                  items-center
                  justify-between
                  gap-3
                  md:gap-0
                  "
            >
              {/* home and lists */}
              <div className="flex space-x-4 items-center">
                {/* logo */}
                <Link to="/">
                  <Logo />
                </Link>

                {/* List */}
                <List title="Create course">
                  <AiOutlinePlus />
                </List>
                <List title="Preview home page">
                  <FiEye />
                </List>
                <List title="Preview after login page">
                  <FiEye />
                </List>
                <List title="View welcome screen">
                  <RiShutDownLine />
                </List>
                <button
                  onClick={() => setShowModal(true)}
                  className="rounded-lg px-2 w-28 h-10 py-2 bg-gradient-to-r from-sky-500 to-blue-700 text-black shadow-md hover:opacity-80 hover:text-white"
                >
                  Invite
                </button>
              </div>
              {/* help section */}
              <div className="flex flex-row items-center gap-2">
                <div className="rounded-full p-1 bg-primary text-white">
                  <AiOutlineQuestion />
                </div>
                <h1>Help</h1>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default Navbar;
