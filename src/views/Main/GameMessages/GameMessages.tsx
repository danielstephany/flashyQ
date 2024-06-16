import React from 'react'
import styled, { keyframes } from 'styled-components'

const zoomIn = keyframes`
    0% {opacity: 0; transform: scale(0.5);}
    50% {opacity: 1; }
    100% {opacity: 1; transform: scale(1);}
`

const MessagePill = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: #ff6dfd;
    border-radius: 32px;
    padding: 6px 32px;
    font-family: "Poetsen One", sans-serif;
    color: #fff;
    font-size: 42px;
    opacity: 0;
    animation: ${ zoomIn } 1s ease-out 1 forwards;
`

const GameMessagesComp: React.ElementType = ({className, message}) => {
    
    return (
        <div className={className}>
            {message ? <MessagePill>{message}</MessagePill> : null}
        </div>
    )
}

const GameMessages = styled(GameMessagesComp)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    margin: 0 0 16px;
    @media (max-width: 870px){
        ${MessagePill} {
            font-size: 38px;
        }
    }
    @media (max-width: 525px){
        margin: 0 0 8px;
        ${MessagePill} {
            font-size: 24px;
        }
    }
` as typeof GameMessagesComp

export default GameMessages