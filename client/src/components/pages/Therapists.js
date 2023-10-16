import React, { useState, useEffect} from 'react'

import "./styles/AllPages.css"

const Therapists = () => {

    const [therapists, settherapists] = useState([{
        part_of_body: "",
        type_of_injury: ""
      }])
    
    useEffect(() => {
      fetchAlltherapists();
    }, []);
    
    const fetchAlltherapists = async () => {
      try {
        const response = await fetch("http://localhost:3000/therapists");
    
        if (response.ok) {
          const alltherapists = await response.json();
          settherapists(alltherapists);
        } else {
          console.error("Error fetching therapists:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching therapists:", error);
      }
    }


    // User Therapist code

    const [userTherapists, setUserTherapists] = useState([{
        user_id: "",
        therapist_id: ""
      }])
    
    useEffect(() => {
      fetchAllUserTherapists();
    }, []);
    
    const fetchAllUserTherapists = async () => {
      try {
        const response = await fetch("http://localhost:3000/usertherapists");
    
        if (response.ok) {
          const allUserTherapists = await response.json();
          setUserTherapists(allUserTherapists);
        } else {
          console.error("Error fetching user therapists:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching user therapists:", error);
      }
    }


    // Users for the dropdown

    const [users, setUsers] = useState([
        {
          user_id: "",
          username: "",
        },
      ]);

    useEffect(() => {
        fetchAllUsers();
      }, []);
    
      const fetchAllUsers = async () => {
        try {
          const response = await fetch("http://localhost:3000/users");
    
          if (response.ok) {
            const allUsers = await response.json();
            setUsers(allUsers);
          } else {
            console.error("Error fetching users:", response.statusText);
          }
        } catch (error) {
          console.error("Error fetching users:", error);
        }
      };


    //   Figuring out the drop down 

    const [showUserDropdown, setShowUserDropdown] = useState(false);
    const [selectedUser, setSelectedUser] = useState('');
    const [showSubmitButton, setShowSubmitButton] = useState(false);
    const [selectedTherapist, setSelectedTherapist] = useState(null);
    


    const handleAddUserClick = (therapist) => {
        // Toggle the visibility of the user dropdown when the button is clicked
        setSelectedTherapist(therapist);
        setShowUserDropdown(true);
      };


    const handleUserSelect = (event) => {
        const selectedUserId = event.target.value;
        setSelectedUser(selectedUserId);
    
        // Show the submit button when a user is selected
        setShowSubmitButton(true);
      };
    
      const handleUserSubmit = (therapist) => {
        if (selectedUser && therapist) {
          // Make a POST request to add the user and therapist IDs to the user therapist table
          fetch('http://localhost:3000/usertherapists', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              user_id: selectedUser,
              therapist_id: therapist.id,
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              // Handle success or error as needed
              console.log('User therapist added:', data);
            })
            .catch((error) => {
              console.error('Error adding user therapist:', error);
            });
        }
      };
      
      
    
      return (
        <div className="Therapist">
          <header className="Therapist-header">
            <h1>Therapists</h1>
            {therapists.map((therapist) => {
              // Find the user therapist associated with this therapist
              const userTherapist = userTherapists.find(
                (userTherapist) => userTherapist.therapist_id === therapist.id
              );
    
              return (
                <div key={therapist.id} className="All-container">
                  <p>Name: {therapist.name}</p>
                  <p>Speciality: {therapist.specialization}</p>
    
                  {userTherapist && (
                    <div>
                      <p>User Therapist Info</p>
                      <p>User ID: {userTherapist.user_id}</p>
                      <p>Therapist ID: {userTherapist.therapist_id}</p>
    
                      <button onClick={() => handleAddUserClick(therapist)}>Add User</button>
    
                      {showUserDropdown && (
                        <div>
                          <p>Current Users:</p>
                          <select onChange={handleUserSelect} value={selectedUser}>
                            <option value="" disabled>
                              Select a User
                            </option>
                            {users.map((user) => (
                              <option key={user.id} value={user.id}>
                                {user.username}
                              </option>
                            ))}
                          </select>
                        </div>
                      )}
    
                      {showSubmitButton && (
                       <button onClick={() => handleUserSubmit(therapist)}>Submit</button>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </header>
        </div>
      );
    };
    
    export default Therapists;