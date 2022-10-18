import React, { useState, useRef } from 'react';
import { Button } from '@casts/button';
import { Popup } from '@casts/popup';
import { Space } from '@casts/space';

const FitContentDemo = () => {
  const [visible] = useState(true);
  const [spanVisible, setVisible] = useState(false);
  const [content, setContent] = useState('这是popup内容');
  const btnClicksRef = useRef(0);

  const toggleContent = () => {
    btnClicksRef.current += 1;
    const showMore = btnClicksRef.current % 2 !== 0;
    setVisible(showMore);
    setContent(
      `this is popup content ${showMore ? '，and extra content....' : ''}`,
    );
  };
  return (
    <Space wrap>
      <div className="custom-popup-root"></div>
      <Popup
        content={content}
        trigger="manual"
        placement="bottom"
        visible={visible}
      >
        <Button onClick={toggleContent}>
          click to change content{spanVisible && <span>, again</span>}
        </Button>
      </Popup>
    </Space>
  );
};
export default FitContentDemo;
