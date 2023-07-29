import { createStore } from 'vuex';

// My custom modules
import CountryModule from './module-template';
import { ICountryStore } from './module-template/state';


export interface StateInterface {
  // Define your own store structure, using submodules if needed
  // example: ExampleStateInterface;
  // Declared as unknown to avoid linting issue. Best to strongly type as per the line above.
  store: ICountryStore
}

export default createStore<StateInterface>({
  modules: {
    store: CountryModule
  }
})
