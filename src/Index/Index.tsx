import { Route, Routes } from 'react-router-dom';

import SignIn from '../Page/SignIn/SignIn';
import SignUp from '../Page/SignUp/SignUp';
import AppLayout from '../AppLayout/AppLayout';
import Dashboard from '../Components/Dashboard/Dashboard';
import Shops from '../Page/Shops/Shops';
import Inventory from '../Components/Inventory/Inventory';
import Sales from '../Components/Sales/Sales';
import Reports from '../Components/Reports/Reports';
import CreateShop from '../Page/Shops/CreateShop';
import OtpPage from '../Page/OtpPage/OtpPage';

const Index = () => {
  return (
    <Routes>
      <Route path='/' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/otp-verification' element={<OtpPage />} />
      <Route path='/create-shop' element={<CreateShop />} />
      <Route path="/dashboard" element={<AppLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="shops" element={<Shops />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="sales" element={<Sales />} />
        <Route path="reports" element={<Reports />} />
      </Route>
    </Routes>
  );
};

export default Index;
