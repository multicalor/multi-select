import React, {ChangeEvent, MouseEvent, DragEvent, FC, useState, useRef} from 'react';

const EventsExample:FC = () => {
    const [value, setValue] = useState('')
    const [isDrag, setIsDrag] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)

    const changeHandler = (e: ChangeEvent <HTMLInputElement>) => {
        e.preventDefault()
        setValue(e.target.value)
    }

    const clickHandler = (e: MouseEvent <HTMLButtonElement>) => {
        e.preventDefault()
        console.log('state: ', value)
        console.log('ref: ', inputRef.current?.value)
    }

    const dragHandler = (e:DragEvent <HTMLDivElement>) => {
        e.preventDefault()
        console.log('DRUG')
    }

    const leaveHandler = (e:DragEvent <HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
        console.log('LEAVE')
    }

    const drugWithPreventHandler = (e:DragEvent <HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(true)
        console.log('OVER')

    }

    const dropHandler = (e:DragEvent <HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
        console.log('DROP')
        // e.dataTransfer.files)

    }

    return (
        <div>
            <input value={value} onChange={changeHandler} type="text" placeholder="Управлямый"/>
            <input ref={inputRef} type="text" placeholder="Неуправлямый"/>
            <button onClick={clickHandler}>Click me</button>
            <div onDrag={dragHandler} draggable style={{width:200, height:200,  background: 'red'}}/>
            <div
                onDrag={dragHandler}
                onDragLeave={leaveHandler}
                onDragOver={drugWithPreventHandler}
                onDrop={dropHandler}
                style={{width:200, height:200,  background: isDrag?'blue': 'red', marginTop: 15}}/>
        </div>
    );
};

export default EventsExample;