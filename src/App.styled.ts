import { styled } from 'styled-components';
import { BREAKPOINTS } from './constants';

export const AppStyled = styled.div`
  font-family: 'Kavoon', cursive;
  background: ${({ theme }) => theme.palette.default.background1};
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh);
  p {
    font-family: 'Kavoon', cursive;
  }

  @media (max-width: ${BREAKPOINTS.small}) {
    padding: 0;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }
`;
