import React from "react";
import AddBlockForm from "../AddBlockForm";
import "./style.scss";

const ActiveCategory = ({ active, handleAdd }) => {
  return (
    <div className="active_category">
      <div className="name">
        {active.category_name} {active.label}
      </div>
      <AddBlockForm item={active} onAdd={handleAdd} />
    </div>
  );
};

export default ActiveCategory;
