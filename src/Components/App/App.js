import { CitiesList } from '../../Components/CitiesList/CitiesList';
import { Search } from '../../Components/Search/Search';
import { Switch, Route } from 'react-router-dom';
import { CityContainer } from '../CityContainer/CityContainer';

export const App = () => {
  return (
    <div className="container">
      <Switch>
        <Route path="/:cityId">
          <CityContainer />
        </Route>
        <Route path="/">
          <Search />
          <CitiesList />
        </Route>
      </Switch>
    </div>
  );
};