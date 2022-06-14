export const truncateAddress = (value: string) =>
  `${value.substring(0, 4)}...${value.substring(value.length - 4)}`;
