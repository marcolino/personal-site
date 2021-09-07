import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons/faEye';
import Modal from 'react-modal';
import PhotoGallery from './PhotoGallery';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxHeight: '100vh', // the height of the viewport
  },
  scroller: {
    overflowY: 'auto',
  },
};

/* eslint-disable react/jsx-indent */
const TableRow = ({
  t, label, link, value, format, photoGallery,
}) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  /* eslint-disable no-console */
  // console.log('TableRow photoGallery:', photoGallery);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <tr>
      <td width="60%">{link ? <a href={link}>{format(label)}</a> : format(label)}</td>
      <td>{link ? <a href={link}>{format(value)}</a> : format(value)}</td>
      {photoGallery
        ? <td>
            {<i onClick={() => openModal()}>
              <FontAwesomeIcon icon={faEye} />
             </i>}
            {<Modal
              ariaHideApp={false}
              isOpen={modalIsOpen}
              onRequestClose={() => closeModal()}
              style={customStyles}
              contentLabel={t('Photo Gallery')}
            >
              <div style={customStyles.scroller}>
                <PhotoGallery data={photoGallery} />
                <button type="button" onClick={closeModal}>{t('Close')}</button>
              </div>
             </Modal>}
          </td>
        : <td />}
    </tr>
  );
};

TableRow.propTypes = {
  t: PropTypes.func,
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
};

TableRow.defaultProps = {
  t: (x) => x,
  format: (x) => x,
  link: null,
  value: null,
  photoGallery: null,
};

export default TableRow;
