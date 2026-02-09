import { HistoryRouter } from "./components/HistoryRoute/HistoryRoute";
import browserHistory from "./browser-history";
import { Provider } from "react-redux";
import { store } from "./store";
import { Route, Routes } from "react-router-dom";
import { AppRoute } from "./const";
import { HomePage } from "./pages/HomePage/HomePage";
import { OrdersPage } from "./pages/OrdersPage/OrdersPage";
import { ProductsPage } from "./pages/ProductsPage/ProductsPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { SettingsPage } from "./pages/SettingsPage/SettingsPage";
import { StatsPage } from "./pages/StatsPage/StatsPage";
import { ClientsPage } from "./pages/ClientsPage/ClientsPage";

export function App() {
  return (
    <HistoryRouter history={browserHistory} basename="/">
      <Provider store={store}>
        <Routes>
          <Route path={AppRoute.Root} element={<HomePage/>}/>
          <Route path={AppRoute.Orders} element={<OrdersPage/>}/>
          <Route path={AppRoute.Products} element={<ProductsPage/>}/>
          <Route path={AppRoute.Clients} element={<ClientsPage/>}/>
          <Route path={AppRoute.Profile} element={<ProfilePage/>}/>
          <Route path={AppRoute.Settings} element={<SettingsPage/>}/>
          <Route path={AppRoute.Stats} element={<StatsPage/>}/>
        </Routes>
      </Provider>
    </HistoryRouter>
  );
}
