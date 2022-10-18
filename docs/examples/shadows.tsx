import { Space } from '@casts/space';
import * as tokens from '@casts/theme';

import './shadows.scss';

const Shadows = () => {
  const levels = Array.from({ length: 5 }, (item, index) => index + 1);

  return (
    <Space size={[32, 64]} wrap>
      {levels.map((level) => (
        <div
          key={level}
          className={'demo-shadow-item'}
          style={{ boxShadow: tokens[`TokenCdsShadowLevel${level}`] }}
        >
          {`level-${level}`}
        </div>
      ))}
    </Space>
  );
};

export default Shadows;
