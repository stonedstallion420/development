import "./App.css";
import { PODS, SIZE_LABELS, ROAST_LABELS, PODS_ID_TO_POD } from "./data";
import Pod from "./components/Pod";
import Filterbox from "./components/Filterbox";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function App() {
  // States
  // Filter states
  const [selectedRoasts, setRoasts] = useState({
    light: true,
    medium: true,
    dark: true,
  });
  const [selectedSizes, setSizes] = useState({
    espresso: true,
    double_espresso: true,
    coffee: true,
  });
  // Sort state
  const [sortCategory, setSortCategory] = useState("name");
  const [favorites, setFavorites] = useState(
    Object.fromEntries(PODS.map((pod) => [pod.id, false]))
  );
  // Aggregator states
  const favoritesPrice = Object.entries(favorites)
    .filter(([, is_favorite]) => is_favorite)
    .map(([id]) => PODS_ID_TO_POD[id].price)
    .reduce((prevValue, currentValue) => prevValue + currentValue, 0);

  const filterPods = (pods) =>
    pods.filter((pod) => selectedRoasts[pod.roast] && selectedSizes[pod.size]);

  const sortPods = (pods) =>
    pods.sort((a, b) => {
      if (sortCategory === "name") {
        return a[sortCategory] > b[sortCategory] ? 1 : -1;
      } else {
        return a[sortCategory] - b[sortCategory];
      }
    });

  const pods = sortPods(filterPods(PODS));

  return (
    <div className="App">
      <header>
        <h1>Coffee Pods</h1>
      </header>
      <main>
        <div className="sidebar-container">
          <div className="prefs-container">
            <Form>
              <Form.Group className="prefs-group">
                <Form.Label className="prefs-header">Sort by</Form.Label>
                <Form.Check
                  type="radio"
                  label="A-Z"
                  name="sort"
                  defaultChecked
                  onChange={(_) => setSortCategory("name")}
                ></Form.Check>
                <Form.Check
                  type="radio"
                  label="Price"
                  name="sort"
                  onChange={(_) => setSortCategory("price")}
                ></Form.Check>
                <Form.Check
                  type="radio"
                  label="Intensity"
                  name="sort"
                  onChange={(_) => setSortCategory("intensity")}
                ></Form.Check>
              </Form.Group>
              <Form.Group className="prefs-group">
                <Form.Label className="prefs-header">Roast Level</Form.Label>
                <Filterbox
                  category="light"
                  label={ROAST_LABELS["light"]}
                  setSelected={setRoasts}
                  selected={selectedRoasts}
                />
                <Filterbox
                  category="medium"
                  label={ROAST_LABELS["medium"]}
                  setSelected={setRoasts}
                  selected={selectedRoasts}
                />
                <Filterbox
                  category="dark"
                  label={ROAST_LABELS["dark"]}
                  setSelected={setRoasts}
                  selected={selectedRoasts}
                />
              </Form.Group>
              <Form.Group className="prefs-group">
                <Form.Label className="prefs-header">Cup Size</Form.Label>
                <Filterbox
                  category="espresso"
                  label={SIZE_LABELS["espresso"]}
                  setSelected={setSizes}
                  selected={selectedSizes}
                />
                <Filterbox
                  category="double_espresso"
                  label={SIZE_LABELS["double_espresso"]}
                  setSelected={setSizes}
                  selected={selectedSizes}
                />
                <Filterbox
                  category="coffee"
                  label={SIZE_LABELS["coffee"]}
                  setSelected={setSizes}
                  selected={selectedSizes}
                />
              </Form.Group>
            </Form>
            <p>Favorites Price: ${favoritesPrice.toFixed(2)}</p>
          </div>
        </div>
        <div className="pods-container">
          <ul className="pods-list">
            {pods.map((pod, index) => (
              <Pod
                key={index}
                {...pod}
                isFavorite={favorites[pod.id]}
                setIsFavorite={(isFavorite) =>
                  setFavorites({
                    ...favorites,
                    [pod.id]: isFavorite,
                  })
                }
              />
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
