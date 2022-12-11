export const SAVE_EMAIL = 'SaveUserEmail';

export const addEmail = (userEmail) => ({
  type: SAVE_EMAIL,
  payload: userEmail,
});
