import { ActionTree } from 'vuex';
import { ICountryStore } from './state';
import { StateInterface } from '../index';
import { GET_CONTINENTS } from '../../graphql/query';
import { useQuery } from '@vue/apollo-composable';
import { watchEffect } from 'vue';

const actions: ActionTree<ICountryStore, StateInterface> = {
    getContinents( { commit } ) {
        const { result } = useQuery( GET_CONTINENTS );
        watchEffect( () => {
            if ( result.value ) {
                commit( 'setContinents', result.value.data.continents );
            }
        }
        )
}
}



export default actions;