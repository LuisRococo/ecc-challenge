import React from 'react';
import styles from './FormulasPage.module.scss';
import Card from '../../components/Card/Card';
import FormulasTable from '../../components/FormulasTable/FormulasTable';
import transistorExample from '../../images/transitorExample.png';
import transistorCalculation from '../../images/resistorCalculation.png';

const FormulasPage = () => {
  return (
    <div className={styles['fm-page']}>
      <div className={styles.content}>
        <p className="text-center text-slate-700 mb-4">
          Each color band from the transistor represents a set of values. On the
          next table you can see those values.
        </p>

        <Card>
          <FormulasTable />
        </Card>

        <p className="text-center text-slate-700 mt-6 mb-4">
          Depending on the position of the color band, it is going to have
          different meanings.
        </p>

        <Card>
          <img src={transistorExample} alt="transistor color schema" />
        </Card>

        <p className="text-center text-slate-700 my-4">
          Let's see the next example.
        </p>

        <Card>
          <img
            src={transistorCalculation}
            alt="transistor calculation example"
          />
        </Card>

        <div className="text-center text-slate-700">
          <p className="my-4">
            What we did on the later example was first combine the digits/units
            that the first two bands represent. <u>Red = 2 and Orange = 3</u>.
            If we combine the two we get as result <strong>23</strong>.
          </p>
          <p className="mt-2">
            Then we multiplied that <strong>23</strong> by the multiplier value
            of the third band. <u>Orange = 1000</u>. That gives us as result the
            next equation.
          </p>

          <p className="mt-2 font-bold text-xl">23 x 1000 = 23000</p>

          <p className="mt-2">
            The fourth band band represents the tolerance. Since the band color
            is gold then its value is <strong>±5%</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormulasPage;
