import React, {MouseEvent, ReactNode} from 'react';

interface ListProps<T> {
    id:number;
    items:T[];
    renderItem: (item:T) => ReactNode
    onClick: (e: MouseEvent<HTMLDivElement>)=> void
}

export default function OptionList <T> ({ items, renderItem, onClick, id} : ListProps<T>){

        return (
            items? <div id={id.toString()} onClick={onClick}>
                {items.map(renderItem)}
            </div>: null
        );
};
