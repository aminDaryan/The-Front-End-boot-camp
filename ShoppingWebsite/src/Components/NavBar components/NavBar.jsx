import React, { useState, useRef, useEffect } from "react";
import styles from "./NavBar.module.scss";
import axios from "axios";
import { Link, useLocation, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PrivateRoute from "./../PrivateRoute";
import { setAddress } from "./../../Redux/Actions/Address Action";
import { setCategorysProducts } from "./../../Redux/Actions/Fetch Category Products Action";
import { setSearchedCategorysProducts } from "./../../Redux/Actions/Searched Category Products Action";
import { setLoading } from "./../../Redux/Actions/Loading Action";
import UserProfileButton from "./Cart and Profile Components/UserProfileButton";
import CartButton from "./Cart and Profile Components/CartButton";

export default function NavBar() {
  // This shows whether the dropDown is open or not
  const [dropDownStatus, setDropDownStatus] = useState(false);
  // This is the title of the dropdown menu
  const [dropDownTitle, setDropDownTitle] = useState(
    JSON.parse(sessionStorage.getItem("The SearchBox Header")) || {
      name: "همه",
      api: "/products-list",
    }
  );
  // These two are for the effects of oppening and closing main menu
  const [classOfMenu, setClassOfMenu] = useState(
    styles.navBar__menu__sideBar_closed
  );
  const [classOfMainMenu, setClassOfMainMenu] = useState(
    styles.navBar__menu__sideBar_closed__mainMenu
  );
  // These two are for the effects of oppening and closing sub menu
  const [classOfSubMenu, setClassOfSubMenu] = useState(
    styles.navBar__menu__sideBar__mainMenu__body__list_of_sub_menu_closed
  );
  // These are the categories in the menu and dropDown
  const [categories, setCategories] = useState([
    { name: "همه", dataUrl: "", api: "/products-list/", subs: [] },
    {
      name: "وسایل الکتریکی",
      subs: [
        {
          name: "لپتاپ",
          dataUrl: "http://5.9.249.45:8000/menu/Laptob/",
          api: "/products-list/Laptob",
        },
        {
          name: "موبایل",
          dataUrl: "http://5.9.249.45:8000/menu/Mobile/",
          api: "/products-list/mobile",
        },
      ],
    },
    {
      name: "وسایل خانه",
      subs: [
        {
          name: "یخچال",
          dataUrl: "http://5.9.249.45:8000/menu/Refrigerator/",
          api: "/products-list/Refrigerator",
        },
        {
          name: "تلویزیون",
          dataUrl: "http://5.9.249.45:8000/menu/TV/",
          api: "/products-list/TV",
        },
      ],
    },
    {
      name: "آموزشی",
      subs: [
        {
          name: "کتاب",
          dataUrl: "http://5.9.249.45:8000/menu/Book/",
          api: "/products-list/book",
        },
        {
          name: "لوازم التحریر",
          dataUrl: "http://5.9.249.45:8000/menu/Stationery/",
          api: "/products-list/stationary",
        },
      ],
    },
  ]);

  const [subCategories, setSubCategories] = useState("");
  // This is the the whole side menu
  const mainMenu = useRef("");
  // this is the body of side menu
  const sideMenu = useRef("");
  // this is the rest of the page not icluding menu
  const notMenu = useRef("");
  const dropDownContainer = useRef("");
  //This is the input of the search
  const searchInput = useRef("");

  let { quantity } = useSelector((state) => state.theUsersCurrentCartItems);
  let { products, existingProductsInStorage } = useSelector(
    (state) => state.theUsersChosenCategorysProductsShownOnPage
  );
  const { user } = useSelector((state) => state.theUsersProfileProperties);

  let dispatch = useDispatch();

  // This is the react router location
  let location = useLocation();
  const history = useHistory();
  // In this function the data is fetched

  async function fetchingData(url) {
    return await axios
      .get(url)
      .then((res) => {
        dispatch(setCategorysProducts(res.data));
        return res.data;
      })
      .catch(function (response) {
        alert(response);
      });
  }

  // In this function, the word is searched in products

  async function handleFetchAndSearchData(url, dropDownUrl) {
    dispatch(setLoading(true));
    if (url === "Fetch All Data") {
      let allOfTheData = categories.map((category) => {
        return category.subs.map(async function (subCategory) {
          return await fetchingData(subCategory.dataUrl);
        });
      });
      // Here the array of promises is flattened
      var merged = [].concat.apply([], allOfTheData);
      // In this function an array of promises, turnes to one promise
      Promise.all(merged).then(function (values) {
        var allOfTheProductsArray = [].concat.apply([], values);
        dispatch(setCategorysProducts(allOfTheProductsArray));
        if (searchInput.current.value) {
          let searchedProducts = allOfTheProductsArray.filter((product) => {
            if (
              product.name
                .toLowerCase()
                .includes(searchInput.current.value.toLowerCase()) ||
              product.brand
                .toLowerCase()
                .includes(searchInput.current.value.toLowerCase())
            )
              return true;
            return false;
          });
          dispatch(setSearchedCategorysProducts(searchedProducts));
        } else {
          dispatch(setSearchedCategorysProducts(allOfTheProductsArray));
        }
        dispatch(setLoading(false));

        return;
      });
    } else if (location.pathname === dropDownUrl) {
      let theProducts = existingProductsInStorage;
      if (searchInput.current.value) {
        let searchedProducts = products.filter((product) => {
          if (
            product.name
              .toLowerCase()
              .includes(searchInput.current.value.toLowerCase()) ||
            product.brand
              .toLowerCase()
              .includes(searchInput.current.value.toLowerCase())
          )
            return true;
          return false;
        });

        dispatch(setSearchedCategorysProducts(searchedProducts));
      } else {
        dispatch(setSearchedCategorysProducts(theProducts));
      }

      dispatch(setLoading(false));
    } else {
      let theProducts = await fetchingData(url);
      if (searchInput.current.value) {
        let searchedProducts = theProducts.filter((product) => {
          if (
            product.name
              .toLowerCase()
              .includes(searchInput.current.value.toLowerCase()) ||
            product.brand
              .toLowerCase()
              .includes(searchInput.current.value.toLowerCase())
          )
            return true;
          return false;
        });

        dispatch(setSearchedCategorysProducts(searchedProducts));
      } else {
        dispatch(setSearchedCategorysProducts(theProducts));
      }
      dispatch(setLoading(false));
    }
  }

  // These functiones handle openning and closing main menu
  function handleOpenSideMenu() {
    setClassOfMenu(styles.navBar__menu__sideBar);
    setClassOfMainMenu(styles.navBar__menu__sideBar__mainMenu);
  }

  function handleCloseSideMenu() {
    setClassOfMenu(styles.navBar__menu__sideBar_closed);
    setClassOfMainMenu(styles.navBar__menu__sideBar_closed__mainMenu);
  }

  // These functions handle openning and closing sub menu

  function handleOpeningSubMenu(subMenuItems) {
    setClassOfSubMenu(
      styles.navBar__menu__sideBar__mainMenu__body__list_of_sub_menu
    );
    setSubCategories(subMenuItems);
  }

  function handleClosingSubMenu() {
    setClassOfSubMenu(
      styles.navBar__menu__sideBar__mainMenu__body__list_of_sub_menu_closed
    );
  }

  useEffect(() => {
    if (dropDownStatus) {
      dropDownContainer.current.style.transform = "scaleY(1)";
    } else {
      dropDownContainer.current.style.transform = "scaleY(0)";
    }
  }, [dropDownStatus]);

  useEffect(() => {
    if (classOfMenu == styles.navBar__menu__sideBar) {
      mainMenu.current.style.display = "block";
      notMenu.current.style.display = "block";
    } else {
      setTimeout(() => {
        mainMenu.current.style.display = "none";
        notMenu.current.style.display = "none";
      }, 200);
    }
  }, [classOfMenu]);

  useEffect(() => {
    sessionStorage.setItem(
      "The SearchBox Header",
      JSON.stringify(dropDownTitle)
    );
  }, [dropDownTitle]);

  return (
    <nav className={styles.navBar}>
      <section id="sideMenu" className={styles.navBar__menu}>
        <button
          className={styles.navBar__menu__button}
          onClick={handleOpenSideMenu}
        >
          <i className="fa fa-bars" aria-hidden="true"></i>
        </button>
        <div className={classOfMenu} ref={mainMenu}>
          <div ref={sideMenu} className={classOfMainMenu}>
            <div className={styles.navBar__menu__sideBar__mainMenu__header}>
              <div>منو</div>
              <div>
                <button
                  onClick={() => {
                    handleCloseSideMenu();
                    setTimeout(() => {
                      handleClosingSubMenu();
                    }, 200);
                    return;
                  }}
                  className={
                    styles.navBar__menu__sideBar__mainMenu__header__button
                  }
                >
                  &#10006;
                </button>
              </div>
            </div>
            <div className={styles.navBar__menu__sideBar__mainMenu__body}>
              {/* ____________________________________________This is the main menu__________________________________________ */}
              <ul
                className={
                  styles.navBar__menu__sideBar__mainMenu__body__list_of_main_menu
                }
              >
                <li
                  className={
                    styles.navBar__menu__sideBar__mainMenu__body__list_of_main_menu__listItemsHeader
                  }
                >
                  منوی اصلی
                </li>
                {categories.map((category, index) => {
                  if (index !== 0)
                    return (
                      <li
                        key={index}
                        className={
                          styles.navBar__menu__sideBar__mainMenu__body__list_of_main_menu__listItems
                        }
                        onClick={() => handleOpeningSubMenu(category.subs)}
                      >
                        <div
                          className={
                            styles.navBar__menu__sideBar__mainMenu__body__list_of_main_menu__listItems__text
                          }
                        >
                          {category.name}
                        </div>
                        <div
                          className={
                            styles.navBar__menu__sideBar__mainMenu__body__list_of_main_menu__listItems__angleLeft
                          }
                        >
                          <i
                            className="fa fa-angle-left"
                            aria-hidden="true"
                          ></i>
                        </div>
                      </li>
                    );
                })}
              </ul>
              {/* ____________________________________________This is the sub menu__________________________________________ */}
              {subCategories ? (
                <ul className={classOfSubMenu}>
                  <li
                    className={
                      styles.navBar__menu__sideBar__mainMenu__body__list_of_sub_menu__listItemsHeader
                    }
                  >
                    <div
                      className={
                        styles.navBar__menu__sideBar__mainMenu__body__list_of_sub_menu__listItemsHeader__arrow_to_back
                      }
                    >
                      <button
                        onClick={handleClosingSubMenu}
                        className={
                          styles.navBar__menu__sideBar__mainMenu__body__list_of_sub_menu__listItemsHeader__arrow_to_back__button
                        }
                      >
                        <i className="fa fa-arrow-right" aria-hidden="true"></i>
                      </button>
                    </div>
                    <div>بازگشت به منوی اصلی </div>
                  </li>
                  <hr
                    className={
                      styles.navBar__menu__sideBar__mainMenu__body__list_of_sub_menu__under_line
                    }
                  />
                  {subCategories.map((subCategory, index) => (
                    <Link
                      to={subCategory.api}
                      key={index + subCategory}
                      className={
                        styles.navBar__menu__sideBar__mainMenu__body__list_of_sub_menu__link
                      }
                      onClick={() => {
                        searchInput.current.value = "";
                        handleFetchAndSearchData(subCategory.dataUrl);
                        setDropDownTitle(subCategory);
                        dispatch(setAddress(subCategory.api));
                        return;
                      }}
                    >
                      <li
                        className={
                          styles.navBar__menu__sideBar__mainMenu__body__list_of_sub_menu__link__listItems
                        }
                      >
                        <div
                          className={
                            styles.navBar__menu__sideBar__mainMenu__body__list_of_sub_menu__link__listItems__text
                          }
                        >
                          {subCategory.name}
                        </div>
                      </li>
                    </Link>
                  ))}
                </ul>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div
          ref={notMenu}
          onClick={handleCloseSideMenu}
          className={styles.navBar__menu__sideBar__notMenu}
        ></div>
      </section>
      <section id="logo" className={styles.navBar__logo}>
        <Link to="/">
          <img
            className={styles.navBar__logo__image}
            src="/Img/logo_transparent.png"
            alt=""
          />
        </Link>
      </section>
      <section id="searchBox" className={styles.navBar__searchBox}>
        <div className={styles.navBar__searchBox__categories}>
          <button
            className={styles.navBar__searchBox__categories__button}
            onClick={
              dropDownStatus
                ? () => setDropDownStatus(false)
                : () => setDropDownStatus(true)
            }
            onBlur={() => setDropDownStatus(false)}
          >
            <div>
              <span>{dropDownTitle.name}</span>
            </div>
            <div
              className={
                styles.navBar__searchBox__categories__button__angleDown
              }
            >
              <i className="fa fa-angle-down" aria-hidden="true"></i>
            </div>

            <div
              id="navbarDropDown"
              className={styles.navBar__searchBox__categories__button__dropDown}
              ref={dropDownContainer}
            >
              <ul
                className={
                  styles.navBar__searchBox__categories__button__dropDown__list
                }
              >
                {categories.map((category, index) => {
                  if (category.name !== dropDownTitle.name)
                    return (
                      <li
                        key={index + category}
                        className={
                          styles.navBar__searchBox__categories__button__dropDown__list__listItems
                        }
                        onClick={() =>
                          category.name === "همه" && setDropDownTitle(category)
                        }
                      >
                        {category.name}

                        {category.name !== "همه" && (
                          <div
                            className={
                              styles.navBar__searchBox__categories__button__dropDown__list__listItems__sub_dropDown
                            }
                          >
                            <ul
                              className={
                                styles.navBar__searchBox__categories__button__dropDown__list__listItems__sub_dropDown__list
                              }
                            >
                              {category.subs.map((subCategory, index) => {
                                return (
                                  <li
                                    key={index + subCategory}
                                    className={
                                      styles.navBar__searchBox__categories__button__dropDown__list__listItems__sub_dropDown__list__listItems
                                    }
                                    style={
                                      subCategory.name === dropDownTitle.name
                                        ? { color: "#f0b90b" }
                                        : {}
                                    }
                                    onClick={() => {
                                      setDropDownTitle(subCategory);
                                    }}
                                  >
                                    {subCategory.name}

                                    <div
                                      className={
                                        styles.navBar__searchBox__categories__button__dropDown__list__listItems__sub_dropDown__list__listItems__angle_left
                                      }
                                    >
                                      <i
                                        className="fa fa-angle-left"
                                        aria-hidden="true"
                                      ></i>
                                    </div>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        )}
                      </li>
                    );
                })}
              </ul>
            </div>
          </button>
        </div>
        <input
          ref={searchInput}
          className={styles.navBar__searchBox__input}
          type="text"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              {
                if (dropDownTitle.name === "همه") {
                  history.push(dropDownTitle.api);
                  handleFetchAndSearchData("Fetch All Data");
                } else {
                  history.push(dropDownTitle.api);
                  handleFetchAndSearchData(
                    dropDownTitle.dataUrl,
                    dropDownTitle.api
                  );
                }
              }
              return;
            }
          }}
        />
        <Link to={dropDownTitle.api} className={styles.navBar__searchBox__link}>
          <button
            className={styles.navBar__searchBox__link__searchButton}
            onClick={() => {
              if (dropDownTitle.name === "همه") {
                handleFetchAndSearchData("Fetch All Data");
              } else {
                handleFetchAndSearchData(
                  dropDownTitle.dataUrl,
                  dropDownTitle.api
                );
              }
            }}
          >
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </Link>
      </section>
      <section id="profile" className={styles.navBar__Profile}>
        <PrivateRoute
          path="/"
          render={() => (
            <UserProfileButton
              name="عضویت / ورود"
              toPath="/users/login"
              fromLeft={{ left: "1vw" }}
            />
          )}
          component={() => (
            <UserProfileButton
              name={user}
              toPath="/profile"
              fromLeft={{ left: "1vw" }}
            />
          )}
        />
      </section>
      <section id="cart" className={styles.navBar__cart}>
        <PrivateRoute
          path="/"
          render={() => (
            <CartButton quantity={quantity} toPath="/users/login" />
          )}
          component={() => <CartButton quantity={quantity} toPath="/finance" />}
        />
      </section>
      <section id="aboutUs" className={styles.navBar__aboutUs}>
        درباره ی ما
      </section>
      <section id="contactUs" className={styles.navBar__contactUs}>
        تماس با ما
      </section>
      <section id="becomeASeller" className={styles.navBar__becomeASeller}>
        فروشنده شوید
      </section>
      <section id="FAQ" className={styles.navBar__FAQ}>
        سوالات متداول
      </section>
    </nav>
  );
}
