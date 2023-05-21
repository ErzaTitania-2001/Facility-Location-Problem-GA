// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/chart/BaseOptionChart';
import DashboardNavbar from './layouts/dashboard/DashboardNavbar';
//import DashboardNavbar from './layouts/userboard/DashboardNavbar';


// ----------------------------------------------------------------------

export default function App() {

  
  return (
    <ThemeProvider>
      <ScrollToTop />
      <DashboardNavbar
       />
      <BaseOptionChartStyle />
      <Router />
    </ThemeProvider>
  );
}
