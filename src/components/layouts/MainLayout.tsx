import React from 'react'
import styled from 'styled-components'

interface iProps {
    topContent: React.ReactNode,
    middleContent: React.ReactNode,
    bottomContent: React.ReactNode,
    className?: string,
}

const MainLayoutComp: React.ElementType = ({
    className,
    topContent,
    middleContent, 
    bottomContent
}: iProps) => {

    return (
        <div className={className}>
            {topContent ? topContent : null}
            <div className='main-layout__main-content'>
                {middleContent ? middleContent : null}
            </div>            
            {bottomContent ? bottomContent : null}
        </div>
    )
}

const MainLayout = styled(MainLayoutComp)`
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(180deg, #070b41, #576dde);
    min-height: 100vh;
    min-height: 100dvh;
    width: 100%;
    max-width: 100%;
    .main-layout__main-content {
        display: flex;
        flex-direction: column;
        margin: auto;
        max-width: 100%;
        overflow: hidden;
    }
` as typeof MainLayoutComp


export default MainLayout