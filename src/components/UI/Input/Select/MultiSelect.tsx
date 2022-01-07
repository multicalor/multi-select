import React, {ChangeEvent, FC, MouseEvent, useState} from 'react';
import {IParents, ISelect} from "../../../../types/types";
import UserItem from "../../../UserItem";
import List from "../../Out/List";
import SelectList from "./SelectList";
import MultiOption from "./MultiOption";



// interface SelectActions {
//     onClick: () => void;
// }
//
// interface SelectDesign {
//     variant: SelectVariant;
// }
//
// interface SelectStyles {
//     width?: string;
//     height?: string;
//
// }

export enum SelectVariant {
    outlined ='outlined',
    primary='primary'
}

interface SelectProps {
    initSelects?: IParents
}

const initialOption: IParents = {
    'root' : {parent:'root', options: ['расходы', 'доходы', 'девиденды'] },
    'расходы': {parent:'расходы',options: ['персонал', 'материалы']},
     'доходы': {parent:'доходы',options: ['регулярные', 'не регуляреые']},
     'регулярные': {parent:'регулярные', options: ['аренда', 'бытовые']},
}



const MultiSelect: FC<SelectProps> = (
    {
        initSelects,
        children,
    }) => {
    const [options, setOptions] = useState<IParents>(initialOption)
    const [selected, setSelected] = useState(['root'])

    const clickHandler = (e: MouseEvent <HTMLButtonElement>) => {
        e.preventDefault()
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
                <SelectList
                    onChange={changeHandler}
                    items={options[category]?.options}
                    id={index}
                    key={index+'select-key'}
                    renderItem={(item) =>
                        options[category]?.options?
                        <MultiOption
                            option={item}
                            key={++index+'option-key'}
                            selected={selected}
                            setSelected={setSelected}/>
                            : <button> Save </button>
                }></SelectList>
             ))}

            <button onClick={clickHandler}>Click me</button>
        </div>

    );
};


export default MultiSelect;
//
// style={{width, height, border: variant === SelectVariant.outlined?'1px solid gray':'none',
//     background: variant === SelectVariant.primary? 'lightblue': ''
// }}