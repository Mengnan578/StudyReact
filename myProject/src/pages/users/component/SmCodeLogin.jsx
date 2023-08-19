import React, { useState } from 'react';
import IconsMap from 'components/IconsMap';
import { Button } from 'antd';
import { loginRule } from 'utils/rules';
export default function SmCodeLogin({ form, Input, FormItem }) {
  const [disabled, setDisabled] = useState(true);
  let [currenTime, setCurrentTime] = useState(5);
  const [currenStatus, setCurrentStatus] = useState(true);

  // 检测手机号码是否验证成功
  const checkMobile = async (val) => {
    try {
      const status = await form.validateFields(['mobile']);
      console.log(status);
      setDisabled(false);
    } catch (error) {
      setDisabled(true);
    }
  };

  const runTime = () => {
    const timer = setInterval(() => {
      if (currenTime === 0) {
        clearInterval(timer);
        setCurrentStatus(true);
        setDisabled(false);
        setCurrentTime(5);
        return
      }
      setCurrentTime(--currenTime);
    }, 1000);
  };

  const _sendSmCode = () => {
    setCurrentStatus(false);
    setDisabled(true);
    runTime();
  };
  return (
    <>
      <FormItem name="mobile" rules={loginRule.mobileRule} hasFeedback>
        <Input
          placeholder="请输入手機號碼"
          prefix={IconsMap.MobileOutlined}
          onChange={checkMobile}
        ></Input>
      </FormItem>
      <FormItem name="code" rules={loginRule.codeRule} hasFeedback>
        <Input
          placeholder="输入验证码"
          prefix={IconsMap.lockOutlined}
          addonAfter={
            <Button disabled={disabled} onClick={_sendSmCode}>
              {currenStatus ? '发送验证码' : `${currenTime}秒后重新发送`}
            </Button>
          }
        ></Input>
      </FormItem>
    </>
  );
}
