import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withI18n } from 'react-i18next';

import Table from './Table';
import initialData from '../../data/stats/site';

const Stats = ({ t }) => {
  const [data, setResponseData] = useState(initialData);
  // TODO think about persisting this somewhere
  const fetchData = useCallback(async () => {
    // request must be authenticated if private
    const res = await fetch(
      'https://api.github.com/repos/marcolino/personal-site',
    );
    const resData = await res.json();
    setResponseData(
      initialData.map((field) => ({
        ...field,
        // update value if value was returned by call to github
        value: Object.keys(resData).includes(field.key)
          ? resData[field.key]
          : field.value,
      })),
    );
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <h3>{t('Some stats about this site')}</h3>
      <Table data={data} />
    </div>
  );
};

Stats.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withI18n()(Stats);
