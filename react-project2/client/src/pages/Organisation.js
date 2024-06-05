import React from 'react';
import { Link } from "react-router-dom";
import { Button, Card, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(to bottom, #DAE9FF, #ffffff)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  logoutButton: {
    position: 'absolute',
    top: theme.spacing(2),
    right: theme.spacing(2),
    backgroundColor: '#1F64FF',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#1A56D2',
    },
  },
  card: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  welcomeText: {
    marginBottom: theme.spacing(4),
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: '#1F64FF',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#1A56D2',
    },
  },
  outlinedButton: {
    margin: theme.spacing(1),
    borderColor: '#1F64FF',
    color: '#1F64FF',
    '&:hover': {
      backgroundColor: 'rgba(31, 100, 255, 0.04)',
      borderColor: '#1A56D2',
    },
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
}));

const Organisation = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" className={classes.logoutButton}>
        Log Out
      </Button>
      <Card className={classes.card}>
        <Typography variant="h5" className={classes.welcomeText}>
          Welcome Arya Soni!
        </Typography>
        <Button variant="contained" className={classes.button}>
          <Link to="/landing" className={classes.link}>Self Hosting</Link>
        </Button>
        <Button variant="outlined" className={classes.outlinedButton}>
          <Link to="/landing" className={classes.link}>XeroCode Hosting</Link>
        </Button>
      </Card>
    </div>
  );
};

export default Organisation;
