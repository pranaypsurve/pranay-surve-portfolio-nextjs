"use client";
import React from "react";
import { Triangle } from "react-loader-spinner";
function loading() {
  return (
    <Triangle
      height="100vh"
      width="100vw"
      color="#4fa94d"
      ariaLabel="triangle-loading"
      wrapperStyle={{}}
      visible={true}
    />
  );
}

export default loading;
