import { UserDto } from "../user/user.dto.ts";

export class AuthenticationResponseDto implements Omit<UserDto, "password"> {
  id!: number;
  email!: string;
  name?: string;
  phoneNumber?: string;
}
