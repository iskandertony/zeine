import { Button, InputNumber, Select } from "antd";
import React, {useEffect, useState} from "react";
import {CALCULATION, createKey, DIVIDER, FACADE_KEF, KEF, MATERIAL_NAMES, PRICES, SIDE_KEF} from "../../constants";
import "./style.scss";

const AddBlockForm = ({ item, onAdd }) => {
  const [blockType, setBlockType] = useState();
  const [width, setWidth] = useState();
  const [count, setCount] = useState();
  const [facade, setFacade] = useState();
  const [corpus, setCorpus] = useState();
  const [corpusView, setCorpusView] = useState();
  console.log("item", item)
  useEffect(() => {
    resetForm()
  }, [item])

  const resetForm = () => {
    setCount(1);
    setWidth(item.widths[2])
    setFacade(item.facade[1].value)
    setCorpus(item.corpus[0].value)
    setCorpusView(item.corpus[0].value)
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
  const handleCorpusView = (value) => {
    setCorpusView(value);
  };

  const handleFacade = (value) => {
    setFacade(value);
  };
  const handleCountChange = (value) => {
    setCount(value);
  };

  const getMaterialsList = (item) => {
    const key = createKey(item.category, item.name, blockType, width)
    const kef = KEF[key]
    if (!kef) {
      console.error('Коэффициент не найдет!')
      return
    }

    const list = []
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
      list.push(newItem)
    });

    return list
  };

  const generateId = () => 'id' + Math.random().toString(16).slice(2)

  const handleAdd = () => {
    const quantity = count ?? 1;
    const key = createKey(item.category, item.name, blockType, width)
    const list = getMaterialsList(item, width, quantity)

    const facadeItem = {
      name: facade,
      label: MATERIAL_NAMES[facade],
      kef: FACADE_KEF[key][facade],
      price: PRICES[facade],
      subTotal: PRICES[facade] * FACADE_KEF[key][facade],
    }

    const sideItem = {
      name: corpus,
      label: MATERIAL_NAMES[corpus],
      kef: SIDE_KEF[key][corpus],
      price: PRICES[corpus],
      subTotal: PRICES[corpus] * SIDE_KEF[key][corpus],
    }

    let sideItemViewed
    if (blockType === 'side') {
      sideItemViewed = {
        name: corpusView,
        label: MATERIAL_NAMES[corpusView],
        kef: SIDE_KEF[key][corpusView],
        price: PRICES[corpusView],
        subTotal: PRICES[corpusView] * SIDE_KEF[key][corpusView],
      }
    }
    const sidesItems = sideItemViewed ? [sideItem, sideItemViewed] : [sideItem]

    const items = [facadeItem, ...sidesItems, ...list]
    const cost = items.reduce((acc, it) => acc + it.subTotal, 0)
    const total = cost * quantity

    const resultItem = {
      id: generateId(),
      key,
      width,
      count: quantity,
      list: items,
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
      <label>
        Тип
      </label>
      <Select
          value={blockType}
          placeholder={"Выберете Тип"}
          style={{ width: "100%" }}
          onChange={handleTypeChange}
          options={typeOptions}
      />
      <label>
        Ширина
      </label>
      <Select
        value={width}
        placeholder={"Ширина"}
        onChange={handleWidthChange}
        options={optionsWidth}
      />

      <label>
        Материал Фасада
      </label>
      <Select
        value={facade}
        placeholder={"Фасад"}
        onChange={handleFacade}
        options={optionsCorpus}
      />

      <label>
        Материал Корпуса
      </label>
      <Select
          value={corpus}
          placeholder={"Корпус"}
          onChange={handleCorpus}
          options={optionsCorpus}
      />
      {blockType === 'side' && <Select
          value={corpusView}
          placeholder={"Корпус"}
          onChange={handleCorpusView}
          options={optionsCorpus}
      />}

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
