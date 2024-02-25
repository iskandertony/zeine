import { Button, InputNumber, Select } from "antd";
import React, {useEffect, useState} from "react";
import {CALCULATION, DIVIDER, KEF, MATERIAL_NAMES, PRICES} from "../../constants";
import "./style.scss";

const AddBlockForm = ({ item, onAdd }) => {
  const [blockType, setBlockType] = useState();
  const [width, setWidth] = useState();
  const [count, setCount] = useState();
  const [facade, setFacade] = useState();
  const [corpus, setCorpus] = useState();
  console.log('item', item)

  useEffect(() => {
    resetForm()
  }, [item])

  const resetForm = () => {
    setCount(1);
    setWidth(item.widths[0])
    setFacade(item.facade[1].value)
    setCorpus(item.corpus[0].value)
    setBlockType(item.types[0].value);
  };

  const handleTypeChange = (value) => {
    setBlockType(value);
  };
  const handleWidthChange = (value) => {
    setWidth(value);
  };
  const handleCorpus = (value) => {
    setCorpus(value);
  };

  const handleFacade = (value) => {
    setFacade(value);
  };
  const handleCountChange = (value) => {
    setCount(value);
  };

  const getMaterialsList = (item) => {
    const key = `${item.name}${DIVIDER}${blockType}${DIVIDER}${width}`
    const kef = KEF[key]
    if (!kef) {
      console.error('Коэффициент не найдет!')
      return
    }

    const list = []
    let sum = 0;
    Object.keys(kef).forEach((name) => {
      const value = kef[name]

      if (!value) return
      const subTotal = PRICES[name] * value

      const newItem = {
        name,
        label: MATERIAL_NAMES[name], // Надо сделать мэппинг
        kef: value,
        price: PRICES[name],
        subTotal,
      }
      sum += subTotal
      list.push(newItem)
    });

    return {list, cost: sum}
  };

  const handleAdd = () => {
    const quantity = count ?? 1;
    const key = `${item.name}${DIVIDER}${blockType}${DIVIDER}${width}`
    const cost = getMaterialsList(item, width, quantity).cost
    const list = getMaterialsList(item, width, quantity).list
    const total = cost * quantity

    const resultItem = {
      key,
      width,
      count: quantity,
      corpus,
      facade,
      kef: KEF[key],
      list,
      cost,
      total,
      block: item,
    };
    onAdd(resultItem);
    resetForm();
  };

  const typeOptions = item.types.map((it) => ({
    value: it.value,
    label: it.label,
    object: it,
  }));

  const optionsWidth = item.widths.map((it) => ({ value: it, label: it }));
  const optionsCorpus = item.facade.map((it) => ({
    value: it.value,
    label: it.label,
  }));
  return (
    <div key={item.name} className="add_block_form">
      <Select
          value={blockType}
          placeholder={"Выберете Тип"}
          style={{ width: "100%" }}
          onChange={handleTypeChange}
          options={typeOptions}
      />
      <Select
        value={width}
        placeholder={"Ширина"}
        onChange={handleWidthChange}
        options={optionsWidth}
      />

      <Select
        value={facade}
        placeholder={"Фасад"}
        onChange={handleFacade}
        options={optionsCorpus}
      />

      <Select
          value={corpus}
          placeholder={"Корпус"}
          onChange={handleCorpus}
          options={optionsCorpus}
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
