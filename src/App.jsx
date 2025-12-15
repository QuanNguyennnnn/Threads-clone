import { useDispatch } from 'react-redux'
import AppRoutes from './components/Approutes'
import { useEffect, Suspense } from 'react';
import { fetchUser } from './feartures/User/userActions';
import { fetchFeed } from './feartures/feed/feedActions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
    dispatch(fetchFeed({
      type: "for_you",
      page: 1,
      per_page: 5
    }));
  }, [dispatch]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AppRoutes />
    </Suspense>
  );
}

export default App;
