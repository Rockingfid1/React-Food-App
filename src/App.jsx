import Header from "./components/Header";
import Items from "./components/Items";
import AppContextProvider from "./store/app-context";
import OrderModal from "./components/OrderModal";
import FormDialog from "./components/FormModal";
import SuccessModal from "./components/SuccessModal";
import ErrorModal from "./components/ErrorModal";

function App() {
  return (
    <AppContextProvider>
      <Header />
      <Items />
      <OrderModal />
      <FormDialog />
      <SuccessModal />
      <ErrorModal />
    </AppContextProvider>
  );
}

export default App;
