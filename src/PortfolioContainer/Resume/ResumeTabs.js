import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import {Box, Card, CardContent, Link, Grid} from "@mui/material";
import BasicTables from "./college";
import BasicTable from "./certifications";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: 450,
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab label="Training and Work Experience" {...a11yProps(0)} />
        <Tab label="Education" {...a11yProps(1)} />
        <Tab label="Certifications" {...a11yProps(2)} />
        <Tab label="Professional Skills" {...a11yProps(3)} />
        <Tab label="Volunteer/Charity Work" {...a11yProps(4)} />
        <Tab label="Projects" {...a11yProps(5)} />
        <Tab label="Languages Known" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0}>
      <Grid item md={12} >
            <Card>
                <Typography color={'black'} variant='h3'>
                Training & Work Experience
                </Typography>
                <CardContent>
                    <Typography variant='h6'>
                    Google Qwiklabs – Hands on training - Create and Manage Cloud Resources (Oct 2020)
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <BasicTables />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <BasicTable />
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Grid>
          <Card>
            <Typography
              bgcolor={"background.paper"}
              color={"black"}
              variant="h3"
            >
              Volunteering & Charity
            </Typography>
            <CardContent>
              <Typography variant="h6">
                National Service Scheme (NSS) Volunteer – 2018-2020
              </Typography>
              <Typography variant="h6">
                <Link href="www.charitism.com">I Support Charitism </Link>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
      <Grid>
            <Card>
                <Typography bgcolor={'background.paper'} color={'black'} variant='h3'>
                Languages
                </Typography>
                <CardContent>
                    <Typography variant='h6'>
                        English (Proficient in spoken and written)
                    </Typography>
                    <Typography variant='h6'>
                        Hindi (Native language)
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
      </TabPanel>
    </Box>
  );
}
