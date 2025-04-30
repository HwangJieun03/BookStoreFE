import { styled } from "styled-components";
import { BookDetail } from "../../models/book.model";
import InputText from "../common/InputText";
import Button from "../common/Button";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useBook } from "../../hooks/useBook";

interface Props {
  book: BookDetail;
}

function AddToCart({ book }: Props) {
  const [quantity, setQuantity] = useState<number>(1);
  //const [cartAdded, setCartAdded] = useState(false);
  const { addToCart, cartAdded } = useBook(book.id.toString());
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity === 1) return;
    setQuantity(quantity - 1);
  };

  return (
    <AddToCartStyle $added={cartAdded}>
      <div>
        <InputText
          inputType="number"
          value={quantity}
          onChange={handleChange}
        />
        <Button size="medium" scheme="normal" onClick={handleIncrease}>
          +
        </Button>
        <Button size="medium" scheme="normal" onClick={handleDecrease}>
          -
        </Button>
      </div>

      <Button
        size="medium"
        scheme="primary"
        onClick={() => addToCart(quantity)}
      >
        장바구니 담기
      </Button>

      <div className="added">
        <p>장바구니에 추가되었습니다.</p>
        <Link to="/cart">장바구니로 이동</Link>
      </div>
    </AddToCartStyle>
  );
}

interface AddToCartStyleProps {
  $added: boolean;
}

const AddToCartStyle = styled.div<AddToCartStyleProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .added {
    position: absolute;
    right: 0;
    bottom: -90px;
    background: ${({ theme }) => theme.color.background};
    border-radius: ${({ theme }) => theme.borderRadius.default};
    padding: 8px 12px;
    opacity: ${({ $added }) => ($added ? "1" : "0")};
    transition: all 0.5s ease;
    p {
      padding: 0 0 8px 0;
      margin: 0;
    }
  }

  @media ${({ theme }) => theme.mediaQuery.mobile} {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 12px;

    > div {
      display: flex;
      gap: 8px;

      input {
        width: 60px;
        font-size: 0.9rem;
      }

      button {
        font-size: 0.9rem;
        padding: 10px 10px;
      }
    }

    button {
      width: 57%;
    }

    .added {
      display: flex;
      position: static;
      font-size: 0.9rem;
      text-align: center;
      width: 100%;
      justify-content: center;

      a {
        color: ${({ theme }) => theme.color.primary};
        font-weight: bold;
        text-decoration: underline;
      }
    }
  }
`;

export default AddToCart;
