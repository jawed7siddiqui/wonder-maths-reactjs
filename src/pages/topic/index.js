import { React, useEffect, useState } from 'react';
import axios from 'axios';

// material-ui
import { Typography, Grid, Select, MenuItem, FormControl } from '@mui/material';

// project import
// import MainCard from 'components/MainCard';
import TopicItem from 'components/TopicItem';

// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => {
    const [age, setAge] = useState(0);
    const [clb, setClb] = useState('');
    const [list, setList] = useState([]);
    const data = [];

    const handleChange = (event) => {
        setAge(event.target.value);

        if(event.target.value == 5){
            data.push(
               { name: 'algebra', url: 'algebra' },
               { name: 'caliculus', url: 'caliculus' },
            )         
           
       }else{
   
           data.push(
               { name: 'caliculus', url: 'caliculus' },
               { name: 'arithmetic', url: 'arithmetic' },

            )  
   
       }
           setList(data);
    };


    const clbhandleChange = (event) => {
        setClb(event.target.value);
        // list.splice(index, 1);

        if(event.target.value == 'CBSE'){
         data.push(
            { name: 'algebra', url: 'algebra' },
            { name: 'arithmetic', url: 'arithmetic' },
            { name: 'caliculus', url: 'caliculus' },
         )         
        
    }else{

        data.push(
            { name: 'caliculus', url: 'caliculus' },
         )  

    }
        setList(data);

    };



    useEffect(() => {
      axios.get(process.env.REACT_APP_REST_API + 'web/getTopic', {
          'Content-Type': 'application/json',
        })
        .then((res) => {
            console.log(res.data);
          setList(res.data);
        });
    }, []);

    return (
        <Grid container rowSpacing={4.5} columnSpacing={2.75}>
            {/* row 1 */}
            <Grid item xs={3} sm={3} md={3} lg={2}>
                <Typography variant="h5">classes</Typography>
                <FormControl style={{ minWidth: '150px' }}>
                    <Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} onChange={handleChange}>
                        <MenuItem value={0}>Select</MenuItem>
                        <MenuItem value={5}>Five</MenuItem>
                        <MenuItem value={6}>Six</MenuItem>
                        <MenuItem value={7}>Seven</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={3} sm={3} md={3} lg={2}>
                <Typography variant="h5">callybus</Typography>
                <FormControl style={{ minWidth: '150px' }}>
                    <Select labelId="demo-simple-select-label" id="demo-simple-select" value={clb} onChange={clbhandleChange}>
                        <MenuItem value={0}>Select</MenuItem>
                        <MenuItem value={'CBSE'}>CBSE</MenuItem>
                        <MenuItem value={'STATE'}>STATE</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            {/* row 2 */}
            <Grid item xs={12} sx={{ mb: -2.25 }}>
                <Typography variant="h5">Topics</Typography>
            </Grid>
            {list.map((item) => {
                return (
                    <Grid key={item.name} item xs={12} sm={6} md={4} lg={3}>
                        <TopicItem item={item} value={item.name} />
                    </Grid>
                );
            })}
        </Grid>
    );
};

export default SamplePage;
