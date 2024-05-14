import { PRICE_ORDER_DIRECTION_TYPE } from '../consts';

type TPaginationOrderDirectionType = (typeof PRICE_ORDER_DIRECTION_TYPE)[keyof typeof PRICE_ORDER_DIRECTION_TYPE];

type TApartmentQuery = {
  price?: TPaginationOrderDirectionType;
  rooms?: number;
};

export type { TApartmentQuery, TPaginationOrderDirectionType };
