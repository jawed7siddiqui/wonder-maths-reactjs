import { React, useEffect, useState } from 'react';
import axios from 'axios';
// material-ui
import { Typography, Grid, Select, MenuItem, FormControl, FormControlLabel, Radio, Button, Divider } from '@mui/material';

// component import
import RadioGroup from 'components/RadioItem';

import HeaderCard from 'components/HeaderCard';
// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = (props) => {
    const [age, setAge] = useState(0);
    const [iv, setIv] = useState(0);
    const [showAnswer, setShowAnswer] = useState(true);
    const [sh, setSh] = useState(false);

    const [testdata, setTestdata] = useState([]);
    const [pprdata, setPprdata] = useState([]);
    const dataSet = [];
    
    console.log(props);
    const handleChange = (event) => {
        setAge(event.target.value);
        setShowAnswer(true);      

        axios.get(process.env.REACT_APP_REST_API + 'customer/testpaper?id='+event.target.value+'&type=apt', {
            'Content-Type': 'application/json',
          })
          .then((res) => {
              console.log(res.data);
              setPprdata(res.data);
              setIv(0);   

              if(res.data.length > 0){
              setSh(true)
              }else{
              setSh(false)

              }
          });
    };

    const pdata = pprdata[iv];
    // if(pdata){
        
    //     dataSet.push({ label: pdata.o[0]?.op, value: pdata.o[0]?.on },
    //     { label: pdata.o[1]?.op, value: pdata.o[1]?.on },
    //     { label: pdata.o[2]?.op, value: pdata.o[2]?.on },
    //     { label: pdata.o[3]?.op, value: pdata.o[3]?.on })

    // }

    const handleShow= () => {
        setShowAnswer(false);      
    };


    const handleNext= () => {
        setShowAnswer(true);   

        if(iv < 9){
        setIv(iv+1);
        }      
    };

    const handlePrev= () => {
        setShowAnswer(true);   

        if(iv != 0){
        setIv(iv-1);   
        }   
    };



    useEffect(() => {

       axios.get(process.env.REACT_APP_REST_API + 'customer/test/list?type='+props.datatype+'&p1='+props.datavalue, {
          'Content-Type': 'application/json',
        })
        .then((res) => {
            console.log(res.data);
            setTestdata(res.data);
            setSh(false)
            setIv(0);   


        });

      

    }, [props.datavalue,props.dataclassname]);

    return (
        <Grid container rowSpacing={4.5} columnSpacing={2.75}>
            {/* row 1 */}
            <Grid item xs={3} sm={3} md={3} lg={2}>
            
                <Typography variant="h5">Select Aptitude list</Typography>
                <FormControl style={{ minWidth: '150px' }}>
                    <Select labelId="demo-simple-select-label" id="demo-simple-select" color="success" value={age} onChange={handleChange}>
                        <MenuItem value={0}>Select</MenuItem>
                        {testdata.map(item => {
                     return <MenuItem value={item.id}>{item.test_name}</MenuItem>;
                        })}
                    </Select>
                </FormControl>
            </Grid>
            {/* row 2 */}
          
            <Grid item xs={12} md={12} lg={12}>
            { sh &&
                <HeaderCard>
                    <Typography variant="h3" style={{ margin: '20px' }} dangerouslySetInnerHTML={{ __html: pdata?.q }}>
                      
                    </Typography>
                    {/* <RadioGroup dataSet={dataSet} name="level" /> */}
                 
                    <div>
                    <input type="radio" value={pdata.o[0]?.on} name="ans" style={{border: '0px', width: '3%',height: '1.5em'}} /> <span dangerouslySetInnerHTML={{ __html: pdata.o[0]?.op }} style={{position:'absolute',marginTop:'2px',marginLeft:'1%'}}></span> <br/><br/>
                    <input type="radio" value={pdata.o[1]?.on} name="ans" style={{border: '0px', width: '3%',height: '1.5em'}} /> <span dangerouslySetInnerHTML={{ __html: pdata.o[1]?.op }} style={{position:'absolute',marginTop:'2px',marginLeft:'1%'}}></span> <br/><br/>
                    <input type="radio" value={pdata.o[2]?.on} name="ans" style={{border: '0px', width: '3%',height: '1.5em'}} /> <span dangerouslySetInnerHTML={{ __html: pdata.o[2]?.op }} style={{position:'absolute',marginTop:'2px',marginLeft:'1%'}}></span> <br/><br/>
                    <input type="radio" value={pdata.o[3]?.on} name="ans" style={{border: '0px', width: '3%',height: '1.5em'}} /> <span dangerouslySetInnerHTML={{ __html: pdata.o[3]?.op }} style={{position:'absolute',marginTop:'2px',marginLeft:'1%'}}></span> <br/><br/>
                  
                     </div>
                    <Divider />

                     
                    <><Button variant="outlined" size="large" color="success" onClick={handleShow}>
                            Check your answer
                        </Button><Button style={{ float: 'right' }} variant="contained" size="large" color="primary" onClick={handleNext}>
                                {'>'}
                            </Button><Typography variant="h6" style={{ float: 'right', margin: '20px' }}>
                                {iv + 1}/10
                            </Typography><Button style={{ float: 'right' }} variant="contained" size="large" color="primary" onClick={handlePrev}>
                                {'<'}
                            </Button></>



                    

                </HeaderCard>
                        }

                {/* {showAnswer && */}
                <HeaderCard hidden={showAnswer}>
                    <Typography variant="h3" style={{ margin: '20px' }}>
                        Answer
                    </Typography>
                    <Typography variant="body2" style={{ margin: '20px' }} dangerouslySetInnerHTML={{ __html: pdata?.c }}>
 
                    </Typography>
                    <Typography variant="h5" style={{ margin: '20px' }}>
                        Description
                    </Typography>
                    <Typography variant="body2" style={{ margin: '20px' }} dangerouslySetInnerHTML={{ __html: pdata?.e }}>
                   

                    </Typography>
                </HeaderCard>
               {/* } */}
            </Grid>
        </Grid>
    );
};

export default SamplePage;
