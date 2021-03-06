import React, { useState } from "react";
import styled from "styled-components";
import headerim from "../assets/LOGO.png";
import axios from "axios";

export default function Header({ getData, setLoader }) {
  const getUsers = async () => {
    setLoader(true);
    const res = await axios.get("https://reqres.in/api/users?page=1");

    getData(res.data);
    setTimeout(function () {
      setLoader(false);
    }, 5000);
  };

  return (
    <Navbar>
      <HeaderImage />
      <NavbarItems>
        <NavbarItem onClick={getUsers}>Get Data</NavbarItem>
        <NavbarItem>Sent</NavbarItem>
        <NavbarItem>Draft</NavbarItem>
        <NavbarItem>Trash</NavbarItem>
        <NavbarItem>Junk</NavbarItem>
      </NavbarItems>
    </Navbar>
  );
}

const Navbar = styled.div`
  font-weight: 400;
  display: flex;
  flex-direction: row;
  background-color: #2d3d55;
  height: 80px;
  justify-content: space-between;
`;

const HeaderImage = styled.div`
  background-image: url(${headerim});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 50px;
  width: 60px;

  margin-left: 20px;
  margin-top: 6px;
  padding: 5px;
`;

const NavbarItems = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 80px;
  align-self: center;
`;

const NavbarItem = styled.div`
  color: white;
  font-weight: 900;
  font-size: 14px;
  margin-left: 40px;
  cursor: pointer;
`;
