import React, {ChangeEvent, FC, MouseEvent, useState} from 'react';
import {IOptions, IUser} from "../../../../types/types";
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

interface IParents {
    [key: string]:ISelect ;
}
interface ISelect {
    parent: string ;
    options: string [];
    select: boolean;
}

const initialOption: IParents = {
    'root' : {parent:'root',  select: false, options: ['расходы', 'доходы', 'девиденды'] },
    'расходы': {parent:'расходы',select: false, options: ['персонал', 'материалы']},
     'доходы': {parent:'доходы',select: false, options: ['регулярные', 'не регуляреые']},
     'регулярные': {parent:'регулярные',select: false, options: ['аренда', 'бытовые']},
}



const MultiSelect: FC<SelectProps> = (
    {
        initSelects,
        children,
    }) => {
    const [options, setOptions] = useState<IParents>(initialOption)
    const [selected, setSelected] = useState(['root'])
    const [cat, setCat] = useState([])




    // const optionsFilter = (category:string, options:ISelect[]) => {
    //     let result:string[] = [];
    //     try {
    //         return options.filter((option:ISelect, i) => {
    //                 options[i].select = true
    //                 return  category === option.parent})[0].options
    //
    //
    //
    //         options = nextOptionsFilter(category, options)
    //         setOptions(options)
    //     } catch (e) {
    //         return result
    //     }
    //
    // }
    //
    //
    //
    //
    // const nextOptionsFilter = (category:string, options:ISelect[]):ISelect[] => {
    //     return options.filter( (option:ISelect) => {
    //         return category !== option.parent})
    // }
    const clickHandler = (e: MouseEvent <HTMLButtonElement>) => {
        e.preventDefault()
        // console.log('options: ', nextOptionsFilter('root', options))
    }

    const changeHandler = (e:ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault()
        const value = e.currentTarget.value
        if(options[value].select) return
        if( value in selected){
            return
        }
        if(selected.length > selected.indexOf(value)){
            setSelected([...selected].slice( selected.indexOf(value)))
        }

        let newObject:ISelect = {...options[value],select:true}
        const data: IParents = {}
        data[value] = newObject
        setOptions({...options,  ...data})
        setSelected([...selected, value])


    }
    // const getCategories = (options:ISelect[]):IParents => {
    //     const categories:IParents = {}
    //     options.forEach((item) => {
    //         if(!item.select) {
    //             categories[item.parent] = item
    //         }
    //
    //     })
    //     console.log(categories)
    //     return categories
    // }
    console.log(options)
    return (
        <div>
            {selected.map((category)=>(
                <SelectList
                    onChange={changeHandler}
                    items={options[category]?.options}
                    renderItem={(item) =>
                        options[category]?.options?
                        <MultiOption
                            option={item}
                            key={item}
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