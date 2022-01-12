import React, {ChangeEvent, FC, MouseEvent, useState} from 'react';
import {IParents, ISelect} from "../../../../types/types";
import List from "../../Out/List";
import OptionList from "./OptionList";
import Option from "./Option";


interface SelectProps {
    initSelects?: IParents
}

const initialOption: IParents = {
    'root' : {parent:'root', options: ['расходы', 'доходы', 'девиденды'] },
    'расходы': {parent:'расходы',options: ['персонал', 'материалы']},
     'доходы': {parent:'доходы',options: ['регулярные', 'не регуляреые']},
     'регулярные': {parent:'регулярные', options: ['аренда', 'бытовые']},
}



const OptionSelect: FC<SelectProps> = (
    {
        initSelects,
        children,
    }) => {
    const [options, setOptions] = useState<IParents>(initialOption)
    const [selected, setSelected] = useState(['root'])

    const clickHandler = (e: MouseEvent <HTMLDivElement>|MouseEvent <HTMLButtonElement>) => {
        e.preventDefault()
        console.log('fgfhj',e.target)
        // const value:string = e.target.datatype
        // const id:number = +e.currentTarget.id
        // if(selected.length-1 > id){
        //     setSelected([...[...selected].slice(0, id+1), value])
        // } else {
        //     setSelected([...selected, value])
        // }
    }

    const changeHandler = (e:ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault()
        const value:string = e.currentTarget.value
        const id:number = +e.currentTarget.id
        if(selected.length-1 > id){
            setSelected([...[...selected].slice(0, id+1), value])
        } else {
            setSelected([...selected, value])
        }
    }

    return (
        <div>
            {selected.map((category, index)=>(
                <OptionList
                    onClick={clickHandler}
                    items={options[category]?.options}
                    id={index}
                    key={index+'select-key'}
                    renderItem={(item) =>
                        <Option
                            option={item}
                            key={++index+'option-key'}
                            selected={selected}
                            setSelected={setSelected}/>
                }></OptionList>
             ))}

            <button onClick={clickHandler}>Click me</button>
        </div>

    );
};


export default OptionSelect;
