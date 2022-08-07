import styled from "styled-components";

export const SignInContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
  width: 900px;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
