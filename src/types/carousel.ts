export interface ICarouselComponentDetails {
  UUID: string;
  title: string;
  detail: string;
}

export interface ICarouselComponentProp {
  data: ICarouselComponentDetails[];
  loadingData: boolean;
}
