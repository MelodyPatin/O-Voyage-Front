import {
  CHANGE_LOGIN_FIELD,
  HANDLE_SUCCESSFUL_LOGIN,
  HANDLE_SUCCESSFUL_SIGN_UP,
  SAVE_USER_DATA,
  CLICK_LOGOUT,
  UPDATE_LOGGED_OUT,
  SAVE_FRIENDS,
} from '../actions/user';

export const initialState = {
  // indique si l'utilisateur est déconnecté
  loggedOut: false,
  // indique si l'utilisateur a créé son compte
  signedUp: false,
  // contenu du champ email du formulaire de login
  email: '',
  // contenu du champ password du formulaire de login
  password: '',
  // contenu du champ email du formulaire de signup
  signUpEmail: '',
  // contenu du champ password du formulaire de signup
  signUpPassword: '',
  firstnameValue: '',
  lastnameValue: '',
  logged: false,
  // redirection
  redirectTo: null,
  myTrips: [],
  friends: [],
};

/* reducer qui s'occupe de ce qui concerne l'utilisateur */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_LOGIN_FIELD:
      return {
        ...state,
        [action.identifier]: action.value,
      };
    /*
      avec les ifs, si on ajoute un champ dans le formulaire il faut ajouter
      un nouveau if.
      Avec cette syntaxe, le reducer est prêt pour n'importe quel ajout de champ
      MAIS il faut que le nom du champ dans le state soit présent dans le payload
      de l'action
    */

    case HANDLE_SUCCESSFUL_LOGIN:
      localStorage.setItem('token', action.token);

      return {
        ...state,
        // sécurité : on efface les identifiants du state dès qu'on a plus besoin
        email: '',
        password: '',
        loggedState: true,
        logged: true,
      };

    case HANDLE_SUCCESSFUL_SIGN_UP:
      return {
        ...state,
        signedUp: true,
        signUpEmail: '',
        signUpPassword: '',
        firstname: '',
        lastname: '',
      };

    case SAVE_USER_DATA:
      return {
        ...state,
        firstnameValue: action.firstName,
        lastnameValue: action.lastName,
      };

    case CLICK_LOGOUT:
      localStorage.removeItem('token');

      return {
        ...state,
        firstnameValue: '',
        lastname: '',
        logged: false,
        loggedOut: true,
        signedUp: false,
      };

    case UPDATE_LOGGED_OUT:
      return {
        ...state,
        loggedOut: false,
      };

    case SAVE_FRIENDS:
      return {
        ...state,
        friends: action.friends,
      };

    default:
      return state;
  }
};

export default reducer;
