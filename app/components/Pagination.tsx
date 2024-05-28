import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import { Button, Flex, Text } from "@radix-ui/themes";

interface Props {
  itemCount: number;
  pageSize: number;
  currentPage: number;
}

const Pagination = ({ itemCount, pageSize, currentPage }: Props) => {
  const totalPages = Math.ceil(itemCount / pageSize);

  return (
    <Flex align="center" gap="2">
      <Text size="2">
        Page {currentPage} of {totalPages}
      </Text>
      <Button color="gray" variant="soft" size="1" disabled={currentPage === 1}>
        <DoubleArrowLeftIcon />
      </Button>
      <Button color="gray" variant="soft" size="1" disabled={currentPage === 1}>
        <ChevronLeftIcon />
      </Button>
      <Button
        color="gray"
        variant="soft"
        size="1"
        disabled={currentPage === totalPages}
      >
        <ChevronRightIcon />
      </Button>
      <Button
        color="gray"
        variant="soft"
        size="1"
        disabled={currentPage === totalPages}
      >
        <DoubleArrowRightIcon />
      </Button>
    </Flex>
  );
};

export default Pagination;
