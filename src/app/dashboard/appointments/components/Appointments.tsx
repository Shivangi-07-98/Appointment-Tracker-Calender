import { appointments } from './data';
import { doctors } from './data';


const parseTime = (time: string) => {
  const [hour, minute] = time.split(':').map((val) => parseInt(val, 10));
  const isPM = time.includes('PM');
  return isPM && hour !== 12 ? hour + 12 : !isPM && hour === 12 ? 0 : hour;
};


const calculatePosition = (startTime: string, endTime: string, doctorIndex: number, totalDoctors: number) => {
  const startHour = parseTime(startTime);
  const endHour = parseTime(endTime);
  const slotHeight = 5; // 5rem per hour
  const columnWidth = 85 / 3; // 85vw divided by 3 for 3 visible columns

  return {
    top: `${(startHour - 9) * slotHeight}rem`,
    height: `${(endHour - startHour) * slotHeight}rem`,
    // left: `${doctorIndex * (100 / totalDoctors)}%`,
    // width: `${100 / totalDoctors}%`,
    left: `calc(${doctorIndex * columnWidth}vw)`,
    width: `calc(${columnWidth}vw)`,
  };
};


const Appointments: React.FC = () => {
  return (
    <>
    {appointments.map((appointment, index) => {
      const position = calculatePosition(
        appointment.startTime,
        appointment.endTime,
        appointment.doctorIndex,
        doctors.length
      );

      return (
        <div
          key={index}
          className="absolute"
          style={{
            top: position.top,
            left: position.left,
            height: position.height,
            width: position.width,
          }}
        >
          <div className="bg-teal-50 rounded-lg shadow-lg border relative h-full">
            <div
              className={`absolute top-0 left-0 right-0 h-1 rounded-t-lg ${
                appointment.status === 'Finished'
                  ? 'bg-green-500'
                  : appointment.status === 'Ongoing'
                  ? 'bg-orange-500'
                  : 'bg-blue-500'
              }`}
            ></div>
            <div className="flex justify-between items-center m-2">
              <div className="flex items-center">
                <img
                  src="/image.png"
                  alt="Profile"
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <p className="font-bold text-gray-800 text-sm truncate">
                    {appointment.patientName}
                  </p>
                  <p className="text-xs text-gray-500">{appointment.type}</p>
                  <p className="mt-4 text-xs text-gray-600">
                    {appointment.startTime} - {appointment.endTime}
                  </p>
                </div>
              </div>
              <div>
                <p
                  className={`mt-1 text-xs font-medium ${
                    appointment.status === 'Finished'
                      ? 'text-green-600'
                      : appointment.status === 'Ongoing'
                      ? 'text-orange-500'
                      : 'text-blue-500'
                  }`}
                >
                  {appointment.status}
                </p>
                <button className="mt-2 px-3 py-1 bg-blue-500 text-white text-xs rounded">
                  See Patient Details
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    })}
    </>
    
  )
}

export default Appointments