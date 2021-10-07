//*Import Redux Stack */
import store from "./store/store";
import { Provider } from "react-redux";

/* import components */
import DataDisplay from "./component/DataDisplay";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      
    </Provider>
  );
}

export default App;
