import { Route, Routes } from "react-router-dom";
import { Car } from "../pages/Car";
import { Home } from "../pages/Home";
import { PurchaseMade } from "../pages/PurchaseMade";

export const RouterList = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/car" element={<Car />} />
      <Route path="/purchasemade" element={<PurchaseMade />} />
    </Routes>
  );
};
