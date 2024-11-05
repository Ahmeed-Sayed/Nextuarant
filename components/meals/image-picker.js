"use client";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";
function ImagePicker({ name }) {
  const inputRef = useRef();
  const [pickedImage, setPickedImage] = useState(null);
  function handlePickerClick() {
    inputRef.current.click();
  }
  function handleFileChange(event) {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }
    const reader = new FileReader();
    reader.onload = (event) => {
      setPickedImage(event.target.result);
    };
    reader.readAsDataURL(file);
  }

  return (
    <main className={classes.picker}>
      <div className={classes.control}>
        <div className={classes.preview}>
          {pickedImage ? (
            <Image src={pickedImage} alt="picked image" fill />
          ) : (
            <p>No image picked yet.</p>
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          accept="image/png, image/jpeg,"
          id={name}
          name={name}
          ref={inputRef}
          onChange={handleFileChange}
          required
        />
        <button
          type="button"
          onClick={handlePickerClick}
          className={classes.button}
        >
          Pick Your Image
        </button>
      </div>
    </main>
  );
}

export default ImagePicker;
