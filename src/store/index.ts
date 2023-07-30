import { createStore } from 'vuex'
import { GET_CONTINENTS, GET_COUNTRIES } from '../graphql/query';
import { useQuery } from '@vue/apollo-composable';
import { watchEffect } from 'vue';
import { Continent } from '../models/continent';
import { Country, CountryCard } from '../models/country';


interface StoreState {
    isDialogOpen: boolean;
    isMainContentRendered: boolean;
    continentParams: string[];
    continents: Continent[];
    countries: CountryCard[];
    country_code: string;
    country_detail:Country;
    isCountryDetailOpen:boolean;
    inputFilter:string;
}

// Create a new store instance.
const store = createStore({
  state (): StoreState {
    return {
        isCountryDetailOpen:false,
        isDialogOpen: false,
        isMainContentRendered: false,
        continents: [],
        countries: [],
        continentParams: [],
        country_code: '',
        country_detail: {
          code: '',
          name: '',
          continent: {
            code: '',
            name: ''
          },
          capital: '',
          currency: '',
          languages: [],
          states: [],
        },
        inputFilter:''
    }
  },
  mutations: {

    setContinents(_state, _continents){
        _state.continents = _continents
    },
    setCountries(_state, _countries){
        _state.countries = _countries
    },
    setContinentsParams(_state, _continentParams){
        _state.continentParams = _continentParams
    },
    setDialogOpen(_state, _isDialogOpen){
        _state.isDialogOpen = _isDialogOpen
    },
    setMainContentRender(_state, _isMainContentRendered){
      _state.isMainContentRendered = _isMainContentRendered
    },
    setCountryCode(_state, _country_code){
      _state.country_code = _country_code
    },
    setCountryDetail(_state, _country_detail){
      _state.country_detail = _country_detail
    },
    setCountryDetailOpen(_state,_country_detail_change){
      _state.isCountryDetailOpen = _country_detail_change
    }
  },
  actions:{
    listContinents({commit}){
        const { result } = useQuery(GET_CONTINENTS)
        watchEffect(()=>{
          if(result.value){
            commit("setContinents", result.value.continents)
          }
        })
    },
    listCountries({commit}){
      //const continentParams:string[] = this.getters["getContinentsParams"]
      const { result } = useQuery(GET_COUNTRIES);
        watchEffect(() => {
            console.log("soy paises" , result.value)
            if(result.value){
              commit("setCountries", result.value.countries)
              commit("setMainContentRender", true)
            }
        })
    },
  },
  getters:{
    getIsContinentReady(_state){
      return _state.continents.length > 0
    },
    getIsContinentSelected(_state, _continent){
      return _state.continentParams.includes(_continent)
    },
    getContinentsParams(_state){
      console.log("obtenido")
      return _state.continentParams
    },
    getExistCountryCode(_state){
      return _state.country_code !== ''
    },
    getCountryCode(_state){
      return _state.country_code
    }
  }

})

export default store