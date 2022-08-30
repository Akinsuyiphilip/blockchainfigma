/* -------------------------------------------------------------------------- /
/                             External Dependency                            /
/ -------------------------------------------------------------------------- */
import { createGlobalStyle } from "styled-components";

const theme = {};

const GlobalStyle = createGlobalStyle`
  :root {
    --c-black: #000000;
    --c-white: #FFFFFF;
  }
    @keyframes fadeInUp {
        0% {
            opacity: 0;
            transform: translateY(18px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    html,body {
        overflow-x: hidden;
        background-color: var(--c-white);
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-size: 16px;
        color: var(--c-black);
    }
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .animated {
        position: relative;
        animation-fill-mode: both;
        animation-duration: 0.8s;
    }
    -webkit-appearance: none;
    .fadeInUp {
        animation-name: fadeInUp;
    }
    .object-fit-cover {
        object-fit: cover;
    }
    .object-position-center {
        object-position: center;
    }
    .cursor-pointer {
        cursor: pointer;
    }
    .spacer-bottom {
        margin-bottom: 3rem;
    }
    .no-pointer-events {
        pointer-events: none;
    }
    .page-transition-enter {
        opacity: 0;
    }
    .page-transition-enter-active {
        opacity: 1;
        transition: opacity 300ms;
    }
    .page-transition-exit {
        opacity: 1;
    }
    .page-transition-exit-active {
        opacity: 0;
        transition: opacity 300ms;
    }
    `;
export default GlobalStyle;
export { theme };
