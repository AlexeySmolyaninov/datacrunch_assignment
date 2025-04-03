import { TextField } from "react-aria-components";
import styled from "styled-components";

export const StyledTextField = styled(TextField)`
  display: flex;
  flex-direction: column;
  width: 60%;
  gap: ${({ theme }) => theme.gap.m};

  input {
    color: ${({ theme }) => theme.colors.common.black};
    background-color: ${({ theme }) => theme.colors.common.white};
    border: ${({ theme }) => `1px solid ${theme.colors.grey[400]}`};
    border-radius: ${({ theme }) => theme.border_radius.l};
    padding: ${({ theme }) =>
      `${theme.paddings.m} ${theme.paddings.m} ${theme.paddings.m} ${theme.paddings.l}`};
  }

  & input::placeholder {
    color: ${({ theme }) => theme.colors.grey[600]};
  }

  & input:focus {
    border: ${({ theme }) => `2px solid ${theme.colors.primary.main}`};
  }

  & input:disabled {
    color: ${({ theme }) => theme.colors.grey[500]};
    background-color: ${({ theme }) => theme.colors.grey[50]};
    border: ${({ theme }) => `1px solid ${theme.colors.grey[400]}`};
  }
`;
