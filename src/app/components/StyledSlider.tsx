import { Slider, SliderThumb, SliderTrack } from "react-aria-components";
import styled from "styled-components";
import { MAX_VALUE, MIN_VALUE } from "../FileSizeInputs";

const InternalStyledSlider = styled(Slider)`
  width: 300px;
  padding: ${({ theme }) => `0px ${theme.paddings.m}`};
`;

const StyledSliderTrack = styled(SliderTrack)<{ value: number }>`
  width: 100%;
  height: 4px;
  background-color: ${({ theme }) => theme.colors.grey[300]};
  border-radius: ${({ theme }) => theme.border_radius.l};

  &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: ${(props) => props.value}%;
    background: ${({ theme }) => theme.colors.primary.main};
    border-radius: ${({ theme }) => theme.border_radius.l};
  }
`;

const StyledSliderThumb = styled(SliderThumb)`
  width: 16px;
  height: 16px;
  background-color: ${({ theme }) => theme.colors.primary.main};
  border: ${({ theme }) => `2px solid ${theme.colors.grey[100]}`};
  border-radius: 50%;
  top: 50%;

  &:hover {
    box-shadow: 0 0 0 7px rgba(75, 122, 138, 0.14);
  }
`;

interface Props {
  fileSize: number;
  setFileSize: (fileSize: number) => void;
}
export const StyledSlider = ({ fileSize, setFileSize }: Props) => {
  const handleOnChange = (value: number | number[]) => {
    if (Array.isArray(value)) {
      setFileSize(value?.[0] ?? 0);
    } else {
      setFileSize(value);
    }
  };
  return (
    <InternalStyledSlider
      value={fileSize}
      minValue={MIN_VALUE}
      maxValue={MAX_VALUE}
      onChange={handleOnChange}
    >
      <StyledSliderTrack value={fileSize}>
        <StyledSliderThumb />
      </StyledSliderTrack>
    </InternalStyledSlider>
  );
};
