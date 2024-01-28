import { Affix } from '@casts/affix';
import { Button } from '@casts/button';
import {
  CdsColorSurfaceComponentDefault,
  CdsRadiusMedium,
  CdsSpace1X,
} from '@casts/theme';

const AffixBasicDemo = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: CdsColorSurfaceComponentDefault,
          height: '500px',
          borderRadius: CdsRadiusMedium,
          marginBottom: CdsSpace1X,
        }}
      ></div>
      <Affix>
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

export default AffixBasicDemo;
