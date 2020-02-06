import React, {useState, useEffect} from 'react';
import DropDown from './DropDown';
import {ICandyItem} from "../types";
import {Candies} from "../consts";
import './grid.scss';

let buttonPressTimer: any;
const Grid = () => {
    let savedCandies = localStorage.getItem('candies');
    let cand: ICandyItem[] = [];
    if (savedCandies) {
        try {
            let parsedCandies: Array<ICandyItem> = JSON.parse(savedCandies) || [];
            console.warn(parsedCandies);
            parsedCandies.forEach((cnd: ICandyItem) => {
                cand.push(cnd);
            });
        } catch (e) {
            cand = [];
            console.warn(e);
        }
    }

    let getTotalSum = ()=> {
        let _totalSum = 0;
        candies.forEach((c) => {
            _totalSum += c.sum;
        });
        return _totalSum;
    }
    let [candies, setCandies] = useState(cand);
    let [totalSum, setTotalSum] = useState(getTotalSum());

    let AddRow = () => {
        cand = candies;

        cand.push({
            ...Candies[0],
            count: 0,
            sum: 0,
            uuid: Date.now()
        });
        setCandies([...cand]);
        saveCandies();
    };

    let changeCandy = (candy: ICandyItem) => {
        cand = candies;
        let totalSum = 0;

        cand.forEach((c, index) => {
            if (c.uuid === candy.uuid) {
                cand[index] = {
                    ...candy
                };
            }
            totalSum += cand[index].sum;
        });
        console.warn(totalSum)
        setTotalSum(totalSum);
        setCandies([...cand]);
        saveCandies();
    };

    let calcTotalSum = () => {
        setTotalSum(getTotalSum());
    };


    let copyToBuffer = () => {
        let resuslt = "";

        candies.forEach(c => {
            if (c.count > 0) {
                let priceCount = "";
                if (c.unit) {
                    priceCount = `${c.count}${c.unit} x ${c.price}грн = `;
                }

                resuslt += `${c.name} ${priceCount}${c.sum} грн \n`
            }
        });
        resuslt += `Загальна сума ${totalSum} грн`;

        navigator.clipboard.writeText(resuslt).then(function () {
            console.log('copied')
        }, function () {
            console.log('failed to copy')
        });
    };

    let removeAll = () => {
        if (window.confirm("Видалити все?")) {
            setCandies([]);
            localStorage.removeItem('candies')
        }
    };

    let saveCandies = () => {
        localStorage.setItem('candies', JSON.stringify(candies));
    };

    let handleButtonPress = (index: number) => {
        buttonPressTimer = setTimeout(() => {
            let cand = candies;
            cand.splice(index, 1);
            setCandies([...cand]);
            saveCandies();
            calcTotalSum();
        }, 1500);
    };

    let handleButtonRelease = () => {
        clearTimeout(buttonPressTimer);
    };

    return (
        <div className="grid">
            <div className="grid-body">
                {
                    candies.map((c, index) => {
                        return <div key={c.uuid}
                                    onTouchStart={() => handleButtonPress(index)}
                                    onTouchEnd={handleButtonRelease}
                                    onMouseDown={() => handleButtonPress(index)}
                                    onMouseUp={handleButtonRelease}
                                    onMouseLeave={handleButtonRelease}>
                            <GridRow
                                candy={c}
                                onChange={(c: ICandyItem) => changeCandy(c)}
                            />
                        </div>
                    })
                }
            </div>
            <div className="total-row">
                Загальна вартість: {totalSum} грн
            </div>
            <div className="action-bar">
                <button className="remove-button" onClick={() => removeAll()}>X</button>
                <button className="clipboard-button" onClick={() => copyToBuffer()}>C</button>
                <button className="add-row-button" onClick={() => AddRow()}>+</button>
            </div>
        </div>

    );
};

const GridRow = (props: any) => {
    let candy: ICandyItem = props.candy;

    let {_id, price, count, sum} = candy;

    let onCandyChanged = (_id: string) => {
        let cand = Candies.find(candy => candy._id === _id);
        if (cand) {
            candy = {
                ...candy,
                _id: cand._id,
                price: cand.price,
                name: cand.name,
                unit: cand.unit
            }
        }
        if (candy) {
            _id = candy._id;
            price = candy.price;
            calcSum();
        }
        ;
    };
    let calcSum = () => {
        sum = (Number((count * price).toFixed(2)));
        props.onChange({
            ...candy,
            count,
            sum,
            price
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
            <div className="count">
                <input type="number" value={count || ""} onChange={(e) => countChange(e)}/>
            </div>
            <div className="price">
                <input type="number" value={price || ""} onChange={(e) => priceChange(e)}/>
            </div>
            <div className="sum">
                {sum}
            </div>
        </div>
    )
};


export default Grid;