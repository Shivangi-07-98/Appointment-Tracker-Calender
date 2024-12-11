import React from 'react';

const NotesText: React.FC = () => {
  return (
    <div className="bg-pink-100" style={{borderRadius: "36px", padding: "1.2rem"}}>
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <h3 className="text-base font-bold text-black">Dr. Amogh Wadkar</h3>
        <span className="text-sm text-pink-300">Sept 24, 2024</span>
      </div>
      
      {/* Content Section */}
      <ul className="mt-2 text-xs text-indigo-900 list-disc list-inside">
        <li>Mild tooth sensitivity in upper molars; slight gum inflammation</li>
        <li>Signs of bruxism (enamel wear, jaw discomfort)</li>
        <li>Inconsistent flossing, mild plaque buildup, early gingivitis noted</li>
      </ul>
    </div>
  );
};

export default NotesText;
