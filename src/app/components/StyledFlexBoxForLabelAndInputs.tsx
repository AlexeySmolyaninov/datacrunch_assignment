import styled from "styled-components";

export const StyledFlexBoxForLabelAndInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.m};
`;
