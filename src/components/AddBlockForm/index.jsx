import { Button, InputNumber, Select } from "antd";
import React, { useState } from "react";
import { CALCULATION } from "../../constants";
import "./style.scss";

const AddBlockForm = ({ item, onAdd }) => {
  const [width, setWidth] = useState();
  const [count, setCount] = useState(1);
  const [facade, setFacade] = useState();
  const [materials, setMaterials] = useState();
  const handleBlockChange = (value) => {
    setWidth(value);
  };
  const handleMaterial = (value) => {
    setMaterials(value);
  };

  const handleFacade = (value) => {
    setFacade(value);
  };
  const handleCountChange = (value) => {
    setCount(value);
  };

  const clearForm = () => {
    setCount(undefined);
    setWidth(undefined);
  };

  const subTotal = (name, width, count) => {
    const key = `${name}-${width}`;
    const prices = CALCULATION[key];

    let sum = 0;
    Object.values(prices).forEach((value) => {
      sum += value;
    });

    return sum * count;
  };

  const handleAdd = () => {
    const quantity = count ?? 1;

    const resultItem = {
      width,
      count: quantity,
      block: item,
      materials: materials,
      facade: facade,
      subTotal: subTotal(item.name, width, quantity),
    };

    onAdd(resultItem);
    clearForm();
  };

  const options = item.widths.map((it) => ({ value: it, label: it }));
  const optionsMaterial = item.facade.map((it) => ({
    value: it.value,
    label: it.label,
  }));
  return (
    <div key={item.name} className="add_block_form">
      <Select
        value={width}
        placeholder={"Ширина"}
        onChange={handleBlockChange}
        options={options}
      />

      <Select
        value={facade}
        placeholder={"Фасад"}
        onChange={handleFacade}
        options={optionsMaterial}
      />

      <Select
          value={materials}
          placeholder={"Корпус"}
          onChange={handleMaterial}
          options={optionsMaterial}
      />

      <InputNumber
        value={count}
        addonBefore={"Количество"}
        onChange={handleCountChange}
      />

      <Button disabled={!width} type={"primary"} onClick={handleAdd}>
        Добавить
      </Button>
    </div>
  );
};

export default AddBlockForm;
