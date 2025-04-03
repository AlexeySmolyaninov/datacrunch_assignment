import {
  Button,
  Group,
  Input,
  Label,
  NumberField,
} from "react-aria-components";
import styled from "styled-components";
import { StyledFlexBoxForLabelAndInputs } from "./components/StyledFlexBoxForLabelAndInputs";
import { MinusIcon } from "./components/icons/MinusIcon";
import { PlusIcon } from "./components/icons/PlusIcon";
import { StyledSlider } from "./components/StyledSlider";

const sizeGBLabel = "Size (GB)";
export const MIN_VALUE = 0;
export const MAX_VALUE = 100;

const StyledFileSizeInputs = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.gap.m};
`;

const StyleGroup = styled(Group)`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.gap.m};
  padding: ${({ theme }) => theme.paddings.xs};
  border: ${({ theme }) => `1px solid ${theme.colors.grey[400]}`};
  border-radius: ${({ theme }) => theme.border_radius.m};

  &:focus {
    border-color: ${({ theme }) => theme.colors.grey[500]};
  }

  & input {
    width: 44px;
    outline: none;
    border: none;
    line-height: 20px;
    font-size: 14px;
    text-align: center;
  }

  & button {
    border: none;
    border-radius: ${({ theme }) => theme.border_radius.s};
    padding: ${({ theme }) => theme.paddings.xs};
    background-color: ${({ theme }) => theme.colors.grey[100]};
  }
`;

interface Props {
  fileSize: number;
  setFileSize: (fileSize: number) => void;
}
export const FileSizeInputs = ({ fileSize, setFileSize }: Props) => {
  return (
    <StyledFlexBoxForLabelAndInputs>
      <Label htmlFor="file_size">{sizeGBLabel}</Label>
      <StyledFileSizeInputs>
        <NumberField
          defaultValue={fileSize}
          minValue={MIN_VALUE}
          maxValue={MAX_VALUE}
          value={fileSize}
          onChange={(value) => setFileSize(value)}
        >
          <StyleGroup>
            <Button slot="decrement">
              <MinusIcon />
            </Button>
            <Input id="file_size" />
            <Button slot="increment">
              <PlusIcon />
            </Button>
          </StyleGroup>
        </NumberField>
        <StyledSlider fileSize={fileSize} setFileSize={setFileSize} />
        {/*<input
          type="range"
          id="cowbell"
          name="cowbell"
          min={MIN_VALUE}
          max={MAX_VALUE}
          value={fileSize}
          step="1"
          onChange={(event) => setFileSize(Number(event.target.value))}
        />*/}
      </StyledFileSizeInputs>
    </StyledFlexBoxForLabelAndInputs>
  );
};
