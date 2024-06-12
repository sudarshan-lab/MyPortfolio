// src/Education.js
import React from 'react';
import '../CSS/Education.css'; // Import CSS for Education component
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import SchoolIcon from '@mui/icons-material/School';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Education = () => {
  return (
    <section id="education" className="education">
      <h1 className='tex'>Education</h1>
      <div className="timeline">
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <SchoolIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Card variant="outlined" className="education-card">
                <CardContent>
                  <Typography variant="h6" component="span">
                    2024/01 – Present
                  </Typography>
                  <Typography variant="subtitle1">
                    Master's in Computer Science<br />
                    University at Albany
                  </Typography>
                </CardContent>
              </Card>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary">
                <SchoolIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Card variant="outlined" className="education-card">
                <CardContent>
                  <Typography variant="h6" component="span">
                    2018/06 – 2022/05
                  </Typography>
                  <Typography variant="subtitle1">
                    Bachelor of Technology in Computer Science<br />
                    Sastra University<br />
                    CGPA - 8.3 on a scale of 10
                  </Typography>
                </CardContent>
              </Card>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
      <div class="astrodivider"><div class="astrodividermask"></div><span><i>&#10038;</i></span></div>
    </section>
  );
};

export default Education;
