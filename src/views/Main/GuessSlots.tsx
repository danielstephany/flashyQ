import React from 'react'
import styled from 'styled-components'
import GuessSlotItem from './GuessSlotItem.tsx'

const GuessSlotsContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto;
`

const GuessSlotsSection = styled.div`
    display: inline-flex;
    margin: 16px;
`

const GuessSlots = () => {

    return (
        <GuessSlotsContainer>
            <GuessSlotsSection>
                <GuessSlotItem active={false}>P</GuessSlotItem>
                <GuessSlotItem active={true}>u</GuessSlotItem>
                <GuessSlotItem>r</GuessSlotItem>
                <GuessSlotItem>p</GuessSlotItem>
                <GuessSlotItem>l</GuessSlotItem>
                <GuessSlotItem>e</GuessSlotItem>
            </GuessSlotsSection>
            <GuessSlotsSection>
                <GuessSlotItem>M</GuessSlotItem>
                <GuessSlotItem>a</GuessSlotItem>
                <GuessSlotItem>r</GuessSlotItem>
                <GuessSlotItem>b</GuessSlotItem>
                <GuessSlotItem>l</GuessSlotItem>
                <GuessSlotItem>e</GuessSlotItem>
            </GuessSlotsSection>
        </GuessSlotsContainer>
    )
}

export default GuessSlots