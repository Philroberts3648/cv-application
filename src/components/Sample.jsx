import { useState } from "react";

export default function MyForm() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      // Add more fields as needed
    });
  
    const [submittedData, setSubmittedData] = useState(null);
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Assuming you want to display the submitted data
      setSubmittedData(formData);
      setFormData({
        name: '',
        email: '',
      })
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </label>
  
          <br />
  
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </label>
  
          {/* Add more input fields as needed */}
  
          <br />
  
          <button type="submit">Submit</button>
        </form>
  
        {submittedData && (
          <div>
            <h2>Submitted Data:</h2>
            <p>Name: {submittedData.name}</p>
            <p>Email: {submittedData.email}</p>
            {/* Display other submitted data as needed */}
          </div>
        )}
      </div>
    );
}