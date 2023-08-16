import React, { useState } from 'react';
import AccountLogin from './component/AccountLogin';
import SmCodeLogin from './component/SmCodeLogin';
import { Form, Input, Button, Row, Col } from 'antd';
import IconsMap from 'components/IconsMap';
import logoImg from '../../common/img/logo.svg';
import "./css/login.less"
const FormItem = Form.Item;

export default function Login() {
  const { form } = Form.useForm;
  const [type, setType] = useState(0);
  const submit = () => console.log(submit);
  const componentSelecter = (props) =>
    type === 0 ? <AccountLogin {...props} /> : <SmCodeLogin {...props} />;
  return (  
    <div className="form">
      <div className="logo">
        <img src={logoImg} alt="" />
        <span>人事管理系统</span>
      </div>
      <Form form={form} onFinish={submit}>
        {componentSelecter({ form, FormItem, Input })}
        <Row>
          <Button type="primary">登录</Button>
        </Row>
        <Row>
          <Col span={6}>忘记密码</Col>
          <Col span={18}>
            {!type ? '使用手机号进行登录' : '使用账户名进行登录'}
            {IconsMap.stepForwardOutlined}
          </Col>
        </Row>
      </Form>
    </div>
  );
}
