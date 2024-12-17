import React, { Suspense, startTransition } from 'react'; 
import ReactDOM from 'react-dom/client'; 
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'; 
import MemberTasksPage from './components/MemberTasksPage'; 
import TaskPage from './components/TaskPage'; 
import PieChart from './components/PieChart'; 
import CalenderComponent from 'calender/CalenderComponent';



import "./index.css";
import EditTaskPage from './components/EdittaskPage';

// Lazy load CalendarComponent
// const CalenderComponent = React.lazy(() => import("calender/CalendarComponent"));

function App() {
  const navigate = useNavigate(); 

  const handleNavigate = (path) => {
    startTransition(() => {
      navigate(path); 
    });
  };

  return (
    <div>
      {/* <button onClick={() => handleNavigate('/calender')}>Go to Calendar</button> */}
      <CalenderComponent />
      <Suspense fallback={<div>Loading Calendar...</div>}>
        <Routes>
          <Route path="/" element={<TaskPage />} />
          <Route path="/member/:memberId" element={<MemberTasksPage />} />
          <Route path="/piechart" element={<PieChart />} />
          {/* <Route path="/calender" element={<CalenderComponent />} /> */}
          {/* <CalenderComponent /> */}
          <Route path='/edit-task/:taskId' element={<EditTaskPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

// Root component that wraps the App with BrowserRouter
function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<Root />)