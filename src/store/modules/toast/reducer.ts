import producer from 'immer';

interface InitialProps {
  type: string;
  message: string;
  show: boolean;
  duration: number;
  iconName: string;
}

const INITIAL_STATE = {
  type: null,
  message: null,
  show: false,
  duration: 4000,
  iconName: '',
};

export default function toast(state = INITIAL_STATE, action) {
  return producer(state, (draft) => {
    switch (action.type) {
      case '@toast/SHOW': {
        draft.type = action.payload.type;
        draft.message = action.payload.message;
        draft.show = true,
        draft.duration = action.payload.duration;
        draft.iconName = action.payload.iconName;
        break;
      }
      case '@toast/HIDE': {
        draft.type = null;
        draft.duration = 4000;
        draft.message = null;
        draft.show = false;
        draft.iconName = '';
        break;
      }
      default
   : }
  });
}