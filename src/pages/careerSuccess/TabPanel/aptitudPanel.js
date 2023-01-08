import { React, useEffect, useState } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom'
// material-ui
import { Typography, Grid, Select, MenuItem, FormControl, FormControlLabel, Radio, Button, Divider } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
// import PDFViewer from 'pdf-viewer-reactjs'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};
// component import
import RadioGroup from 'components/RadioItem';

import HeaderCard from 'components/HeaderCard';
// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = (props) => {
    const [age, setAge] = useState(0);
    const [iv, setIv] = useState(0);
    const [count, setCount] = useState(0);
    const [showAnswer, setShowAnswer] = useState(true);
    const [sh, setSh] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [open, setOpen] = useState(false);
    const [result, setResult] = useState(0);
    // const handleOpen = () => setOpen(true);
    const handleClose = () => {
      setOpen(false);
      setSh(false)
      setShowAnswer(true);      

    }

    const [testdata, setTestdata] = useState([]);
    const [pprdata, setPprdata] = useState([]);
    const [score, setScore] = useState(0);
    const dataSet = [];
    
    //console.log(props);
    const handleChange = (event) => {
        setAge(event.target.value);
        setShowAnswer(true);      

        axios.get(process.env.REACT_APP_REST_API + 'customer/testpaper?id='+event.target.value+'&type=que', {
            'Content-Type': 'application/json',
          })
          .then((res) => {
            //   console.log(res.data);
              setPprdata(res.data);
              setIv(0);   

              if(res.data.length > 0){
              setSh(true)
              }else{

                setSh(true);
                // setTimeout(
                //     () =>   setSh(true), 
                //     3000
                //   );
            

              }
          });
    };

    console.log(5777);

    const pdata = pprdata[iv];


    const handleShow= () => {
        setShowAnswer(false);      
    };

    const dataScore = [];

    const handleScore= (e) => {
        // console.log(id+'----'+ans);      
       console.log(JSON.parse(e.target.value));   
     //  setScore(JSON.parse(e.target.value))   
    //  score.push(JSON.parse(e.target.value));
     //  console.log(pprdata); 


      const edata = JSON.parse(e.target.value);

      pprdata.forEach((el)=>{
        if(el.id == edata.qId){

          

            if(el.c == edata.selected){
              //  console.log(el.o[edata.selected-1].isChecked = true);
              //  console.log(el.o);
            //   setIsChecked(true)

                  // el.o[edata.selected-1].isChecked = true

                  el.right = 1;
                //   pprdata[el.id].push(el);

                // pprdata[0].push({'id':el.id,'ans':1})
                setCount(count+1)
            }else{

                el.right = 0;
                // score[0].push({'id':el.id,'ans':0})

                // el.o[edata.selected-1].isChecked = false
                // pprdata[0].push(el)

            }

            el.o[edata.selected-1].isChecked = true

            pprdata[0].push(el);


        }
    })

    };

    const handleResult= () => {
        console.log(pprdata);  
        
        var r = 0;
        for(var i = 0; i < pprdata.length; ++i){
            if(pprdata[i].right == 1)
              r++;
            
        }

        setResult(r);
        console.log('result>>>>> '+ result);  
        setOpen(true);
     };

    
    if(score){
       console.log(score);
    //console.log(222222);
    //console.log(count);



    }

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

        axios.get(process.env.REACT_APP_REST_API + 'customer/tests?type='+props.datatype+'&p1='+props.datavalue, {
           'Content-Type': 'application/json',
         })
         .then((res) => {
             console.log(res.data);
             setTestdata(res.data);
             setSh(false)
             setIv(0);   
 
 
         });
 
       
 
     }, [props.datavalue]);

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
{/*                     
                    <PDFViewer
                    document={{
                        url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf',
                    }}
                     /> */}

                    

                </HeaderCard>
                        }

       

             
               {/* } */}
            </Grid>
        </Grid>

        
    );
};

export default SamplePage;
