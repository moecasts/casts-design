import React from 'react';
import { Button } from '@casts/button';
import { Carousel } from '@casts/carousel';
import { useConfig } from '@casts/config-provider';

const CustomNavigatorsDemo = () => {
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
    <Carousel
      style={{ maxWidth: '600px' }}
      renderNavigators={({ prev, next, activeIndex, total }) => (
        <div
          style={{
            position: 'absolute',
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            marginTop: '12px',
            width: '100%',
            alignItems: 'center',
          }}
        >
          <Button pastel size="small" onClick={prev}>
            Prev
          </Button>
          <span>
            {activeIndex + 1} / {total}
          </span>
          <Button pastel size="small" onClick={next}>
            Next
          </Button>
        </div>
      )}
    >
      {slides.map(renderSlide)}
    </Carousel>
  );
};

export default CustomNavigatorsDemo;
