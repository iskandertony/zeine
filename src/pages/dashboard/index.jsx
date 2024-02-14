import React, { useState } from "react";
import { Button, Card, Select, Space } from "antd";
import { BLOCKS, CALCULATION } from "../../constants";
import ActiveCategory from "../../components/ActiveCategory";
import "./style.scss";

const DashBoard = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const [result, setResult] = useState([]);

  const handleCategoryClick = (item) => {
    setActiveCategory(item);
  };

  const handleAdd = (item) => {
    setResult([...result, item]);
  };

  const getTotal = () => {
    let total = 0;
    result.forEach((res) => (total += res.subTotal));

    return total;
  };

  return (
    <div className="dash_board container_landing">
      <div className="content">
          {BLOCKS.map(item => {
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
                  <Space key={item.category} wrap style={{ padding: 8 }}>
                      <Card
                          className={cardClass}
                          title={item.label}
                          onClick={() => handleCategoryClick(item)}
                          style={{ width: 300, cursor: "pointer" }}>
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
          ></ActiveCategory>
        )}
      </div>
      <div>
        <h2>Смета</h2>
        <div>
          {result.map((item) => (
            <div>
              <h5>
                {item.block.category} - {item.block.label}
              </h5>
              <div>
                {item.width} - {item.count}шт
              </div>
              <div>Сумма: {item.subTotal} сом</div>
            </div>
          ))}
          <hr />
          <div>
            <b> Общая сумма: {getTotal()}</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
