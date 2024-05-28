import React from 'react'
import styled from 'styled-components'
import MainHeader from '@src/components/modules/MainHeader.tsx'

interface iProps {
    children: React.ReactNode,
    className?: string,
}

const MainLayoutComp: React.ElementType = ({
    children, 
    className
}) => {

    return (
        <div className={className}>
            <MainHeader />
            {children}
        </div>
    )
}

const MainLayout = styled(MainLayoutComp)`
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(180deg, #070b41, #576dde);
    min-height: 100vh;
    width: 100%;
` as typeof MainLayoutComp


export default MainLayout