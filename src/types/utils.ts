export interface IPaginationValuesProps {
  itemsPerPage: number;
  activePage: number;
  items: any[] | null;
}

export interface IParameterizedStrProps {
  strWthPlaceHolder: string;
  value: object;
}
