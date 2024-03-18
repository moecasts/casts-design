import { BaseComponentProps } from '@casts/common';

import { Points } from '../../types';

export type UseCurveEditorProps = BaseComponentProps & {
  points?: Points;
  onChange?: (points: Points) => void;
};

export type CurveEditorProps = UseCurveEditorProps;
