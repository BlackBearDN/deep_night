import React, { useRef, useState } from "react";
import ISelectItem from "./types/ISelectItem";
import {
  SelectDropdownContent,
  SelectDropdownItem,
  SelectNoContent,
  SelectStyled,
} from "./styles/select.styled";
import Dropdown from "../Dropdown/Dropdown";
import Input from "../Input/Input";
import ArrowIcon from "../../assets/icons/components/ArrowIcon";

const Select: React.FC<
  {
    items: ISelectItem[];
    onChange: (value: any) => void;
    defaultValue?: any;
    inputProps?: React.HTMLAttributes<HTMLInputElement>;
    closeAfterSelect?: boolean;
  } & React.HTMLAttributes<HTMLDivElement>
> = ({ items, onChange, defaultValue, inputProps, closeAfterSelect = true, ...attrs }) => {
  const selectRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState<ISelectItem | null>(defaultValue);
  const [inputValue, setInputValue] = useState<string | null>(null);
  const [viewedItems, setViewedItems] = useState(items);

  const changeValue = (equalsItem: ISelectItem | null): void => {
    if (equalsItem?.label === value?.label) {
      return;
    }

    setInputValue(equalsItem?.label || null);
    setValue(equalsItem);
    onChange(equalsItem?.value);

    if (closeAfterSelect) {
      setIsOpen(false);
    }
  };

  const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
    setViewedItems(items.filter((item) => item.label.includes(e.target.value)));

    const equalsItem = items.find((item) => item.label === e.target.value);
    if (!equalsItem) {
      setValue(null);
      onChange(null);
      return;
    }
    changeValue(equalsItem);
  };

  return (
    <SelectStyled {...attrs} ref={selectRef}>
      <Input
        {...inputProps}
        type="text"
        icon={<ArrowIcon />}
        iconProps={{
          className: isOpen ? "openSelectInputIcon" : "selectInputIcon",
        }}
        inputRef={inputRef}
        onClick={(): void => setIsOpen(true)}
        value={inputValue || ""}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => changeInputValue(e)}
      />
      <Dropdown isOpen={isOpen} setOpen={setIsOpen} className="dropdown" bindingRef={inputRef}>
        <SelectDropdownContent>
          {viewedItems?.length ? (
            viewedItems.map((item) => (
              <SelectDropdownItem key={item.value} onClick={(): void => changeValue(item)}>
                {item.label}
              </SelectDropdownItem>
            ))
          ) : (
            <SelectNoContent>Значения отсутствуют</SelectNoContent>
          )}
        </SelectDropdownContent>
      </Dropdown>
    </SelectStyled>
  );
};

export default Select;
