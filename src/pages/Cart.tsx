import { styled } from "styled-components";
import Title from "../components/common/Title";
import CartItem from "../components/cart/CartItem";
import { useCart } from "../hooks/useCart";
import { useState } from "react";
import Empty from "../components/common/Empty";
import { FaShoppingCart } from "react-icons/fa";

const ShoppingCartIcon = FaShoppingCart as React.ElementType;

function Cart() {
  const { carts, deleteCartItem, isEmpty } = useCart();
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const handleCheckItem = (id: number) => {
    if (checkedItems.includes(id)) {
      // 언체크
      setCheckedItems(checkedItems.filter((item) => item !== id));
    } else {
      // 체크
      setCheckedItems([...checkedItems, id]);
    }
  };

  const handleDeleteItem = (id: number) => {
    // 삭제 행위
    deleteCartItem(id);
  };

  return (
    <>
      <Title size="large">장바구니</Title>
      <CartStyle>
        {!isEmpty && (
          <>
            <div className="content">
              {carts.map((item) => (
                <CartItem
                  key={item.id}
                  cart={item}
                  checkedItems={checkedItems}
                  onCheck={handleCheckItem}
                  onDelete={handleDeleteItem}
                />
              ))}
            </div>
            <div className="summary"></div>
          </>
        )}
        {isEmpty && (
          <Empty
            title="장바구니가 비어있습니다."
            icon={<ShoppingCartIcon />}
            description={<>구매하실 상품을 장바구니에 담아주세요.</>}
          />
        )}
      </CartStyle>
    </>
  );
}

const CartStyle = styled.div``;

export default Cart;
