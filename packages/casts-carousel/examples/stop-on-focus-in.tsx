import React from 'react';
import { Carousel } from '@casts/carousel';
import { useConfig } from '@casts/config-provider';

const StopOnFocusInDemo = () => {
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
          height: '250px',
          backgroundColor: slide.color,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          padding: '20px',
        }}
      >
        <div style={{ fontSize: '24px', marginBottom: '20px' }}>
          {slide.text}
        </div>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
          <button
            style={{
              padding: '8px 16px',
              backgroundColor: '#fff',
              color: slide.color,
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            Button
          </button>
          <a
            href="https://example.com"
            style={{
              padding: '8px 16px',
              backgroundColor: '#fff',
              color: slide.color,
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            Link
          </a>
        </div>
        <input
          type="text"
          placeholder="Input"
          style={{
            padding: '8px',
            borderRadius: '4px',
            border: 'none',
            width: '200px',
          }}
        />
      </div>
    </div>
  );

  return (
    <Carousel
      style={{ maxWidth: '600px' }}
      autoplay
      autoplaySpeed={2000}
      stopOnFocusIn={true}
    >
      {slides.map(renderSlide)}
    </Carousel>
  );
};

export default StopOnFocusInDemo;
