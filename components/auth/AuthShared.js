import styled from "styled-components/native";
import colors from "../../colors";

export const TextInput = styled.TextInput`
  background-color: ${colors.textColor};
  padding: 15px 7px;
  border-radius: 4px;
  color: white;
  margin-bottom: ${(props) => (props.lastOne ? "15" : 8)}px;
`;
