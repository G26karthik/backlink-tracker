import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Dashboard from './components/Dashboard';
import BacklinkList from './components/BacklinkList';
import BacklinkForm from './components/BacklinkForm';
import Analytics from './components/Analytics';
import AssignmentSubmission from './components/AssignmentSubmission';
import Layout from './components/Layout';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h5: {
      fontWeight: 500,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/backlinks" element={<BacklinkList />} />
          <Route path="/add-backlink" element={<BacklinkForm />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/submit-assignment" element={<AssignmentSubmission />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
