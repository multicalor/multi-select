import React, {ChangeEvent, Dispatch, FC, FormEvent, SetStateAction, useState} from 'react';

// interface OptionProps {
//     width?: string;
//     height?: string;
//     variant: SelectVariant;
//     onClick: () => void;
//     onSelect: () => void;
// }

interface OptionProps {
    id?:number;
    option: string;
    selected:string[];
    setSelected: Dispatch<SetStateAction<string[]>>;
}
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




const Option: FC <OptionProps> = ({option }) => {

    return (
        <div datatype={option}>
            {option}
        </div>
    );
};

export default Option;