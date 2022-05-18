import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = props => {
  const images = props.images.map(image => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="image-list">{images}</div>;
};

export default ImageList;

/*

React Refs give us access to the DOM

They are created in the constructor, assign them to instance variables, then pass to a particular JSX element as props.



*/
