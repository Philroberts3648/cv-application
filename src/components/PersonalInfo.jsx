import { useState } from "react";

export default function PersonalInfo() {
    const [personalInfo, setPersonalInfo] = useState({});
    const [allPersonalInfo, setAllPersonalInfo] = useState([]);
  
    const handleChange = ({ target }) => {
      const { name,value } = target;
      setPersonalInfo((prevProfile) => ({
        ...prevProfile,
        [name]: value
      }));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      setAllPersonalInfo(prev => [...prev, personalInfo]);
      setPersonalInfo({});
    };

    const handleDelete = (targetIndex) => {
        setAllPersonalInfo((prev) => {
          return prev.filter((_, index) => index !== targetIndex)
        })
    };
  
    return (
        <section className = 'personal_info'>
            <form onSubmit = {handleSubmit}>
                <label>First Name: {' '}
                    <input
                        value={personalInfo.firstName}
                        name="fname"
                        type="text"
                        placeholder="first name"
                        onChange = {handleChange}
                    />
                </label> <br />

                <label>Last Name: {' '}
                    <input
                        value={personalInfo.lastName}
                        name="lname"
                        type="text"
                        placeholder="last name"
                        onChange = {handleChange}
                    />
                </label> <br />

                <label>email: {' '}
                    <input
                        value={personalInfo.email}
                        type="email"
                        name="email"
                        placeholder="email"
                        onChange = {handleChange}
                    />
                </label> <br />

                <label>Phone: {' '}
                    <input
                        value={personalInfo.phone}
                        type="tel"
                        name="phone"
                        placeholder="phone"
                        onChange = {handleChange}
                    />
                </label> <br />

                <button type="submit">Add</button>
            </form>
            {allPersonalInfo && (
                <ol>
                    {allPersonalInfo.map((info, index) => {
                        return <li key = {info} style = {{display: 'flex', margin: '10px', border: '1px solid blue', alignItem: 'center', justifyContent: 'center'}}>
                            <div>
                                <p>First Name: {info.firstName}</p>
                                <p>Last Name: {info.lastName}</p>
                                <p>Email: {info.email}</p>
                                <p>Phone: {info.phone}</p>
                            </div>
                            
                            <button type="button" onClick = {() => handleDelete(index)}>x</button>
                        </li>
                    })}
                </ol>
            )}
        </section>     
      
    )
  
}