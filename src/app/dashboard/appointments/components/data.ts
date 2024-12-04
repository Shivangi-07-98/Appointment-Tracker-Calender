export const doctors = [
  { id: 1, name: "Dr. Sarthak Tike", email: "sarthak.t@example.com", image: "/doctor1.png" },
  { id: 2, name: "Dr. Varun Desai", email: "varun.d@example.com", image: "/doctor2.png" },
  { id: 3, name: "Dr. Ankita Jain", email: "ankita.j@example.com", image: "/doctor3.png" },
  { id: 4, name: "Dr. Mira Weir", email: "mira.w@example.com", image: "/doctor4.png" },
];

export const appointments = [
  { id: 1, patientName: "Riya Kumar", task: "Scaling", startTime: "9:00", endTime: "10:30", doctorId: 1, status: "finished" },
  { id: 2, patientName: "Gaurav Sharma", task: "Bridges", startTime: "9:00", endTime: "10:00", doctorId: 2, status: "finished" },
  { id: 3, patientName: "Soham Jain", task: "Bleaching", startTime: "10:00", endTime: "11:00", doctorId: 3, status: "finished" },
  { id: 4, patientName: "Sara Joshi", task: "Root Canal", startTime: "11:00", endTime: "12:00", doctorId: 1, status: "ongoing" },
  { id: 5, patientName: "Sakshi Ghumat", task: "Tele-Consultation", startTime: "11:00", endTime: "12:00", doctorId: 2, status: "ongoing" },
];
