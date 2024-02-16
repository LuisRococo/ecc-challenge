import React from 'react';
import { bandSymbology } from '../../constants/bandSymbology';

const FormulasTable = () => {
  const formatBandTolerance = (tolerance: number | null) => {
    if (tolerance) return `±${tolerance}%`;
    return '-';
  };

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Color</th>
            <th>Unit</th>
            <th>Multiplier</th>
            <th>Tolerance</th>
          </tr>
        </thead>
        <tbody>
          {bandSymbology.map((bandColor, index) => (
            <tr>
              <th>{index + 1}</th>
              <td>{bandColor.color}</td>
              <td>{bandColor.unit !== null ? bandColor.unit : '-'}</td>
              <td>x {bandColor.multiplier}</td>
              <td>{formatBandTolerance(bandColor.tolerance)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FormulasTable;
