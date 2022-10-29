import React from 'react'
import { useEffect , useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Profile() {


    const navigate = useNavigate();
    const [profile, setProfile] = useState("");

    const profilepage = async (e) => {

        try {
            const res = await fetch("/profile", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

           // console.log(res.json());

            const data = await res.json();
            setProfile(data);
            console.log(data);

           if(!res.status === 200){
                const error = new Error(res.error);
                throw error;
           }
        }
        catch (error) {
           window.alert("Please Login");
            navigate("/login");
        }
    }

  useEffect(() => {
      profilepage();
  }, [])
  

  return (
    <>  
       <div>{profile.Fullname}</div>
       <div>{profile.Email}</div>

    </>
   
  )
}
