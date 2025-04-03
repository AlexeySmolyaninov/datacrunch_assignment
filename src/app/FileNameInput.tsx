import { Input, Label } from "react-aria-components";
import { StyledTextField } from "./components/StyledTextField";

interface Props {
  fileName: string;
  setFileName: (fileName: string) => void;
  isDisabled?: boolean;
}

export const FileNameInput = ({
  fileName,
  setFileName,
  isDisabled = false,
}: Props) => {
  return (
    <StyledTextField
      value={fileName}
      onChange={setFileName}
      isDisabled={isDisabled}
    >
      <Label>Name</Label>
      <Input placeholder="enter text" />
    </StyledTextField>
  );
};
