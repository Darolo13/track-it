import React from 'react'

// material-ui
import { Grid } from '@material-ui/core';
import useStyles from './styles';

// components
import Details from './components/Details';
import Main from './components/Main';

const App = () => {

  const classes = useStyles();

  return (
    <div>
      <Grid className={classes.grid} container spacing={0} alignItems="center" justifyContent="center" style={{ height: '100vh' }}>
        <Grid item xs={12} sm={4}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Details title="Expense" />
        </Grid>
      </Grid>
    </div>
  )
}

export default App