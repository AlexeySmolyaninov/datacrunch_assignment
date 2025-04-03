import styled from "styled-components";
import { StyledButton } from "./components/StyledButton";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.gap.l};

  & button {
    flex: 1;
  }
`;

interface Props {
  resetInputs: () => void;
  onSubmit: () => void;
}

export const ButtonGroup = ({ resetInputs, onSubmit }: Props) => {
  return (
    <StyledWrapper>
      <StyledButton onPress={resetInputs} isOutline>
        Clear
      </StyledButton>
      <StyledButton onPress={onSubmit}>Submit</StyledButton>
    </StyledWrapper>
  );
};
