import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsReducer from "../features/contacts/redux/contacts.slice";
import notificationsReducer from "../features/notification/redux/notification.slice";
import { notificationsMiddleware } from "../features/notification/redux/notifications.middleware";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["notifications"],
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  notifications: notificationsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([notificationsMiddleware]),
});
const persistor = persistStore(store);

export { store, persistor };
