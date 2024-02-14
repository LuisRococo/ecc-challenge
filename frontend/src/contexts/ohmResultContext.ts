import React, { Dispatch, SetStateAction } from 'react';
import { IBandColor, IOhmResult } from '../hooks/useOhmCl';

interface IOhmResultContext {
  bandColors: IBandColor;
  result: IOhmResult | null;
  setResult: Dispatch<SetStateAction<IOhmResult | null>>;
  loadResult: () => void;
  setBandColors: Dispatch<SetStateAction<IBandColor>>;
}

export const OhmResultContext = React.createContext<IOhmResultContext | null>(
  null
);
