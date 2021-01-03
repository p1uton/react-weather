import { CitiesList } from '../../Components/CitiesList/CitiesList';
import { Search } from '../../Components/Search/Search';

export const App = () => {
  return (
    <div className="container">
      <Search />
      <CitiesList />
    </div>
  );
};