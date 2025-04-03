import { Button } from "react-aria-components";
import styled, { css } from "styled-components";

interface StyledButtonProps {
  size?: "s" | "m";
  isOutline?: boolean;
  isSecondary?: boolean;
}

export const StyledButton = styled(Button)<StyledButtonProps>`
  color: ${({ theme }) => theme.colors.common.white};
  background-color: ${({ theme }) => theme.colors.primary.main};
  padding: ${({ theme }) => `${theme.paddings.m} ${theme.paddings.l}`};
  border-radius: ${({ theme }) => theme.border_radius.l};

  ${({ theme, isOutline, size, isSecondary }) => {
    if (size === "s")
      return css`
        font-size: 14px;
        padding: ${theme.paddings.s} ${theme.paddings.m};
      `;
    if (isOutline && !isSecondary)
      return css`
        background-color: ${theme.colors.common.white};
        color: ${theme.colors.primary.main};
        border-color: ${theme.colors.primary.main};

        & :hover,
        & :focus,
        & :active {
          color: ${theme.colors.primary.dark};
          border-color: ${theme.colors.primary.dark};
          background-color: ${theme.colors.primary.surface};
        }
      `;

    if (isSecondary) return css``;
  }}
`;
