import { useState } from "react";

const images = [
  "https://via.placeholder.com/300",
  "https://via.placeholder.com/300/111",
  "https://via.placeholder.com/300/222"
];

export default function ImageSlideshow() {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <h2>Image Slideshow</h2>
      <img src={images[index]} />
      <br />
      <button onClick={() => setIndex((index + 2) % 3)}>Previous</button>
      <button onClick={() => setIndex((index + 1) % 3)}>Next</button>
    </div>
  );
}