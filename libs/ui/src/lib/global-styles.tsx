import styled from 'styled-components';

const StyledGlobalStyles = styled.div`
  color: pink;
`;

export function GlobalStyles() {
  return (
    <StyledGlobalStyles>
      <h1>Welcome to GlobalStyles!</h1>
    </StyledGlobalStyles>
  );
}

export default GlobalStyles;
