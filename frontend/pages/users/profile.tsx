import React, {useState, useEffect} from 'react'
import Layout from '../../components/Layout';

function profile() {
    const [profile, setProfile] = useState<any>([]);
    const [auth, setAuth] = useState<any>([]);

    useEffect(() => {

        let lStorage: any = window.localStorage.getItem("auth");
        if (lStorage) {
          lStorage = JSON.parse(lStorage);
          console.log("local", lStorage);
          setAuth(lStorage);
        }

        var myHeaders = new Headers();
        myHeaders.append("auth-token", auth);
    
        var requestOptions = {
          method: "GET",
          headers: myHeaders
        };
    
        fetch("http://localhost:3001/user/profile", requestOptions)
          .then((response) => response.json())
          .then((result) => {setProfile(result), console.log(result)})
          .catch((error) => console.log("error", error));
    
          window.localStorage.setItem("uprofile", profile)
      }, []);
      
    return (
        <Layout>

        </Layout>
    )
}

export default profile
