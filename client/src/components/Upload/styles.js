import styled, { css } from 'styled-components'

const dragActive = css `
    border-color: var(--drag-active);
`
const dragReject = css `
    border-color: var(--drag-reject);
`

export const DropContainer = styled.div.attrs({
    className: 'dropzone'
})`
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    font-size: 30px;
    border: 3px dashed var(--default-color);
    border-radius: 4px;
    cursor: pointer;

    transition: height 0.2s ease;

    ${props => props.isDragActive && dragActive};
    ${props => props.isDragReject && dragReject};
`

const messageColors = {
    default: 'var(--default-color)',
    error: 'var(--drag-reject)',
    success: 'var(--drag-active)',
}

export const UploadMessage = styled.p`
    display: flex;
    color: ${props => messageColors[props.type || 'default']};
    justify-content: center;
    align-items: center;
    padding: 15px 0px;
`