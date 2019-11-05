export const ADD_SHORTLIST_ITEM = 'ADD_SHORTLIST_ITEM';
export const REMOVE_SHORTLIST_ITEM = 'REMOVE_SHORTLIST_ITEM';

export const addShortlistItem = (data?: any) => ({
  type: ADD_SHORTLIST_ITEM, data,
});

export const removeShortlistItem = (data?: any) => ({
  type: REMOVE_SHORTLIST_ITEM, data,
});
