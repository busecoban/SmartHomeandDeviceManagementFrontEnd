import React, { useState } from "react";
import { list3 } from "../../data/Data";
import { useHistory } from "react-router-dom";

const RecentCard = ({ roomId }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [inputValues, setInputValues] = useState({
    deviceName: "",
    devicetype: ""
  });

  const history = useHistory();

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!inputValues.deviceName.trim() || !inputValues.devicetype.trim()) {
      alert("Please fill out all fields.");
      return;
    }
    try {
      const response = await fetch(
        `https://ibrahimbackend.azurewebsites.net/api/v1/Device/AddDevice?name=${inputValues.deviceName}&type=isik&RoomId=${roomId}`,
        {
          method: "POST"
        }
      );
      if (response.ok) {
        console.log("Form submitted with values:", inputValues);
        closeForm();
        history.go(0); // Refresh the page by navigating to the same route
      } else {
        alert(`Failed to add device. Please try again. ${roomId}`);
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <div className='content grid3 mtop'>
        {list3.map((val, index) => {
          const { cover, category, location, name, price, type } = val;
          return (
            <div className='box shadow' key={index}>
              <div className='img'>
                <img src={cover} alt='' />
              </div>
              <div className='text'>
                <h1>{name}</h1>
                <div className='button flex'>
                  <div>
                    <button className='btn2' onClick={openForm}>
                      <i className='fas fa-plus'></i>
                    </button>
                  </div>
                  <span>{type}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {isFormOpen && (
        <div className="overlay" onClick={closeForm}>
          <div className="form-container" onClick={(e) => e.stopPropagation()}>
            <h2>Add A New Device</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="deviceName"
                placeholder="Device Name"
                value={inputValues.deviceName}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="devicetype"
                placeholder="Type"
                value={inputValues.devicetype}
                onChange={handleInputChange}
              />
              <button type="submit">Add A Device</button>
              <button type="button" onClick={closeForm} className="cancel">Cancel</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default RecentCard;
