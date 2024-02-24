import React from "react";
import AddBlockForm from "../AddBlockForm";
import "./style.scss";

const ActiveCategory = ({ active, handleAdd }) => {
  return (
    <div className="active_category">
      <h2>
        {active.category_name} {active.label}
      </h2>
      <AddBlockForm item={active} onAdd={handleAdd} />
    </div>
  );
};

export default ActiveCategory;
