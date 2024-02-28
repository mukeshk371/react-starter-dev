import styled from "styled-components";

export const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const StepContainer = styled.div`
  display: ${(props) => (props.current ? "block" : "none")};
`;

export const StepHeader = styled.h2`
  margin-bottom: 20px;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
`;

export const FormButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
`;

export const ThankYouMessage = styled.div`
  font-size: 24px;
  text-align: center;
  margin-top: 20px;
`;

export const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 10px;
`;

export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 10px;
  background-color: #f8f9fa;
  margin-bottom: 20px;
  border-radius: 5px;
  overflow: hidden;
`;

export const ProgressBarFiller = styled.div`
  height: 100%;
  width: ${(props) => props.progress}%;
  background-color: #007bff;
`;

export const ProgressBarSteps = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const ProgressBarStep = styled.div`
  flex: 1;
  height: 10px;
  background-color: ${(props) => (props.active ? "#007bff" : "#ccc")};
`;

export const ProgressBarText = styled.div`
  font-size: 12px;
  text-align: center;
  color: #555;
`;
