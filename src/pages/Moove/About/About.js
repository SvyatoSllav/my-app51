import classes from './About.module.css'

export const About = () => (
  <a href="https://www.skolkovo.ru/programmes/07112020-moove-by-skolkovo-mts/" className={classes.about}>
    <div className={classes.title}>О программе Moove</div>
    <div className={classes.subtitle}>Перейти на сайт и узнать подробнее</div>
  </a>
)
