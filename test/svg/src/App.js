import logo from "./logo.svg";
import styled from "styled-components";
import { ReactComponent as Korea } from "./kr.svg";

const Frame = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`;

function App() {
  return (
    <Frame>
      <Korea
        height="100vh"
        onMouseOver={(e) => {
          e.target.style.fill = "red";
        }}
        onMouseOut={(e) => {
          e.target.style.fill = "#7c7c7c";
        }}
      ></Korea>
    </Frame>
  );
}

export default App;
