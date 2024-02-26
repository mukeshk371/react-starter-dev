import styled from "styled-components";

export const FormContainer = styled.div`
  width: 400px;
  margin: 0 auto;
`;

export const StepContainer = styled.div`
  display: ${(props) => (props.current ? "block" : "none")};
`;

export const StepHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
`;

export const FormButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ThankYouMessage = styled.p`
  font-size: 24px;
  text-align: center;
`;
