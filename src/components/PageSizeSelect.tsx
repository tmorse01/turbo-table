import { Select } from "@radix-ui/themes";

type PageSizeSelectProps = {
  pageSize: number;
  setPageSize: (pageSize: number) => void;
};

const PageSizeSelect: React.FC<PageSizeSelectProps> = ({
  pageSize,
  setPageSize,
}) => {
  const value = pageSize.toString();
  const handleChange = (value: string) => {
    console.log("value :", value);
    setPageSize(parseInt(value));
  };

  return (
    <Select.Root defaultValue="10" value={value} onValueChange={handleChange}>
      <Select.Trigger />
      <Select.Content>
        <Select.Item value="10">10</Select.Item>
        <Select.Item value="20">20</Select.Item>
        <Select.Item value="100">100</Select.Item>
      </Select.Content>
    </Select.Root>
  );
};

export default PageSizeSelect;
