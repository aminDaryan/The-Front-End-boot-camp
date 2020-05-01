import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Switch from "@material-ui/core/Switch";
import { useSelector, useDispatch } from "react-redux";
import { setExistingProducts } from "./../../../Redux/Actions/Searched Category Products Action";

const useStyles = makeStyles((theme) => ({
  root: {
    direction: "ltr",
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const ListItemEdited = withStyles({
  root: {
    borderRadius: "0.2vw",
    boxShadow: "0 0.04vw 0.05vw 0.01vw #aaaaaa",
    padding: "0.4vw 4.5vw 0.4vw 0",
  },
})(ListItem);

const ListItemTextEdited = withStyles({
  root: {
    "& span": {
      fontSize: "1.2vw",
    },
  },
})(ListItemText);

export default function SwitchListSecondary() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([]);

  let { products, existingProductsInStorage, allOfTheProducts } = useSelector(
    (state) => state.theUsersChosenCategorysProductsShownOnPage
  );

  const dispatch = useDispatch();

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
      console.log(value);

      let newProducts = allOfTheProducts.filter((product) => {
        if (product.quantiy === 0) return false;
        return true;
      });

      let newShownProducts = products.filter((product) => {
        if (product.quantiy === 0) return false;
        return true;
      });
      dispatch(setExistingProducts(newProducts, newShownProducts));
    } else {
      dispatch(setExistingProducts(allOfTheProducts, allOfTheProducts));
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  return (
    <List className={classes.root}>
      <ListItemEdited>
        <ListItemTextEdited
          id="switch-list-label-wifi"
          primary="موجودی کالا"
          style={{ textAlign: "right" }}
        />
        <ListItemSecondaryAction>
          <Switch
            edge="end"
            onChange={handleToggle("on")}
            checked={checked.indexOf("on") !== -1}
            inputProps={{ "aria-labelledby": "switch-list-label-wifi" }}
            color={"primary"}
          />
        </ListItemSecondaryAction>
      </ListItemEdited>
    </List>
  );
}
