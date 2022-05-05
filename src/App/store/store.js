import { combineReducers, createStore } from "redux";
import { ADR_REST } from '../config/config';
import { DummyMeme } from "../interfaces/common";

const ressourceInitialState={
    images:[],
    memes:[]
}

export const ACTION_RESSOURCE=Object.freeze({
    ADD_ALL_RESSOURCES:'ADD_ALL_RESSOURCES',
    INIT_RESSOURCES:'INIT_RESSOURCES',
    ADD_MEME:'ADD_MEME'
})

/**
 * Reducer pour les ressources
 * @param {object} state
 * @param {object} action
 */
function ressourcesReducer(state=ressourceInitialState,action){
    switch(action.type){
        case ACTION_RESSOURCE.ADD_MEME:return {...state,memes:[...state.memes, action.value]};
        case ACTION_RESSOURCE.INIT_RESSOURCES:
              const memes = fetch(ADR_REST+'/memes').then(flux=>flux.json());
              const images = fetch(ADR_REST+'/images').then(flux=>flux.json());
              Promise.all([memes,images]).then(arr=>
                // this.setState({memes:arr[0],images:arr[1]})
                store.dispatch({type:ACTION_RESSOURCE.ADD_ALL_RESSOURCES,values:arr})
              );
              return state;
        case ACTION_RESSOURCE.ADD_ALL_RESSOURCES:
              return {...state,memes:action.values[0],images:action.values[1] };
        default:return state;
    }
}


export const ACTIONS_CURRENT=Object.freeze({
    UPDATE_MEME:'UPDATE_MEME',
    SAVE_MEME:'SAVE_MEME',
    CLEAR_CURRENT:'CLEAR_CURRENT',
})

/**
 * Reducer pour le current
 * @param {object} state
 * @param {object} action
 */
 const currentReducer = (state = DummyMeme, action) => {
  switch (action.type) {

    case ACTIONS_CURRENT.UPDATE_MEME:
        return { ...state, ...action.value }

    case ACTIONS_CURRENT.SAVE_MEME:
        fetch(`${ADR_REST}/memes${undefined!==state.id?'/'+state.id:''}`,
        {
            method:`${undefined!==state.id?'PUT':'POST'}`,
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(state),
        }).then((flux) => flux.json()
        ).then(o=>{store.dispatch({type : ACTION_RESSOURCE.ADD_MEME, value:o})});

        return state;
    
    case ACTIONS_CURRENT.CLEAR_CURRENT:
        return { ...DummyMeme};
    case ACTION_RESSOURCE.ADD_SAVE_MEME:
        return { ...DummyMeme};

    default:
        return state
 }
}

const combineReduc=combineReducers({current:currentReducer,ressources:ressourcesReducer})
export const store=createStore(combineReduc, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.dispatch({type:ACTION_RESSOURCE.INIT_RESSOURCES});

// store.subscribe(()=>{
//     console.log(store.getState());
// });
// store.dispatch({type:ACTION_RESSOURCE.ADD_MEME,value:{id:2,text:'nouveau meme 2'}});
// store.dispatch({type:ACTION_RESSOURCE.ADD_MEME,value:{id:3,text:'nouveau meme 3'}});
// store.dispatch({type:ACTION_RESSOURCE.ADD_MEME,value:{id:4,text:'nouveau meme 4'}});
// store.dispatch({type:ACTION_RESSOURCE.ADD_MEME,value:{id:5,text:'nouveau meme 5'}});
// store.dispatch({type:ACTION_RESSOURCE.ADD_MEME,value:{id:6,text:'nouveau meme 6'}});

// let state=ressourcesReducer(undefined,{type:'INIT'});
// console.log(state);
// state=ressourcesReducer(undefined,{type:ACTION_RESSOURCE.ADD_MEME,value:{id:2,text:'nouveau meme'}});
// console.log(state);
// state=ressourcesReducer(undefined,{type:ACTION_RESSOURCE.ADD_MEME,value:{id:3,text:'nouveau meme 2'}});
// console.log(state);