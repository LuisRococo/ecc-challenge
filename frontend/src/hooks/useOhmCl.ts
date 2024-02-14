import { useState } from 'react';

export interface IOhmResult {
  ohm: number;
  tolerance: number;
}

export interface IBandColor {
  bandAColor: string;
  bandBColor: string;
  bandCColor: string;
  bandDColor: string;
}

const useOhmCl = () => {
  const [result, setResult] = useState<null | IOhmResult>(null);
  const [bandColors, setBandColors] = useState<IBandColor>({
    bandAColor: 'black',
    bandBColor: 'black',
    bandCColor: 'black',
    bandDColor: 'brown',
  });

  const loadResult = () => {
    // TODO: MAKE API CALL TO GET RESULT
    setResult({ ohm: 15000, tolerance: 0.25 });
  };

  return { result, bandColors, setBandColors, setResult, loadResult };
};

export default useOhmCl;
