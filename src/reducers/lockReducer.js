// this reducer manages isLocked property on the application state
import { LOCK, UNLOCK } from '../actions/lockActions';

export default function locked(isLocked = true, action) {
  console.log('lock reducer got this', action.type);
  switch (action.type) {
    case UNLOCK:
      return false;
    case LOCK:
      return true;
    default:
      return isLocked;
  }
}
