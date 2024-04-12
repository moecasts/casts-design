import { useContext } from 'react';

import { AppContext } from '../context';

export const useAppContext = () => useContext(AppContext);
