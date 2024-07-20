import { Affix } from '@casts/affix';
import { Button } from '@casts/button';
import {
  TokenCdsColorSurfaceComponentDefault,
  TokenCdsRadiusMedium,
  TokenCdsSpace1X,
} from '@casts/theme';

const AffixBasicDemo = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: TokenCdsColorSurfaceComponentDefault,
          height: '500px',
          borderRadius: TokenCdsRadiusMedium,
          marginBottom: TokenCdsSpace1X,
        }}
      ></div>
      <Affix>
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

export default AffixBasicDemo;
