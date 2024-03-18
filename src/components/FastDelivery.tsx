"use client";

import React, { useState } from "react";
import DeleteButton from "./DeleteButton";

const FastDelivery = () => {
  const [isContentVisible, setContentVisible] = useState(true);
  const handleDelete = () => {
    setContentVisible(false);
  };
  return (
    <div>
      {isContentVisible && <DeleteButton onDelete={handleDelete} />}
    </div>
  );
};

export default FastDelivery;
