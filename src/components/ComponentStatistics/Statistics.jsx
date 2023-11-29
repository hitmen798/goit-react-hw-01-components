import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export function Statistics({ title, children }) {
  return (
    <section class="container" className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      {children}
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

const getBgColor = variant => {
  switch (variant) {
    case 'id-1':
      return 'rgb(212, 152, 237)';
    case 'id-2':
      return 'rgb(147, 33, 234)';
    case 'id-3':
      return 'rgb(228, 92, 180)';
    case 'id-4':
      return 'rgb(109, 40, 73)';
    case 'id-5':
      return 'rgb(238, 81, 157)';
    default:
  }
};

export function StatisticsList({ stats }) {
  return (
    <ul className={css.list}>
      {stats.map(stat => (
        <li
          class={css.item}
          key={stat.id}
          style={{ backgroundColor: getBgColor(stat.id) }}
        >
          <span class="label">{stat.label}</span>
          <span class="percentage">{stat.percentage}</span>
        </li>
      ))}
    </ul>
  );
}
