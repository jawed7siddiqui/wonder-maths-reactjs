// material-ui
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1)
        }
    },
    button: {
        borderRadius: '1px'
    }
}));

export default function SubButton(component, variant, size) {
    const classes = useStyles();
    return (
        <Button className={classes.button} color="success" variant={variant} size={size}>
            class {component.level}
        </Button>
    );
}
