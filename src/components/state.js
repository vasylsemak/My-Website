export const initialState = {language: 'english'}

export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE'

export const reducer = (state, action) =>{
    switch(action.type){
        case CHANGE_LANGUAGE:
            return {
                language: action.changed
            }
        default:
             return state
    }
    
}