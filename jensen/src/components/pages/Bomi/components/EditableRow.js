
import React from 'react'

const EditableRow = ({editFormData, handleEditFormChange, handleCancelClick}) => {
return (
    <tr>
        <td>
        <input 
        type="text"
        required="required" 
        placeholder="Enter a firstName" 
        name="firstName"
        value={editFormData.firstName}
        onChange={handleEditFormChange}
        ></input>
        </td>
        <td>
        <input 
        type="text"
        required="required" 
        placeholder="Enter a lastName" 
        name="lastName"
        value={editFormData.lastName}
        onChange={handleEditFormChange}
        ></input>
        </td>
        <td>
        <input 
        type="text"
        required="required" 
        placeholder="Enter major" 
        name="major"
        value={editFormData.major}
        onChange={handleEditFormChange}
        ></input>
        </td>
        <td>
        <input 
        type="email"
        required="required" 
        placeholder="Enter an email" 
        name="email"
        value={editFormData.email}
        onChange={handleEditFormChange}
        ></input>
        </td>
        <td>
            <button type="submit">Save</button>
            <button type="button" onClick={handleCancelClick}>Cancel</button>
        </td>
    </tr>
)
}

export default EditableRow;