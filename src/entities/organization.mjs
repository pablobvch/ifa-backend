// @flow

import type { Address } from "./address";
import type { User } from "./user";

type AddressIdType = $PropertyType<Address, "id">;

type Organization = {|
  id?: string,
  name: string,
  address: AddressIdType,
  user?: Array<User>
|};

export type { Organization };
