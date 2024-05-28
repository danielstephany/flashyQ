import { createGlobalStyle } from "styled-components"
import { noralize } from "./normalize.ts"
import { base } from "./base.ts"
import { type } from "./type.ts"

const GlobalStyles = createGlobalStyle`
    ${noralize}
    ${base}
    ${type}
`

export default GlobalStyles