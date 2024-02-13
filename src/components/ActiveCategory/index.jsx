import {Button, InputNumber, Select} from "antd";
import React, {useEffect, useState} from "react";
import AddBlockForm from "../AddBlockForm";
import {BLOCKS} from "../../constants";

const ActiveCategory = ({active, handleAdd}) => {
    const [block, setBlock] = useState()

    useEffect(() => {
        setBlock(undefined)
    },[active])

    const handleBlockChange = (value) => {
        setBlock(value)
    }

    const options = active.types.map(it => ({value: it.value, label: it.label, object: it}))
    const activeBlock = active.types.find(it => it.value === block)
    console.log("block", block)
    console.log("activeBlock", activeBlock)
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
                {activeBlock && <AddBlockForm item={active} onAdd={handleAdd}/>}
            </div>
        </div>
    )
}

export default ActiveCategory