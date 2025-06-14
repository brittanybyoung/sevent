import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AuthProvider } from './contexts/AuthContext';

// Components
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import EventsList from './components/Events/EventsList';
import CreateEvent from './components/Events/CreateEvent';
import EventDetails from './components/Events/EventDetails';
import UploadGuest from './components/Guest/UploadGuest'

const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: '#dc004e' },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/events" element={
              <ProtectedRoute>
                <EventsList />
              </ProtectedRoute>
            } />
            <Route path="/events/new" element={
              <ProtectedRoute>
                <CreateEvent />
              </ProtectedRoute>
            } />
             <Route path="/events/:eventId" element={
              <ProtectedRoute>
                <EventDetails />
              </ProtectedRoute>
            } />
             <Route path="/events/:eventId/upload" element={
              <ProtectedRoute>
                <UploadGuest />
              </ProtectedRoute>
            } />
            <Route path="/" element={<Navigate to="/dashboard" />} />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;