import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    border-bottom: 3px solid transparent;
    border-top: 3px solid transparent;
    color: ${(props) => props.theme['gray-100']};
    display: flex;
    gap: 0.3rem;

    a {
      height: 3rem;
      width: 3rem;

      display: flex;
      align-items: center;
      justify-content: center;

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme['green-500']};
      }

      &:active {
        color: ${(props) => props.theme['green-500']};
      }
    }
  }
`
