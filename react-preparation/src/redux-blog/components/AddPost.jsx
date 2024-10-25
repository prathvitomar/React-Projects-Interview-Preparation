import React, { useState } from "react";
import Input from "./ui/Input";
import "../styles.css";
import Button from "./ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { addNewPost,selectAllPosts} from "../features/postsSlice";

function AddPost() {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });
  const dispatch = useDispatch();
  const fetchAllPosts = useSelector(selectAllPosts)
  console.log(fetchAllPosts)

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewPost(formData))
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form">
          <div className="form-space">
            <h1>Add Post</h1>
          </div>
          <div className="form-space">
            <Input
              name="title"
              value={formData.title}
              onChange={(e) => handleChange(e)}
              placeholder="Enter title"
            />
          </div>
          <div className="form-space">
            <Input
              name="body"
              value={formData.body}
              onChange={(e) => handleChange(e)}
              placeholder="Enter Content"
            />
          </div>
          <div className="form-space">
            <Button 
            type="submit"
            buttonName="Add Post"
            />
          </div>
        </div>
      </form>
    </>
  );
}

export default AddPost;
