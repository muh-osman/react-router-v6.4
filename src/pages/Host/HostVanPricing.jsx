import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanPricing() {
  const { currentVan } = useOutletContext();
  return (
    <h3 className="host-van-price" style={{ fontSize: "24px" }}>
      ${currentVan.price}
      <span style={{ textDecoration: "none" }}>/day</span>
    </h3>
  );
}
