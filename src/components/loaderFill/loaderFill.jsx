import { Box, CircularProgress } from "@mui/material";

const LoaderFill = () => {
    return (
        <Box sx={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CircularProgress />
        </Box>
    );
}

export default LoaderFill;