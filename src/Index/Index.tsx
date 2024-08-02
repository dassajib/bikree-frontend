import { Route, Routes } from 'react-router-dom';
import SignIn from '../Components/SignIn/SignIn';
import SignUp from '../Components/SignUp/SignUp';
import AppLayout from '../AppLayout/AppLayout';
import Dashboard from '../Components/Dashboard/Dashboard';
import Shops from '../Components/Shops/Shops';
import Inventory from '../Components/Inventory/Inventory';
import Sales from '../Components/Sales/Sales';
import Reports from '../Components/Reports/Reports';
import CreateShop from '../Components/Shops/CreateShop';

const Index = () => {
  return (
    <Routes>
      <Route path='/' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
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
