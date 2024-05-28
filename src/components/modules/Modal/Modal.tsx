import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import ModalBase from './ModalBase.tsx'

const Modal: React.ElementType = ({ open, ...others }) => {
    const modalBaseBody = useRef(document.querySelector("body"))
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        if (open && !mounted) {
            setMounted(true)
        }
    }, [open])

    if (!mounted || !modalBaseBody.current) return null

    return (createPortal(
        <ModalBase
            {...{
                open,
                mounted,
                setMounted,
                ...others
            }}
        />, modalBaseBody.current))
}

export default Modal