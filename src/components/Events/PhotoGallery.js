import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
// import { photos } from './photos';

const PhotoGallery = (props) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  // const folder = 'Festa fine 50 anni Marco - 5 Settembre 2021';
  const { folder } = props.data;
  const { images } = props.data;
  const photos = images.map((image) => ({
    src: `/events/${folder}/${image.name}`,
    width: image.width,
    height: image.height,
  }));

  const openLightbox = useCallback((event, { index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
};

PhotoGallery.propTypes = {
  data: PropTypes.shape({
    folder: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      width: PropTypes.number,
      height: PropTypes.number,
    })),
  }).isRequired,
};

export default PhotoGallery;
