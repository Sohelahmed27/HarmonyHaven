import useCart from "../../../Hooks/useCart";

const MyCart = () => {
  const [carts] = useCart();
  // const total = carts.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h1 className="text-3xl text-center text-primary font-bold">Selected Class</h1>
     

      <div className="overflow-x-auto">
        <table className="table table-lg">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Instructor</th>
              <th>Price</th>
              <th>Payment</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {carts.map((cart, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{cart.name}</td>
                <td>{cart.instructor}</td>
                <td>${cart.price}</td>
                <td>
                  <button className="btn btn-error">Pay</button>
                </td>
                <td>
                  <button className="btn btn-error">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
