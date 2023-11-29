import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export function TransactionHistory({ items }) {
  return (
    <table className={css.table}>
      <thead className={css.table_thead}>
        <tr>
          <th className={css.table_cell}>Type</th>
          <th className={css.table_cell}>Amount</th>
          <th className={css.table_cell}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <thead key={item.id} className={css.table_thead}>
            <tr>
              <th className={css.table_cell}>{item.type}</th>
              <th className={css.table_cell}>{item.amount}</th>
              <th className={css.table_cell}>{item.currency}</th>
            </tr>
          </thead>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};
