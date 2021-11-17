import React, { useState } from "react";
import "./profile.css";
import { useHistory } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";

const Profile = () => {
  const [firstName, setFirstName] = useState("");
  const [dob, setDob] = useState("");
  const [religion, setReligion] = useState("");
  const [file, setFile] = useState("");
  const [isFilled, setIsFilled] = useState(false);
  const history = useHistory();
  const displayPic = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };
  const handleForm = (e) => {
    e.preventDefault();

    if (firstName && dob && religion && file) {
      setIsFilled(true);
      console.log(isFilled);
    } else {
      setIsFilled(false);
      console.log(isFilled);
    }
  };

  const logOut = () => {
    history.push("/");
  };
  return (
    <>
      <div className="profile-page">
        <div className="container profile-container">
          <form onSubmit={handleForm}>
            <div className="profile-picture-upload">
              <p>
                Profile Picture: <label htmlFor="Profile Picture" />
                <input type="file" onChange={displayPic} />
              </p>
              {file && (
                <img src={file} className="profile-pic" alt="profile-pic" />
              )}
            </div>
            <p>
              Name : <label htmlFor="firstName" />
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </p>
            <p>
              DOB : <label htmlFor="DOB" />
              <input
                type="date"
                id="DOB"
                name="dob"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
            </p>
            <p>
              Religion : <label htmlFor="religion" />
              <select
                id="religion"
                name="Religion"
                onChange={(e) => setReligion(e.target.value)}
              >
                <option>--select--</option>
                <option value="hindu">Hindu</option>
                <option value="muslim">Muslim</option>
                <option value="christian">Christian</option>
                <option value="jewish">Jewish</option>
                <option value="sikh">Sikh</option>
                <option value="other">Other</option>
              </select>
            </p>
            <button className="btn profile-submit" type="submit">
              Submit
            </button>
            {isFilled ? (
              <div>
                <br />
                <button className="btn logout" onClick={logOut}>
                  Log Out
                </button>
              </div>
            ) : (
              <h5>Fill out all the form details.</h5>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;
