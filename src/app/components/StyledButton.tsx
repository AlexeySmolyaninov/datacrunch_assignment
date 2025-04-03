import { Button } from "react-aria-components";
import styled, { css } from "styled-components";

interface StyledButtonProps {
  size?: "s" | "m";
  isOutline?: boolean;
  isSecondary?: boolean;
}

export const StyledButton = styled(Button)<StyledButtonProps>`
  padding: ${({ theme }) => `${theme.paddings.m} ${theme.paddings.l}`};
  border-radius: ${({ theme }) => theme.border_radius.l};
  border: none;
  font-size: 16px;

  ${({ theme, isOutline, size, isSecondary }) => {
    const styles = [];
    if (size === "s")
      styles.push(css`
        font-size: 14px;
        padding: ${theme.paddings.s} ${theme.paddings.m};
      `);

    if (!isOutline) {
      if (isSecondary) {
        styles.push(css`
          background-color: ${theme.colors.grey[200]};
          color: ${theme.colors.common.black};

          &:hover,
          &:active,
          &:focus {
            background-color: ${theme.colors.grey[300]};
          }
        `);
        return styles;
      }
      styles.push(css`
        color: ${theme.colors.common.white};
        background-color: ${theme.colors.primary.main};

        &:hover,
        &:active,
        &:focus {
          background-color: ${theme.colors.primary.dark};
        }

        &:disabled {
          color: ${theme.colors.grey[500]};
          background-color: ${theme.colors.grey[200]};
        }
      `);
      return styles;
    }
    if (isOutline) {
      if (isSecondary) {
        styles.push(css`
          background-color: ${theme.colors.common.white};
          color: ${theme.colors.common.black};
          border: 1px solid ${theme.colors.grey[400]};

          &:hover,
          &:active,
          &:focus {
            border: 1px solid ${theme.colors.grey[500]};
          }

          &:disabled {
            color: ${theme.colors.grey[500]};
            border: 1px solid ${theme.colors.grey[300]};
          }
        `);
        return styles;
      }
      styles.push(css`
        color: ${theme.colors.primary.main};
        background-color: ${theme.colors.common.white};
        border: 1px solid ${theme.colors.primary.main};

        &:hover,
        &:active,
        &:focus {
          background-color: ${theme.colors.primary.surface};
          color: ${theme.colors.primary.dark};
          border: 1px solid ${theme.colors.primary.dark};
        }

        &:disabled {
          color: ${theme.colors.grey[500]};
          border: 1px solid ${theme.colors.grey[300]};
          background-color: ${theme.colors.common.white};
        }
      `);
      return styles;
    }
  }}
`;
