import { Form } from "react-aria-components";
import styled from "styled-components";

export const StyledForm = styled(Form)`
  background-color: ${({ theme }) => theme.colors.common.white};
  border-radius: ${({ theme }) => theme.border_radius.l};
  border: 1px solid;
  padding: ${({ theme }) => theme.paddings.xl};
  border-color: ${({ theme }) => theme.colors.grey[300]};

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.xxl};
`;
