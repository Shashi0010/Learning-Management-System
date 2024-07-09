import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loaduser, userSelector } from "../store/userSlice";

const Home = () => {
  const user = useSelector(userSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    const newuser = {
      name: "vitthal",
    };
    dispatch(loaduser(newuser));
  }, [user]);

  console.log(user);

  return <div>Home</div>;
};

export default Home;
