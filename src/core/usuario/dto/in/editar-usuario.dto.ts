import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  MinLength,
  IsOptional,
  IsString,
  IsIn,
  IsPhoneNumber,
  IsEnum,
} from 'class-validator';
import { USUARIO_STATUS } from '../../enum/usuario-status.enum';

export class EditarUsuarioDto {
  @ApiProperty({ example: 'mail@mail.com', required: false })
  @IsEmail()
  @IsOptional()
  email: string;

  @ApiProperty({ example: 'Funcionario', required: false })
  @IsString()
  @MinLength(3)
  @IsOptional()
  nome: string;

}
