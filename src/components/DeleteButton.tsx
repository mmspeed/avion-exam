import React from "react";

const DeleteComponent = ({ onDelete }) => {
  const handleDelete = () => {
    onDelete();
  };
  return (
    <div>
      <div className="bg-blue-950 text-white p-3 container mx-auto px-12 flex items-center justify-between">
        <h1 className="text-sm font-normal text-center">
          Free delivery on all orders over £50 with code easter checkout
        </h1>
        <button className="text-xl" onClick={handleDelete}>
          x
        </button>
      </div>
    </div>
  );
};

export default DeleteComponent;
