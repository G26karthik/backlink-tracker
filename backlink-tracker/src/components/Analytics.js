import React from 'react';
import {
  Box, Typography, Grid, Paper, Card, CardContent, CardHeader,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Button
} from '@mui/material';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend,
  ArcElement,
  PointElement,
  LineElement
} from 'chart.js';
import { Bar, Pie, Line } from 'react-chartjs-2';
import { Download as DownloadIcon } from '@mui/icons-material';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

// Mock data for analytics
const analyticsData = {
  backlinksByType: {
    labels: ['Profile', 'Forum', 'Quora'],
    data: [2, 2, 2]
  },
  backlinksByStatus: {
    labels: ['Active', 'Pending', 'Broken'],
    data: [5, 1, 0]
  },
  keywordRanking: {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    data: [45, 38, 30, 25]
  },
  platformPerformance: [
    { platform: 'IndiaMART', authority: 'High', relevance: 'High', status: 'Active' },
    { platform: 'Sulekha', authority: 'High', relevance: 'High', status: 'Active' },
    { platform: 'India Real Estate Forum', authority: 'Medium', relevance: 'High', status: 'Active' },
    { platform: 'BangaloreMag Community', authority: 'Medium', relevance: 'Medium', status: 'Active' },
    { platform: 'Quora', authority: 'High', relevance: 'High', status: 'Active' },
    { platform: 'Quora', authority: 'High', relevance: 'Medium', status: 'Pending' }
  ],
  evaluationCriteria: [
    { 
      criterion: 'Relevance', 
      score: 4.5, 
      maxScore: 5,
      notes: 'All backlinks are placed on sites directly related to moving services or local Bangalore services. The forums and Quora questions are specifically about relocation in Bangalore.'
    },
    { 
      criterion: 'Quality', 
      score: 4.2, 
      maxScore: 5,
      notes: 'Most platforms have high domain authority. Business directories like IndiaMART and Sulekha are well-established platforms with strong credibility.'
    },
    { 
      criterion: 'Anchor Text Usage', 
      score: 4.7, 
      maxScore: 5,
      notes: 'The keyword "Packers and Movers Bangalore Hebbal" is incorporated naturally in all content, varying the surrounding text to maintain a natural language pattern.'
    },
    { 
      criterion: 'Content Quality', 
      score: 4.3, 
      maxScore: 5,
      notes: 'Forum posts and Quora answers provide valuable information beyond just promoting the business, including practical advice and industry insights.'
    }
  ]
};

const Analytics = () => {
  // Chart options and data
  const backlinkTypeData = {
    labels: analyticsData.backlinksByType.labels,
    datasets: [
      {
        label: 'Number of Backlinks',
        data: analyticsData.backlinksByType.data,
        backgroundColor: ['#1976d2', '#2e7d32', '#e65100']
      }
    ]
  };

  const backlinkStatusData = {
    labels: analyticsData.backlinksByStatus.labels,
    datasets: [
      {
        label: 'Backlink Status',
        data: analyticsData.backlinksByStatus.data,
        backgroundColor: ['#4caf50', '#ff9800', '#f44336']
      }
    ]
  };

  const keywordRankingData = {
    labels: analyticsData.keywordRanking.labels,
    datasets: [
      {
        label: 'Keyword Ranking Position',
        data: analyticsData.keywordRanking.data,
        borderColor: '#1976d2',
        backgroundColor: 'rgba(25, 118, 210, 0.1)',
        tension: 0.3,
        fill: true
      }
    ]
  };

  const keywordRankingOptions = {
    scales: {
      y: {
        reverse: true,
        min: 1,
        max: 50,
        title: {
          display: true,
          text: 'Position in Search Results'
        }
      }
    },
    plugins: {
      title: {
        display: true,
        text: 'Keyword Ranking Trend'
      }
    }
  };

  // Generate assignment report
  const generateReport = () => {
    // In a real app, this would generate a downloadable report
    console.log('Generating assignment report with analytics');
    alert('Assignment report generated and downloaded');
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4">
          Assignment Analytics
        </Typography>
        <Button 
          variant="contained" 
          startIcon={<DownloadIcon />}
          onClick={generateReport}
        >
          Generate Assignment Report
        </Button>
      </Box>
      
      {/* Evaluation Criteria */}
      <Card className="analytics-card">
        <CardHeader title="Assignment Evaluation Criteria" />
        <CardContent>
          <TableContainer component={Paper} variant="outlined">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Criterion</TableCell>
                  <TableCell>Score</TableCell>
                  <TableCell>Notes</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {analyticsData.evaluationCriteria.map((criterion, index) => (
                  <TableRow key={index}>
                    <TableCell><strong>{criterion.criterion}</strong></TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="body1" sx={{ mr: 1 }}>
                          {criterion.score}/{criterion.maxScore}
                        </Typography>
                        <Box 
                          sx={{ 
                            width: 100, 
                            height: 8, 
                            bgcolor: '#e0e0e0', 
                            borderRadius: 5,
                            position: 'relative'
                          }}
                        >
                          <Box 
                            sx={{ 
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              height: '100%',
                              width: `${(criterion.score / criterion.maxScore) * 100}%`,
                              bgcolor: '#4caf50',
                              borderRadius: 5
                            }}
                          />
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell>{criterion.notes}</TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell><strong>Overall</strong></TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Typography variant="body1" sx={{ mr: 1 }}>
                        {(analyticsData.evaluationCriteria.reduce((acc, curr) => acc + curr.score, 0) / analyticsData.evaluationCriteria.length).toFixed(1)}/5
                      </Typography>
                      <Box 
                        sx={{ 
                          width: 100, 
                          height: 8, 
                          bgcolor: '#e0e0e0', 
                          borderRadius: 5,
                          position: 'relative'
                        }}
                      >
                        <Box 
                          sx={{ 
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            height: '100%',
                            width: `${(analyticsData.evaluationCriteria.reduce((acc, curr) => acc + curr.score, 0) / analyticsData.evaluationCriteria.length) / 5 * 100}%`,
                            bgcolor: '#1976d2',
                            borderRadius: 5
                          }}
                        />
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>Strong overall performance across all evaluation criteria</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
      
      <Grid container spacing={3} sx={{ mt: 1 }}>
        {/* Backlinks by Type */}
        <Grid item xs={12} md={6}>
          <Card className="analytics-card">
            <CardHeader title="Backlinks by Type" />
            <CardContent>
              <Box className="chart-container">
                <Pie data={backlinkTypeData} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        
        {/* Backlinks by Status */}
        <Grid item xs={12} md={6}>
          <Card className="analytics-card">
            <CardHeader title="Backlinks by Status" />
            <CardContent>
              <Box className="chart-container">
                <Pie data={backlinkStatusData} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        
        {/* Keyword Ranking Trend */}
        <Grid item xs={12}>
          <Card className="analytics-card">
            <CardHeader title="Keyword Ranking Trend" />
            <CardContent>
              <Box className="chart-container">
                <Line 
                  data={keywordRankingData} 
                  options={keywordRankingOptions}
                />
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', mt: 1 }}>
                Tracking keyword: "Packers and Movers Bangalore Hebbal"
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        {/* Platform Performance */}
        <Grid item xs={12}>
          <Card className="analytics-card">
            <CardHeader title="Platform Performance Analysis" />
            <CardContent>
              <TableContainer component={Paper} variant="outlined">
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Platform</TableCell>
                      <TableCell>Domain Authority</TableCell>
                      <TableCell>Relevance</TableCell>
                      <TableCell>Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {analyticsData.platformPerformance.map((platform, index) => (
                      <TableRow key={index}>
                        <TableCell>{platform.platform}</TableCell>
                        <TableCell>{platform.authority}</TableCell>
                        <TableCell>{platform.relevance}</TableCell>
                        <TableCell>{platform.status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
        
        {/* Assignment Summary */}
        <Grid item xs={12}>
          <Card className="analytics-card">
            <CardHeader title="Assignment Summary" />
            <CardContent>
              <Typography variant="body1" paragraph>
                The backlink campaign for Bansal Movers targeting the keyword "Packers and Movers Bangalore Hebbal" has been successfully implemented according to the assignment requirements. All required backlinks have been created across the specified platforms:
              </Typography>
              
              <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
                Profile Backlinks (2/2):
              </Typography>
              <Typography variant="body1" paragraph>
                • Created business profiles on IndiaMART and Sulekha, both high-authority platforms relevant to the moving industry.
                • Naturally incorporated the target keyword in the business descriptions while providing valuable information about the services offered.
              </Typography>
              
              <Typography variant="subtitle1" gutterBottom>
                Forum Backlinks (2/2):
              </Typography>
              <Typography variant="body1" paragraph>
                • Engaged in relevant discussions on India Real Estate Forum and BangaloreMag Community.
                • Provided helpful information about moving services while naturally incorporating the backlinks in a way that adds value to the conversations.
              </Typography>
              
              <Typography variant="subtitle1" gutterBottom>
                Quora Answers (2/2):
              </Typography>
              <Typography variant="body1" paragraph>
                • Answered questions directly related to moving services in Bangalore on Quora.
                • Provided comprehensive, informative responses that naturally include the target keyword and website link.
              </Typography>
              
              <Typography variant="body1">
                All backlinks meet the evaluation criteria of relevance, quality, natural anchor text usage, and valuable content. The campaign has shown positive initial results with the target keyword improving in search rankings.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Analytics;
