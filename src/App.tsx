 import React, {useState} from 'react'
 import MainLayout from '@src/components/layouts/MainLayout.tsx'
 import Modal from '@src/components/modules/Modal/index.tsx'
import styled from 'styled-components'
const Box = styled.div`
    height: 500px;
    width: 300px;
    background: #fff;
`

const App = () => {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <MainLayout>
            <button onClick={handleClick}>test</button>
            <Modal open={open}>
                <Box>                    
                    <button onClick={handleClick}>Close</button>
                    <button>test</button>
                    <input />
                    <textarea></textarea>
                </Box>
            </Modal>
        </MainLayout>
    )
}

export default App