import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import "./SelectDorm.css";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function SelectDorm({getInfo}) {
    const classes = useStyles();
    const [dorm, setDorm] = React.useState('');

    const handleChange = (event) => {
        setDorm(event.target.value);
        getInfo(event.target.value);
    };

    return(
        <FormControl className={classes.formControl}>
        <InputLabel>기숙사</InputLabel>
        <NativeSelect
          value={dorm}
          onChange={handleChange}
          inputProps={{
            name: 'dorm',
          }}
        >
          <option aria-label="None" value="" />
          <option value={"아름/사랑/소망관"}>아름/사랑/소망관</option>
          <option value={"성실/진리/신뢰/지혜관"}>성실/진리/신뢰/지혜관</option>
          <option value={"희망/다솜관"}>희망/다솜관</option>
          <option value={"미르/나래관"}>미르/나래관</option>
        </NativeSelect>
        <FormHelperText>Select your dormitory</FormHelperText>
      </FormControl>
    );

}