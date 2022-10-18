import React from 'react';
import { pick } from './utils';
import { Icons } from './icons';
import { IconList } from './list';
import '@casts/icons/dist/esm/styles.scss';

const FillDemo = () => <IconList list={pick(Icons, ['fill'])} />;

export default FillDemo;
