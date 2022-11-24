import styled from "styled-components"

export const Container = styled.ul`
    margin-top: 20px;

    li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: var(--list-color);

        & + li {
            margin-top: 15px;
        }
    }

    .title {
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        margin: 10px 0px;
        border: 2px solid var(--default-color);

        height: 40px;
        width: 100%;
        border-radius: 4px;
    }

    .progress {
        display: flex;
        align-items: center;

        .fail {
            color: var(--drag-reject);
            margin-right: 5px;
        }

        .success {
            color: var(--drag-active);
            margin-right: 5px;
        }
    }

`

export const FileInfo = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 46px;
        margin-right: 10px;
    }

    div {
        display: flex;
        flex-direction: column;

        span {
            font-size: 12px;
            color: var(--span-info);
            margin-top: 5px;

            button {
                border: 0px;
                background: transparent;
                color: var(--drag-reject);
                margin-left: 5px;
                cursor: pointer;
            }
        }
    }
`

export const Preview = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
`