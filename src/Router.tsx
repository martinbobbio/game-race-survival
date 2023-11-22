import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RaceSurvival } from '@/views';
import App from '@/App';

/**
 * Functional component that render the router and wrap the application.
 *
 * @return React.ReactElement <Router/>
 */
const Router = () => {
  /**
   * Functional component that wrap the views and add logics.
   *
   */
  const wrapApplication = (view: React.ReactNode) => {
    return <App>{view}</App>;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path={'*'} element={wrapApplication(<RaceSurvival />)} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
