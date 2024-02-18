import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './UserUpdate.scss';
import { Input } from 'semantic-ui-react';
import SimpleButton from '../../Reusable/SimpleButton/SimpleButton';
import ReturnTitle from '../../Reusable/ReturnTitle/ReturnTitle';
import { updateUserInput, userUpdateRequest } from '../../../actions/user';
import LabelInputUpdate from '../../Reusable/LabelInput/LabelInputUpdate';
import LabelInput from '../../Reusable/LabelInput/LabelInput';
import PopupMessage from '../../Reusable/Popups/PopupMessage';

const FormUserUpdate = ({ changeField }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [editedValues, setEditedValues] = useState({
    firstnameValue: user.firstnameValue,
    lastnameValue: user.lastnameValue,
    email: user.email,
    password: '',
  });

  // Effet pour mettre à jour les champs édités lorsque l'état Redux change
  useEffect(() => {
    setEditedValues({
      firstnameValue: user.firstnameValue,
      lastnameValue: user.lastnameValue,
      email: user.email,
      password: '',
    });
  }, [user]);

  const handleChange = (event, fieldName) => {
    dispatch(updateUserInput(fieldName, event.target.value));
  };

  const [popupVisible, setPopupVisible] = useState(false);
  const [modificationStatus, setModificationStatus] = useState(null);

  // Effet pour afficher la popup lorsque le statut de la modification change
  useEffect(() => {
    if (modificationStatus !== null) {
      setPopupVisible(true);
    }
  }, [modificationStatus]);

  const handleSubmit = async (event) => {
    // Dispatch de l'action userUpdateRequest pour déclencher le middleware
    // Cette action enverra les données à l'API
    event.preventDefault();
    try {
      // Effectuer la requête axios pour mettre à jour les données
      await dispatch(userUpdateRequest());

      // Mise à jour du statut de la modification (succès)
      setModificationStatus('success');
      user.password = '';
    } catch (error) {
      // Mise à jour du statut de la modification (échec)
      setModificationStatus('failure');
    }
  };

  const handlePopupClose = () => {
    if (modificationStatus === 'success') {
      navigate(-1);
      setPopupVisible(false);
    } else {
      setPopupVisible(false);
    }
  };
  // Revenir à la page précédente
  const handleGoBack = () => {
    navigate(-1); // Navigates back to the previous page
  };

  return (
    <div>
      <ReturnTitle textContent="Modifier mon profil" />
      <div className="formUserUpdate">
        <form className="FormUpdateProfile" onSubmit={handleSubmit}>
          <LabelInputUpdate
            name="firstname"
            label="Prénom"
            placeholder=""
            value={editedValues.firstnameValue}
            onChange={(event) => handleChange(event, 'firstnameValue')}
          />
          <LabelInputUpdate
            name="name"
            label="Nom"
            placeholder=""
            value={editedValues.lastnameValue}
            onChange={(event) => handleChange(event, 'lastnameValue')}
          />
          <LabelInputUpdate
            name="email"
            label="Email"
            placeholder=""
            value={editedValues.email}
            onChange={(event) => handleChange(event, 'email')}
          />
          <LabelInput
            type="password"
            name="password"
            label="Mot de passe"
            placeholder=""
            value={user.password}
            onChange={changeField}
          />
          <div className="LabelInput">
            <p>Photo de profil</p>
            <Input name="avatar" type="file" />
          </div>
          <div className="buttonValidate">
            <SimpleButton textContent="Valider" />
          </div>
        </form>
        <div className="buttonDelete">
          <SimpleButton textContent="Retour" onClick={handleGoBack} />
        </div>

        <span className="deleteAccount">Supprimer mon compte</span>
      </div>
      {/* Popup de succès ou d'échec */}
      {popupVisible && (
        <PopupMessage
          textContent={
            modificationStatus === 'success'
              ? 'Modification réussie !'
              : 'Échec de la modification.'
          }
          onClose={handlePopupClose}
        />
      )}
    </div>
  );
};

FormUserUpdate.propTypes = {
  changeField: PropTypes.func.isRequired,
};

export default FormUserUpdate;
