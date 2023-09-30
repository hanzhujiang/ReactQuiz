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

    const handleChange = () => {
    };

    const handleEdit = () => {
        setIsEditing(true)
    };

    const handleSave = () => {
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
                <form onChange={handleChange}>
                    <label name="userName">Name:</label>
                    <input name="userName" type="text"></input>
                    <label name="email">Email:</label>
                    <input name="email" type="email"></input>
                    <label name="mobile">Mobile:</label>
                    <input name="mobile" type="text"></input>
                    <button onClick={handleChange}>Save</button>
                    <button onClick={handleCancel}>Cancel</button>

                </form>
            </div>)}
        </div>
    );
};

export default FormDesignObjective;