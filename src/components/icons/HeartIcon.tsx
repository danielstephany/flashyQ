import React from 'react'
import styled, {keyframes, css} from 'styled-components'

interface iProps {
    className?: string, 
    pulse: boolean,
    pulseShrink: boolean
}

const HeartIconComp: React.ElementType = ({ className, pulse, pulseShrink }: iProps) => {
    return (
        <svg className={className} fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <linearGradient id="Gradient1" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#ff6dfd" />
                {/* <stop offset="50%" stop-color="black" stop-opacity="0" /> */}
                <stop offset="100%" stopColor="#8992fe" />
            </linearGradient>
            <path fill="url(#Gradient1)" d="M12 20a1 1 0 0 1-.437-.1C11.214 19.73 3 15.671 3 9a5 5 0 0 1 8.535-3.536l.465.465.465-.465A5 5 0 0 1 21 9c0 6.646-8.212 10.728-8.562 10.9A1 1 0 0 1 12 20z" />
        </svg>
    )
}

const shrinkingPulsing = keyframes`
    0% {transform: scale(1);}
    10% {transform: scale(1.2);}
    20% {transform: scale(1.2);}
    40% {transform: scale(.7);}
    50% {transform: scale(.7);}
    60% {transform: scale(.5);}
    70% {transform: scale(.5);}
    100% {transform: scale(.4);}
`
const pulsing = keyframes`
    0% {transform: scale(1);}
    50% {transform: scale(.7);}
    100% {transform: scale(1);}
`

const shrinkingPulsingMixin = css<iProps>`
  animation: ${shrinkingPulsing} 1s ease 1 forwards;
`

const pulsingMixin = css<iProps>`
  animation: ${pulsing} 1s linear 1 forwards;
`

const HeartIcon = styled(HeartIconComp)`             
        hight: 24px;
        width: 24px;
        ${({ pulse, pulseShrink }) => {
            if(pulseShrink){
                return shrinkingPulsingMixin
            } else if(pulse){
                return pulsingMixin
            } else {
                return ""
            }
        }}      
` as typeof HeartIconComp

export default HeartIcon

