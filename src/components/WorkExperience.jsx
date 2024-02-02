import { useState } from "react";

export default function WorkExperience() {
    const [workExperience, setWorkExperience] = useState({});
    const [allWorkExperience, setAllWorkExperience] = useState([]);
  
    const handleChange = ({ target }) => {
      const { name,value } = target;
      setWorkExperience((prevProfile) => ({
        ...prevProfile,
        [name]: value
      }));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      setAllWorkExperience(prev => [...prev, workExperience]);
      setWorkExperience({});
    };

    const handleDelete = (targetIndex) => {
        setAllWorkExperience((prev) => {
          return prev.filter((_, index) => index !== targetIndex)
        })
    };
  
    return (
        <section className="work_experience">
            <form onSubmit = {handleSubmit}>
                <label>Company Name: {' '}
                    <input
                        value={workExperience.companyName}
                        name="companyName"
                        type="text"
                        placeholder="Company Name"
                        onChange = {handleChange}
                    />
                </label> <br />

                <label>Role: {' '}
                    <input
                        value={workExperience.role}
                        type="text"
                        name="role"
                        placeholder="Job Title"
                        onChange = {handleChange}
                    />
                </label> <br />

                <label>Responsibilities: {' '}
                    <textarea
                        value={workExperience.responsibilities}
                        type="text"
                        name="responsibilities"
                        placeholder="typing..."
                        onChange = {handleChange}
                    />
                </label> <br />

                <label>From: {' '}
                    <input
                        value={workExperience.startDate}
                        type="date"
                        name="startDate"
                        onChange = {handleChange}
                    />
                </label> <br />
                <label>To: {' '}
                    <input
                        value={workExperience.endDate}
                        type="date"
                        name="endDate"
                        onChange = {handleChange}
                    />
                </label> <br />
                <button type="submit">Add</button>
            </form>
            {allWorkExperience && (
                <ol>
                    {allWorkExperience.map((profi, index) => {
                        return <li key = {profi} style = {{display: 'flex', margin: '10px', border: '1px solid blue', alignItem: 'center', justifyContent: 'center'}}>
                                <div>
                                    <p>Company Name: {profi.companyName}</p>
                                    <p>Job Role: {profi.role}</p>
                                    <p>Responsibilities: {profi.responsibilities}</p>
                                    <p>From: {profi.startDate}</p>
                                    <p>To: {profi.endDate}</p>
                        
                    
                                </div>
                                <button type="button" onClick = {() => handleDelete(index)}>x</button>
                            </li>
                        })}
                </ol>
            )}
        </section>
      
    )
  
}