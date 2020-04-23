import styled from 'styled-components';

export const LoadingStyled = styled.div`
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    ${(props)=> {
        if(props.isLoading) {
            return `
                opacity: 1;
                visibility: visible;
            `
        } else {
            return `
                opacity: 0;
                visibility: hidden;
            `
        }
    }}
    background: rgba(0,0,0,.6);
    font-size: 28px;
    font-weight: 400;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`
