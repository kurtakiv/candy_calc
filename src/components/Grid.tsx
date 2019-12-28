import React, {useState} from 'react';
import DropDown from './DropDown';
import {ICandyItem} from "../types";
import {Candies} from "../consts";
import './grid.scss';

const Grid = () => {
    let cand: ICandyItem[] = [];
    let [candies, setCandies] = useState(cand);

    let AddRow = () => {
        cand = candies;
        debugger;
        cand.push({
            ...Candies[0],
            count: 0,
            sum: 0,
            uuid:  Date.now()
        });
        setCandies([...cand]);
    };

    let changeCandy = (candy: ICandyItem) => {
        cand = candies;
        cand.forEach((c, index) => {
            if (c.uuid === candy.uuid) {
                cand[index] = {
                    ...candy
                };
            }
        });
        setCandies([...cand]);
    };
    return (

        <div className="grid">
            <div>
                {
                    candies.map((c) => {
                        return <GridRow key={c.uuid} candy={c} onChange={(c: ICandyItem) => changeCandy(c)}/>
                    })
                }
            </div>
            <div>
                <button onClick={() => AddRow()}>Click</button>
            </div>
        </div>

    );
};

const GridRow = (props: any) => {
    let candy: ICandyItem = props.candy;

    let {_id, price, count, sum} = candy;



    let onCandyChanged = (_id: string) => {
        let cand = Candies.find(candy => candy._id === _id);
        if (cand){
            candy = {
                ...candy,
                _id: cand._id,
                price: cand.price,
                name: cand.name
            }
        }
        if (candy) {
            _id = candy._id;
            price = candy.price;
            calcSum();
        };
    };

    let calcSum = () => {
        sum = (Number((count * price).toFixed(2)));
        props.onChange({
            ...candy,
            count,
            sum
        });
    };

    let countChange = (e: any) => {
        count = (Number(e.target.value));
        calcSum();
    };

    let priceChange = (e: any) => {
        price = (Number(e.target.value));
        calcSum();
    };

    return (
        <div className="grid-row">
            <div className="product">
                <DropDown selected={_id} onChange={onCandyChanged}/>
            </div>
            <div className="price">
                <input type="number" value={price} onChange={(e) => priceChange(e)}/>
            </div>
            <div className="count">
                <input type="number" value={count} onChange={(e) => countChange(e)}/>
            </div>
            <div className="sum">
                {sum} грн
            </div>
        </div>
    )
};


export default Grid;