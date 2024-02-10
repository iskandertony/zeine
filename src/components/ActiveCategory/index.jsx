import {Button, InputNumber, Select} from "antd";
import React, {useEffect, useState} from "react";
import AddBlockForm from "../AddBlockForm";

const ActiveCategory = ({active, handleAdd}) => {
    const [block, setBlock] = useState()

    useEffect(() => {
        setBlock(undefined)
    },[active])

    const handleBlockChange = (value) => {
        setBlock(value)
    }


    const options = active.list.map(it => ({value: it.name, label: it.label, object: it}))
    const activeBlock = active.list.find(it => it.name === block)
    return (
        <div>
            <h2>{active.label}</h2>
            <Select
                value={block}
                placeholder={'Выберете Блок'}
                style={{ width: 300 }}
                onChange={handleBlockChange}
                options={options}
            />
            <div>
                {activeBlock && <AddBlockForm item={activeBlock} onAdd={handleAdd}/>}
            </div>
        </div>
    )
}

export default ActiveCategory