import './App.css';
import Router from './components/Router'
import Context from './components/Context'

function App() {
  // TODO: Collect data from database

  // TEMP: Temp data
  const products = [];
  products.push({
    id: "TC-123",
    name: "Tea Cup",
    description: "A tea cup made of ceramic",
    category: "Glassware",
    cost: 30.00,
    quantity: 4
  })

  products.push({
    id: "TP-421",
    name: "Tea Pot",
    description: "A tea pot made of glass",
    category: "Glassware",
    cost: 100.00,
    quantity: 2
  })

  products.push({
    id: "TP-875",
    name: "Tea Spoon",
    description: "A tea spoon made of silver",
    category: "Utensils",
    cost: 9.99,
    quantity: 34
  })
  
  return (
    <>
      <Context.Provider value={products}>
        <Router />
      </Context.Provider>
    </>
  );
}

export default App;
