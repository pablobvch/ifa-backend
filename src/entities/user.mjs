// @flow

import type { Organization } from "./organization";

type OrganizationIdType = $PropertyType<Organization, "id">;

type User = {|
  id?: string,
  name: string,
  organizationId?: OrganizationIdType
|};

export type { User };
