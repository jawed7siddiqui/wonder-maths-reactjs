// material-ui
import { FormControlLabel, Checkbox } from '@mui/material';

export default function CheckBoxItem({ item }) {
    return (
        <FormControlLabel
            control={
                <Checkbox
                    name={item.name}
                    sx={{
                        color: '#52c41a',
                        '&.Mui-checked': {
                            color: '#52c41a'
                        }
                    }}
                />
            }
            label={item.label}
        />
    );
}
