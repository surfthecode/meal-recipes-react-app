import logo from "./logo.svg";
import "./App.css";

function App() {
  return <MealsListContainer />;
}

// MealsListContainer - contains MealDetailsComponent
const MealsListContainer = () => {
  return (
    <>
      <h2>Latest Meals</h2>
      <ul>
        <MealDetailsComponent />
        <MealDetailsComponent />
        <MealDetailsComponent />
      </ul>
    </>
  );
};

// MealDetailsComponent - <h3>, <p>, <a>
function MealDetailsComponent() {
  return (
    <li>
      <h3>Meal title</h3>
      <p>
        Meal description: Lorem ipsum dolor sit amet consectetur adipisicing
        elit.
      </p>
    </li>
  );
}

export default App;
