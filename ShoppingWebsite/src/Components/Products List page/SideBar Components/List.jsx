import React, { useState, useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import { useSelector, useDispatch } from "react-redux";
import { setChosenBrandsProducts } from "./../../../Redux/Actions/Searched Category Products Action";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function CheckboxList() {
  const [brands, setBrands] = useState([]);

  let { products, existingProductsInStorage, allOfTheProducts } = useSelector(
    (state) => state.theUsersChosenCategorysProductsShownOnPage
  );

  const dispatch = useDispatch();

  const classes = useStyles();
  const [checked, setChecked] = React.useState([]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  useEffect(() => {
    let newBrands = [];
    allOfTheProducts.map((product) => {
      if (newBrands.includes(product.brand)) {
        return;
      } else if (product.brand !== "-") {
        newBrands.push(product.brand);
      }
    });
    setBrands(newBrands);
  }, [allOfTheProducts]);

  useEffect(() => {
    let newProducts = existingProductsInStorage.filter((product) => {
      if (checked.includes(product.brand)) return true;
      return false;
    });
    console.log(newProducts);
    if (checked[0]) {
      dispatch(setChosenBrandsProducts(newProducts));
    } else {
      dispatch(setChosenBrandsProducts(existingProductsInStorage));
    }
  }, [checked, existingProductsInStorage]);

  return (
    <List className={classes.root}>
      {brands.map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem
            key={value}
            role={undefined}
            dense
            button
            onClick={handleToggle(value)}
          >
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ "aria-labelledby": labelId }}
                color={"primary"}
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={value} />
          </ListItem>
        );
      })}
    </List>
  );
}
