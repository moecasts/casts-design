// @ts-ignore example should import React
import React from 'react';
import { Carousel } from '@casts/carousel';
import { useConfig } from '@casts/config-provider';
import { Space } from '@casts/space';

const CarouselBasicDemo = () => {
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('carousel');

  return (
    <Space direction="vertical" size={16}>
      <Carousel>
        <div className={`${prefixCls}-slide`}>
          <img
            src="https://picsum.photos/800/400?random=1"
            alt="slide 1"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div className={`${prefixCls}-slide`}>
          <img
            src="https://picsum.photos/800/400?random=2"
            alt="slide 2"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div className={`${prefixCls}-slide`}>
          <img
            src="https://picsum.photos/800/400?random=3"
            alt="slide 3"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </Carousel>

      <Carousel fade>
        <div className={`${prefixCls}-slide`}>
          <img
            src="https://picsum.photos/800/400?random=4"
            alt="slide 4"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div className={`${prefixCls}-slide`}>
          <img
            src="https://picsum.photos/800/400?random=5"
            alt="slide 5"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div className={`${prefixCls}-slide`}>
          <img
            src="https://picsum.photos/800/400?random=6"
            alt="slide 6"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </Carousel>

      <Carousel autoplay>
        <div className={`${prefixCls}-slide`}>
          <img
            src="https://picsum.photos/800/400?random=4"
            alt="slide 4"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div className={`${prefixCls}-slide`}>
          <img
            src="https://picsum.photos/800/400?random=5"
            alt="slide 5"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div className={`${prefixCls}-slide`}>
          <img
            src="https://picsum.photos/800/400?random=6"
            alt="slide 6"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </Carousel>
    </Space>
  );
};

export default CarouselBasicDemo;
