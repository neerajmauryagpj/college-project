import StatusNotification from './layout/partials/StatusNotification';
import Router from './Router';
import { useCurrentWidth } from './core/custom-hooks';

function App() {
  const width = useCurrentWidth();
  return (
    <div className={`App ${width < 576 ? 'mobileApp':''}`}>
        <StatusNotification />
        <Router />
    </div>
    
  );
}
export default App;
