import { useState } from 'react';

const HeaderTabs = () => {
  const [activeTab, setActiveTab] = useState('Appointment History');

  const tabs = [
    "Today's Consultation",
    'Prescriptions',
    'Treatment Plans',
    'Diagnosis',
    'Appointment History',
    'Reports',
  ];

  return (
    <div className="flex border-b border-gray-200">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-4 py-2 text-sm font-medium text-gray-700
            ${
              activeTab === tab
                ? 'text-black border-b-4 border-blue-700'
                : 'hover:text-black'
            }
          `}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default HeaderTabs;
