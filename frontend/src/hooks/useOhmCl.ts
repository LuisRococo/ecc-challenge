import { useState } from 'react';
import { axiosInstance } from '../services/axiosConfig';

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

  const loadResult = async () => {
    try {
      const { data: result, status } = await axiosInstance.get(
        '/api/ohm-calculator',
        {
          params: bandColors,
        }
      );

      if (status !== 200) {
        alert('There was an error. Try again in other moment');
        return;
      }

      const { data } = result;

      if (!data) {
        alert('There was an error. Try again in other moment');
        return;
      }

      setResult({
        ohm: data.ohmValue,
        tolerance: data.tolerance,
      });
    } catch (error) {
      alert('There was an error. Try again in other moment');
    }
  };

  return { result, bandColors, setBandColors, setResult, loadResult };
};

export default useOhmCl;
