import React, {FC} from 'react';

export enum SelectVariant {
    outlined ='outlined',
    primary='primary'
}

interface SelectProps {
    width?: string;
    height?: string;
    variant: SelectVariant;
}

const MultiSelect: FC<SelectProps> = (
    {
        width,
        height,
        children,
        variant
    }) => {
    return (
        <div style={{width, height, border: variant === SelectVariant.outlined?'1px solid gray':'none',
        background: variant === SelectVariant.primary? 'lightblue': ''
        }}>
            {children}
        </div>
    );
};

export default MultiSelect;