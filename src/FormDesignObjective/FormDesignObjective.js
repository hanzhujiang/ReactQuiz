import React, { useState } from 'react';

const FormDesignObjective = () => {
    const initialData = {
        userName: "name1",
        email: "email@sample.com",
        mobile: "123456"
    };

    const [userData, setUserData] = useState(initialData);
    const [isEditing, setIsEditing] = useState(false);
    const [tempData, setTempData] = useState(initialData);

    const handleChange = (e) => {
        // e.preventdefault();
        const {name, value}=e.target
        console.log(name,value);
        setTempData(prev=>({...prev,[name]:value}))

    };

    const handleEdit = () => {
        setIsEditing(true)
    };

    const handleSave = () => {
        setUserData(tempData)
        setIsEditing(false)
    };

    const handleCancel = () => {
        setIsEditing(false)
    };

    return (
        <div className="container">
            {!isEditing?(<div>
                <p><span>Name:</span>{userData.userName}</p>
                <p><span>Email:</span>{userData.email}</p>
                <p><span>Mobile:</span>{userData.mobile}</p>
                <button onClick={handleEdit}>Edit</button>
            </div>):(<div>
                    <label name="userName">Name:</label>
                    <input name="userName" type="text" value={tempData.userName} onChange={handleChange}></input>
                    <label name="email">Email:</label>
                    <input name="email" type="email" value={tempData.email} onChange={handleChange}></input>
                    <label name="mobile">Mobile:</label>
                    <input name="mobile" type="text" value={tempData.mobile} onChange={handleChange}></input>
                    <button onClick={handleSave}>Save</button>
                    <button onClick={handleCancel}>Cancel</button>
            </div>)}
        </div>
    );
};

export default FormDesignObjective;