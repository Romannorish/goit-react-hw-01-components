import PropTypes from 'prop-types';

import css from 'components/Transactions/TransactionHistory.module.css'

export default function TransactionHistory({items}) {
    return <table className={css.transactionHistory}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        {items.map(({ amount, currency, id, type, }) => (
        <tbody key={id}>
            <tr>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr> 
       </tbody>
       ))}
    </table>
}




TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
      })
    ).isRequired, 
};