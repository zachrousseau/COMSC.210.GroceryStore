'use client';

// components/ImageComponent.tsx

import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

interface ImageComponentProps {
  imageName: string; // Prop to specify the image name
}

const firebaseConfig = {
  apiKey: "AIzaSyDkEiScS3QUqfAui8URpkEngt85_ahopDM",
  authDomain: "grocerystore-38806.firebaseapp.com",
  projectId: "grocerystore-38806",
  storageBucket: "grocerystore-38806.appspot.com",
  messagingSenderId: "207254493702",
  appId: "1:207254493702:web:8584cd47e962f517318187",
  measurementId: "G-CH3DWTVX45"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const ImageComponent: React.FC<ImageComponentProps> = ({ imageName }) => {
  const [imageUrl, setImageUrl] = useState<string>('');

  useEffect(() => {
    // Fetch the image URL from Firebase Storage
    const fetchImageUrl = async () => {
      const storage = firebase.storage();
      const storageRef = storage.ref();
      const imageRef = storageRef.child(imageName); // Use the provided imageName prop
      try {
        const url = await imageRef.getDownloadURL();
        setImageUrl(url);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImageUrl();
  }, [imageName]); // Run this effect whenever imageName changes

  return (
    <div>
      {imageUrl && <img src={imageUrl} alt="Image" />} {/* Use alt text "Image" or customize as needed */}
    </div>
  );
}

export default ImageComponent;