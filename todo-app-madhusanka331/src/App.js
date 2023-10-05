import React, { useEffect, useState } from 'react';
import { api } from './api/commonAPI.js';
import {AppContext} from "./userContext.js"
import AppRouter from './routes/appRouter.js';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    (async () =>  await api.getToDos()
      .then((response) => {
        setTasks(response);
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
      }))()
  }, []); 

  return (
    <div>
      <AppContext.Provider value = {{tasks, setTasks}}>
        <AppRouter />
      </AppContext.Provider>
    </div>
  );
}

export default App;
