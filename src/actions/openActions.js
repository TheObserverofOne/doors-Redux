export const OPEN = 'OPEN_DOOR';
export const CLOSE = 'CLOSE_DOOR';

export const open = () => {
  return {
    type: OPEN,
  };
};

export const close = () => {
  return {
    type: CLOSE,
  };
};
