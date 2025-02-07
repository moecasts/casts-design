// @ts-ignore example should import React
import React from 'react';
import { Button } from '@casts/button';
import { Checkbox } from '@casts/checkbox';
import { Form, FormItem } from '@casts/form';
import { Input } from '@casts/input';
import { Space } from '@casts/space';

import './styles.scss';

const Demo = () => {
  return (
    <Form
      className="demo-form"
      onSubmit={(data) => {
        console.log('debug data', data);
      }}
    >
      <FormItem
        name="account"
        label="Account"
        rules={[
          {
            required: true,
            message:
              'This field is required and this is a long tips, This field is required and this is a long tips, This field is required and this is a long tips',
          },
          // {
          //   max: 6,
          //   status: 'warning',
          // },
          // {
          //   min: 2,
          //   status: 'warning',
          // },
        ]}
      >
        <Input placeholder="请输入用户名/邮箱" />
      </FormItem>
      <FormItem
        name="email"
        label="Email"
        rules={[
          {
            required: true,
          },
          {
            email: true,
          },
        ]}
      >
        <Input placeholder="邮箱" />
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
        </Space>
      </FormItem>
    </Form>
  );
};

export default Demo;
