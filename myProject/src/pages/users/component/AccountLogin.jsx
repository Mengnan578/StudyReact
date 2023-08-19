import React from 'react';
import IconsMap from 'components/IconsMap';
import { loginRule } from 'utils/rules';
export default function AccountLogin({ Input, FormItem }) {
  return (
    <>
      <FormItem name="accountName" rules={loginRule.userRule} hasFeedback>
        <Input placeholder="请输入账户名" prefix={IconsMap.userIcon}></Input>
      </FormItem>
      <FormItem name="password" rules={loginRule.passwordRule} hasFeedback>
        <Input
          placeholder="请输入账密码"
          prefix={IconsMap.lockOutlined}
        ></Input>
      </FormItem>
    </>
  );
}
