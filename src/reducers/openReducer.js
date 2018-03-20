import { OPEN, CLOSE } from '../actions/openActions';

export default function open(isOpen = false, action) {
  switch (action.type) {
    case OPEN:
      return true;
    case CLOSE:
      return false;
    default:
      return isOpen;
  }
}
