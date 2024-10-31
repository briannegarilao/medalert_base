"use client";
import React, { useState, useEffect } from "react";
import { db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";

const Dashboard = () => {
  const [data, setData] = useState([]);

  const usersCollectionRef = collection(db, "Users");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDocs(usersCollectionRef);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return <div>Dashboard</div>;
};

export default Dashboard;
