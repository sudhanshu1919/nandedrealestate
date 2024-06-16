import React, { useState } from "react";
import style from "./Property_Search.module.css";

function Property_Search() {
  const [formData, setFormData] = useState({
    bhkTypes: {
      "1rk": false,
      "1bhk": false,
      "2bhk": false,
      "3bhk": false,
      "4bhk": false,
      "4+bhk": false,
    },
    priceRange: 100000,
    propertyStatus: "",
    furnishing: {
      full: false,
      semi: false,
      none: false,
    },
    propertyType: {
      apartment: false,
      i_house: false,
      g_community_v: false,
      standalone_b: false,
    },
    parkingType: {
      "2_wheeler": false,
      "4_wheeler": false,
    },
    builtUpArea: 100,
    propertyAge: {
      "1_year": false,
      "3_year": false,
      "5_year": false,
      "10_year": false,
    },
    bathrooms: {
      "1_more": false,
      "2_more": false,
      "3_more": false,
    },
  });

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    const [category, field] = name.split(".");

    setFormData((prevState) => ({
      ...prevState,
      [category]: {
        ...prevState[category],
        [field]: checked,
      },
    }));
  };

  const handleRadioChange = (e) => {
    const { name, id } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: id,
    }));
  };

  const handleRangeChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log(formData);
  };
  return (
    <>
      <div className={`container  ${style.Main_Container}`}>
        {/* BHK Container start */}
        <div className={`row ${style.bhk_container}`}>
          <div className={`col-3 ${style.Headding}`}>
            <p>BHK Type : </p>
          </div>
          <div className={`col-3 ${style.item_btn}`}>
            <div>
              <input
                type="checkbox"
                id="1rk"
                name="bhkTypes.1rk"
                checked={formData.bhkTypes["1rk"]}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="1rk">1 RK</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="1bhk"
                name="bhkTypes.1bhk"
                checked={formData.bhkTypes["1bhk"]}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="1bhk">1 BHK</label>
            </div>
          </div>
          <div className={`col-3 ${style.item_btn}`}>
            <div>
              <input
                type="checkbox"
                id="2bhk"
                name="bhkTypes.2bhk"
                checked={formData.bhkTypes["2bhk"]}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="2bhk">2 BHK</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="3bhk"
                name="bhkTypes.3bhk"
                checked={formData.bhkTypes["3bhk"]}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="3bhk">3 BHK</label>
            </div>
          </div>
          <div className={`col-3 ${style.item_btn}`}>
            <div>
              <input
                type="checkbox"
                id="4bhk"
                name="bhkTypes.4bhk"
                checked={formData.bhkTypes["4bhk"]}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="4bhk">4 BHK</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="4+bhk"
                name="bhkTypes.4+bhk"
                checked={formData.bhkTypes["4+bhk"]}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="4+bhk">4+ BHK</label>
            </div>
          </div>
        </div>
        {/* BHK Container end */}

        {/* Ranger sections start */}
        <div className={`row mt-3 ${style.rang_container}`}>
          <div className={`col-6 ${style.Headding}`}>
            <p>Price Range: </p>
          </div>
          <div className={`col-6 ${style.Headding}`}>
            <div className={`${style.ps_items}`}>
              <label htmlFor="p_range">
                ₹ 100,000 to ₹ {formData.priceRange} Cr
              </label>
              <input
                type="range"
                id="p_range"
                name="priceRange"
                min="100000"
                max="50,000,000"
                value={formData.priceRange}
                onChange={handleRangeChange}
              />
            </div>
          </div>
        </div>
        {/* Ranger sections end */}

        {/* Property Status start */}
        <div className={`row mt-3 ${style.property_con}`}>
          <div className={`col-3 ${style.Headding}`}>
            <p>Property Status : </p>
          </div>
          <div className={`col-3 ${style.item_btn}`}>
            <div className={`${style.ps_items}`}>
              <input
                type="radio"
                id="Under Construction"
                name="propertyStatus"
                checked={formData.propertyStatus === "Under Construction"}
                onChange={handleRadioChange}
              />
              <label htmlFor="Under Construction">Under Construction</label>
            </div>
          </div>
          <div className={`col-3 ${style.item_btn}`}>
            <div>
              <input
                type="radio"
                id="Ready"
                name="propertyStatus"
                checked={formData.propertyStatus === "Ready"}
                onChange={handleRadioChange}
              />
              <label htmlFor="Ready">Ready</label>
            </div>
          </div>
          <div className={`col-3 ${style.item_btn}`}>
            <div>
              <input
                type="radio"
                id="New Builder Projects"
                name="propertyStatus"
                checked={formData.propertyStatus === "New Builder Projects"}
                onChange={handleRadioChange}
              />
              <label htmlFor="New Builder Projects">New Builder Projects</label>
            </div>
          </div>
        </div>
        {/* Property Status end */}

        {/* Furnishing section start */}
        <div className={`row mt-3 ${style.property_con}`}>
          <div className={`col-3 ${style.Headding}`}>
            <p>Furnishing : </p>
          </div>
          <div className={`col-3 ${style.item_btn}`}>
            <div className={`${style.ps_items}`}>
              <input
                type="checkbox"
                id="full"
                name="furnishing.full"
                checked={formData.furnishing["full"]}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="full">Full</label>
            </div>
          </div>
          <div className={`col-3 ${style.item_btn}`}>
            <div>
              <input
                type="checkbox"
                id="semi"
                name="furnishing.semi"
                checked={formData.furnishing["semi"]}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="semi">Semi</label>
            </div>
          </div>
          <div className={`col-3 ${style.item_btn}`}>
            <div>
              <input
                type="checkbox"
                id="none"
                name="furnishing.none"
                checked={formData.furnishing["none"]}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="none">None</label>
            </div>
          </div>
        </div>
        {/* Furnishing section end */}

        {/* Property Type section start */}
        <div className={`row mt-3 ${style.property_con}`}>
          <div className={`col-3 ${style.Headding}`}>
            <p>Property Type : </p>
          </div>
          <div className={`col-3 ${style.item_btn}`}>
            <div className={`${style.ps_items}`}>
              <input
                type="checkbox"
                id="Apartment"
                name="propertyType.apartment"
                checked={formData.propertyType["apartment"]}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="Apartment">Apartment</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="i_house"
                name="propertyType.i_house"
                checked={formData.propertyType["i_house"]}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="i_house">Independent House/Villa</label>
            </div>
          </div>
          <div className={`col-3 ${style.item_btn}`}>
            <div>
              <input
                type="checkbox"
                id="g_community_v"
                name="propertyType.g_community_v"
                checked={formData.propertyType["g_community_v"]}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="g_community_v">Gated Community Villa</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="standalone_b"
                name="propertyType.standalone_b"
                checked={formData.propertyType["standalone_b"]}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="standalone_b">Standalone Building</label>
            </div>
          </div>
          <div className={`col-3 ${style.item_btn}`}></div>
        </div>
        {/* Property Type section end */}

        {/* Parking section start */}
        <div className={`row mt-3 ${style.property_con}`}>
          <div className={`col-6 ${style.Headding}`}>
            <p>Parking Type : </p>
          </div>
          <div className={`col-3 ${style.item_btn}`}>
            <div className={`${style.ps_items}`}>
              <input
                type="checkbox"
                id="2_wheeler"
                name="parkingType.2_wheeler"
                checked={formData.parkingType["2_wheeler"]}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="2_wheeler">2 Wheeler</label>
            </div>
          </div>
          <div className={`col-3 ${style.item_btn}`}>
            <div>
              <input
                type="checkbox"
                id="4_wheeler"
                name="parkingType.4_wheeler"
                checked={formData.parkingType["4_wheeler"]}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="4_wheeler">4 Wheeler</label>
            </div>
          </div>
        </div>
        {/* Parking section end */}

        {/* Built Up Area sections range start */}
        <div className={`row mt-3 ${style.rang_container}`}>
          <div className={`col-6 ${style.Headding}`}>
            <p>Built Up Area(sq. ft.): </p>
          </div>
          <div className={`col-6 ${style.Headding}`}>
            <div className={`${style.ps_items}`}>
              <label htmlFor="builtUpArea">
                100 to 10,000 sq.ft.: {formData.builtUpArea}
              </label>
              <input
                type="range"
                id="builtUpArea"
                name="builtUpArea"
                value={formData.builtUpArea}
                onChange={handleRangeChange}
                min="100"
                max="10000"
              />
            </div>
          </div>
        </div>
        {/* Built Up Area sections range sections end */}

        {/* Property Age section start */}
        <div className={`row mt-3 ${style.property_con}`}>
          <div className={`col-3 ${style.Headding}`}>
            <p>Property Age : </p>
          </div>
          <div className={`col-3 ${style.item_btn}`}>
            <div className={`${style.ps_items}`}>
              <input
                type="checkbox"
                id="1_year"
                name="propertyAge.1_year"
                checked={formData.propertyAge["1_year"]}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="1_year">1 year</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="3_year"
                name="propertyAge.3_year"
                checked={formData.propertyAge["3_year"]}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="3_year">3 year</label>
            </div>
          </div>
          <div className={`col-3 ${style.item_btn}`}>
            <div>
              <input
                type="checkbox"
                id="5_year"
                name="propertyAge.5_year"
                checked={formData.propertyAge["5_year"]}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="5_year">5 year</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="10_year"
                name="propertyAge.10_year"
                checked={formData.propertyAge["10_year"]}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="10_year">10 year</label>
            </div>
          </div>
        </div>
        {/* Property Age section end */}

        {/* Bathroom section start */}
        <div className={`row mt-3 ${style.property_con}`}>
          <div className={`col-3 ${style.Headding}`}>
            <p>Bathroom : </p>
          </div>
          <div className={`col-3 ${style.item_btn}`}>
            <div className={`${style.ps_items}`}>
              <input
                type="checkbox"
                id="b1"
                name="bathrooms.1_more"
                checked={formData.bathrooms["1_more"]}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="b1">1 or more</label>
            </div>
          </div>
          <div className={`col-3 ${style.item_btn}`}>
            <div>
              <input
                type="checkbox"
                id="b2"
                name="bathrooms.2_more"
                checked={formData.bathrooms["2_more"]}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="b2">2 or more</label>
            </div>
          </div>
          <div className={`col-3 ${style.item_btn}`}>
            <div>
              <input
                type="checkbox"
                id="b3"
                name="bathrooms.3_more"
                checked={formData.bathrooms["3_more"]}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="b3">3 or more</label>
            </div>
          </div>
        </div>
        {/* Bathroom section end */}

        <div className={`mt-4 mb-4 ${style.sraech_btn}`}>
          <button onClick={handleSubmit}>Search Property</button>
        </div>
      </div>
    </>
  );
}

export default Property_Search;
