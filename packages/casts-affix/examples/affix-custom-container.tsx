import { useRef } from 'react';
import { Affix } from '@casts/affix';
import { Button } from '@casts/button';
import {
  CdsColorSurfaceComponentDefault,
  CdsRadiusMedium,
  CdsSpace1X,
  CdsSpace05X,
} from '@casts/theme';

const AffixCustomContainerDemo = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <div
      style={{ height: '300px', overflow: 'auto', padding: CdsSpace05X }}
      ref={containerRef}
    >
      <div
        style={{
          backgroundColor: CdsColorSurfaceComponentDefault,
          height: '500px',
          borderRadius: CdsRadiusMedium,
          marginBottom: CdsSpace1X,
        }}
      ></div>
      <Affix container={() => containerRef.current}>
        <Button>affix</Button>
      </Affix>
      <div
        style={{
          backgroundColor: CdsColorSurfaceComponentDefault,
          height: '500px',
          borderRadius: CdsRadiusMedium,
          marginTop: CdsSpace1X,
        }}
      ></div>
    </div>
  );
};

export default AffixCustomContainerDemo;
