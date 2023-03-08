import { Route, Routes } from "react-router-dom";
import ChoseProjet from "./components/adminComponents/ChoseProjet";
import OptionsPage from "./components/adminComponents/OptionsPage"
import AddNewControler from "./components/adminComponents/AddNewControlerPage"
import DetailsPage from "./components/adminComponents/DetailsPage"
import BlocPage from "./components/adminComponents/BlocPage"
import AllControlersPage from "./components/adminComponents/AllControlersPage";
export default () => {
  return (
    <div>
      <div>
        <Routes>
          <Route path="*" element={<ChoseProjet />} />
          <Route path="/OptionsPage" element={<OptionsPage />} />
          <Route path="/AllControlers" element={<AllControlersPage />} />
          <Route path="/AddNewControler" element={<AddNewControler />} />
          <Route path="/DetailsPage" element={<DetailsPage />} />
          <Route path="/Blocpage" element={<BlocPage />} />
        </Routes>
      </div>
    </div>
  );
};
