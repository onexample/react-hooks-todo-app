
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const AppToolBar = () => (
    <AppBar position="static" color="default">
        <Toolbar>
            <Typography variant="h6" color="inherit"> Todos </Typography>
        </Toolbar>
    </AppBar>
)

export default AppToolBar;