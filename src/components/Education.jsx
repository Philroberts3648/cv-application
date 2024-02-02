import { useState } from "react";

export default function Educations() {
    const [education, setEducation] = useState({});
    const [allEducation, setAllEducation] = useState([]);
  
    const handleChange = ({ target }) => {
      const { name,value } = target;
      setEducation((prevProfile) => ({
        ...prevProfile,
        [name]: value
      }));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      setAllEducation(prev => [...prev, education]);
      setEducation({});
    };

    const handleDelete = (targetIndex) => {
        setAllEducation((prev) => {
          return prev.filter((_, index) => index !== targetIndex)
        })
    };
  
    return (
        <section className = 'education'>
            <form onSubmit = {handleSubmit}>
                <label>School Name: {' '}
                    <input
                        value={education.schoolName}
                        name="schoolName"
                        type="text"
                        placeholder="School Name"
                        onChange = {handleChange}
                    />
                </label> <br />

                <label>Course: {' '}
                    <input
                        value={education.course}
                        type="text"
                        name="course"
                        placeholder="Course title"
                        onChange = {handleChange}
                    />
                </label> <br />

                <label>From: {' '}
                    <input
                        value={education.startDate}
                        type="date"
                        name="startDate"
                        onChange = {handleChange}
                    />
                </label> <br />
                <label>To: {' '}
                    <input
                        value={education.endDate}
                        type="date"
                        name="endDate"
                        onChange = {handleChange}
                    />
                </label> <br />
                <button type="submit">Add</button>
            </form>
            {allEducation && (
                <ol>
                    {allEducation.map((edu, index) => {
                        return <li key = {edu} style = {{display: 'flex', margin: '10px', border: '1px solid blue', alignItem: 'center', justifyContent: 'center'}}>
                            <div>
                                <p>School Name: {edu.schoolName}</p>
                                <p>Course: {edu.course}</p>
                                <p>From: {edu.startDate}</p>
                                <p>To: {edu.endDate}</p>
                            </div>

                            <button type="button" onClick = {() => handleDelete(index)}>x</button>
                        </li>
                    })}
                </ol>
            )}
        </section>     
      
    )
  
}