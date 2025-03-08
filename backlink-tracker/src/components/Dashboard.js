import React from 'react';
import { 
  Grid, Paper, Typography, Box, Card, CardContent, 
  CardHeader, List, ListItem, ListItemText, Divider,
  Chip, LinearProgress, Button
} from '@mui/material';
import { 
  CheckCircle as CheckCircleIcon,
  Warning as WarningIcon,
  Error as ErrorIcon,
  Add as AddIcon
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

// Mock data for the dashboard
const campaignData = {
  website: 'http://bansalmovers.com/',
  keyword: 'Packers and Movers Bangalore Hebbal',
  totalBacklinks: 6,
  activeBacklinks: 5,
  pendingBacklinks: 1,
  brokenBacklinks: 0,
  progress: {
    profile: { completed: 2, total: 2 },
    forum: { completed: 2, total: 2 },
    quora: { completed: 1, total: 2 }
  },
  recentBacklinks: [
    {
      id: 1,
      url: 'https://www.indiamart.com/proddetail/packers-and-movers-services-20543259088.html',
      type: 'Profile',
      platform: 'IndiaMART',
      status: 'Active',
      created: '2025-03-07'
    },
    {
      id: 2,
      url: 'https://www.sulekha.com/packers-and-movers/bangalore/bansal-movers',
      type: 'Profile',
      platform: 'Sulekha',
      status: 'Active',
      created: '2025-03-07'
    },
    {
      id: 3,
      url: 'https://www.indianrealestateforum.com/forum/topic/12345-reliable-movers-in-north-bangalore/',
      type: 'Forum',
      platform: 'India Real Estate Forum',
      status: 'Active',
      created: '2025-03-08'
    }
  ]
};

const Dashboard = () => {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4">
          Backlink Assignment Dashboard
        </Typography>
        <Button 
          variant="contained" 
          startIcon={<AddIcon />}
          component={Link}
          to="/add-backlink"
        >
          Add New Backlink
        </Button>
      </Box>
      
      <Card sx={{ mb: 4 }}>
        <CardHeader title="Assignment Overview" />
        <CardContent>
          <Typography variant="body1" paragraph>
            <strong>Objective:</strong> Create high-quality backlinks for the website Bansal Movers using the keyword "Packers and Movers Bangalore Hebbal" to improve search engine rankings.
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Website:</strong> <a href="http://bansalmovers.com/" target="_blank" rel="noopener noreferrer">http://bansalmovers.com/</a>
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Target Keyword:</strong> {campaignData.keyword}
          </Typography>
        </CardContent>
      </Card>
      
      <Grid container spacing={3}>
        {/* Task Progress */}
        <Grid item xs={12} md={6}>
          <Card className="dashboard-card">
            <CardHeader title="Assignment Progress" />
            <CardContent className="dashboard-card-content">
              <Box sx={{ mb: 3 }}>
                <Typography variant="body2" gutterBottom>
                  Profile Backlinks ({campaignData.progress.profile.completed}/{campaignData.progress.profile.total})
                </Typography>
                <LinearProgress 
                  variant="determinate" 
                  value={(campaignData.progress.profile.completed / campaignData.progress.profile.total) * 100} 
                  sx={{ height: 10, borderRadius: 5 }}
                />
                <Typography variant="caption" color="text.secondary">
                  Create profiles on two high-authority websites and include the website URL and keyword
                </Typography>
              </Box>
              
              <Box sx={{ mb: 3 }}>
                <Typography variant="body2" gutterBottom>
                  Forum Backlinks ({campaignData.progress.forum.completed}/{campaignData.progress.forum.total})
                </Typography>
                <LinearProgress 
                  variant="determinate" 
                  value={(campaignData.progress.forum.completed / campaignData.progress.forum.total) * 100} 
                  sx={{ height: 10, borderRadius: 5 }}
                />
                <Typography variant="caption" color="text.secondary">
                  Find relevant forums and naturally insert backlinks in valuable discussions
                </Typography>
              </Box>
              
              <Box>
                <Typography variant="body2" gutterBottom>
                  Quora Answers ({campaignData.progress.quora.completed}/{campaignData.progress.quora.total})
                </Typography>
                <LinearProgress 
                  variant="determinate" 
                  value={(campaignData.progress.quora.completed / campaignData.progress.quora.total) * 100} 
                  sx={{ height: 10, borderRadius: 5 }}
                />
                <Typography variant="caption" color="text.secondary">
                  Answer relevant Quora questions and naturally include the website link
                </Typography>
              </Box>
              
              <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
                <Typography variant="h5">
                  Overall: {Math.round((campaignData.activeBacklinks / campaignData.totalBacklinks) * 100)}% Complete
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        
        {/* Evaluation Criteria */}
        <Grid item xs={12} md={6}>
          <Card className="dashboard-card">
            <CardHeader title="Evaluation Criteria" />
            <CardContent className="dashboard-card-content">
              <List>
                <ListItem>
                  <ListItemText 
                    primary="Relevance" 
                    secondary="Are the backlinks placed on relevant sites/forums?" 
                  />
                </ListItem>
                <Divider component="li" />
                <ListItem>
                  <ListItemText 
                    primary="Quality" 
                    secondary="Are the websites high-authority and non-spammy?" 
                  />
                </ListItem>
                <Divider component="li" />
                <ListItem>
                  <ListItemText 
                    primary="Anchor Text Usage" 
                    secondary="Is the keyword used naturally?" 
                  />
                </ListItem>
                <Divider component="li" />
                <ListItem>
                  <ListItemText 
                    primary="Content Quality" 
                    secondary="Are Quora/forum responses valuable and informative?" 
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
        
        {/* Recent Backlinks */}
        <Grid item xs={12}>
          <Card>
            <CardHeader title="Created Backlinks" />
            <CardContent>
              <List>
                {campaignData.recentBacklinks.map((backlink, index) => (
                  <React.Fragment key={backlink.id}>
                    {index > 0 && <Divider component="li" />}
                    <ListItem alignItems="flex-start">
                      <ListItemText
                        primary={
                          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Typography variant="subtitle1" component="span">
                              {backlink.platform}
                            </Typography>
                            <Box>
                              <Chip 
                                label={backlink.type} 
                                size="small" 
                                className={`backlink-type-tag backlink-type-${backlink.type.toLowerCase()}`}
                                sx={{ mr: 1 }}
                              />
                              <Chip 
                                icon={
                                  backlink.status === 'Active' ? <CheckCircleIcon fontSize="small" /> :
                                  backlink.status === 'Pending' ? <WarningIcon fontSize="small" /> :
                                  <ErrorIcon fontSize="small" />
                                }
                                label={backlink.status} 
                                size="small" 
                                color={
                                  backlink.status === 'Active' ? 'success' :
                                  backlink.status === 'Pending' ? 'warning' : 'error'
                                }
                              />
                            </Box>
                          </Box>
                        }
                        secondary={
                          <React.Fragment>
                            <Typography
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              <a href={backlink.url} target="_blank" rel="noopener noreferrer">{backlink.url}</a>
                            </Typography>
                            <Typography component="div" variant="caption" sx={{ mt: 1 }}>
                              Created on {backlink.created}
                            </Typography>
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                  </React.Fragment>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
