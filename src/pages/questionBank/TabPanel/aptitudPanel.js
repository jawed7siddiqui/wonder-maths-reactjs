import { React, useEffect, useState } from 'react';
import axios from 'axios';
// material-ui
import { Typography, Grid, Select, MenuItem, FormControl, FormControlLabel, Radio, Button, Divider } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

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
              setSh(false)

              }
          });
    };

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
                    <input type="radio"
                     value={[JSON.stringify({'selected':pdata.o[0]?.on,'qId':pdata?.id,'ans':pdata?.c})]} 
                     name={"ans"+pdata?.id} 
                     style={{border: '0px', width: '3%',height: '1.5em'}}
                     onChange={handleScore}
                     checked={pdata.o[0]?.isChecked}
                      />
                      <span dangerouslySetInnerHTML={{ __html: pdata.o[0]?.op }} style={{position:'absolute',marginTop:'2px',marginLeft:'1%'}}></span> <br/><br/>
              
                    <input type="radio"
                     value={[JSON.stringify({'selected':pdata.o[1]?.on,'qId':pdata?.id,'ans':pdata?.c})]}
                      name={"ans"+pdata?.id} style={{border: '0px', width: '3%',height: '1.5em'}} 
                      onChange={handleScore} 
                      checked={pdata.o[1]?.isChecked}
                      />
                       <span dangerouslySetInnerHTML={{ __html: pdata.o[1]?.op }} style={{position:'absolute',marginTop:'2px',marginLeft:'1%'}}></span> <br/><br/>
                   
                    <input type="radio"
                     value={[JSON.stringify({'selected':pdata.o[2]?.on,'qId':pdata?.id,'ans':pdata?.c})]} 
                     name={"ans"+pdata?.id} style={{border: '0px', width: '3%',height: '1.5em'}} 
                     onChange={handleScore}
                     checked={pdata.o[2]?.isChecked} 
                     /> 
                     <span dangerouslySetInnerHTML={{ __html: pdata.o[2]?.op }} style={{position:'absolute',marginTop:'2px',marginLeft:'1%'}}></span> <br/><br/>
                  
                    <input type="radio" 
                    value={[JSON.stringify({'selected':pdata.o[3]?.on,'qId':pdata?.id,'ans':pdata?.c})]}
                     name={"ans"+pdata?.id} style={{border: '0px', width: '3%',height: '1.5em'}} 
                     onChange={handleScore} 
                     checked={pdata.o[3]?.isChecked}
                     /> 
                     <span dangerouslySetInnerHTML={{ __html: pdata.o[3]?.op }} style={{position:'absolute',marginTop:'2px',marginLeft:'1%'}}></span> <br/><br/>
                  
                     </div>
                    <Divider />

                     
                    <><Button variant="outlined" size="large" color="success" onClick={handleShow}>
                            Check your answer
                        </Button> &nbsp;&nbsp;&nbsp;
                        {/* <Button variant="contained" size="large" color="error" onClick={handleResult}>
                            Submit
                        </Button> */}
                        
                        <Button style={{ float: 'right' }} variant="contained" size="large" color="primary" onClick={handleNext}>
                                {'>'}
                            </Button><Typography variant="h6" style={{ float: 'right', margin: '20px' }}>
                                {iv + 1}/10
                            </Typography><Button style={{ float: 'right' }} variant="contained" size="large" color="primary" onClick={handlePrev}>
                                {'<'}
                            </Button></>



                    

                </HeaderCard>
                        }

       <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
        <Typography id="modal-modal-title" variant="h5" align="right" color="red" onClick={handleClose} style={{'position':'absolute','left':'95%','top':'1%'}} >
            X
          </Typography>
        <Grid sx={{ my: 7 }}>
          <Typography id="modal-modal-title" variant="h2" align="center" color="blue" >
            Congratulations
          </Typography>
          <Typography id="modal-modal-description" variant="h5" align="center" color="blue" >
            You have successfully completed your test.
          </Typography>
          
          <Typography id="modal-modal-description" variant="h4" align="center" sx={{ my: 2 }} color="blue" >
            Your score
          </Typography>
          <Typography id="modal-modal-description" variant="h1" align="center" sx={{ my:-2 }}>
            {result}/10
          </Typography>
          </Grid>
        </Box>
      </Modal>

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
