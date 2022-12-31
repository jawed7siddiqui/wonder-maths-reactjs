// material-ui
import { FormControlLabel, Radio, RadioGroup, FormControl } from '@mui/material';

export default function RadioItem({ dataSet, name }) {
    return (
        <FormControl component="fieldset">
            <RadioGroup aria-label={name} name={name}>
                {dataSet.map((item, idx) => {
                    return (
                        <FormControlLabel
                            key={idx}
                            value={item.value}
                            control={
                                <Radio
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
                })}
            </RadioGroup>
        </FormControl>
    );
}
