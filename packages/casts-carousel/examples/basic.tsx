// @ts-ignore example should import React
import React from 'react';
import { Carousel } from '@casts/carousel';
import { useConfig } from '@casts/config-provider';

const CarouselBasicDemo = () => {
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('carousel');

  const slides = [
    {
      id: 1,
      color: '#FF6B6B',
      text: 'Slide 1',
    },
    {
      id: 2,
      color: '#4ECDC4',
      text: 'Slide 2',
    },
    {
      id: 3,
      color: '#45B7D1',
      text: 'Slide 3',
    },
  ];

  const renderSlide = (slide: (typeof slides)[0]) => (
    <div className={`${prefixCls}-slide`} key={slide.id}>
      <div
        style={{
          width: '100%',
          height: '200px',
          backgroundColor: slide.color,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontSize: '24px',
        }}
      >
        {slide.text}
      </div>
    </div>
  );

  return (
    <Carousel style={{ maxWidth: '600px' }}>{slides.map(renderSlide)}</Carousel>
  );
};

export default CarouselBasicDemo;
