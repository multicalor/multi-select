import React, {ChangeEvent, ReactNode} from 'react';

interface ListProps<T> {
    id:number;
    items:T[];
    renderItem: (item:T) => ReactNode
    onChange: (e:ChangeEvent<HTMLSelectElement>)=> void
}

export default function SelectList <T> ({ items, renderItem, onChange, id} : ListProps<T>){

        return (
            items? <select id={id.toString()} onChange={onChange}>
                {items.map(renderItem)}
            </select>: null
        );
};
