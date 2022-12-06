import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Button from "Components/Button/Button";
import { ChangeEvent, useRef } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "configStore";
import { searchProduct } from "Slices/productSlice";

const SearchInput = () => {
  const dispatch = useDispatch<AppDispatch>();

  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      dispatch(searchProduct(event.target.value));
    }, 300);
  };

  return (
    <div className="mt-4">
      <div className="flex w-full">
        <input
          type="text"
          ref={inputRef}
          placeholder="Tìm kiếm sản phẩm..."
          className="w-full border-solid border-[1px] border-primary px-3 py-2 bg-white rounded-full rounded-tr-none rounded-br-none text-sm text-primary placeholder:text-primary focus:outline-none focus:shadow-search "
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            handleSearch(event);
          }}
        />
        <Button
          className="border-l-0 rounded-tl-none rounded-bl-none"
          onSearch={() => dispatch(searchProduct(inputRef.current?.value))}
        >
          <FontAwesomeIcon icon={faSearch} />
        </Button>
      </div>
    </div>
  );
};

export default SearchInput;
