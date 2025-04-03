import { FileNameInput } from "./FileNameInput";
import styled from "styled-components";
import { FileSizeInputs } from "./FileSizeInputs";

const StyledWrapperInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.xl};
`;

interface Props {
  fileName: string;
  fileSize: number;
  setFileName: (fileName: string) => void;
  setFileSize: (fileSize: number) => void;
}

export const Inputs = ({
  fileName,
  setFileName,
  fileSize,
  setFileSize,
}: Props) => {
  return (
    <StyledWrapperInputs>
      <FileNameInput fileName={fileName} setFileName={setFileName} />
      <FileSizeInputs fileSize={fileSize} setFileSize={setFileSize} />
    </StyledWrapperInputs>
  );
};
