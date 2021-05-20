import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();
  const { REACT_APP_MY_DOB } = process.env;

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date(`${REACT_APP_MY_DOB}`);
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'countries',
    label: 'Countries visited',
    value: '29+ 🌎',
    // link: 'https://www.google.com/maps/d/u/0/embed?mid=1d2vKAh-tPA_816vL_mCKEhndRKmAClWN&ll=11.035653424967638%2C18.824795899107897&z=3',
    link: 'https://www.google.com/maps/d/u/0/embed?mid=1d2vKAh-tPA_816vL_mCKEhndRKmAClWN&usp=sharing&ll=11.035653424967638%2C18.824795899107897&z=3',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Torino, Italy',
  },
];

export default data;
