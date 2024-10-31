"use client";
import React, { useState, useEffect } from "react";
import { db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";

const Dashboard = () => {
  const [data, setData] = useState([]);

  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUserList = async () => {
      try {
        const data = await getDocs(usersCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log(filteredData);
      } catch (error) {
        console.error(error);
      }
    };
    getUserList();
  }, []);

  return <div>Dashboard</div>;
};

export default Dashboard;
