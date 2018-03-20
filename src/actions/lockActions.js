export const UNLOCK = 'UNLOCK';
export const LOCK = 'LOCK';

export const unlock = () => {
  // action creator
  return {
    // returns an action object
    type: UNLOCK, // required property
  };
};

export const lock = () => {
  // action creator
  return {
    // returns an action object
    type: LOCK, // required property
  };
};
