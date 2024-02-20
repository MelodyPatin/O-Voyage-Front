import React from 'react';
import { Rating } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import './ActivityCard.scss';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import SimpleButton from '../SimpleButton/SimpleButton';
import Selector from './Selector';
import AvatarFriend from '../Avatar/AvatarFriends';
import {
  useActivityRating,
  useSetActivityRating,
} from '../../../hooks/activity';
import { fetchTripActivities } from '../../../actions/activity';

const ActivityCard = ({ activity }) => {
  const dispatch = useDispatch();
  const { tripId } = useParams();
  const [rating, isLoading] = useActivityRating(activity.id);
  const [newRating, setNewRating] = useSetActivityRating(activity.id);

  const handleLike = async (e, { rating: clickedRating }) => {
    await setNewRating(clickedRating);
    dispatch(fetchTripActivities(tripId));
  };
  console.log(activity);

  const activityTitle = activity.name;
  const shortenedTitle =
    activityTitle.length > 35
      ? `${activityTitle.substring(0, 35)}...`
      : activityTitle;

  let tag = '';
  switch (activity.tags[0].id) {
    case 1:
      tag = 'restaurant';
      break;
    case 2:
      tag = 'pub';
      break;
    case 3:
      tag = 'culture';
      break;
    case 4:
      tag = 'activity';
      break;
    default:
      break;
  }

  return (
    <div className={`ActivityCard ${tag}`}>
      <div className="FlexGap">
        <p>{activity.score}</p>
        <AvatarFriend userAvatar={activity.creator.avatarURL} />
      </div>
      <div className="title">
        <p>{shortenedTitle}</p>
      </div>
      <div className="FlexColumn">
        <Selector date={activity.date} />
        <Link to={`/trip/${tripId}/activity/${activity.id}`}>
          <SimpleButton textContent="En savoir plus" />
        </Link>
      </div>
      <div className="hearth">
        {!isLoading && (
          <Rating
            onRate={handleLike}
            icon="heart"
            rating={newRating !== null ? newRating : rating}
            maxRating={3}
            size="massive"
          />
        )}
      </div>
    </div>
  );
};

ActivityCard.propTypes = {
  activity: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string,
    score: PropTypes.number.isRequired,
    city: PropTypes.shape.isRequired,
    creator: PropTypes.shape({
      avatarURL: PropTypes.string.isRequired,
    }).isRequired,
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default ActivityCard;
