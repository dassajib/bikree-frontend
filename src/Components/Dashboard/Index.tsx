import { FaUser } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="w-full px-3 py-8 lg:p-8 overflow-y-auto no-scrollbar flex-grow">
      <div className="w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 items-center w-full gap-4 rounded-lg">
          <div className="grid grid-cols-3 shadow-sm items-center w-full gap-14 h-[100px] bg-[#ECF2FF] rounded-lg p-4">
            <div className="bg-white dark:bg-dark shadow-sm w-[50px] h-[50px] rounded-full flex items-center justify-center">
              <FaUser className='text-orange-300' />
            </div>
            <div className="flex flex-col col-span-2 w-full">
              <p className="text-[#777] dark:text-white font-semibold">
                Employee
              </p>
              <p className="text-sm md:text-xl font-semibold">78</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
