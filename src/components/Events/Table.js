import React from 'react';
import PropTypes from 'prop-types';

import TableRow from './TableRow';

const Table = ({ t, data }) => (
  <table>
    <tbody>
      {data.map((pair) => (
        <TableRow
          key={pair.label}
          t={t}
          format={pair.format}
          label={pair.label}
          link={pair.link}
          value={pair.value}
          photoGallery={pair.photoGallery}
        />
      ))}
    </tbody>
  </table>
);

Table.propTypes = {
  t: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    format: PropTypes.func,
    label: PropTypes.string.isRequired,
    link: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.number,
      PropTypes.string,
    ]),
    photoGallery: PropTypes.shape({
      folder: PropTypes.string,
      images: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number,
      })),
    }),
  })).isRequired,
};

export default Table;
