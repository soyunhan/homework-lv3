import React, { useState } from "react";
import styled from "styled-components";

const PrimitiveInput = ({ value, ...restProps }) => {
  return <StyledInput {...restProps} value={value} type="text" />;
};

const NormalInput = ({ getValues }) => {
  const [value, setValue] = useState("");

  const onChangeHandler = (e) => {
    const { value } = e.target;
    setValue(value);
    getValues(value);
  };

  return <PrimitiveInput onChange={onChangeHandler} value={value} />;
};

const PriceFormatInput = ({ getValues }) => {
  const [value, setValue] = useState("0");

  const onChangeHandler = ({ target }) => {
    const regex = /[^0-9]/g; // 숫자 이외의 문자열을 찾는 정규식

    const rawValue = target.value.replaceAll(",", "");
    const formattedValue = new Intl.NumberFormat().format(
      target.value.replaceAll(",", "")
    );

    if (!regex.test(rawValue)) {
      setValue(formattedValue);
      getValues && getValues({ raw: rawValue, format: formattedValue });
    }
  };

  return <PrimitiveInput onChange={onChangeHandler} value={value} />;
};

const Price = PriceFormatInput;
const Normal = NormalInput;

export {Price, Normal}

const StyledInput = styled.input`
  border: 1px solid #333333;
  height: 40px;
  width: 200px;
  outline: none;
  border-radius: 8px;
  padding-left: 12px;
  padding-right: 12px;

  &:focus-within {
    box-shadow: 0 0 0 1px #000;
  }
`;
