

export default function(state={},action){
   
    switch(action.type){
       
        case 'GET_DATA':
            return{...state,show:action.payload}
        case 'GET_CART':
                return{...state,cartall:action.payload}
          
        default:
            return state
    
    
    
    }
    
    
    }