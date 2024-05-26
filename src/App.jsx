import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { calculateTotal } from "./features/cart/cartSlice";
import Modal from "./components/Modal";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
function App() {
  const { products } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [products]);
  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
