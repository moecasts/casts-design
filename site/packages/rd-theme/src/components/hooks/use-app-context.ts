import { useContext } from 'react';

import { AppContext } from '../store/context';

export const useAppContext = () => useContext(AppContext);
