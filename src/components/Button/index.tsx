import { ButtonHTMLAttributes } from 'react';

import { ButtonContainerStyled } from './styles';

export const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <ButtonContainerStyled {...props} >
            {props.children}
        </ButtonContainerStyled>
    );
};