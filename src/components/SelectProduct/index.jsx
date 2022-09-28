import React, { useRef, useState } from "react";
import { useCombobox } from "downshift";

export const SelectProduct = ({ products, onItemChange, value }) => {
  function getBooksFilter(inputValue) {
    return function booksFilter(book) {
      return (
        !inputValue ||
        book.name.toLowerCase().includes(inputValue) ||
        book.name.includes(inputValue)
      );
    };
  }

  const inputRef = useRef(null);

  const handleSetId = (id) => {
    onItemChange(id);
  };
  function ComboBox() {
    const [items, setItems] = React.useState(products);
    const {
      isOpen,
      getToggleButtonProps,
      getLabelProps,
      getMenuProps,
      getInputProps,
      getComboboxProps,
      highlightedIndex,
      getItemProps,
      selectedItem,
      setInputValue,
      inputValue,
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
          <label {...getLabelProps()}>Choose your favorite book:</label>
          <div {...getComboboxProps()}>
            <input
              {...getInputProps({
                ref: inputRef.current,
              })}
            />
            <button
              aria-label="toggle menu"
              type="button"
              {...getToggleButtonProps()}
            >
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
