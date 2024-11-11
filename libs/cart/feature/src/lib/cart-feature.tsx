import styled from 'styled-components';

const StyledFeature = styled.div`
  color: pink;
`;

export function CartFeature() {
  return (
    <StyledFeature>
      <h1>Welcome to Feature!</h1>
    </StyledFeature>
  );
}

export default CartFeature;
