import { createRoot } from 'react-dom/client'
import React from 'react'
import GlobalStyles from './globalStyles/index.ts'
import App from "@src/App.tsx"
import store from '@src/store/index.tsx'
import { Provider } from 'react-redux'

const rootEl: HTMLElement | null = document.getElementById("root") as HTMLElement

const appRoot = createRoot(rootEl)

appRoot.render(
    <>
        <GlobalStyles />
        <Provider store={store}>
            <App />
        </Provider>
    </>
)