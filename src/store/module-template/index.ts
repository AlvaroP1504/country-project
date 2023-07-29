import { Module } from 'vuex';
import { StateInterface } from '../index';

import state, { ICountryStore } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';


const CountryModule: Module<ICountryStore, StateInterface> = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}


export default CountryModule;