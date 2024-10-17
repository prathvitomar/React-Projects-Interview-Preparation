import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPost } from "../features/postsSlice";

function AddPost() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    roles: [],
    userId:""
  });
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.posts);
  const userSelector = useSelector((state) => state.user);
  const roles = ["Employee", "Manager", "Admin"];
  console.log(selector);
  // console.log(userSelector);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Handle role selection by wrapping it in an array
    if (name === "roles") {
      setFormData({
        ...formData,
        [name]: [value], // Wrap selected role in array
      });
    } else {
      setFormData({
        ...formData,
        [name]: value, // Update other fields normally
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, content, roles, userId } = formData;
    dispatch(addPost(title, content, roles, userId));
    console.log(formData);
    setFormData({
      title: "",
      content: "",
      roles: [],
      userId:""
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
            required
          />
        </div>
        <div>
        <select
            id={formData.roles}
            name="roles"
            value={formData.roles[0] || ""}
            onChange={handleChange}
            required
          >
            <option value="">-- Select Role --</option>
            {roles.map((role, index) => (
              <option value={role} key={index}>
                {role}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}

export default AddPost;
