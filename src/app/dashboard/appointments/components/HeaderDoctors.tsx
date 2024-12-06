import { doctors } from './data';

const HeaderDoctor: React.FC = () => {
  return (
    <div className="relative w-full">
      {/* Wrapper for Fixed Time Column and Scrollable Area */}
      <div className="flex bg-white shadow-md fixed top-14 left-0 w-full z-20" >
        {/* Fixed Time Column */}
        <div className="w-24 bg-teal-100 flex-none">
        </div>

        {/* Scrollable Doctor Columns */}
        <div className="flex overflow-x-auto" style={{ whiteSpace: 'nowrap' }}>
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="min-w-[calc(85vw/3)] p-4 text-center border-r-2 border-l-2 bg-teal-100"
            >
              <h2 className="text-lg font-extrabold">{doctor.name}</h2>
              <p className="text-sm text-gray-500">{doctor.email}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderDoctor;
