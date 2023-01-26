import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./pages/HomePage";
import RevenuBrutPage from "./pages/RevenueBrutPage";
import AchatsPage from "./pages/AchatsPage";
import RatingPage from "./pages/RatingPage";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement);

function App() {
  //  ===================================== RevenuBrutPage =======================================
  const [RevenuBrut, setRevenuBrut] = useState({ labels: [], values: [] });

  useEffect(() => {
   
      const labels = [];
      const values = [];
      axios
        .get("/api/revenuebrut")
        .then((res) => {
          res.data.forEach((e) => {
            console.log(e);
            labels.push(e._id["ProductLine"]); //insertion des nom de productline en table labels
            values.push(e.count); //insertion des valeurs de chaque productine en table values
            setRevenuBrut({ labels, values });
          });
        })
        .catch((err) => console.log(err));

  }, []);

  //  ======================================= AchatsPage ===========================================

  const [Achats, setAchats] = useState({
    countMembre: [0, 0],
    countNormal: [0, 0],
  }); // [Female,Male]

  useEffect(() => {

      const countMembre = [];
      const countNormal = [];
      axios
        .get("/api/achats")
        .then((res) => {
          res.data.forEach((e) => {
            console.log(e);
            if (e._id.customerType.toUpperCase() === "MEMBER") {
              if (e._id.gender.toUpperCase() === "FEMALE") {
                countMembre.push(e.count); //insertion a la fin de tableau si c'est Female
              }
              if (e._id.gender.toUpperCase() === "MALE") {
                countMembre.unshift(e.count); //insertion au debut de tableau si c'est Male
              }
            }

            if (e._id.customerType.toUpperCase() === "NORMAL") {
              if (e._id.gender.toUpperCase() === "FEMALE") {
                countNormal.push(e.count); //insertion a la fin de tableau si c'est Female
              }
              if (e._id.gender.toUpperCase() === "MALE") {
                countNormal.unshift(e.count); //insertion au debut de tableau si c'est Male
              }
            }
          });
        })
        .catch((err) => console.log(err));
      setAchats({ countMembre, countNormal });
  }, []);

  // ======================================= RATING PAGE =========================================
  const [Rating, setRating] = useState({ labels: [], values: [] });

  useEffect(() => {

      const labels = [];
      const values = [];
      axios.get("/api/rating").then((res) => {
        res.data.forEach((e) => {
          labels.push(e._id); //insertion des noms de labels
          values.push(e.avgrating); //insertion des valeurs de chaque labels
          setRating({ labels, values });
        });
      });
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route
          path="/revenuebrut"
          element={<RevenuBrutPage revenubrut={RevenuBrut} />}
        />
        <Route path="/achats" element={<AchatsPage achats={Achats} />} />
        <Route path="/rating" element={<RatingPage rating={Rating} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
