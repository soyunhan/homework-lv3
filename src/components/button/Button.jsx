import React from "react";
import styled, { css } from "styled-components";

const PrimitiveButton = ({ children, rightSlot, ...restProps }) => {
  return (
    <StyledButton {...restProps}>
      {rightSlot ? (
        <ButtonInner>
          <>{children}</>
          <>{rightSlot}</>
        </ButtonInner>
      ) : (
        <>{children}</>
      )}
    </StyledButton>
  );
};

const PrimaryButton = (props) => {
  return (
    <PrimitiveButton
      {...props}
      bc="#55efc4"
      color="#000000"
      activeBc="#00b894"
    />
  );
};

const NegativeButton = (props) => {
  return (
    <PrimitiveButton
      {...props}
      bc="#fab1a0"
      color="#d63031"
      activeBc="#e17055"
    />
  );
};

const Primary = PrimaryButton;
const Negative = NegativeButton;

const Button = { Negative, Primary };
export default Button;

const StyledButton = styled.button`
  border: none;
  cursor: pointer;

  border-radius: 8px;
  background-color: ${({ bc }) => bc};
  color: ${({ color }) => color};
  font-weight: ${({ fw }) => fw};

  &:active {
    background-color: ${({ activeBc }) => activeBc};
  }

  ${({ size }) => {
    switch (size) {
      case "large":
        return css`
          height: 50px;
          width: 200px;
        `;
      case "medium":
        return css`
          height: 45px;
          width: 130px;
        `;
      case "small":
        return css`
          height: 40px;
          width: 100px;
        `;
      default:
        return css`
          height: 30px;
          width: 100px;
        `;
    }
  }}

  ${({ outlined, bc }) => {
    if (outlined) {
      return css`
        border: 3px solid ${bc};
        background-color: #fff;
        font-weight: 600;

        &:active {
          background-color: #eeeeee;
        }
      `;
    }
  }}
`;

const ButtonInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
`;
