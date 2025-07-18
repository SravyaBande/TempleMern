import React, { useState } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';
import './AddEvent.css';

console.log("PrayerRequest Component loaded");

function AddEvent() {
  const [eventData, setEventData] = useState({
    name: '',
    description: '',
    date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting Prayer Request:", eventData);
    try {
      const response = await axios.post('http://localhost:5000/events', eventData);
      console.log('Prayer Request saved:', response.data);
      alert('✅ Your prayer request has been submitted!');
      // Reset form after submission
      setEventData({
        name: '',
        description: '',
        date: '',
      });
    } catch (error) {
      console.error('Error submitting prayer request:', error);
      alert('❌ Failed to submit prayer request');
    }
  };

  return (

<Layout>
  <div className="prayer-request-container">
    <h2>🙏 Submit Your Prayer Request</h2>
    <form className="prayer-request-form" onSubmit={handleSubmit}>
      <label>Devotee Name:</label>
      <input
        type="text"
        name="name"
        value={eventData.name}
        onChange={handleChange}
        required
      />

      <label>Prayer Message:</label>
      <textarea
        name="description"
        value={eventData.description}
        onChange={handleChange}
        required
      />

      <label>Preferred Date:</label>
      <input
        type="date"
        name="date"
        value={eventData.date}
        onChange={handleChange}
        required
      />

      <button type="submit">📩 Submit Request</button>
    </form>
  </div>
</Layout>

);
}

export default AddEvent;
