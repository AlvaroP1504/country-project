import { MutationTree } from 'vuex';
import { ICountryStore } from './state';


const mutation: MutationTree<ICountryStore> = {
    setContinents( state , payload ) {
        state.continentsParams = payload;    
    }
}


export default mutation;