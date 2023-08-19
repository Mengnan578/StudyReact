export const loginRule = {
  userRule: [
    {
      required: true,
      message: '账户名不能为空',
    },
    {
      max: 16,
      message: '账户名长度过长',
    },
    {
      min: 4,
      message: '账户名过短',
    },
  ],
  passwordRule: [
    {
      required: true,
      message: '密码不能为空',
    },
    {
      max: 16,
      message: '密码长度过长',
    },
    {
      min: 4,
      message: '密码过短',
    },
  ],
  // 手机号码，自定义校验规则
  mobileRule: [
    {
      validator: (rule, val) => {
        const mobieReg = /^1[3456789]\d{9}$/;
        switch (true) {
          case !Boolean(val):
            return Promise.reject('手机号不能为空');
          case !mobieReg.test(val):
            return Promise.reject('手机号码格式不对');
          default:
            return Promise.resolve();
        }
      },
    },
  ],
  codeRule: [
    {
      required: true,
      message: '验证码不能为空',
    },
    {
      max: 6,
      message: '验证码长度不正确',
    },
  ],
};
