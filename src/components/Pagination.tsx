import { Button } from "@radix-ui/themes";

type PaginationProps = {
  handleFirstPage: () => void;
  handlePreviousPage: () => void;
  handleNextPage: () => void;
  handleLastPage: () => void;
  canPreviousPage: () => boolean;
  canNextPage: () => boolean;
  pageCount: number;
  currentPage: number;
};

const Pagination: React.FC<PaginationProps> = (props) => {
  return (
    <>
      <Button
        onClick={() => props.handleFirstPage()}
        disabled={!props.canPreviousPage()}
      >
        {"<<"}
      </Button>
      <Button
        onClick={() => props.handlePreviousPage()}
        disabled={!props.canPreviousPage()}
      >
        {"<"}
      </Button>
      <Button
        onClick={() => props.handleNextPage()}
        disabled={!props.canNextPage()}
      >
        {">"}
      </Button>
      <Button
        onClick={() => props.handleLastPage()}
        disabled={!props.canNextPage()}
      >
        {">>"}
      </Button>
    </>
  );
};

export default Pagination;
