

import { GetterTree } from 'vuex';
import { ICountryStore } from './state';
import { StateInterface } from '../index';


const getters: GetterTree<ICountryStore, StateInterface> = {
    isContinentReady( state ) {
        return state.continentsParams.length > 0;
    }
}



export default getters;