import { React, useEffect, useState } from 'react';
import axios from 'axios';
// material-ui
import { Typography, Grid, Divider } from '@mui/material';

// project import
import HeaderCard from 'components/HeaderCard';

// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => {
    // const [age, setAge] = useState(0);

    // const handleChange = (event) => {
    // setAge(event.target.value);
    // };
    const url = window.location.pathname;
    const lastSegment = url.substring(url.lastIndexOf('/') + 1)

    const data = [
        {
            topic: 'algebra',
            content:
                'Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magnaalissa. Ut enif ad minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal'
        },
        {
            topic: 'arithmetic',
            content:
                'Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magnaalissa. Ut enif ad minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal'
        },
        {
            topic: 'caliculus',
            content:
                'Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magnaalissa. Ut enif ad minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal'
        },
        {
            topic: 'number system',
            content:
                'Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magnaalissa. Ut enif ad minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal'
        },
        {
            topic: 'set theory',
            content:
                'Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magnaalissa. Ut enif ad minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal'
        },
        {
            topic: 'trigonometry',
            content:
                'Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magnaalissa. Ut enif ad minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal'
        },
        {
            topic: 'probability',
            content:
                'Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magnaalissa. Ut enif ad minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal'
        }
    ];

    const [list, setList] = useState([]);
    const [details, setDetails] = useState([]);
    const [topic, setTopic] = useState('');
    const [isactive, setIsactive] = useState('');

    useEffect(() => {

        setIsactive(lastSegment);

       axios.get(process.env.REACT_APP_REST_API + 'web/getTopic', {
          'Content-Type': 'application/json',
        })
        .then((res) => {
            console.log(res.data);
          setList(res.data);
        });

        
        axios.get(process.env.REACT_APP_REST_API + 'web/getChapter/'+lastSegment, {
            'Content-Type': 'application/json',
          })
          .then((res) => {
              console.log(res.data[0]);
              setDetails(res.data[0]);
          });
      

    }, []);

    const handleClick= (topic) => {
        setTopic(topic);
        setIsactive(topic);
        axios.get(process.env.REACT_APP_REST_API + 'web/getChapter/'+topic, {
            'Content-Type': 'application/json',
          })
          .then((res) => {
              console.log(res.data[0]);
              setDetails(res.data[0]);
          });
      
    };


    const active = isactive;
    const activeStyle = {
        height: '40px',
        marginTop: '15px',
        margin: '10px',
        borderStyle: 'solid',
        borderWidth: '1px 0px 1px 20px',
        borderRadius: '25px 0px 0px 25px',
        borderColor: 'rgb(30 173 30)',
        paddingLeft: '8px',
        paddingTop: '7px'
    };
    const unActiveStyle = {
        height: '40px',
        marginTop: '20px',
        margin: '10px',
        borderStyle: 'solid',
        borderWidth: '1px 0px 1px 1px',
        borderRadius: '25px 0px 0px 25px',
        borderColor: 'rgb(30 173 30)',
        paddingLeft: '20px',
        paddingTop: '7px'
    };
    return (
        <Grid container rowSpacing={4.5} columnSpacing={2.75}>
            {/* row 1 */}
            <Grid item xs={5} sm={4} md={3} lg={2}>
                <Typography
                    variant="h3"
                    sx={{ minWidth: '40px' }}
                    style={{
                        color: 'rgb(30 173 30)',
                        height: '40px',
                        marginTop: '15px'
                    }}
                >
                    {data[0].topic}
                </Typography>
                {list.map((item, idx) => {
                    return item.name === active ? (
                        <Typography variant="h5" style={activeStyle} key={idx} sx={{ minWidth: '45px' }} onClick={() => handleClick(item.name)}>
                            {item.name}
                        </Typography>
                    ) : (
                        <Typography variant="h5" style={unActiveStyle} key={idx} sx={{ minWidth: '45px' }} onClick={() => handleClick(item.name)}>
                            {item.name}
                        </Typography>
                    );
                })}
            </Grid>
            <Grid item xs={7} sm={8} md={9} lg={10}>
                <HeaderCard title={topic}>
                    <Typography variant="h3" style={{ margin: '20px' }} dangerouslySetInnerHTML={{ __html: details.question }}>
             

                    </Typography>
                    <Typography variant="body3" dangerouslySetInnerHTML={{ __html: details.explanation }}>
                     
                        </Typography>
                    <Divider />
                 
                </HeaderCard>
            </Grid>
        </Grid>
    );
};

export default SamplePage;
