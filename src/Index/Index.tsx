import { Route, Routes, BrowserRouter } from 'react-router-dom';
import SignIn from '../Page/SignIn/Index';
import SignUp from '../Page/SignUp/Index';
import AppLayout from '../AppLayout/AppLayout';
import Dashboard from '../Components/Dashboard/Dashboard';
import Shops from '../Page/Shops/Index';
import Inventory from '../Components/Inventory/Inventory';
import Sales from '../Components/Sales/Sales';
import Reports from '../Components/Reports/Reports';
import CreateShop from '../Page/Shops/CreateShop';
import OtpPage from '../Page/OtpPage/Index';
import ShopDetail from '../Page/Shops/ShopDetail';

const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/verify-otp" element={<OtpPage />} />
        <Route path="/create-shop" element={<CreateShop />} />
        <Route path="/dashboard" element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="shops">
            <Route index element={<Shops />} />
            <Route path=":shop-name" element={<ShopDetail />} />
          </Route>
          <Route path="inventory" element={<Inventory />} />
          <Route path="sales" element={<Sales />} />
          <Route path="reports" element={<Reports />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
