// @ts-ignore example should import React
import React, { useState } from 'react';
import { Button, ButtonGroup } from '@casts/button';
import { Checkbox } from '@casts/checkbox';
import { Form, FormItem } from '@casts/form';
import { Input } from '@casts/input';
import { Space } from '@casts/space';

import './styles.scss';

enum LayoutEnum {
  Inline = 'inline',
  Horizontal = 'horizontal',
  Vertical = 'vertical',
}
const LayoutDemo = () => {
  const [currentLayout, setLayout] = useState(LayoutEnum.Horizontal);

  return (
    <Space
      direction="vertical"
      style={{ width: '100%' }}
      align="center"
      size={40}
    >
      <ButtonGroup>
        {Object.values(LayoutEnum).map((layout) => (
          <Button
            key={layout}
            onClick={() => setLayout(layout)}
            theme={currentLayout === layout ? 'brand' : 'neutral'}
            pastel
          >
            {layout}
          </Button>
        ))}
      </ButtonGroup>
      <Form
        className="demo-form"
        layout={currentLayout}
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
          <Space size={24}>
            <Button type="submit">Submit</Button>
            <Button theme="neutral" type="reset" pastel>
              Reset
            </Button>
          </Space>
        </FormItem>
      </Form>
    </Space>
  );
};

export default LayoutDemo;
