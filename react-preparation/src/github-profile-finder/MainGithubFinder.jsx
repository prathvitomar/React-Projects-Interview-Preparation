import React from "react";
// import { useNavigate } from "react-router-dom";
import GithubProfile from "./GithubProfile";
import { useState } from "react";
import Search from "./Search";

function MainGithubFinder() {
  const [user, setUser] = useState("");
  const [userData, setUserData] = useState({});
  const [errorMsg, setErrorMsg] = useState(null);
  // const [loading, setLoading] = useState(true);
  const [showProfile, setShowProfile] = useState(false);
  // const navigate = useNavigate();

  async function fetchData(url) {
    try {
      // await fetch(url)
      //   .then((res) => {
      //     res.json();
      //   })
      //   .then((res) => setUserData(res))
        // .finally(() => setLoading(false));
        const res = await fetch(url);
        const data = await res.json();
        setUserData(data);
    } catch (error) {
      setErrorMsg(error.message);
      alert(errorMsg);
    }
  }

  // useEffect(()=> {
  // }, [user])

  console.log(userData)

  const onUserNameChange = (e) => {
    setUser(e.target.value);
    console.log(user)
  };

  const findUser = () => {
    fetchData(`https://api.github.com/users/${user}`);
  };

  // return loading ? (
  //   <div> Loading .......</div>
  // ) : (

  return (
    <>
      <div className="github-main">
        <div className="search-container">
          <Search
            value={user}
            placeholder="Enter User Name"
            findUser={findUser}
            onUserNameChange={(e) => onUserNameChange(e)}
          />
        </div>
        <div className="mt-4">
          <div className="flex justify-center">
            <img src={userData.avatar_url} alt={userData.name} width="50px" />
            <h3 className="">{userData.name}</h3>
            <button type="button" onClick={()=> setShowProfile(prev => !prev)}>
              Click to See Details about {userData.name}
            </button>
          </div>
        </div>
        { showProfile && showProfile ? (
        <div>
              <GithubProfile
                name={userData.name} 
                photoUrl={userData.avatar_url}
                followers={userData.followers}
                following={userData.following}
                bio={userData.bio}
              />
        </div>
        ) : null
        }
      </div>
    </>
  );
}

export default MainGithubFinder;
