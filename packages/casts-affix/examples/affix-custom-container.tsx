import { useRef } from 'react';
import { Affix } from '@casts/affix';
import { Button } from '@casts/button';
import {
  TokenCdsColorSurfaceComponentDefault,
  TokenCdsRadiusMedium,
  TokenCdsSpace1X,
  TokenCdsSpace05X,
} from '@casts/theme';

const AffixCustomContainerDemo = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <div
      style={{ height: '300px', overflow: 'auto', padding: TokenCdsSpace05X }}
      ref={containerRef}
    >
      <div
        style={{
          backgroundColor: TokenCdsColorSurfaceComponentDefault,
          height: '500px',
          borderRadius: TokenCdsRadiusMedium,
          marginBottom: TokenCdsSpace1X,
        }}
      ></div>
      <Affix container={() => containerRef.current}>
        <Button>affix</Button>
      </Affix>
      <div
        style={{
          backgroundColor: TokenCdsColorSurfaceComponentDefault,
          height: '500px',
          borderRadius: TokenCdsRadiusMedium,
          marginTop: TokenCdsSpace1X,
        }}
      ></div>
    </div>
  );
};

export default AffixCustomContainerDemo;
