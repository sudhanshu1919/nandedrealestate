import React, { useState } from "react";
import ImageUploading from "react-images-uploading";
import uploadImg from "../../assets/images/upload_img.png";
function image() {
  const [images, setImages] = useState([]);
  const maxNumber = 10; // You can adjust this as needed

  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };
  return (
    <div>
      <div>
        <div>
          <h2>Photos</h2>
          <div>
            <ImageUploading
              multiple
              value={images}
              onChange={onChange}
              maxNumber={maxNumber}
              dataURLKey="data_url"
            >
              {({
                imageList,
                onImageUpload,
                onImageRemoveAll,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps,
              }) => (
                <div className="upload__image-wrapper">
                  <button
                    style={isDragging ? { color: "red" } : undefined}
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    Click or Drop here
                  </button>
                  &nbsp;
                  <button onClick={onImageRemoveAll}>Remove all images</button>
                  <div className="image-list">
                    {imageList.map((image, index) => (
                      <div key={index} className={styles.image_items}>
                        <img src={image["data_url"]} alt="" width="100" />
                        <div className="image-item__btn-wrapper">
                          <button onClick={() => onImageUpdate(index)}>
                            Update
                          </button>
                          <button onClick={() => onImageRemove(index)}>
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </ImageUploading>
          </div>
        </div>
      </div>
    </div>
  );
}

export default image;
