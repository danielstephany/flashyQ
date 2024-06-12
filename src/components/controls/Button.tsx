import React, {useState, useEffect, useRef} from 'react'
import styled from 'styled-components'

const ButtonComp: React.ElementType = ({className, component, onMouseDown, onMouseUp, ...others}) => {
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
    
const Button = styled(ButtonComp)`
    box-shadow: inset 0 0 0 3px rgba(0, 0, 0, 0);
    border-radius: 8px;
    display: inline-flex;
    background-image: linear-gradient(to bottom right, #ff6dfd, #8992fe);
    padding: 8px 24px;
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
` as typeof ButtonComp

export default Button