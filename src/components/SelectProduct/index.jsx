import React, { useRef, useState } from "react";
import { useCombobox } from "downshift";

export const SelectProduct = ({ products, onItemChange }) => {
  function getBooksFilter(inputValue) {
    return function booksFilter(product) {
      return (
        !inputValue ||
        product.name.toLowerCase().includes(inputValue) ||
        product.name.includes(inputValue)
      );
    };
  }

  const inputRef = useRef(null);

  const handleSetId = (id) => {
    onItemChange(id);
  };
  function ComboBox() {
    const [items, setItems] = useState(products);
    const {
      isOpen,
      getToggleButtonProps,
      getLabelProps,
      getMenuProps,
      getInputProps,
      getComboboxProps,
      getItemProps,
      setInputValue,
    } = useCombobox({
      onInputValueChange({ inputValue }) {
        setItems(products.filter(getBooksFilter(inputValue)));
      },
      items,
      itemToString(item) {
        return item ? item.name : "";
      },
      onSelectedItemChange({ selectedItem }) {
        handleSetId(selectedItem._id);
        setInputValue(selectedItem.name);
      },
    });

    return (
      <div>
        <div>
          <label {...getLabelProps()}></label>
          <div {...getComboboxProps()}>
            <input
              {...getInputProps({
                ref: inputRef.current,
              })}
            />
            <button type="button" {...getToggleButtonProps()}>
              {isOpen ? <>&#8593;</> : <>&#8595;</>}
            </button>
          </div>
        </div>
        <ul {...getMenuProps()}>
          {isOpen &&
            items.map((item, index) => (
              <li
                key={`${item._id}${index}`}
                {...getItemProps({ item, index })}
              >
                <span>{item.name}</span>
              </li>
            ))}
        </ul>
      </div>
    );
  }
  return <ComboBox />;
};
