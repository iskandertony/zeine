import React, { useState } from "react";
import {Button, Card, Space} from "antd";
import { BLOCKS } from "../../constants";
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

  const handleRemove = (e, id) => {
      e.stopPropagation()
      const filtered = result.filter(it => it.id !== id)
      setResult(filtered)
  }


  const getTotal = () => {
    let total = 0;
    result.forEach((res) => (total += res.total));

    return total;
  };

    const items = result.map(item => {
        const label = <div>
            <div className="button_content mb-10">
            <Button onClick={(e) => handleRemove(e, item.id)} danger>x</Button>
            </div>
            <h4 className="title">{item.block.category_name} - {item.block.label}</h4>
            <div className="text">Ширина: <b className="title">{item.width}</b></div>
            <div className="text">Итого: <b className="title">{item.total}</b></div>
        </div>
        const text = <div className="flex flex-column gap-5">
            {item.list.map(it => {
                return (
                    <div key={it.name} className="flex alignC gap-5">
                        <h5 className="title">{it.label}:</h5>
                        <div className="text">{it.price} x {it.kef} = {it.subTotal.toFixed(1)}</div>
                    </div>
                )
            })}
            <hr/>
            <div className="text">Цена за 1ед: <b className="title">{item.cost} c</b></div>
            <div className="text">Количество: <b className="title">{item.count} шт</b></div>
            <div className="text">Сумма: <b className="title">{item.total} c</b></div>
        </div>
        return {
            key: item.id,
            label: label,
            children: text,
        }
    })

  return (
    <div className="dash_board container_landing body_background">
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
