import React from "react";
import styles from "./Footer.module.scss";

export default function Footer() {
  function handleBackToTop() {
    window.scroll({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className={styles.container}>
      <section id="goToTop">
        <div className={styles.container__goToTop}>
          <button
            className={styles.container__goToTop__button}
            onClick={handleBackToTop}
          >
            بازگشت به بالای صفحه
          </button>
        </div>
      </section>
      <section id="mainFooter">
        <div className={styles.container__main_footer}>
          <div className={styles.container__main_footer__grid}>
            <div
              className={
                styles.container__main_footer__grid__information_columns
              }
            >
              <ul
                className={
                  styles.container__main_footer__grid__information_columns__list
                }
              >
                <li
                  className={
                    styles.container__main_footer__grid__information_columns__list__list_header
                  }
                >
                  خدمات مشتریان
                </li>
                <li
                  className={
                    styles.container__main_footer__grid__information_columns__list__list_items
                  }
                >
                  <a
                    href="#"
                    className={
                      styles.container__main_footer__grid__information_columns__list__list_items__link
                    }
                  >
                    پاسخ به پرسش‌های متداول
                  </a>
                </li>
                <li
                  className={
                    styles.container__main_footer__grid__information_columns__list__list_items
                  }
                >
                  <a
                    href="#"
                    className={
                      styles.container__main_footer__grid__information_columns__list__list_items__link
                    }
                  >
                    حریم خصوصی
                  </a>
                </li>
                <li
                  className={
                    styles.container__main_footer__grid__information_columns__list__list_items
                  }
                >
                  <a
                    href="#"
                    className={
                      styles.container__main_footer__grid__information_columns__list__list_items__link
                    }
                  >
                    گزارش باگ
                  </a>
                </li>
              </ul>
            </div>
            <div
              className={
                styles.container__main_footer__grid__information_columns
              }
            >
              <ul
                className={
                  styles.container__main_footer__grid__information_columns__list
                }
              >
                <li
                  className={
                    styles.container__main_footer__grid__information_columns__list__list_header
                  }
                >
                  خدمات مشتریان
                </li>
                <li
                  className={
                    styles.container__main_footer__grid__information_columns__list__list_items
                  }
                >
                  <a
                    href="#"
                    className={
                      styles.container__main_footer__grid__information_columns__list__list_items__link
                    }
                  >
                    پاسخ به پرسش‌های متداول
                  </a>
                </li>
                <li
                  className={
                    styles.container__main_footer__grid__information_columns__list__list_items
                  }
                >
                  <a
                    href="#"
                    className={
                      styles.container__main_footer__grid__information_columns__list__list_items__link
                    }
                  >
                    حریم خصوصی
                  </a>
                </li>
                <li
                  className={
                    styles.container__main_footer__grid__information_columns__list__list_items
                  }
                >
                  <a
                    href="#"
                    className={
                      styles.container__main_footer__grid__information_columns__list__list_items__link
                    }
                  >
                    گزارش باگ
                  </a>
                </li>
              </ul>
            </div>
            <div
              className={
                styles.container__main_footer__grid__information_columns
              }
            >
              <ul
                className={
                  styles.container__main_footer__grid__information_columns__list
                }
              >
                <li
                  className={
                    styles.container__main_footer__grid__information_columns__list__list_header
                  }
                >
                  با ما
                </li>
                <li
                  className={
                    styles.container__main_footer__grid__information_columns__list__list_items
                  }
                >
                  <a
                    href="#"
                    className={
                      styles.container__main_footer__grid__information_columns__list__list_items__link
                    }
                  >
                    تماس با ما
                  </a>
                </li>
                <li
                  className={
                    styles.container__main_footer__grid__information_columns__list__list_items
                  }
                >
                  <a
                    href="#"
                    className={
                      styles.container__main_footer__grid__information_columns__list__list_items__link
                    }
                  >
                    درباره ما
                  </a>
                </li>
                <li
                  className={
                    styles.container__main_footer__grid__information_columns__list__list_items
                  }
                >
                  <a
                    href="#"
                    className={
                      styles.container__main_footer__grid__information_columns__list__list_items__link
                    }
                  >
                    فرصت های شغلی
                  </a>
                </li>
              </ul>
            </div>
            <div
              className={
                styles.container__main_footer__grid__information_columns
              }
            >
              <ul
                className={
                  styles.container__main_footer__grid__information_columns__list
                }
              >
                <li
                  className={
                    styles.container__main_footer__grid__information_columns__list__list_header
                  }
                >
                  با ما کسب درآمد کنید
                </li>
                <li
                  className={
                    styles.container__main_footer__grid__information_columns__list__list_items
                  }
                >
                  <a
                    href="#"
                    className={
                      styles.container__main_footer__grid__information_columns__list__list_items__link
                    }
                  >
                    بفروشید
                  </a>
                </li>
                <li
                  className={
                    styles.container__main_footer__grid__information_columns__list__list_items
                  }
                >
                  <a
                    href="#"
                    className={
                      styles.container__main_footer__grid__information_columns__list__list_items__link
                    }
                  >
                    همکاری
                  </a>
                </li>
                <li
                  className={
                    styles.container__main_footer__grid__information_columns__list__list_items
                  }
                >
                  <a
                    href="#"
                    className={
                      styles.container__main_footer__grid__information_columns__list__list_items__link
                    }
                  >
                    فرصت شغلی
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.container__main_footer__contact_info}>
            <p className={styles.container__main_footer__contact_info__text}>
              هفت روز هفته ، ۲۴ ساعت شبانه‌روز پاسخگوی شما هستیم
            </p>

            <p className={styles.container__main_footer__contact_info__text}>
              شماره تماس : ۰۰۰۰۰۰۰۰ - ۰۲۱
            </p>

            <p className={styles.container__main_footer__contact_info__text}>
              آدرس ایمیل : info@gamil.com
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
}
