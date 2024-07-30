import React, { useState } from 'react';
import {
  Container,
  Stack,
  Typography,
  Box,
  styled,
  Button,
} from '@mui/material';
import { BiSolidRightArrow } from 'react-icons/bi';
import { colors } from '../../styles/globals';
import { Heading } from '../typography/';
import { motion } from 'framer-motion';

const NameButton = styled(Button)({
  color: colors.OFF_WHITE,
  textTransform: 'capitalize',
  borderRadius: '0px',
  padding: '1rem',
  '@media screen and (max-width: 1200px)': {
    padding: '1rem 0.6rem',
  },
});
const StyledWorkrole = styled(Typography)({
  color: colors.OFF_WHITE,
  textTransform: 'capitalize',
  fontSize: '1rem',
  marginBottom: '0.5rem',
});
const StyledWorkdate = styled(Typography)({
  color: colors.OFF_WHITE,
  textTransform: 'capitalize',
  fontSize: '0.7rem',
});
const StyledWorkicon = styled(Typography)({
  color: colors.ORANGE,
  mr: '5',
  marginTop: '0.3rem',
  fontSize: '0.6rem',
});
const StyledWorktext = styled(Typography)({
  color: colors.OFF_WHITE,
  marginLeft: '0.5rem',
  fontSize: ['0.6rem', '0.9rem'],
  fontWeight: '400',
  '@media screen and (max-width: 1200px)': {
    fontWeight: '300',
  },
});
const StyledRowbox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  marginBottom: '1rem',

  '@media screen and (max-width: 1200px)': {
    marginBottom: '1rem',
  },
});

const Experience = () => {
  const [t40, setT40] = useState(true);
  const [fless, setFless] = useState(false);
  const [shona, setShona] = useState(false);
  const [techpam, setTechpam] = useState(false);

  return (
    <>
      <Container
        maxwidth="md"
        id="experience"
        component={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, delay: 0.3 }}
      >
        <Box
          minHeight={'100%'}
          paddingX={['2.2rem', '10rem']}
          marginTop={['13.5rem', '10rem']}
          marginBottom={['1rem', '2rem']}
        >
          <Box>
            <Heading number={'02.'} title={'working experience'} />
          </Box>
          <Box>
            <Stack direction={'row'} paddingY={2}>
              <Box
                borderBottom={
                  t40
                    ? `2px solid ${colors.ORANGE}`
                    : `2px solid ${colors.OFF_WHITE}`
                }
              >
                <NameButton
                  onClick={() => {
                    setT40(true);
                    setFless(false);
                    setShona(false);
                    setTechpam(false);
                  }}
                >
                  T40
                </NameButton>
              </Box>{' '}
              <Box
                borderBottom={
                  fless
                    ? `2px solid ${colors.ORANGE}`
                    : `2px solid ${colors.OFF_WHITE}`
                }
              >
                <NameButton
                  onClick={() => {
                    setFless(true);
                    setT40(false);
                    setShona(false);
                    setTechpam(false);
                  }}
                >
                  Fless
                </NameButton>
              </Box>
              <Box
                borderBottom={
                  techpam
                    ? `2px solid ${colors.ORANGE}`
                    : `2px solid ${colors.OFF_WHITE}`
                }
              >
                <NameButton
                  onClick={() => {
                    setTechpam(true);
                    setFless(false);
                    setT40(false);
                    setShona(false);
                  }}
                >
                  TECHPAM
                </NameButton>
              </Box>
              <Box
                borderBottom={
                  shona
                    ? `2px solid ${colors.ORANGE}`
                    : `2px solid ${colors.OFF_WHITE}`
                }
              >
                <NameButton
                  onClick={() => {
                    setShona(true);
                    setFless(false);
                    setT40(false);
                    setTechpam(false);
                  }}
                >
                  shona{' '}
                </NameButton>
              </Box>
            </Stack>
            <Box>
              {t40 && (
                <>
                  <Box>
                    <Box mb={2}>
                      <StyledWorkrole>
                        frontend Engineer{' '}
                        <span style={{ color: 'orange' }}>
                          @T40 TECHNOLOGIES
                        </span>
                      </StyledWorkrole>
                      <StyledWorkdate>March 2024 - June 2024</StyledWorkdate>
                    </Box>
                    <Box>
                      <StyledRowbox>
                        <StyledWorkicon>
                          <BiSolidRightArrow />
                        </StyledWorkicon>
                        <StyledWorktext>
                          Built the back office portal using React, resulting in
                          20% improved operator utilization of booking ticket
                          services.
                        </StyledWorktext>
                      </StyledRowbox>
                      <StyledRowbox>
                        <StyledWorkicon>
                          <BiSolidRightArrow />
                        </StyledWorkicon>
                        <StyledWorktext>
                          Made fixes and implementation on other products like
                          myT40, intercity, and intercity partner websites
                          producing better interactive interfaces, increasing
                          customer interaction by 50%.
                        </StyledWorktext>
                      </StyledRowbox>
                      <StyledRowbox>
                        <StyledWorkicon>
                          <BiSolidRightArrow />
                        </StyledWorkicon>
                        <StyledWorktext>
                          Integrated third-party APIs to enhance functionality,
                          enabling additional services and improve user
                          engagement.
                        </StyledWorktext>
                      </StyledRowbox>
                      <StyledRowbox>
                        <StyledWorkicon>
                          <BiSolidRightArrow />
                        </StyledWorkicon>
                        <StyledWorktext>
                          Collaborate with cross-functional teams in an Agile
                          development environment using Notion.
                        </StyledWorktext>
                      </StyledRowbox>
                    </Box>
                  </Box>
                </>
              )}
              {shona && (
                <>
                  <Box>
                    <Box mb={2}>
                      <StyledWorkrole>
                        frontend developer{' '}
                        <span style={{ color: 'orange' }}>@shona</span> (Remote)
                      </StyledWorkrole>
                      <StyledWorkdate> march 2022 - Jan 2023</StyledWorkdate>
                    </Box>
                    <Box>
                      <StyledRowbox>
                        <StyledWorkicon>
                          <BiSolidRightArrow />
                        </StyledWorkicon>
                        <StyledWorktext>
                          Developed a website with Reactjs for internal team
                          use; developed product, cart and product tracking
                          pages.
                        </StyledWorktext>
                      </StyledRowbox>
                      <StyledRowbox>
                        <StyledWorkicon>
                          <BiSolidRightArrow />
                        </StyledWorkicon>
                        <StyledWorktext>
                          Made resuable components and implemented features like
                          filter, sort etc while also consuming RESTful API.
                        </StyledWorktext>
                      </StyledRowbox>
                      <StyledRowbox>
                        <StyledWorkicon>
                          <BiSolidRightArrow />
                        </StyledWorkicon>
                        <StyledWorktext>
                          Functioned within a multi-disciplinary teams of
                          Engineers,Designers,Product managers on a daily basis.
                        </StyledWorktext>
                      </StyledRowbox>
                      <StyledRowbox>
                        <StyledWorkicon>
                          <BiSolidRightArrow />
                        </StyledWorkicon>
                        <StyledWorktext>
                          Worked with team management platforms like
                          Rally,Github.
                        </StyledWorktext>
                      </StyledRowbox>
                    </Box>
                  </Box>
                </>
              )}
              {fless && (
                <>
                  <Box>
                    <Box mb={2}>
                      <StyledWorkrole>
                        frontend developer{' '}
                        <span style={{ color: 'orange' }}>@Fless</span> (Remote)
                      </StyledWorkrole>
                      <StyledWorkdate> nov 2023 - February 2024</StyledWorkdate>
                    </Box>
                    <Box>
                      <StyledRowbox>
                        <StyledWorkicon>
                          <BiSolidRightArrow />
                        </StyledWorkicon>
                        <StyledWorktext>
                          Built a comprehensive dashboard to visualize financial
                          data, providing small businesses with insightful
                          analytics.
                        </StyledWorktext>
                      </StyledRowbox>
                      <StyledRowbox>
                        <StyledWorkicon>
                          <BiSolidRightArrow />
                        </StyledWorkicon>
                        <StyledWorktext>
                          Utilized charting library ( Chart.js) to create
                          interactive and intuitive visualizations.
                        </StyledWorktext>
                      </StyledRowbox>
                      <StyledRowbox>
                        <StyledWorkicon>
                          <BiSolidRightArrow />
                        </StyledWorkicon>
                        <StyledWorktext>
                          Ensured real-time data updates and responsiveness for
                          a seamless user experience.
                        </StyledWorktext>
                      </StyledRowbox>
                    </Box>
                  </Box>
                </>
              )}
              {techpam && (
                <>
                  <Box>
                    <Box mb={2}>
                      <StyledWorkrole>
                        Fullstack web developer{' '}
                        <span style={{ color: 'orange' }}>@TECPAM</span>{' '}
                        (remote)
                      </StyledWorkrole>
                      <StyledWorkdate>
                        {' '}
                        january 2022 - october 2023
                      </StyledWorkdate>
                    </Box>
                    <Box>
                      <StyledRowbox>
                        <StyledWorkicon>
                          <BiSolidRightArrow />
                        </StyledWorkicon>
                        <StyledWorktext>
                          Designed and implemented custom web applications
                          tailored to client specifications, improving their
                          online presence and operational efficiency.
                        </StyledWorktext>
                      </StyledRowbox>
                      <StyledRowbox>
                        <StyledWorkicon>
                          <BiSolidRightArrow />
                        </StyledWorkicon>
                        <StyledWorktext>
                          Leveraged modern front-end frameworks and libraries
                          such as React build dynamic and responsive user
                          interfaces.
                        </StyledWorktext>
                      </StyledRowbox>
                      <StyledRowbox>
                        <StyledWorkicon>
                          <BiSolidRightArrow />
                        </StyledWorkicon>
                        <StyledWorktext>
                          Provided ongoing maintenance and support, addressing
                          client needs and ensuring the long-term success of web
                          projects.
                        </StyledWorktext>
                      </StyledRowbox>
                    </Box>
                  </Box>
                </>
              )}
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Experience;
