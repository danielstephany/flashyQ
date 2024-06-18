import React, {useState, useEffect, useRef} from 'react'
import styled from 'styled-components'

const IconButtonComp: React.ElementType = ({className, component, onMouseDown, onMouseUp, ...others}) => {
    const clickClassTimer = useRef < ReturnType<typeof setTimeout>>()
    const [clickClass, setClickClass] = useState("")
    const Component = component || "button"
    const classes = className + clickClass

    useEffect(() => () => {
        if (clickClassTimer.current) clearTimeout(clickClassTimer.current)
    }, [])

    const handleMouseDown = (e: React.SyntheticEvent) => {
        setClickClass(" button-clicked")
        if (onMouseDown) onMouseDown(e)
    }

    const handleMouseUp = (e: React.SyntheticEvent) => {
        clickClassTimer.current = setTimeout(() => {
            setClickClass("")
        }, 100)
        if(onMouseUp) onMouseUp(e)
    }

    return (<Component className={classes} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} {...others}/>)
}
    
const IconButton = styled(IconButtonComp)`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    box-shadow: inset 0 0 0 3px rgba(0, 0, 0, 0);
    border-radius: 40px;
    border: none;
    outline: none;
    background-image: linear-gradient(to bottom right, #dc4fda, #8992fe);
    height: 40px;
    width: 40px;
    color: #fff;
    font-weight: 500;
    text-decoration: none;
    text-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
    letter-spacing: 0.4px;
    transition: box-shadow 0.1s linear;
    cursor: pointer;
    &.button-clicked {
        box-shadow: inset 0 0 3px 3px rgba(0, 0, 0, 0.3);
    }
    svg {
        min-width: 22px;
    }
` as typeof IconButtonComp

export default IconButton