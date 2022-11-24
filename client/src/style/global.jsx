import { createGlobalStyle } from 'styled-components'

import 'react-circular-progressbar/dist/styles.css'

export default createGlobalStyle`
    * {
        margin: 0;
        padding:0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        font-family: 'Poppins', sans-serif;
        font-size: 14px;
        background: var(--body-bg-color);
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
    }

    html, body, #root {
        height: 100%;
    }

    button {
        cursor: pointer;
    }

    :root {
        --font-stack: "Helvetica";
        --body-bg-color: linear-gradient(90deg, rgba(250, 82, 82, 1) 0%, rgba(221, 36, 118, 1) 100%);
        --bg-color: #ebe8e8;
        --default-color: #d4d3d3;
        --drag-active: #228B22;
        --drag-reject: #A52A2A;
        --stroke-color: #b85dec;
        --btn-primary-color: #6909a1;
        --btn-secondary-color: #b85dec;
        --md-link: #222;
        --list-color: #444;
        --span-info: #999;
    }
`


