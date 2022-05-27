import { useState } from 'react'
import axios from "axios";

function Profile(props) {

 const [profileData, setProfileData] = useState(null);
 function getData() {
   axios({
     method: "GET",
     url:"/api/profile",
     headers: {
       Authorization: 'Bearer ' + props.token
     }
   })
   .then((response) => {
     const res =response.data
     res.access_token && props.setToken(res.access_token)
     setProfileData(({
       my_firstname: res.firstname,
       my_lastname: res.lastname,
       my_email: res.email}))
   }).catch((error) => {
     if (error.response) {
       console.log(error.response)
       console.log(error.response.status)
       console.log(error.response.headers)
       }
   })}
   return (
    <div style={{marginTop:'250px', marginBottom:'250px'}} className="Profile">
 
        <p>To get your profile details: </p><button onClick={getData}>Click here</button>
        {profileData && <div>
              <h3>Your profile details</h3>
              <p>My first name: {profileData.my_firstname}</p>
              <p>My last name: {profileData.my_lastname}</p>
              <p>My email: {profileData.my_email}</p>

            </div>
        }
 
    </div>
  );
 }
 
 export default Profile;

