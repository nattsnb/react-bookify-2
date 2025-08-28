import { UserDto } from "../user/user.dto.ts";

export class AuthenticationResponseDto implements UserDto {
  id!: number;
  email!: string;
  name!: string;
  password!: string;
  phoneNumber!: string;
}
