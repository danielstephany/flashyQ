import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import focusTrap from '@src/util/focusTrap.ts'

const ModalBaseDiv = styled(
    React.forwardRef<HTMLDivElement, { animate?: boolean }>(({ animate = false, ...others }, ref) => <div ref={ref} {...others} />)
)`
    background-color: ${({ animate }) => animate ? "rgba(0, 0, 0, 0.4)" : "transparent"};
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    transition: background-color 0.3s ease;    
` as React.ElementType

const ModalBaseContent = styled(
    ({ animate = false, ...others }: { animate?: boolean }) => <div {...others} />
)`
    opacity: ${({ animate }) => animate ? "1" : "0"};
    transform: ${({ animate }) => animate ? "translateY(0px)" : "translateY(-100px)"};
    transition: opacity 0.3s ease, transform 0.3s ease;
    max-height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
` as React.ElementType


const ModalBase: React.ElementType = ({
    children,
    handleClose,
    mounted, 
    open, 
    others,
    setMounted
}) => {
    const baseRef = useRef<HTMLDivElement | null>(null)
    const [animate, setAnimate] = useState(false)
    const optionalProps: {[key:string]: any} = {}

    useEffect(() => {

        if(!open && mounted){
            setAnimate(false)
            setTimeout(() => {setMounted(false)}, 350)
        }
        if (!animate){
            
            setTimeout(() => {
                setAnimate(true)
            }, 50)
        }
        if (baseRef.current){
            focusTrap(baseRef.current)
            baseRef.current.focus()
        }
    }, [open])

    if(handleClose){
        optionalProps.onClick = handleClose
    }

    const stopPropagation = (e: MouseEvent) => {
        e.stopPropagation()
    }

    return (
        <ModalBaseDiv tabIndex="-1" ref={baseRef} animate={animate} {...optionalProps} {...others}>
            <ModalBaseContent role="dialog" animate={animate} onClick={stopPropagation}>
                {children}
            </ModalBaseContent>
        </ModalBaseDiv>
    )
}

export default ModalBase