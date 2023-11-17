// Providers
import ReactQueryProvider from "./components/providers/reactQuery";
// Router
import Routes from "./containers/Rotes";

function App() {
  return (
    <ReactQueryProvider>
      <Routes />
    </ReactQueryProvider>
  );
}

export default App;
