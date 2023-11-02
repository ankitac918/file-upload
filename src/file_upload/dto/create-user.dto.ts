import { IsString } from 'class-validator';

export class createUserDto {
  @IsString()
  readonly firstName: string;

  @IsString()
  readonly lastName: string;

  @IsString()
  readonly address: string;

  readonly profileImage: any;

  readonly aadharImage: any;

  readonly idProofImage: any;
}
