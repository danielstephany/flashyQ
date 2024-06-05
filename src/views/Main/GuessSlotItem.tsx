import React, { Children } from 'react'
import styled from 'styled-components'

interface iProps { 
    className?: string,
    active: boolean
}

const GuessSlotItemContentComp: React.ElementType = ({ className, active, ...others }: iProps) => <div className={className} {...others} />

const GuessSlotItemContent = styled(GuessSlotItemContentComp)`
    border-radius: 8px;
    display: inline-flex;
    align-items: flex-end;
    justify-content: center;
    font-size: 84px;
    color: #fff;
    background-color: #2065FD;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    opacity: ${({ active }) => active ? "1" : "0"};
    transform: ${({ active }) => active ? "translateY(0px) scale(1)" : "translateY(-20px) scale(1)"};
    transition: opacity 0.5s ease, transform 0.5s ease-out;
`

const GuessSlotItemComp: React.ElementType = ({ className, children, letter, active, ...others}) => {

    return (
        <div className={className} {...others}>
            <GuessSlotItemContent active={active}>
                { active ? children : null}
            </GuessSlotItemContent>
        </div>
    )
}

const GuessSlotItem = styled(GuessSlotItemComp)`
    border-radius: 8px;
    display: inline-flex;
    background-color: rgba(255, 255, 255, 0.2);
    background-color: rgba(23, 101, 253, 0.3);
    min-height: 100px;
    min-width: 100px;
    margin: 0 8px;
    position: relative;
`


export default GuessSlotItem