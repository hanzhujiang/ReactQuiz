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

    const handleChange = (event) => {
        const { name, value } = event.target;
        setTempData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        setUserData(tempData);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setTempData(userData);
        setIsEditing(false);
    };

    return (
        <div className="container">
            {!isEditing ? (
                <div>
                    <p><strong>Name:</strong> {userData.userName}</p>
                    <p><strong>Email:</strong> {userData.email}</p>
                    <p><strong>Mobile:</strong> {userData.mobile}</p>
                    <button onClick={handleEdit}>Edit</button>
                </div>
            ) : (
                <div>
                    <div>
                        <label>Name: </label>
                        <input type="text" name="userName" value={tempData.userName} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Email: </label>
                        <input type="email" name="email" value={tempData.email} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Mobile: </label>
                        <input type="tel" name="mobile" value={tempData.mobile} onChange={handleChange} />
                    </div>
                    <div className="button-group">
                        <button onClick={handleSave}>Save</button>
                        <button onClick={handleCancel}>Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FormDesignObjective;