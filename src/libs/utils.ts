// Types
import { IPaginationValuesProps, IParameterizedStrProps } from 'types/utils';

export const ellipsisText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) {
    return text;
  }

  const ellipsis = '...';
  const truncatedText = text.substring(0, maxLength - ellipsis.length);
  return `${truncatedText}${ellipsis}`;
};

export const uppercaseFirstChar = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getPaginationValues = ({
  items,
  itemsPerPage,
  activePage,
}: IPaginationValuesProps) => {
  const totalPages = items ? Math.ceil(items?.length / itemsPerPage) : 0;
  const startIndex = (activePage - 1) * itemsPerPage;
  const currentItems = items
    ? items.slice(startIndex, startIndex + itemsPerPage)
    : [];

  return { totalPages, currentItems };
};

export const parameterizedStr = ({
  strWthPlaceHolder,
  value,
}: IParameterizedStrProps) => {
  return strWthPlaceHolder.replace(
    /{(\w+)}/g,
    (_, withoutDelimiters) => value[withoutDelimiters as keyof object]
  );
};
