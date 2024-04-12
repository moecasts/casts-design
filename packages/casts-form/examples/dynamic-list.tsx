// @ts-ignore example should import React
import React from 'react';
import { Button } from '@casts/button';
import { Form, FormItem, FormList } from '@casts/form';
import { Col, Row } from '@casts/grid';
import { DeleteBackFill } from '@casts/icons';
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
      <FormList name="addresses">
        {(fields, { append, remove }) => (
          <>
            {fields.map((field, index: number) => (
              <FormItem key={field.id}>
                <Row gutter={8} style={{ flex: 1 }}>
                  <Col flex={1}>
                    <FormItem
                      name={`${field.name}.${index}.address` as const}
                      style={{ flex: 1 }}
                    >
                      <Input placeholder="请输入地址" />
                    </FormItem>
                  </Col>
                  <Col>
                    <FormItem>
                      <Button
                        icon={<DeleteBackFill />}
                        theme="danger"
                        pastel
                        onClick={() => remove(index)}
                      ></Button>
                    </FormItem>
                  </Col>
                </Row>
              </FormItem>
            ))}
            <FormItem>
              <Button onClick={() => append(' ')} pastel>
                Add address
              </Button>
            </FormItem>
          </>
        )}
      </FormList>

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
