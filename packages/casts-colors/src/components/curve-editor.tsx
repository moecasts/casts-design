import { forwardRef, Fragment, Ref } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { clampNumber } from '@casts/common';
import type { FC, HTMLProps, ReactNode } from 'react';

import { useCurveEditor } from './hooks';
import { CurveEditorProps } from './types';

import './styles/curve-editor.scss';

export type Position = { top: number; left: number };

type ComponentProps = HTMLProps<HTMLDivElement> & {
  onMove: (position: Position) => void;
  clampPosition?: boolean;
  children?: ReactNode;
};

const Interaction: FC<ComponentProps> = ({
  clampPosition = true,
  children,
  onMove,
  ...props
}) => {
  const [isPointerDown, setPointerDown] = useState(false);
  const interactionRef = useRef<HTMLDivElement>(null);

  const getPosition = useCallback(
    (event: PointerEvent | React.PointerEvent<HTMLDivElement>) => {
      const interactionRect = interactionRef.current!.getBoundingClientRect();
      const { top, left, width, height } = interactionRect;
      const { pageXOffset, pageYOffset } = window;
      const { pageX, pageY } = event;

      const position = {
        top: ((pageY - (top + pageYOffset)) / height) * 100,
        left: ((pageX - (left + pageXOffset)) / width) * 100,
      };

      return clampPosition
        ? {
            top: clampNumber(position.top, 0, 100),
            left: clampNumber(position.left, 0, 100),
          }
        : position;
    },
    [clampPosition],
  );

  const handlePointerMove = useCallback(
    (event: PointerEvent) => {
      if (isPointerDown) {
        onMove(getPosition(event));
        event.preventDefault();
      }
    },
    [isPointerDown, getPosition, onMove],
  );

  useEffect(() => {
    const handlePointerUp = () => setPointerDown(false);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointermove', handlePointerMove);

    return () => {
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, [handlePointerMove]);

  return (
    <div
      ref={interactionRef}
      onPointerDown={(event) => {
        onMove(getPosition(event));
        setPointerDown(true);
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export const CurveEditor = forwardRef(
  (props: CurveEditorProps, ref: Ref<HTMLDivElement>) => {
    const {
      classes,
      gridClasses,
      curveClasses,
      interactionClasses,
      handleClasses,
      points,
      handleChange,
    } = useCurveEditor(props);

    const [activePoint, setActivePoint] = useState<number | null>(null);
    const pathProps = { vectorEffect: 'non-scaling-stroke' };
    const [x1, y1, x2, y2] = points.map((point, index) => {
      return (index % 2 ? 1 - point : point) * 100;
    });

    const handleInteractionMove = ({ top, left }: Position) => {
      if (activePoint === null) {
        return;
      }
      const [x1, y1, x2, y2] = points;
      const x = Math.round(left) / 100;
      const y = Math.round(100 - top) / 100;

      handleChange(activePoint ? [x1, y1, x, y] : [x, y, x2, y2]);
    };

    useEffect(() => {
      const handlePointerUp = () => setActivePoint(null);
      window.addEventListener('pointerup', handlePointerUp);
      return () => window.removeEventListener('pointerup', handlePointerUp);
    }, []);

    return (
      <div className={classes} ref={ref}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <g className={gridClasses}>
            {[25, 50, 75].map((point, index) => (
              <Fragment key={index}>
                <path d={`M ${point},0 L ${point},100`} {...pathProps} />
                <path d={`M 0,${point} L 100,${point}`} {...pathProps} />
              </Fragment>
            ))}
          </g>
          <path d={`M 0,100 L ${x1},${y1}`} {...pathProps} />
          <path d={`M 100,0 L ${x2},${y2}`} {...pathProps} />
          <path
            d={`M 0,100 C ${x1},${y1} ${x2},${y2} 100,0`}
            className={curveClasses}
            {...pathProps}
          />
        </svg>
        <Interaction
          className={interactionClasses}
          onMove={handleInteractionMove}
        >
          {[
            [x1, y1],
            [x2, y2],
          ].map(([x, y], index) => (
            <div
              onPointerDown={() => setActivePoint(index)}
              style={{ top: y + '%', left: x + '%' }}
              className={handleClasses}
              key={index}
            />
          ))}
        </Interaction>
      </div>
    );
  },
);

CurveEditor.displayName = 'CurveEditor';
