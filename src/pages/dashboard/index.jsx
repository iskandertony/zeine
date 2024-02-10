import React, {useState} from 'react';
import {Button, Card, Select, Space} from "antd";
import {BLOCKS, CALCULATION} from "../../constants";
import ActiveCategory from "../../components/ActiveCategory";

const DashBoard = () => {
    const [activeCategory, setActiveCategory] = useState(null)

    const [result, setResult] = useState([])


    const handleCategoryClick = (item) => {
        setActiveCategory(item)
    }

    const handleAdd = (item) => {
        setResult([...result, item])
    }


    const getTotal = () => {
        let total = 0
        result.forEach(res => total += res.subTotal)

        return total
    }
    console.log('result', result)
    return (
        <div style={{padding: 20, display: 'flex', justifyContent: 'space-around'}}>
            <div>
                {BLOCKS.map(item => (
                    <Space key={item.category} wrap style={{padding: 8}}>
                        <Card title={item.label} onClick={() => handleCategoryClick(item)} style={{ width: 300, cursor:"pointer" }}>
                            <p>{item.label}</p>
                        </Card>
                    </Space>
                ))}

                {activeCategory && <ActiveCategory active={activeCategory} handleAdd={handleAdd}></ActiveCategory>}
            </div>
            <div>
                <h2>Смета</h2>
                <div>
                    {result.map(item => (
                        <div>
                            <h5>{item.block.category} - {item.block.label}</h5>
                            <div>{item.width} - {item.count}шт</div>
                            <div>Сумма: {item.subTotal} сом</div>
                        </div>
                    ))}
                    <hr/>
                    <div>
                       <b> Общая сумма: {getTotal()}</b>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;