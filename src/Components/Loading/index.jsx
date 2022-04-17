import React from "react";
import { Watch } from "react-loader-spinner";

export default function Loading() {
  return (
    <>
      <Watch color="#000" height={80} width={80} ariaLabel="Carregando!" />
    </>
  );
}
