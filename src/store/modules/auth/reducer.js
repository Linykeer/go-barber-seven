import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  user: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE , action) {
    return produce(state, draft => {
      switch(action.type) {
        case '@auth/SIGN_IN_SUCCESS': {
                draft.profile = action.payload.user;
                draft.user = true;
                draft.loading = false;
                break;
        }
            case '@auth/SIGN_IN_REQUEST': {
                    draft.loading = true;
                    break;             
            }
                case '@auth/SIGN_IN_FAILURE': {
                        draft.loading = false;
                        break;
                }        
            default: 
        }
    });
}