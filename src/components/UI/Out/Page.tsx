import React, {FC} from 'react';
import {IStyle} from "../../../types/types";

interface PageProps {

}

const Page:FC<PageProps> = ({ children}) => {

    const styles:IStyle = {
        position: 'absolute',
        width: '700px',
        height:'300px',

        background: 'rgba(86, 204, 242, 0.24)',
        backdropFilter: 'blur(36px)',

        borderRadius:'45px'
    }

    return (
        <div style={{position: 'absolute', width: '700px', height:'300px', background: 'rgba(86, 204, 242, 0.24)', backdropFilter: 'blur(36px)', borderRadius:'18px'}}>
            {children}
        </div>
    );
};

export default Page;