import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: 'Reploy',
      deployed: 'https://reploy.herokuapp.com/',
      github:"https://github.com/abjj1999/Job-Tracker"
    },
    {
      name: 'Move It!',
      deployed: 'https://nelliafc.github.io/HighLife/',
      github:'https://github.com/NelliaFC/HighLife'
    },
    {
      name: "J's Portfolio",
      deployed: 'https://itorres60.github.io/Js-Portfolio/',
      github:'https://github.com/itorres60/Js-Portfolio'
    },
    {
      name: 'Food Festival',
      deployed: 'https://itorres60.github.io/Food-festival/',
      github:'https://github.com/itorres60/Food-festival'
    },
    {
      name: 'Zoo Keepr',
      deployed: '',
      github:'https://github.com/itorres60/Zookeepr'
    },
    {
      name: 'Tech News',
      deployed: 'https://agile-caverns-16677.herokuapp.com/',
      github:'https://github.com/itorres60/Just-tech-news'
    }
  ]);

  const currentPhotos = photos;

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
      )}
        <div>
        <h3>Click on image for corresponding links</h3>
        </div>
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
