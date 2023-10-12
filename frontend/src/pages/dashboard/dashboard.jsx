import React from "react";
import { styled } from "@mui/system";
import SideBar from "./SideBar/SideBar";
import FreindsSideBar from "./FreindsSideBar/FriendsSideBar";
import Messanger from "./Messanger/Messanger";
import AppBar from "./AppBar/AppBar";
const Wrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
});

const Dashboard = () => {
  return (
    <Wrapper>
      <SideBar />
      <FreindsSideBar />
      <Messanger />
      <AppBar />
    </Wrapper>
  );
};

export default Dashboard;
