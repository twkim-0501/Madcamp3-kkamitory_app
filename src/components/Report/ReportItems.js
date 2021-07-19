import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from "axios";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


export default function ReportItems(props) {
  const classes = useStyles();
  const {report_name, report_title, report_content, report_address, _id} = props.row;
  function handleDeleteOne() {
        axios.post(`/api/report/deleteone`, {_id: _id})
        .then(() => {props.handleRender()})
    }


  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {report_name}
        </Typography>
        <Typography variant="h5" component="h2">
          {report_title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {report_address}
        </Typography>
        <Typography variant="body2" component="p">
          {report_content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleDeleteOne}>확인</Button>
      </CardActions>
    </Card>
  );
}