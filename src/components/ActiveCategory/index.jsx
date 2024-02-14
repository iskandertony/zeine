import { Button, InputNumber, Select } from "antd";
import React, { useEffect, useState } from "react";
import AddBlockForm from "../AddBlockForm";
import "./style.scss";

const ActiveCategory = ({ active, handleAdd }) => {
  const [block, setBlock] = useState();

  useEffect(() => {
    setBlock(undefined);
  }, [active]);

  const handleBlockChange = (value) => {
    setBlock(value);
  };

  const options = active.types.map((it) => ({
    value: it.value,
    label: it.label,
    object: it,
  }));
  // const activeBlock = active.types.find((it) => it.value === block);
  return (
    <div className="active_category">
      <h2>
        {active.category_name} {active.label}
      </h2>
      <Select
        value={block}
        placeholder={"Выберете Тип"}
        style={{ width: "100%" }}
        onChange={handleBlockChange}
        options={options}
      />
      <div>
        <AddBlockForm item={active} onAdd={handleAdd} />
      </div>
    </div>
  );
};

export default ActiveCategory;
