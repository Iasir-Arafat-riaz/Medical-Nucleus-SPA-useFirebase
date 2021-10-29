import "./App.css";
import Home from "./pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import NotFound from "./pages/NotFound/NotFound";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./shared/Header/Header";
import Doctors from "./pages/Doctors/Doctors";
import Archive from "./pages/Archive/Archive";
import Emergency from "./pages/Emergency/Emergency";
import Login from "./pages/Login/Login";
import Registration from "./pages/Login/Registration/Registration";
import AuthProvider from "./AuthProvider/AuthProvider";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";
import Detail from "./pages/Home/Services/Detail/Detail";
import ServiceDetail from "./pages/ServiceDetail/ServiceDetail";
import Footer from "./shared/Footer/Footer";
import AboutUs from "./pages/MoreInfo/AboutUs/AboutUs";
import CovidVax from "./pages/MoreInfo/AboutUs/CovidVax/CovidVax";
import Icu from "./pages/MoreInfo/Icu/Icu";

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/doctors">
              <Doctors></Doctors>
            </PrivateRoute>
            <PrivateRoute path="/archive">
              <Archive></Archive>
            </PrivateRoute>
            <PrivateRoute path="/detail/:count">
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>
            <Route path="/emergency">
              <Emergency></Emergency>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/newUser/register">
              <Registration></Registration>
            </Route>
            <Route path="/about">
              <AboutUs></AboutUs>
            </Route>
            <Route path="/icu">
              <Icu></Icu>
            </Route>
            <Route path="/covid">
              <CovidVax></CovidVax>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;


//--------------------THANKS TO YOU FOR YOUR TIME AND SUPPORT---------------