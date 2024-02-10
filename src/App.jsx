import {
  Route, Routes, Navigate, BrowserRouter
} from "react-router-dom";
import routing from "./routing";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  );
}

export default App;
