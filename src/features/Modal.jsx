import React from "react";
import styled from "styled-components";
import Stack from "../components/Stack/Stack";
import Button from "../components/button/Button";
import { Root, Trigger, Portal, Overlay, Close, Content } from "../components/modal/Modal";

const FeatureModal = () => {
  return (
    <div>
      <h1>Modal</h1>
      <Stack gap={10}>
        <Root>
          <Trigger asChild>
            <Button.Primary>open modal</Button.Primary>
          </Trigger>
          <Portal>
            <Overlay />
            <ModalContent>
              <div>
                닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지
                않아요.
              </div>
              <ModalButtonSetter>
                <Close asChild>
                  <Button.Negative>닫기</Button.Negative>
                </Close>
                <Button.Primary
                  onClick={() => {
                    console.log("on!");
                  }}
                >
                  확인
                </Button.Primary>
              </ModalButtonSetter>
            </ModalContent>
          </Portal>
        </Root>
        <Root>
          <Trigger asChild>
            <Button.Negative size="large" outlined>
              open modal
            </Button.Negative>
          </Trigger>
          <Portal>
            <Overlay onClose />
            <MiniModalContent>
              <div>
                닫기 버튼 1개가 있고,
                <br />
                외부 영역을 누르면 모달이 닫혀요.
              </div>
              <ModalButtonSetterSecond>
                <Close asChild>
                  <StyledModalClose>X</StyledModalClose>
                </Close>
              </ModalButtonSetterSecond>
            </MiniModalContent>
          </Portal>
        </Root>
      </Stack>
    </div>
  );
};

export default FeatureModal;

const ModalContent = styled(Content)`
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  box-sizing: border-box;
  padding: 24px;
  background-color: #fff;
  width: 500px;
  height: 300px;
`;

const ModalButtonSetter = styled.div`
  position: absolute;
  bottom: 12px;
  right: 12px;
  display: flex;
  gap: 5px;
`;

const ModalButtonSetterSecond = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
`;

const StyledModalClose = styled.button`
  border: 1px solid #ddd;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  cursor: pointer;
  :hover {
    border: 1px solid #333;
  }
`;

const MiniModalContent = styled(Content)`
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  box-sizing: border-box;
  padding: 24px;
  background-color: #fff;
  width: 300px;
  height: 200px;
`;
