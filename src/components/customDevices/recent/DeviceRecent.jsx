import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import axios from 'axios';

const DeviceRecent = ({ roomId }) => {
  const location = useLocation();
  const history = useHistory();
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const response = await axios.get(
          'https://ibrahimbackend.azurewebsites.net/api/v1/Device/GetAllDevicesByRoomId',
          {
            params: {
              PageNumber: 1,
              PageSize: 10,
              RoomId: roomId
            }
          }
        );
        setDevices(response.data.data); // Adjust according to the structure of your response data
        setLoading(false);
      } catch (error) {
        console.error('Error fetching devices:', error);
        setLoading(false);
      }
    };

    if (roomId) {
      fetchDevices();
    }
  }, [roomId]); // Dependencies array includes roomId to refetch when it changes

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="content grid5 mtop">
        {devices.length > 0 ? (
          devices.map((device, index) => (
            <div
              className="box"
              key={index}
              style={{ cursor: 'pointer' }} // Add a pointer cursor to indicate clickable items
            >
              <h4>{device.name}</h4>
              <img src="../images/hero/h2.png" alt={device.name} />
            </div>
          ))
        ) : (
          <p>No devices found.</p>
        )}
      </div>
    </>
  );
};

export default DeviceRecent;
