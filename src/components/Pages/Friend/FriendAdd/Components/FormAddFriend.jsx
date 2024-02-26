import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SimpleButton from '../../../../Reusable/Buttons/SimpleButton';
import LabelInput from '../../../../Reusable/LabelInput/LabelInput';
import { addFriend, fetchUserByMail } from '../../../../../actions/user';
import AvatarFriend from '../../../../Reusable/Avatar/AvatarFriends';

const FormAddFriend = ({
  inputValue,
  changeField,
  placeholderContent,
  buttonContent,
  labelContent,
  name,
}) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const userAvatar = useSelector((state) => state.user.emailSearch);
  const userFirstName = useSelector((state) => state.user.firstNameSearch);
  const userLastName = useSelector((state) => state.user.lastNameSearch);
  const friendId = useSelector((state) => state.user.userIdSearch);

  // récupérer les résultats dans l'API
  const loadResults = () => {
    dispatch(fetchUserByMail());
  };

  const handleGoBack = (event) => {
    event.preventDefault(); // Empêche le comportement par défaut du formulaire
    navigate(-1); // Navigue vers la page précédente
  };

  const handleAddFriend = () => {
    dispatch(addFriend(friendId));
    navigate('/friends');
  };

  return (
    <div className="formAddFriend" action="">
      <form
        className="formAdd"
        onSubmit={(event) => {
          event.preventDefault();
          loadResults();
        }}
      >
        <LabelInput
          label={labelContent}
          className="label-input"
          placeholder={placeholderContent}
          value={inputValue}
          name={name}
          type="text"
          onChange={changeField}
        />
        <SimpleButton
          type="button"
          textContent="Rechercher"
          onClick={loadResults}
        />
        <div className="result">
          {userAvatar && <AvatarFriend userAvatar={userAvatar} />}
          {userFirstName} {userLastName}
        </div>
      </form>
      <SimpleButton
        type="button"
        textContent="Ajouter"
        onClick={handleAddFriend}
      />
      <div className="buttonBack">
        <SimpleButton
          type="button"
          textContent="Retour"
          onClick={handleGoBack}
        />
      </div>
    </div>
  );
};

export default FormAddFriend;
