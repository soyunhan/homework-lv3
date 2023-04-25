import React, { useState } from "react";
import Stack from "../components/Stack/Stack";
import Button from "../components/button/Button";
import { Price, Normal } from "../components/input/input";

const FeatureInput = () => {
  const [form, setForm] = useState({
    name: "",
    price: "",
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();

    Object.values(form).filter((el) => el !== "").length === 0
      ? window.alert("이름과 가격 모두 입력해주세요.")
      : window.alert(`{ name: ${form.name}, price: ${form.price} }`);
  };

  return (
    <>
      <h1>Input</h1>
      <form onSubmit={onSubmitHandler}>
        <Stack gap={30}>
          <div>
            <label>이름</label>
            <Normal
              getValues={(v) => setForm((pre) => ({ ...pre, name: v }))}
            />
          </div>
          <div>
            <label>가격</label>
            <Price
              getValues={(v) => setForm((pre) => ({ ...pre, price: v.raw }))}
            />
          </div>

          <Button.Primary size="small">저장</Button.Primary>
        </Stack>
      </form>
    </>
  );
};

export default FeatureInput;
