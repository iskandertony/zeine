import React, { useState } from "react";
import { Card, Space } from "antd";
import {BLOCKS, FACADE_KEF, MATERIAL_NAMES, PRICES, SIDE_KEF} from "../../constants";
import ActiveCategory from "../../components/ActiveCategory";
import { Collapse } from 'antd';
import "./style.scss";

const DashBoard = () => {
  const [activeCategory, setActiveCategory] = useState(BLOCKS[0]);

  const [result, setResult] = useState([]);

  const handleCategoryClick = (item) => {
    setActiveCategory(item);
  };

  const handleAdd = (item) => {
    setResult([...result, item]);
  };

  const getTotal = () => {
    let total = 0;
    result.forEach((res) => (total += res.total));

    return total;
  };

    const items = result.map(item => {
        console.log('RESULTS', item)
        console.log('FAC KEF', item.key)
        const subTotal = item.cost * item.count
        const label = <div>
            <h4>{item.block.category_name} - {item.block.label}</h4>
            <div>Ширина <b>{item.width}</b></div>
            <div>Итого <b>{subTotal}</b></div>
        </div>

        const facadeCost = PRICES[item.facade] * FACADE_KEF[item.key][item.facade]
        const corpusCost = PRICES[item.corpus] * SIDE_KEF[item.key][item.corpus]
        const text = <p>
            <div>
                <h5>{MATERIAL_NAMES[item.facade]}:</h5>
                <div>{PRICES[item.facade]} x {FACADE_KEF[item.key][item.facade]} = {facadeCost}</div>
            </div>
            <div>
                <h5>{MATERIAL_NAMES[item.corpus]}:</h5>
                <div>{PRICES[item.corpus]} x {SIDE_KEF[item.key][item.corpus]} = {corpusCost}</div>
            </div>
            {item.list.map(it => {
                return (
                    <div key={it.name}>
                        <h5>{it.label}:</h5>
                        <div>{it.price} x {it.kef} = {it.subTotal}</div>
                    </div>
                )
            })}
            <hr/>
            <div>Цена за 1ед: <b>{item.cost} c</b></div>
            <div>Количество: <b>{item.count} шт</b></div>
            <div>Сумма: <b>{subTotal} c</b></div>
        </p>
        return {
            key: item.name,
            label: label,
            children: text,
        }
    })

  return (
    <div className="dash_board container_landing">
      <div className="content">
          {BLOCKS.map((item, i) => {
              let cardClass = '';
              switch (item.category_name) {
                  case 'Нижние Блоки':
                      cardClass = 'category-navy-blue';
                      break;
                  case 'Верхние Блоки':
                      cardClass = 'category-coral';
                      break;
                  case 'Антресоль':
                      cardClass = 'category-mint';
                      break;
                  case 'Пенал':
                      cardClass = 'category-lavender';
                      break;
                  default:
                      cardClass = '';
              }
              return (
                  <Space key={i} wrap style={{ padding: 8 }}>
                      <Card
                          className={cardClass}
                          title={item.label}
                          onClick={() => handleCategoryClick(item)}
                          style={{ width: 300, cursor: "pointer" }}
                      >
                          <p>{item.category_name}</p>
                      </Card>
                  </Space>
              );
          })}
      </div>
      <div>
        {activeCategory && (
          <ActiveCategory
            active={activeCategory}
            handleAdd={handleAdd}
          />
        )}
      </div>
      <div>
        <h2>Смета - <span style={{color: 'red'}}>{getTotal()} с</span></h2>
        <div>
          <Collapse items={items} bordered={false} />
          <hr />
          <div>
            <b>Общая сумма: {getTotal()}</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
