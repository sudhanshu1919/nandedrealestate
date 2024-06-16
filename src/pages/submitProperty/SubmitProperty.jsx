import React, { useState } from "react";
import styles from "./Submit.module.css";
import GoToTop from "../../components/GoToTop";
import ImageUploading from "react-images-uploading";

function SubmitProperty() {
  const [formData, setFormData] = useState({
    propertyDetail: "",
    propertyType: "",
    location: "",
    projectName: "",
    bedrooms: "",
    balconies: "",
    bathrooms: "",
    floorNo: "",
    totalFloor: "",
    direction: "",
    furnitureStatus: "",
    carpetArea: "",
    possessionStatus: "",
    expectedPrice: "",
    monthlyRent: "",
    securityAmount: "",
    maintenanceCharges: "",
  });

  const [images, setImages] = useState([]);
  const maxNumber = 10;
  const maxFileSize = 100 * 1024;

  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    console.log({ ...formData, images });
  };
  const [ptype, setPtype] = useState({
    flat: "none",
    house: "none",
    plot: "none",
    land: "none",
    shop: "none",
  });

  return (
    <div className={`container mb-4 ${styles.main}`}>
      <div className={styles.heading}>
        Submit Property
        <hr />
      </div>

      <div className={styles.intro}>
        <h4>Sell or Rent your Property</h4>
        <span className={styles.span}>
          You are posting this property for{" "}
          <span className={styles.free}>FREE!</span>
        </span>
      </div>

      <div className={styles.item}>
        <lable className={styles.field}>Propety Details: </lable>

        <div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="propertyDetail"
              id="sale"
              value="sale"
              onChange={handleInputChange}
            />
            <label class="form-check-label" for="sale">
              Sale
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              id="rent"
              name="propertyDetail"
              value="rent"
              onChange={handleInputChange}
            />
            <label class="form-check-label" for="rent">
              Rent
            </label>
          </div>
        </div>
      </div>

      <div className={styles.item}>
        <label className={styles.field}>Property Type:</label>

        <select
          className={styles.select}
          name="propertyType"
          onChange={handleInputChange}
        >
          <option selected>Please Select</option>
          <option value="flat">flat/Aprtment</option>
          <option value="house">Residential House</option>
          <option value="shop">Shop</option>
          <option value="plot">Plot</option>
          <option value="land">Land</option>
        </select>
      </div>

      {/* group container start */}
      <div>
        <div className={styles.container}>
          <div className={styles.item}>
            <label className={styles.field}>Location: </label>
            <input type="text" name="location" onChange={handleInputChange} />
          </div>
        </div>

        <div className={styles.container} style={{ display: ptype.flat }}>
          <div className={styles.item}>
            <label className={styles.field}>Name of Project/Society </label>
            <select
              className={styles.select}
              name="projectName"
              onChange={handleInputChange}
            >
              <option selected>Please Select</option>
              <option value="1">Anand Nagar</option>
              <option value="2">Chaitany Nagar</option>
              <option value="3">D-Mart, Wadi</option>
              <option value="4">Malegon Road</option>
              <option value="5+">Cidco</option>
            </select>
          </div>
        </div>
      </div>

      {/* group conainer start*/}

      <div>
        <div className={styles.container}>
          <div className={styles.item}>
            <label className={styles.field}>Bedrooms</label>
            <select
              className={styles.select}
              name="bedrooms"
              onChange={handleInputChange}
            >
              <option selected>Please Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5+">5+</option>
            </select>
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.item}>
            <label className={styles.field}>Balconies</label>
            <select
              className={styles.select}
              name="balconies"
              onChange={handleInputChange}
            >
              <option selected>Please Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5+">5+</option>
            </select>
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.item}>
            <label className={styles.field}>BathRooms</label>
            <select
              className={styles.select}
              name="bathrooms"
              onChange={handleInputChange}
            >
              <option selected>Please Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5+">5+</option>
            </select>
          </div>
        </div>
      </div>

      {/* group container start 2 */}
      <div>
        <div className={styles.container}>
          <div className={styles.item}>
            <label className={styles.field}>Floor No </label>
            <select
              className={styles.select}
              name="floorNo"
              onChange={handleInputChange}
            >
              <option selected>Please Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option> <option value="6">6</option>{" "}
              <option value="7">7</option> <option value="8">8</option>
              <option value="9">9</option> <option value="10+">10+</option>
            </select>
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.item}>
            <label className={styles.field}>Total Floor </label>
            <select
              className={styles.select}
              name="totalFloor"
              onChange={handleInputChange}
            >
              <option selected>Please Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option> <option value="6">6</option>{" "}
              <option value="7">7</option> <option value="8">8</option>
              <option value="9">9</option> <option value="10+">10+</option>
            </select>
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.item}>
            <label className={styles.field}>Direction </label>
            <select
              className={styles.select}
              name="direction"
              onChange={handleInputChange}
            >
              <option selected>Please Select</option>
              <option value="East">East</option>
              <option value="West">West</option>
              <option value="South">South</option>
              <option value="North">North</option>
              <option value="NE">NE</option> <option value="NW">NW</option>{" "}
              <option value="SW">SW</option> <option value="SE">SE</option>
            </select>
          </div>
        </div>
      </div>

      <div className={styles.item}>
        <label className={styles.field}>Furniture Status </label>
        <div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="furnitureStatus"
              id="furniture1"
              value="Furnished"
              onChange={handleInputChange}
            />
            <label class="form-check-label" for="furniture1">
              Furnished
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="furnitureStatus"
              id="unfurnished"
              value="Unfurnished"
              onChange={handleInputChange}
            />
            <label class="form-check-label" for="unfurnished">
              Unfurnished
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="furnitureStatus"
              id="semi_furnished"
              value="Semi-Furnished"
              onChange={handleInputChange}
            />
            <label class="form-check-label" for="semi_furnished">
              Semi-Furnished
            </label>
          </div>
        </div>
      </div>

      <div className={styles.item}>
        <label className={styles.field}>Carpet Area</label>
        <input
          type="text"
          name="carpetArea"
          onChange={handleInputChange}
        />{" "}
        Sqft
      </div>

      <div className={styles.item}>
        <label>Possesstion Status</label>

        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="possessionStatus"
            id="under_construction"
            value="Under Construction"
            onChange={handleInputChange}
          />
          <label class="form-check-label" for="under_construction">
            Under Construction
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="possessionStatus"
            id="ready_to_move"
            value="Ready to Move"
            onChange={handleInputChange}
          />
          <label class="form-check-label" for="ready_to_move">
            Ready to Move
          </label>
        </div>
      </div>

      <div>
        <h5 className={styles.field}>Price Details</h5>
        <div className={styles.item}>
          Expected Price{" "}
          <input
            type="text"
            name="expectedPrice"
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div>
        <h5 className={styles.field}>Rent/ Lease Details</h5>
        <div className={`${styles.item} `}>
          <div>
            Monthly Rent <br></br>
            <input
              type="text"
              name="monthlyRent"
              onChange={handleInputChange}
            />
          </div>
          <div>
            Security Amount <br></br>
            <input
              type="text"
              name="securityAmount"
              onChange={handleInputChange}
            />
          </div>
          <div>
            Maintenance Charges Monthly <br></br>{" "}
            <input
              type="text"
              name="maintenanceCharges"
              onChange={handleInputChange}
            />{" "}
          </div>
        </div>
      </div>

      <div>
        <div>
          <h2>Photos</h2>
          <div>
            <ImageUploading
              multiple
              value={images}
              onChange={onChange}
              maxNumber={maxNumber}
              maxFileSize={maxFileSize}
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
                errors,
              }) => (
                <div className={styles.uploadImageWrapper}>
                  <button
                    className={styles.mainBtns}
                    style={isDragging ? { color: "red" } : undefined}
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    Select images
                  </button>
                  &nbsp;
                  <button
                    className={styles.mainBtns}
                    onClick={onImageRemoveAll}
                  >
                    Remove all images
                  </button>
                  {errors && errors.maxFileSize && (
                    <div className={styles.errorMsg}>
                      The selected Photos size exceeds 100kb.
                    </div>
                  )}
                  <div className={styles.imageList}>
                    {imageList.map((image, index) => (
                      <div key={index} className={styles.imageItem}>
                        <img src={image["data_url"]} alt="" width="100" />
                        <div className={styles.btnWrapper}>
                          <button
                            className={`mx-1 ${styles.updateBtn}`}
                            onClick={() => onImageUpdate(index)}
                          >
                            Update
                          </button>
                          <button
                            className={`mx-1 ${styles.removeBtn}`}
                            onClick={() => onImageRemove(index)}
                          >
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

      <hr />

      <div className="mt-5 text-center ">
        <button
          className={styles.send_property_btn}
          type="submit"
          onClick={() => {
            handleSubmit();
          }}
        >
          Submit Property
        </button>
      </div>

      <GoToTop />
    </div>
  );
}

export default SubmitProperty;
