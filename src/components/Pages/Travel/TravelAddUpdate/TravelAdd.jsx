import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './TravelAddUpdate.scss';

import NavBarHeader from '../../../Reusable/NavBarHeader/NavBarHeader';
import ReturnTitle from '../../../Reusable/ReturnTitle/ReturnTitle';
import ReturnTitleStep from '../../../Reusable/ReturnTitle/ReturnTitleStep';
import StepInput from '../../../Reusable/Step/StepInput';
import StepTextarea from '../../../Reusable/Step/StepTextarea';
import StepCalendar from '../../../Reusable/Step/StepCalendar';
import ProgressBarTravel from '../../../Reusable/ProgressBar/ProgressBarTravel';
import StepSelectCountries from '../../../Reusable/Step/StepSelectCountries';
import StepSelectCities from '../../../Reusable/Step/StepSelectCities';
import StepSelectTravelers from '../../../Reusable/Step/StepSelectTravelers';

import { changeTripField, handleStepNext } from '../../../../actions/trip';

const TravelAdd = () => {
  const dispatch = useDispatch();

  const step = useSelector((state) => state.trip.step);
  const tripTitle = useSelector((state) => state.trip.tripTitle);
  const tripDescription = useSelector((state) => state.trip.tripDescription);
  const countries = useSelector((state) => state.trip.countries);
  const cities = useSelector((state) => state.trip.cities);
  const friends = useSelector((state) => state.user.friends);

  // Options for dropdowns
  const countriesOptions = countries.map((country) => ({
    key: country.id,
    text: country.name,
    value: country.name,
  }));

  const citiesOptions = cities.map((city) => ({
    key: city.id,
    text: city.name,
    value: city.name,
  }));

  const friendsOptions = friends.map((friend) => ({
    key: friend.id,
    text: `${friend.firstname} ${friend.lastname}`,
    value: `${friend.firstname} ${friend.lastname}`,
  }));

  // Function to handle "Continue" button click
  const handleClick = () => {
    dispatch(handleStepNext());
  };

  return (
    <div className="addTrip">
      <NavBarHeader />

      {/* Render different steps based on the current step value */}
      {/* Step 1: Input for trip title */}
      {step === 1 && (
        <div className="addTrip">
          <ReturnTitle textContent="Ajouter un voyage" />
          <ProgressBarTravel step={step} />
          <StepInput
            inputValue={tripTitle}
            changeField={(newValue, identifier) => {
              const action = changeTripField(newValue, identifier);
              dispatch(action);
            }}
            name="tripTitle"
            buttonContent="Continuer"
            placeholderContent="Week-end à Paris avec les amis"
            labelContent="Donnez un titre à votre voyage*"
          />
        </div>
      )}

      {/* Step 2: Select countries */}
      {step === 2 && (
        <div className="addTrip">
          <ReturnTitleStep textContent="Ajouter un voyage" />
          <ProgressBarTravel step={step} />
          <StepSelectCountries
            buttonContent="Continuer"
            placeholderContent="France"
            labelContent="Sélectionnez un/des pays*"
            options={countriesOptions}
            handleClick={handleClick}
          />
        </div>
      )}

      {/* Step 3: Select cities */}
      {step === 3 && (
        <div className="addTrip">
          <ReturnTitleStep textContent="Ajouter un voyage" />
          <ProgressBarTravel step={step} />
          <StepSelectCities
            buttonContent="Continuer"
            placeholderContent="Paris"
            labelContent="Sélectionnez une/des villes*"
            options={citiesOptions}
            handleClick={handleClick}
          />
        </div>
      )}

      {/* Step 4: Calendar for dates */}
      {step === 4 && (
        <div className="addTrip">
          <ReturnTitleStep textContent="Ajouter un voyage" />
          <ProgressBarTravel step={step} />
          <StepCalendar
            buttonContent="Continuer"
            labelContent="Ajoutez les dates *"
          />
        </div>
      )}

      {/* Step 5: Textarea for trip description */}
      {step === 5 && (
        <div className="addTrip">
          <ReturnTitleStep textContent="Ajouter un voyage" />
          <ProgressBarTravel step={step} />
          <StepTextarea
            inputValue={tripDescription}
            changeField={(newValue, identifier) => {
              const action = changeTripField(newValue, identifier);
              dispatch(action);
            }}
            placeholderContent={"Voyage surprise pour l'anniversaire de Jessie"}
            buttonContent="Continuer"
            labelContent="Ajoutez une description"
            name="tripDescription"
          />
        </div>
      )}

      {/* Step 6: Select travelers */}
      {step === 6 && (
        <div className="addTrip">
          <ReturnTitleStep textContent="Ajouter un voyage" />
          <ProgressBarTravel step={step} />
          <StepSelectTravelers
            buttonContent="Créer le voyage"
            placeholderContent="Rechercher dans les amis"
            labelContent="Sélectionnez un/des voyageurs*"
            options={friendsOptions}
            handleClick={handleClick}
          />
        </div>
      )}
    </div>
  );
};

export default TravelAdd;
