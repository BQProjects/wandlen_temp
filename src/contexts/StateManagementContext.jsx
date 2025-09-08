import { createContext, useState, useReducer } from "react";

// Initial state for global state management
const initialState = {
  theme: "light",
  notifications: [],
  loading: false,
  error: null,
};

// Reducer function for state management
const stateReducer = (state, action) => {
  switch (action.type) {
    case "SET_THEME":
      return { ...state, theme: action.payload };
    case "ADD_NOTIFICATION":
      return {
        ...state,
        notifications: [...state.notifications, action.payload],
      };
    case "REMOVE_NOTIFICATION":
      return {
        ...state,
        notifications: state.notifications.filter(
          (notification) => notification.id !== action.payload
        ),
      };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    case "CLEAR_ERROR":
      return { ...state, error: null };
    default:
      return state;
  }
};

const StateManagementContext = createContext();

export const StateManagementProvider = ({ children }) => {
  const [state, dispatch] = useReducer(stateReducer, initialState);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Actions
  const setTheme = (theme) => {
    dispatch({ type: "SET_THEME", payload: theme });
  };

  const addNotification = (notification) => {
    const id = Date.now();
    dispatch({
      type: "ADD_NOTIFICATION",
      payload: { ...notification, id },
    });
    // Auto remove notification after 5 seconds
    setTimeout(() => {
      removeNotification(id);
    }, 5000);
  };

  const removeNotification = (id) => {
    dispatch({ type: "REMOVE_NOTIFICATION", payload: id });
  };

  const setLoading = (loading) => {
    dispatch({ type: "SET_LOADING", payload: loading });
  };

  const setError = (error) => {
    dispatch({ type: "SET_ERROR", payload: error });
  };

  const clearError = () => {
    dispatch({ type: "CLEAR_ERROR" });
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const value = {
    ...state,
    sidebarOpen,
    setTheme,
    addNotification,
    removeNotification,
    setLoading,
    setError,
    clearError,
    toggleSidebar,
  };

  return (
    <StateManagementContext.Provider value={value}>
      {children}
    </StateManagementContext.Provider>
  );
};

export { StateManagementContext };
