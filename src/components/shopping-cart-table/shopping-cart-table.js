import React from 'react';
import { connect } from 'react-redux';

const ShoppingCartTable = ({
  items = [1, 2],
  total,
  onIncrease,
  onDecrease,
  onDelete,
}) => {
  const renderRow = (item, idx) => {
    const { id, name, count, total } = item;
    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{name}</td>
        <td>{count}</td>
        <td>${total}</td>

        <td>
          <button
            onClick={() => onIncrease(id)}
            className="btn btn-outline-success float-right"
          >
            <i className="fa fa-plus-circle" />
          </button>
        </td>
        <td>
          <button
            onClick={() => onDecrease(id)}
            className="btn btn-outline-warning float-right"
          >
            <i className="fa fa-minus-circle" />
          </button>
        </td>
        <td>
          <button
            onClick={() => onDelete(id)}
            className="btn btn-outline-danger float-right"
          >
            <i className="fa fa-trash-o" />
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead />
        <tbody>{items.map(renderRow)}</tbody>
      </table>
      <div className="total">Tottal: ${total}</div>
    </div>
  );
};

const mapStateToProps = ({ cartItems, orderTotal }) => {
  return { items: cartItems, total: orderTotal };
};

const mapDispatchToProps = () => {
  return {
    onIncrease: (id) => console.log(`increase ${id}`),
    onDecrease: (id) => console.log(`decrease ${id}`),
    onDelete: (id) => console.log(`delete ${id}`),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
