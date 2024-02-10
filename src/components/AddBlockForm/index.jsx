import {Button, InputNumber, Select} from "antd";
import React, {useState} from "react";
import {CALCULATION} from "../../constants";

const AddBlockForm = ({item, onAdd}) => {
    const [width, setWidth] = useState()
    const [count, setCount] = useState(1)


    const handleBlockChange = (value) => {
        setWidth(value)
    }

    const handleCountChange = (value) => {
        setCount(value)
    }

    const clearForm = () => {
        setCount(undefined)
        setWidth(undefined)
    }

    const subTotal = (name, width, count) => {
        const key = `${name}-${width}`
        const prices = CALCULATION[key]

        let sum = 0
        Object.values(prices).forEach(value => {
            sum += value
        })

        return sum * count
    }


    const handleAdd = () => {
        const quantity = count ?? 1

        const resultItem = {
            width,
            count: quantity,
            block: item,
            subTotal: subTotal(item.name, width, quantity)
        }

        onAdd(resultItem)
        clearForm()
    }

    const options = item.widths.map(it => ({value: it, label: it}))
    return (
        <div key={item.name}>
            <div>
                <Select
                    value={width}
                    placeholder={'ширина'}
                    style={{ width: 120 }}
                    onChange={handleBlockChange}
                    options={options}
                />

                <InputNumber value={count} addonBefore={'количество'} onChange={handleCountChange} />
            </div>
            <p><Button disabled={!width} type={'primary'} onClick={handleAdd}>Добавить</Button></p>
            <hr/>
        </div>
    )
}

export default AddBlockForm