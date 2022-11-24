import styled from 'styled-components'

export const Button = styled.button`
    height: 40px;
    width: 100%;
    margin-top: 20px;
    color: var(--bg-color);
    background: var(--btn-primary-color);
    border: 2px solid var(--btn-primary-color);
    border-radius: 4px;
    font-size: 16px;

    &:hover {
      background: var(--btn-secondary-color);
      border: 2px solid var(--btn-secondary-color);
      cursor: pointer;
    }

`