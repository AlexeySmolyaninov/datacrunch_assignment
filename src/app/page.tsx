"use client";
import { styled, ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle";
import { useState } from "react";
import { StyledForm } from "./components/StyledForm";
import { Inputs } from "./Inputs";
import { ButtonGroup } from "./ButtonGroup";

const MainView = styled.div`
  height: 100vh;
  background: ${({ theme }) => theme.colors.grey[100]};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  const [fileName, setFileName] = useState<string>("");
  const [fileSize, setFileSize] = useState<number>(0);

  const resetInputs = () => {
    setFileName("");
    setFileSize(0);
  };

  const onSubmit = () => {
    if (!fileName) {
      alert("You didn't specified file name");
      return;
    }
    if (fileSize <= 0) {
      alert("Your file seems to be empty");
      return;
    }

    alert(
      `Your file "${fileName}" of size ${fileSize} GB yas been successfully uploaded`
    );
    resetInputs();
  };
  return (
    <MainView>
      <StyledForm>
        <Inputs
          fileName={fileName}
          setFileName={setFileName}
          fileSize={fileSize}
          setFileSize={setFileSize}
        />
        <ButtonGroup resetInputs={resetInputs} onSubmit={onSubmit} />
      </StyledForm>
    </MainView>
  );
};

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  );
}
