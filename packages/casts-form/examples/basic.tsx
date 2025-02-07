// @ts-ignore example should import React
import React from 'react';
import { Button } from '@casts/button';
import { Checkbox } from '@casts/checkbox';
import { Form, FormItem } from '@casts/form';
import { Input } from '@casts/input';
import { Space } from '@casts/space';

import './styles.scss';

const BasicDemo = () => {
  return (
    <Form
      className="demo-form"
      onSubmit={(data) => {
        console.log('debug data', data);
      }}
    >
      <FormItem name="account" label="Account">
        <Input placeholder="请输入用户名/邮箱" />
      </FormItem>
      <FormItem name="password" label="Password">
        <Input name="password" type="password" placeholder="请输入密码" />
      </FormItem>
      <FormItem name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </FormItem>
      <FormItem>
        <Space size={24} direction="vertical" style={{ width: '100%' }}>
          <Button type="submit" block>
            Submit
          </Button>
          {/* <Button theme="neutral" type="reset" pastel> */}
          {/*   Reset */}
          {/* </Button> */}
        </Space>
      </FormItem>
    </Form>
  );
};

export default BasicDemo;
