import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter.value;

export const selectFilteredContacts = createSelector([selectContacts, selectFilter], (contacts, filter) => {
    const normalisedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) => name.toLowerCase().includes(normalisedFilter));
});