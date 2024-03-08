import styled from "styled-components";

export const AdvancedMultiStepFormStyles = styled.div`
  .step-content {
    position: relative;

    &::after {
      background: #e9ecef;
      height: 10px;
      content: "";
      display: block;
      border-radius: 500px;
    }

    &::before {
      background: #0d6efd;
      width: 25px;
      height: 25px;
      content: "1";
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      border-radius: 50%;
    }

    &.step2 {
        &::before {
            left: 100%;
            content: "2";
        }
    }
  }
`;
