import { LoginInput as LoginInputInterface } from '@lib/types/user';
import * as jf from 'joiful';
import { BaseSchema } from '@lib/schema/BaseSchema';

export class LoginInput
  extends BaseSchema<LoginInput>
  implements LoginInputInterface {
  @(jf.string().required())
  password!: string;

  @(jf.string().required())
  userName!: string;
}
