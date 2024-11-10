import styled from 'styled-components';

const StyledNavigationItem = styled.div`
  color: pink;
`;

export function NavigationItem() {
  return (
    <StyledNavigationItem>
      <h1>Welcome to NavigationItem!</h1>
    </StyledNavigationItem>
  );
}

export default NavigationItem;
