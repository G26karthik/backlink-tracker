import React, { useState } from 'react';
import {
  Paper, Table, TableBody, TableCell, TableContainer, TableHead,
  TableRow, TablePagination, Typography, Box, Chip, IconButton,
  Tooltip, TextField, InputAdornment, MenuItem, Select, FormControl,
  InputLabel, Button, Card, CardContent
} from '@mui/material';
import {
  CheckCircle as CheckCircleIcon,
  Warning as WarningIcon,
  Error as ErrorIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
  Search as SearchIcon,
  FilterList as FilterListIcon,
  Add as AddIcon,
  Download as DownloadIcon
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

// Mock data for backlinks
const backlinkData = [
  {
    id: 1,
    url: 'https://www.indiamart.com/proddetail/packers-and-movers-services-20543259088.html',
    type: 'Profile',
    platform: 'IndiaMART',
    status: 'Active',
    created: '2025-03-07',
    description: 'Business profile with company details and services offered.',
    keywordUsage: 'Included in business description as "Bansal Movers is a trusted name among Packers and Movers Bangalore Hebbal area residents."'
  },
  {
    id: 2,
    url: 'https://www.sulekha.com/packers-and-movers/bangalore/bansal-movers',
    type: 'Profile',
    platform: 'Sulekha',
    status: 'Active',
    created: '2025-03-07',
    description: 'Verified business listing with service details and operating areas.',
    keywordUsage: 'Used in service description as "As premier Packers and Movers Bangalore Hebbal specialists, Bansal Movers provides comprehensive relocation solutions."'
  },
  {
    id: 3,
    url: 'https://www.indianrealestateforum.com/forum/topic/12345-reliable-movers-in-north-bangalore/',
    type: 'Forum',
    platform: 'India Real Estate Forum',
    status: 'Active',
    created: '2025-03-08',
    description: 'Response in discussion thread about reliable movers in North Bangalore.',
    keywordUsage: 'Naturally incorporated in advice as "I recently used Packers and Movers Bangalore Hebbal based Bansal Movers for my relocation."'
  },
  {
    id: 4,
    url: 'https://www.bangaloremag.com/community/moving-services-discussion/post/87654',
    type: 'Forum',
    platform: 'BangaloreMag Community',
    status: 'Active',
    created: '2025-03-08',
    description: 'Response to thread about moving services in Bangalore.',
    keywordUsage: 'Mentioned naturally when discussing Hebbal area options as "Packers and Movers Bangalore Hebbal specialists like Bansal Movers have strong reputation."'
  },
  {
    id: 5,
    url: 'https://www.quora.com/What-are-the-best-packers-and-movers-in-Hebbal-Bangalore',
    type: 'Quora',
    platform: 'Quora',
    status: 'Active',
    created: '2025-03-08',
    description: 'Answer to question about best movers in Hebbal area.',
    keywordUsage: 'Used in recommendation as "Bansal Movers - Specializing as Packers and Movers Bangalore Hebbal area, they offer comprehensive services."'
  },
  {
    id: 6,
    url: 'https://www.quora.com/How-much-does-it-cost-to-hire-movers-in-Bangalore',
    type: 'Quora',
    platform: 'Quora',
    status: 'Pending',
    created: '2025-03-08',
    description: 'Answer about moving costs in different Bangalore areas.',
    keywordUsage: 'Incorporated when discussing North Bangalore pricing as "Packers and Movers Bangalore Hebbal specialists like Bansal Movers typically charge ₹6,000-12,000."'
  }
];

const BacklinkList = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setPage(0);
  };

  const handleTypeFilterChange = (event) => {
    setFilterType(event.target.value);
    setPage(0);
  };

  const handleStatusFilterChange = (event) => {
    setFilterStatus(event.target.value);
    setPage(0);
  };

  // Generate assignment report
  const generateReport = () => {
    // In a real app, this would generate a downloadable report
    console.log('Generating report for assignment submission');
    alert('Assignment report generated and downloaded');
  };

  // Filter backlinks based on search term and filters
  const filteredBacklinks = backlinkData.filter((backlink) => {
    const matchesSearch = 
      backlink.url.toLowerCase().includes(searchTerm.toLowerCase()) ||
      backlink.platform.toLowerCase().includes(searchTerm.toLowerCase()) ||
      backlink.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = filterType === 'All' || backlink.type === filterType;
    const matchesStatus = filterStatus === 'All' || backlink.status === filterStatus;
    
    return matchesSearch && matchesType && matchesStatus;
  });

  // Pagination
  const paginatedBacklinks = filteredBacklinks.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  // Count backlinks by type
  const profileBacklinks = backlinkData.filter(b => b.type === 'Profile' && b.status === 'Active').length;
  const forumBacklinks = backlinkData.filter(b => b.type === 'Forum' && b.status === 'Active').length;
  const quoraBacklinks = backlinkData.filter(b => b.type === 'Quora' && b.status === 'Active').length;

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4">
          Backlink Management
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button 
            variant="outlined" 
            startIcon={<DownloadIcon />}
            onClick={generateReport}
          >
            Generate Report
          </Button>
          <Button 
            variant="contained" 
            startIcon={<AddIcon />}
            component={Link}
            to="/add-backlink"
          >
            Add New Backlink
          </Button>
        </Box>
      </Box>
      
      {/* Assignment Progress Summary */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Assignment Progress
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mt: 2 }}>
            <Box>
              <Typography variant="subtitle2">Profile Backlinks</Typography>
              <Typography variant="h5">{profileBacklinks}/2 {profileBacklinks >= 2 ? '✅' : '🔄'}</Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2">Forum Backlinks</Typography>
              <Typography variant="h5">{forumBacklinks}/2 {forumBacklinks >= 2 ? '✅' : '🔄'}</Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2">Quora Answers</Typography>
              <Typography variant="h5">{quoraBacklinks}/2 {quoraBacklinks >= 2 ? '✅' : '🔄'}</Typography>
            </Box>
            <Box sx={{ ml: 'auto' }}>
              <Typography variant="subtitle2">Overall Completion</Typography>
              <Typography variant="h5">
                {Math.round(((profileBacklinks + forumBacklinks + quoraBacklinks) / 6) * 100)}%
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
      
      {/* Search and Filters */}
      <Box sx={{ mb: 3, display: 'flex', flexWrap: 'wrap', gap: 2 }}>
        <TextField
          label="Search"
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={handleSearchChange}
          sx={{ flexGrow: 1, minWidth: '200px' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        
        <FormControl size="small" sx={{ minWidth: 120 }}>
          <InputLabel id="type-filter-label">Type</InputLabel>
          <Select
            labelId="type-filter-label"
            value={filterType}
            label="Type"
            onChange={handleTypeFilterChange}
            startAdornment={<FilterListIcon fontSize="small" sx={{ mr: 0.5 }} />}
          >
            <MenuItem value="All">All Types</MenuItem>
            <MenuItem value="Profile">Profile</MenuItem>
            <MenuItem value="Forum">Forum</MenuItem>
            <MenuItem value="Quora">Quora</MenuItem>
          </Select>
        </FormControl>
        
        <FormControl size="small" sx={{ minWidth: 120 }}>
          <InputLabel id="status-filter-label">Status</InputLabel>
          <Select
            labelId="status-filter-label"
            value={filterStatus}
            label="Status"
            onChange={handleStatusFilterChange}
            startAdornment={<FilterListIcon fontSize="small" sx={{ mr: 0.5 }} />}
          >
            <MenuItem value="All">All Status</MenuItem>
            <MenuItem value="Active">Active</MenuItem>
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Broken">Broken</MenuItem>
          </Select>
        </FormControl>
      </Box>
      
      {/* Backlinks Table */}
      <TableContainer component={Paper} className="table-container">
        <Table sx={{ minWidth: 650 }} aria-label="backlinks table">
          <TableHead>
            <TableRow>
              <TableCell>Platform</TableCell>
              <TableCell>URL</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Created</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Keyword Usage</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedBacklinks.map((backlink) => (
              <TableRow key={backlink.id}>
                <TableCell component="th" scope="row">
                  {backlink.platform}
                </TableCell>
                <TableCell>
                  <Typography variant="body2" sx={{ maxWidth: 150, overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    <a href={backlink.url} target="_blank" rel="noopener noreferrer">
                      {backlink.url}
                    </a>
                  </Typography>
                </TableCell>
                <TableCell>
                  <Chip 
                    label={backlink.type} 
                    size="small" 
                    className={`backlink-type-tag backlink-type-${backlink.type.toLowerCase()}`}
                  />
                </TableCell>
                <TableCell>
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
                </TableCell>
                <TableCell>{backlink.created}</TableCell>
                <TableCell>
                  <Typography variant="body2" sx={{ maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {backlink.description}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2" sx={{ maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {backlink.keywordUsage}
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Tooltip title="Edit">
                    <IconButton size="small">
                      <EditIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <IconButton size="small">
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
            {paginatedBacklinks.length === 0 && (
              <TableRow>
                <TableCell colSpan={8} align="center">
                  No backlinks found matching your criteria
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredBacklinks.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
};

export default BacklinkList;
