import styled from 'styled-components';

interface ButtonProp {
    primary?: boolean
}

export const ButtonCustom = styled.button<ButtonProp>`
    background-color: ${props => props?.primary ? "red" : "gray"}
`;