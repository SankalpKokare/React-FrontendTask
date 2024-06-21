import { useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';

const Display = () => {
  const formData = useSelector((state:any) => state.form.data);

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4, p: 2, border: '1px solid #ddd', borderRadius: '4px' }}>
      <Typography variant="h6" gutterBottom>Submitted Data</Typography>
      <Typography><strong>First Name:</strong> {formData.firstName}</Typography>
      <Typography><strong>Last Name:</strong> {formData.lastName}</Typography>
      <Typography><strong>Phone Number:</strong> {formData.phoneNumber}</Typography>
      <Typography><strong>Email:</strong> {formData.email}</Typography>
    </Box>
  );
};

export default Display;
