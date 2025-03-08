import React, { useState } from 'react';
import {
  Box, Typography, Paper, Button, Stepper, Step, StepLabel,
  TextField, FormControl, FormLabel, RadioGroup, FormControlLabel,
  Radio, Checkbox, FormGroup, Card, CardContent, Divider,
  List, ListItem, ListItemText, ListItemIcon, Alert, Snackbar
} from '@mui/material';
import {
  CheckCircle as CheckCircleIcon,
  Assignment as AssignmentIcon,
  Description as DescriptionIcon,
  Link as LinkIcon,
  Send as SendIcon,
  Save as SaveIcon
} from '@mui/icons-material';

const AssignmentSubmission = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [formData, setFormData] = useState({
    studentName: '',
    studentId: '',
    assignmentTitle: 'Creating Backlinks for SEO',
    targetKeyword: 'Packers and Movers Bangalore Hebbal',
    targetWebsite: 'Bansal Movers',
    completionStatus: {
      profileBacklinks: true,
      forumBacklinks: true,
      quoraAnswers: true
    },
    selfEvaluation: {
      relevance: 5,
      quality: 4,
      anchorText: 5,
      contentQuality: 4
    },
    reflectionNotes: '',
    challenges: '',
    learnings: ''
  });

  const steps = ['Assignment Details', 'Backlink Verification', 'Self-Evaluation', 'Submission'];

  const handleNext = () => {
    const newActiveStep = activeStep + 1;
    setActiveStep(newActiveStep);
    
    // Mark current step as completed
    const newCompleted = { ...completed };
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (category, value) => {
    setFormData({
      ...formData,
      completionStatus: {
        ...formData.completionStatus,
        [category]: value
      }
    });
  };

  const handleSelfEvaluationChange = (criterion, value) => {
    setFormData({
      ...formData,
      selfEvaluation: {
        ...formData.selfEvaluation,
        [criterion]: value
      }
    });
  };

  const handleSaveDraft = () => {
    // In a real app, this would save to local storage or a database
    setSnackbarMessage('Assignment draft saved successfully');
    setOpenSnackbar(true);
  };

  const handleSubmit = () => {
    // In a real app, this would submit the assignment to a server
    console.log('Submitting assignment:', formData);
    setSnackbarMessage('Assignment submitted successfully!');
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  // Calculate overall completion percentage
  const calculateCompletionPercentage = () => {
    const tasks = Object.values(formData.completionStatus);
    const completedTasks = tasks.filter(task => task).length;
    return Math.round((completedTasks / tasks.length) * 100);
  };

  // Calculate average self-evaluation score
  const calculateAverageSelfScore = () => {
    const scores = Object.values(formData.selfEvaluation);
    const total = scores.reduce((acc, score) => acc + score, 0);
    return (total / scores.length).toFixed(1);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box>
            <Typography variant="h6" gutterBottom>
              Student Information
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
              <TextField
                label="Full Name"
                name="studentName"
                value={formData.studentName}
                onChange={handleInputChange}
                fullWidth
                required
              />
              <TextField
                label="Student ID"
                name="studentId"
                value={formData.studentId}
                onChange={handleInputChange}
                fullWidth
                required
              />
            </Box>
            
            <Typography variant="h6" gutterBottom>
              Assignment Information
            </Typography>
            <TextField
              label="Assignment Title"
              name="assignmentTitle"
              value={formData.assignmentTitle}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              disabled
            />
            <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
              <TextField
                label="Target Keyword"
                name="targetKeyword"
                value={formData.targetKeyword}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
                disabled
              />
              <TextField
                label="Target Website"
                name="targetWebsite"
                value={formData.targetWebsite}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
                disabled
              />
            </Box>
            
            <Typography variant="body1" color="text.secondary" paragraph>
              This assignment requires you to create high-quality backlinks for the website 
              <strong> {formData.targetWebsite}</strong> using the keyword 
              <strong> "{formData.targetKeyword}"</strong> to improve search engine rankings.
            </Typography>
          </Box>
        );
      case 1:
        return (
          <Box>
            <Typography variant="h6" gutterBottom>
              Backlink Verification
            </Typography>
            <Typography variant="body1" paragraph>
              Please verify that you have completed all required backlinks for this assignment.
            </Typography>
            
            <FormControl component="fieldset" sx={{ mb: 3 }}>
              <FormLabel component="legend">Profile Backlinks (2 required)</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox 
                      checked={formData.completionStatus.profileBacklinks}
                      onChange={(e) => handleCheckboxChange('profileBacklinks', e.target.checked)}
                    />
                  }
                  label="I have created 2 profile backlinks on high-authority websites"
                />
              </FormGroup>
            </FormControl>
            
            <FormControl component="fieldset" sx={{ mb: 3 }}>
              <FormLabel component="legend">Forum Backlinks (2 required)</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox 
                      checked={formData.completionStatus.forumBacklinks}
                      onChange={(e) => handleCheckboxChange('forumBacklinks', e.target.checked)}
                    />
                  }
                  label="I have created 2 forum backlinks in relevant discussions"
                />
              </FormGroup>
            </FormControl>
            
            <FormControl component="fieldset" sx={{ mb: 3 }}>
              <FormLabel component="legend">Quora Answers (2 required)</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox 
                      checked={formData.completionStatus.quoraAnswers}
                      onChange={(e) => handleCheckboxChange('quoraAnswers', e.target.checked)}
                    />
                  }
                  label="I have created 2 Quora answers with backlinks"
                />
              </FormGroup>
            </FormControl>
            
            <Alert severity="info">
              All backlinks should be properly documented in the Backlink List section of this application.
            </Alert>
          </Box>
        );
      case 2:
        return (
          <Box>
            <Typography variant="h6" gutterBottom>
              Self-Evaluation
            </Typography>
            <Typography variant="body1" paragraph>
              Please rate your backlink creation performance based on the following criteria:
            </Typography>
            
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle1" gutterBottom>
                Relevance (1-5)
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                How relevant are your backlinks to the target website and keyword?
              </Typography>
              <RadioGroup 
                row 
                value={formData.selfEvaluation.relevance} 
                onChange={(e) => handleSelfEvaluationChange('relevance', parseInt(e.target.value))}
              >
                {[1, 2, 3, 4, 5].map((value) => (
                  <FormControlLabel key={value} value={value} control={<Radio />} label={value} />
                ))}
              </RadioGroup>
            </Box>
            
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle1" gutterBottom>
                Quality (1-5)
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                How high-quality are the platforms where you created backlinks?
              </Typography>
              <RadioGroup 
                row 
                value={formData.selfEvaluation.quality} 
                onChange={(e) => handleSelfEvaluationChange('quality', parseInt(e.target.value))}
              >
                {[1, 2, 3, 4, 5].map((value) => (
                  <FormControlLabel key={value} value={value} control={<Radio />} label={value} />
                ))}
              </RadioGroup>
            </Box>
            
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle1" gutterBottom>
                Anchor Text Usage (1-5)
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                How naturally did you incorporate the keyword in your anchor texts?
              </Typography>
              <RadioGroup 
                row 
                value={formData.selfEvaluation.anchorText} 
                onChange={(e) => handleSelfEvaluationChange('anchorText', parseInt(e.target.value))}
              >
                {[1, 2, 3, 4, 5].map((value) => (
                  <FormControlLabel key={value} value={value} control={<Radio />} label={value} />
                ))}
              </RadioGroup>
            </Box>
            
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle1" gutterBottom>
                Content Quality (1-5)
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                How valuable and well-written is the content surrounding your backlinks?
              </Typography>
              <RadioGroup 
                row 
                value={formData.selfEvaluation.contentQuality} 
                onChange={(e) => handleSelfEvaluationChange('contentQuality', parseInt(e.target.value))}
              >
                {[1, 2, 3, 4, 5].map((value) => (
                  <FormControlLabel key={value} value={value} control={<Radio />} label={value} />
                ))}
              </RadioGroup>
            </Box>
            
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle1" gutterBottom>
                Reflection Notes
              </Typography>
              <TextField
                label="Share your thoughts on the effectiveness of your backlink strategy"
                name="reflectionNotes"
                value={formData.reflectionNotes}
                onChange={handleInputChange}
                multiline
                rows={3}
                fullWidth
              />
            </Box>
            
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle1" gutterBottom>
                Challenges Faced
              </Typography>
              <TextField
                label="What challenges did you face during this assignment?"
                name="challenges"
                value={formData.challenges}
                onChange={handleInputChange}
                multiline
                rows={2}
                fullWidth
              />
            </Box>
            
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle1" gutterBottom>
                Key Learnings
              </Typography>
              <TextField
                label="What did you learn from this assignment?"
                name="learnings"
                value={formData.learnings}
                onChange={handleInputChange}
                multiline
                rows={2}
                fullWidth
              />
            </Box>
          </Box>
        );
      case 3:
        return (
          <Box>
            <Typography variant="h6" gutterBottom>
              Assignment Summary
            </Typography>
            
            <Card variant="outlined" sx={{ mb: 3 }}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography variant="subtitle1">
                    Student: {formData.studentName || '[Your Name]'}
                  </Typography>
                  <Typography variant="subtitle1">
                    ID: {formData.studentId || '[Your ID]'}
                  </Typography>
                </Box>
                
                <Typography variant="h6" gutterBottom>
                  {formData.assignmentTitle}
                </Typography>
                
                <Divider sx={{ my: 2 }} />
                
                <Typography variant="subtitle1" gutterBottom>
                  Target Information
                </Typography>
                <Box sx={{ display: 'flex', gap: 4, mb: 2 }}>
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Target Keyword
                    </Typography>
                    <Typography variant="body1">
                      {formData.targetKeyword}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Target Website
                    </Typography>
                    <Typography variant="body1">
                      {formData.targetWebsite}
                    </Typography>
                  </Box>
                </Box>
                
                <Divider sx={{ my: 2 }} />
                
                <Typography variant="subtitle1" gutterBottom>
                  Completion Status
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemIcon>
                      {formData.completionStatus.profileBacklinks ? 
                        <CheckCircleIcon color="success" /> : 
                        <CheckCircleIcon color="disabled" />}
                    </ListItemIcon>
                    <ListItemText 
                      primary="Profile Backlinks" 
                      secondary={formData.completionStatus.profileBacklinks ? "Completed" : "Incomplete"} 
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      {formData.completionStatus.forumBacklinks ? 
                        <CheckCircleIcon color="success" /> : 
                        <CheckCircleIcon color="disabled" />}
                    </ListItemIcon>
                    <ListItemText 
                      primary="Forum Backlinks" 
                      secondary={formData.completionStatus.forumBacklinks ? "Completed" : "Incomplete"} 
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      {formData.completionStatus.quoraAnswers ? 
                        <CheckCircleIcon color="success" /> : 
                        <CheckCircleIcon color="disabled" />}
                    </ListItemIcon>
                    <ListItemText 
                      primary="Quora Answers" 
                      secondary={formData.completionStatus.quoraAnswers ? "Completed" : "Incomplete"} 
                    />
                  </ListItem>
                </List>
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                  <Typography variant="subtitle1">
                    Overall Completion: {calculateCompletionPercentage()}%
                  </Typography>
                  <Typography variant="subtitle1">
                    Self-Evaluation Score: {calculateAverageSelfScore()}/5
                  </Typography>
                </Box>
              </CardContent>
            </Card>
            
            <Alert severity="success" sx={{ mb: 3 }}>
              Your assignment is ready for submission. Please review all information before submitting.
            </Alert>
            
            <Typography variant="body1" paragraph>
              By submitting this assignment, you confirm that all backlinks have been created according to the requirements 
              and that the information provided is accurate and complete.
            </Typography>
          </Box>
        );
      default:
        return 'Unknown step';
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <AssignmentIcon sx={{ mr: 1 }} />
          <Typography variant="h4">
            Assignment Submission
          </Typography>
        </Box>
        
        <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        
        <Box sx={{ mt: 2, mb: 4 }}>
          {getStepContent(activeStep)}
        </Box>
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button
            variant="outlined"
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            Back
          </Button>
          <Box>
            <Button 
              variant="outlined" 
              startIcon={<SaveIcon />}
              onClick={handleSaveDraft}
              sx={{ mr: 1 }}
            >
              Save Draft
            </Button>
            {activeStep === steps.length - 1 ? (
              <Button 
                variant="contained" 
                startIcon={<SendIcon />}
                onClick={handleSubmit}
                color="primary"
              >
                Submit Assignment
              </Button>
            ) : (
              <Button 
                variant="contained" 
                onClick={handleNext}
              >
                Next
              </Button>
            )}
          </Box>
        </Box>
      </Paper>
      
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
      />
    </Box>
  );
};

export default AssignmentSubmission;
