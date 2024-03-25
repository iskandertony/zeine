import React, { useState } from "react";
import {Button, Card, Modal, Space, Collapse} from "antd";
import { BLOCKS } from "../../constants";
import ActiveCategory from "../../components/ActiveCategory";

import "./style.scss";
import {Panel, PanelGroup, PanelResizeHandle} from "react-resizable-panels";

const DashBoard = () => {
  const [activeCategory, setActiveCategory] = useState(BLOCKS[0]);
  const [result, setResult] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null);

    const showModal = (id) => {
        setIsModalVisible(true);
        setItemToDelete(id);
    };

    const handleOk = () => {
        const filtered = result.filter((it) => it.id !== itemToDelete);
        setResult(filtered);
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };


    const handleCategoryClick = (item) => {
    setActiveCategory(item);
  };

  const handleAdd = (item) => {
    setResult([...result, item]);
  };

    const handleRemove = (e, id) => {
        e.stopPropagation();
        showModal(id);
    };


    // const handleRemove = (e, id) => {
  //   e.stopPropagation();
  //   const filtered = result.filter((it) => it.id !== id);
  //   setResult(filtered);
  // };

  const getTotal = () => {
    let total = 0;
    result.forEach((res) => (total += res.total));

    return total;
  };

  const items = result.map((item) => {
    const label = (
      <div className="flex justify-s alignC">
        <div>
          <h4 className="title">
            {item.block.category_name} - {item.block.label}
          </h4>
          <div className="text">
            Ширина: <b className="title">{item.width}</b>
          </div>
          <div className="text">
            Итого: <b className="title">{item.total}</b>
          </div>
        </div>
          <Button onClick={(e) => handleRemove(e, item.id)} danger>
              x
          </Button>

          <Modal title="Подтверждение удаления" open={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
              <p>Вы уверены, что хотите удалить этот элемент?</p>
          </Modal>
      </div>
    );
    const text = (
      <div className="flex flex-column gap-5">
        {item.list.map((it) => {
          return (
            <div key={it.name} className="flex alignC gap-5">
              <h5 className="title">{it.label}:</h5>
              <div className="text">
                {it.price} x {it.kef} = {it.subTotal.toFixed(1)}
              </div>
            </div>
          );
        })}
        <hr />
        <div className="text">
          Цена за 1ед: <b className="title">{item.cost} c</b>
        </div>
        <div className="text">
          Количество: <b className="title">{item.count} шт</b>
        </div>
        <div className="text">
          Сумма: <b className="title">{item.total} c</b>
        </div>
      </div>
    );
    return {
      key: item.id,
      label: label,
      children: text,
    };
  });

  return (
    <div className="dash_board container_landing body_background">
        <PanelGroup direction="horizontal">
            <Panel style={{ marginRight: '10px' }}>
        <div className="content">
          {BLOCKS.map((item, i) => {
            let cardClass = "";
            switch (item.category_name) {
              case "Нижние Блоки":
                cardClass = "category-navy-blue";
                break;
              case "Верхние Блоки":
                cardClass = "category-coral";
                break;
              case "Антресоль":
                cardClass = "category-mint";
                break;
              case "Пенал":
                cardClass = "category-lavender";
                break;
              default:
                cardClass = "";
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
            </Panel>
            <PanelResizeHandle />
            <Panel>
        <div>
          {activeCategory && (
            <ActiveCategory active={activeCategory} handleAdd={handleAdd} />
          )}
        </div>
        </Panel>
            <PanelResizeHandle />
            <Panel style={{ marginLeft: '10px' }}>
      <div className="flower">
        <h2>
          Смета - <span style={{ color: "red" }}>{getTotal()} с</span>
        </h2>
        <div>
          <Collapse items={items} bordered={false} />
          <hr />
          <div>
            <b>Общая сумма: {getTotal()}</b>
          </div>
        </div>
      </div>
            </Panel>
        </PanelGroup>
    </div>
  );
};

export default DashBoard;
