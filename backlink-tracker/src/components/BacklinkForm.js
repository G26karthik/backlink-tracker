import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box, Typography, TextField, Button, Paper, Grid,
  FormControl, InputLabel, Select, MenuItem, FormHelperText,
  Alert, Snackbar, Card, CardContent, Divider
} from '@mui/material';
import { Save as SaveIcon, Cancel as CancelIcon } from '@mui/icons-material';

const BacklinkForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    url: '',
    platform: '',
    type: '',
    description: '',
    content: '',
    keywordUsage: '',
    status: 'Pending'
  });
  
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when field is updated
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.url) {
      newErrors.url = 'URL is required';
    } else if (!/^https?:\/\/.+/.test(formData.url)) {
      newErrors.url = 'URL must start with http:// or https://';
    }
    
    if (!formData.platform) {
      newErrors.platform = 'Platform name is required';
    }
    
    if (!formData.type) {
      newErrors.type = 'Backlink type is required';
    }
    
    if (!formData.description) {
      newErrors.description = 'Description is required';
    }
    
    if (!formData.content) {
      newErrors.content = 'Content is required';
    }
    
    if (!formData.keywordUsage) {
      newErrors.keywordUsage = 'Keyword usage description is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real app, this would send data to an API
      console.log('Form submitted:', formData);
      setShowSuccess(true);
      
      // Reset form after submission
      setTimeout(() => {
        navigate('/backlinks');
      }, 2000);
    }
  };

  const handleCancel = () => {
    navigate('/backlinks');
  };

  const getTypeGuidance = () => {
    switch(formData.type) {
      case 'Profile':
        return (
          <Card variant="outlined" sx={{ mt: 2, mb: 2 }}>
            <CardContent>
              <Typography variant="subtitle1" gutterBottom>
                Profile Backlink Guidance:
              </Typography>
              <Typography variant="body2" paragraph>
                Create profiles on high-authority business directories or niche-related platforms. Add the website URL and naturally mention the keyword "Packers and Movers Bangalore Hebbal" in the profile description.
              </Typography>
              <Typography variant="body2">
                Suggested platforms: IndiaMART, Sulekha, JustDial, Google Business Profile
              </Typography>
            </CardContent>
          </Card>
        );
      case 'Forum':
        return (
          <Card variant="outlined" sx={{ mt: 2, mb: 2 }}>
            <CardContent>
              <Typography variant="subtitle1" gutterBottom>
                Forum Backlink Guidance:
              </Typography>
              <Typography variant="body2" paragraph>
                Find relevant forums related to packers and movers, relocation, or home shifting. Engage in discussions and naturally insert a backlink where it adds value to the conversation.
              </Typography>
              <Typography variant="body2">
                Suggested forums: India Real Estate Forum, BangaloreMag Community, Moving Talk
              </Typography>
            </CardContent>
          </Card>
        );
      case 'Quora':
        return (
          <Card variant="outlined" sx={{ mt: 2, mb: 2 }}>
            <CardContent>
              <Typography variant="subtitle1" gutterBottom>
                Quora Answer Guidance:
              </Typography>
              <Typography variant="body2" paragraph>
                Search for relevant Quora questions related to packers and movers in Bangalore. Provide informative, well-written answers and include the website link naturally within your response.
              </Typography>
              <Typography variant="body2">
                Example questions: "What are the best packers and movers in Hebbal, Bangalore?", "How much does it cost to hire movers in Bangalore?"
              </Typography>
            </CardContent>
          </Card>
        );
      default:
        return null;
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Add New Backlink
      </Typography>
      
      <Paper elevation={3} sx={{ p: 3 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth error={!!errors.type} sx={{ mb: 2 }}>
                <InputLabel id="type-label">Backlink Type</InputLabel>
                <Select
                  labelId="type-label"
                  name="type"
                  value={formData.type}
                  label="Backlink Type"
                  onChange={handleChange}
                >
                  <MenuItem value="Profile">Profile Backlink</MenuItem>
                  <MenuItem value="Forum">Forum Backlink</MenuItem>
                  <MenuItem value="Quora">Quora Answer</MenuItem>
                </Select>
                {errors.type && <FormHelperText>{errors.type}</FormHelperText>}
              </FormControl>
              
              {getTypeGuidance()}
              
              <TextField
                fullWidth
                label="Platform Name"
                name="platform"
                value={formData.platform}
                onChange={handleChange}
                error={!!errors.platform}
                helperText={errors.platform}
                placeholder="e.g. IndiaMART, Quora, etc."
                sx={{ mb: 2 }}
              />
              
              <TextField
                fullWidth
                label="URL"
                name="url"
                value={formData.url}
                onChange={handleChange}
                error={!!errors.url}
                helperText={errors.url}
                placeholder="https://example.com/your-backlink"
                sx={{ mb: 2 }}
              />
              
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="status-label">Status</InputLabel>
                <Select
                  labelId="status-label"
                  name="status"
                  value={formData.status}
                  label="Status"
                  onChange={handleChange}
                >
                  <MenuItem value="Active">Active</MenuItem>
                  <MenuItem value="Pending">Pending</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                error={!!errors.description}
                helperText={errors.description}
                multiline
                rows={3}
                placeholder="Describe how the backlink was placed and its context"
                sx={{ mb: 2 }}
              />
              
              <TextField
                fullWidth
                label="Keyword Usage"
                name="keywordUsage"
                value={formData.keywordUsage}
                onChange={handleChange}
                error={!!errors.keywordUsage}
                helperText={errors.keywordUsage || "Explain how you used the keyword 'Packers and Movers Bangalore Hebbal' in your content"}
                multiline
                rows={2}
                sx={{ mb: 2 }}
              />
              
              <TextField
                fullWidth
                label="Content Sample"
                name="content"
                value={formData.content}
                onChange={handleChange}
                error={!!errors.content}
                helperText={errors.content}
                multiline
                rows={7}
                placeholder="Paste a sample of the content where you placed the backlink"
              />
            </Grid>
            
            <Grid item xs={12}>
              <Divider sx={{ my: 2 }} />
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                <Button
                  variant="outlined"
                  startIcon={<CancelIcon />}
                  onClick={handleCancel}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  startIcon={<SaveIcon />}
                >
                  Save Backlink
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Paper>
      
      <Snackbar
        open={showSuccess}
        autoHideDuration={6000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" sx={{ width: '100%' }}>
          Backlink added successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default BacklinkForm;
