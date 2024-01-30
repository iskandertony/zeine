import {
  Route, Routes, Navigate,
} from "react-router-dom";
import routing from "./routing";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        {Object.keys(routing).map((key) => {
          const route = routing[key];
          if (route.role === "all") {
            return (
                <Route key={key} path={route.path} element={route.element} />
            );
          }
          return null;
        })}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
