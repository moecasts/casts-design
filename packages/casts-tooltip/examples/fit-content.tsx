// @ts-ignore example should import React
import React, { useRef, useState } from 'react';
import { Button } from '@casts/button';
import { Space } from '@casts/space';
import { Tooltip } from '@casts/tooltip';

const FitContentDemo = () => {
  const [visible] = useState(true);
  const [spanVisible, setVisible] = useState(false);
  const [content, setContent] = useState('这是tooltip内容');
  const btnClicksRef = useRef(0);

  const toggleContent = () => {
    btnClicksRef.current += 1;
    const showMore = btnClicksRef.current % 2 !== 0;
    setVisible(showMore);
    setContent(
      `this is tooltip content ${showMore ? '，and extra content....' : ''}`,
    );
  };
  return (
    <Space wrap>
      <div className="custom-tooltip-root"></div>
      <Tooltip
        content={content}
        trigger="manual"
        placement="bottom"
        visible={visible}
      >
        <Button onClick={toggleContent}>
          click to change content{spanVisible && <span>, again</span>}
        </Button>
      </Tooltip>
    </Space>
  );
};
export default FitContentDemo;
