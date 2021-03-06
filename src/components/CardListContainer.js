import React, { useState, useEffect } from "react";
import CardListItem from "./CardListItem";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import styled from "styled-components";

export default function CardListContainer({ usersFinal, loadingstate }) {
  if (loadingstate === true) {
    return (
      <Main
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 200,
        }}
      >
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          //3 secs
        />
      </Main>
    );
  }
  //typeof usersFinal === "undefined" ||
  else if (typeof usersFinal === "undefined") {
    return <Main></Main>;
  } else {
    return (
      <Main>
        {usersFinal.map((item, index) => (
          <CardListItem user={item} key={index} />
        ))}
      </Main>
    );
  }
}

const Main = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
