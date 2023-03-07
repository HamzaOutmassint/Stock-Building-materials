import { Route, Routes } from "react-router-dom";
import ChoseProjet from "./components/adminComponents/ChoseProjet";
import OptionsPage from "./components/adminComponents/OptionsPage"
import AddNewControler from "./components/adminComponents/AddNewControlerPage"
import DetailsController from "./components/adminComponents/DetailsController"
import Blocpage from "./components/adminComponents/Blocpage"
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
          <Route path="/DetailsController" element={<DetailsController />} />
          <Route path="/Blocpage" element={<Blocpage />} />
        </Routes>
      </div>
    </div>
  );
};
