import React, { useState } from "react";
import styled from "styled-components";
import attachlogo from "../assets/paperclip.svg";

export default function CardListItem({ user }) {
  console.log("Hi am called");

  return (
    <Card>
      <UserInfo>
        <UserImage style={{ backgroundImage: `url(${user.avatar})` }} />
        <Userdetails>
          <Userhead> {user.first_name + " " + user.last_name}</Userhead>
          <Texter> {user.email}</Texter>
        </Userdetails>
      </UserInfo>

      <UserProject>
        <Projecthead>Project Brief</Projecthead>
        <ProjectText>
          Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor
          sit amet Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do
        </ProjectText>
      </UserProject>

      <AttachmentDiv>
        <AttachLogo></AttachLogo>
        <Texter>15m Ago</Texter>
      </AttachmentDiv>
    </Card>
  );
}

const Card = styled.div`
  border: 1px solid red;
  height: 300px;
  width: 250px;
  margin: 30px;
  position: relative;
  border: 1px solid #00a1ea;
  box-shadow: 2px 4px 5px 10px rgba(0, 161, 234, 0.5);
  transform: translate(0px, 0px);
  transition: all 1s;
  &:hover {
    transform: translate(5px, 10px);
  }
`;

const UserImage = styled.div`
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 50px;
  width: 60px;
  border-radius: 20px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin: 16px;
`;

const Userdetails = styled.div`
  font-size: 12px;
  margin: 10px;
`;

const Texter = styled.div`
  margin-right: 10px;
  font-size: 10px;
  color: #abaeb3;
`;

const Userhead = styled.div`
  margin: 0px;
  font-size: 14px;
`;

const UserProject = styled.div`
  margin: 16px;
`;

const Projecthead = styled.div`
  font-size: 18px;
  font-weight: 400px;
  margin-top: 10px;
`;

const ProjectText = styled.div`
  font-size: 12px;
  margin: 10px;
`;

const AttachmentDiv = styled.div`
  position: absolute;
  bottom: 0;
  border: 1px solid #d9dbda;
  height: 30px;
  width: 99%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #d9dbda;
`;

const AttachLogo = styled.div`
  background-image: url(${attachlogo});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 20px;
  width: 20px;
  margin-left: 10px;
`;
