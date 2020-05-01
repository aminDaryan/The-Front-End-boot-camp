import React from "react";
import styles from "./DescriptionTab.module.scss";
import PropTypes from "prop-types";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const AppBarEdited = withStyles({
  root: {
    position: "sticky",
    top: "6.4vw",

    "&.MuiAppBar-colorPrimary": {
      backgroundColor: "white",
      color: "black",
    },

    "& span.MuiTabs-indicator": {
      backgroundColor: "#f0b90b",
    },

    "& span.MuiTab-wrapper": {
      fontSize: "1.2vw",
      fontFamily: "shabnam",
    },
  },
})(AppBar);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs({ theProduct }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBarEdited position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="نقد و بررسی" {...a11yProps(0)} />
          <Tab label="مشخصات" {...a11yProps(1)} />
          <Tab label="نظرات" {...a11yProps(2)} />
        </Tabs>
      </AppBarEdited>
      <TabPanel value={value} index={0}>
        <div className={styles.text}>
          <h1 className={styles.text__sub_header}>معرفی</h1>
          <span className={styles.text__description}>
            {theProduct.description}
          </span>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className={styles.text}>
          <h1 className={styles.text__sub_header}>مشخصات فنی</h1>
          <div className={styles.text__grid}>
            {theProduct.brand !== "-"  ? (
              <>
                <span className={styles.text__grid__item1}>برند</span>
                <span className={styles.text__grid__item2}>
                  {theProduct.brand}
                </span>
              </>
            ) : (
              ""
            )}
            {theProduct.color ? (
              <>
                <span className={styles.text__grid__item3}>رنگ</span>
                <span className={styles.text__grid__item4}>
                  {theProduct.color}
                </span>
              </>
            ) : (
              ""
            )}
            {theProduct.ram_Gig ? (
              <>
                <span className={styles.text__grid__item5}>رم</span>
                <span className={styles.text__grid__item6}>
                  {theProduct.ram_Gig + " Gig"}
                </span>
              </>
            ) : theProduct.side_by_side ? (
              <>
                <span className={styles.text__grid__item5}>ساید بای ساید</span>
                <span className={styles.text__grid__item6}>
                  {theProduct.side_by_side ? "بله" : "خیر"}
                </span>
              </>
            ) : theProduct.resolution ? (
              <>
                <span className={styles.text__grid__item5}>رزولوشن</span>
                <span className={styles.text__grid__item6}>
                  {theProduct.resolution}
                </span>
              </>
            ) : theProduct.author ? (
              <>
                <span className={styles.text__grid__item5}>نویسنده</span>
                <span className={styles.text__grid__item6}>
                  {theProduct.author}
                </span>
              </>
            ) : (
              ""
            )}
            {theProduct.operation_system ? (
              <>
                <span className={styles.text__grid__item7}>سیستم عامل</span>
                <span className={styles.text__grid__item8}>
                  {theProduct.operation_system}
                </span>
              </>
            ) : theProduct.screen_size ? (
              <>
                <span className={styles.text__grid__item7}>اندازه صفحه</span>
                <span className={styles.text__grid__item8}>
                  {theProduct.screen_size}
                </span>
              </>
            ) : theProduct.size ? (
              <>
                <span className={styles.text__grid__item7}>سایز</span>
                <span className={styles.text__grid__item8}>
                  {theProduct.size}
                </span>
              </>
            ) : theProduct.publisher ? (
              <>
                <span className={styles.text__grid__item7}>ناشر</span>
                <span className={styles.text__grid__item8}>
                  {theProduct.publisher}
                </span>
              </>
            ) : theProduct.nib ? (
              <>
                <span className={styles.text__grid__item7}>سر</span>
                <span className={styles.text__grid__item8}>
                  {theProduct.nib}
                </span>
              </>
            ) : (
              ""
            )}
            {theProduct.display_resolution ? (
              <>
                <span className={styles.text__grid__item9}>رزولوشن</span>
                <span className={styles.text__grid__item10}>
                  {theProduct.display_resolution}
                </span>
              </>
            ) : theProduct.touch_screen_display ? (
              <>
                <span className={styles.text__grid__item9}>لمسی</span>
                <span className={styles.text__grid__item10}>
                  {theProduct.touch_screen_display ? "بله" : "خیر"}
                </span>
              </>
            ) : theProduct.weight ? (
              <>
                <span className={styles.text__grid__item9}>وزن</span>
                <span className={styles.text__grid__item10}>
                  {theProduct.weight}
                </span>
              </>
            ) : theProduct.recommendede_ages ? (
              <>
                <span className={styles.text__grid__item9}>بازه سنی</span>
                <span className={styles.text__grid__item10}>
                  {theProduct.recommendede_ages}
                </span>
              </>
            ) : (
              ""
            )}
            {theProduct.sim_card ? (
              <>
                <span className={styles.text__grid__item11}>سیم کارت</span>
                <span className={styles.text__grid__item12}>
                  {theProduct.sim_card}
                </span>
              </>
            ) : theProduct.graphics_card ? (
              <>
                <span className={styles.text__grid__item11}>گرافیک</span>
                <span className={styles.text__grid__item12}>
                  {theProduct.graphics_card ? "بله" : "خیر"}
                </span>
              </>
            ) : theProduct.voltage ? (
              <>
                <span className={styles.text__grid__item11}>ولتاژ</span>
                <span className={styles.text__grid__item12}>
                  {theProduct.voltage}
                </span>
              </>
            ) : theProduct.language ? (
              <>
                <span className={styles.text__grid__item11}>زبان</span>
                <span className={styles.text__grid__item12}>
                  {theProduct.language}
                </span>
              </>
            ) : theProduct.kind ? (
              <>
                <span className={styles.text__grid__item11}>نوع</span>
                <span className={styles.text__grid__item12}>
                  {theProduct.kind}
                </span>
              </>
            ) : (
              ""
            )}
            {theProduct.top_mount_freezer ? (
              <>
                <span className={styles.text__grid__item13}>فریزر</span>
                <span className={styles.text__grid__item14}>
                  {theProduct.top_mount_freezer ? "بله" : "خیر"}
                </span>
              </>
            ) : theProduct.graphics_card ? (
              <>
                <span className={styles.text__grid__item13}>گرافیک</span>
                <span className={styles.text__grid__item14}>
                  {theProduct.graphics_card ? "بله" : "خیر"}
                </span>
              </>
            ) : theProduct.voltage ? (
              <>
                <span className={styles.text__grid__item13}>ولتاژ</span>
                <span className={styles.text__grid__item14}>
                  {theProduct.voltage}
                </span>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}></TabPanel>
    </div>
  );
}
