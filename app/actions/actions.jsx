import firebase, { firebaseRef, facebookProvider } from 'app/firebase/';
import moment from 'moment';

export const addAnnouncement = announcement => {
  return {
    type: 'ADD_ANNOUNCEMENT',
    announcement
  };
};

export const startAddAnnouncement = announce => {
  return (dispatch, getState) => {
    const announcement = {
      ...announce,
      date: moment().unix(),
      level: 'admin'
    };
    const uid = getState().user.uid;
    const announcementRef = firebaseRef.child(`announcements`).push(announcement);

    return announcementRef.then(() => {
      dispatch(addAnnouncement({
        ...announcement,
        id: announcementRef.key,
      }));
    });
  };
};

export const addAnnouncements = announcements => {
  return {
    type: 'ADD_ANNOUNCEMENTS',
    announcements
  };
};

export const startAddAnnouncements = () => {
  return (dispatch, getState) => {
    const uid = getState().user.uid;
    const announcementsRef = firebaseRef.child(`announcements`);

    announcementsRef.once('value').then(snapshot => {
      const announcements = snapshot.val() || {};
      const parsedAnnouncements = [];

      Object.keys(announcements).forEach(announcementId => {
        parsedAnnouncements.push({
          id: announcementId,
          ...announcements[announcementId]
        });
      });

      dispatch(addAnnouncements(parsedAnnouncements));
    });
  };
};

// "users": {
    //   "$user_id": {
    //     ".read": "$user_id === auth.uid",
    //       ".write": "$user_id === auth.uid"
    //   }
    // }

export const changeFamily = family => {
  return {
    type: 'CHANGE_FAMILY',
    family
  };
};

export const changeEvent = events => {
  return {
    type: 'CHANGE_EVENT',
    events
  };
};

export const changeAuthState = authState => {
  console.log(authState);
  return {
    type: 'CHANGE_AUTH_STATE',
    authState
  };
}

export const startLogin = () => {
  return (dispatch, getState) => {
    return firebase.auth().signInWithPopup(facebookProvider).then(result => {
      console.log('Auth Worked!', result);
    }, error => {
      console.log('Unable to auth', error);
    });
  };
};

export const login = (uid, username, photoURL) => {
  return {
    type: 'LOGIN',
    uid,
    username,
    photoURL
  };
}

export const startLogout = () => {
  return (dispatch, getState) => {
    return firebase.auth().signOut().then(() => {
      console.log('Logged Out');
    });
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT'
  };
};
