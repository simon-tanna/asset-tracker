import { SearchIcon } from "@chakra-ui/icons";
import { Fade, InputGroup, InputRightElement, IconButton, Input } from "@chakra-ui/react";

interface SearchAssetProps {
  isOpen: boolean;
  handleSubmit: (event: any) => void;
  inputSymbol: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchAsset = ({
  isOpen,
  handleSubmit,
  inputSymbol,
  handleInputChange,
}: SearchAssetProps) => (
  <Fade in={isOpen}>
    <InputGroup maxW="2xs" display={isOpen ? "flex" : "none"}>
      <InputRightElement>
        <IconButton
          as={SearchIcon}
          aria-label="button"
          size="xs"
          background="transparent"
          onClick={handleSubmit}
          color="orange.50"
        />
      </InputRightElement>
      <Input placeholder="Search" value={inputSymbol} onChange={handleInputChange} />
    </InputGroup>
  </Fade>
);

export default SearchAsset;
