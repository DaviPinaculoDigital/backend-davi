import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/persistence/database/prisma/prisma.service';
import { CriarUsuarioDto } from './dto/in/criar-usuario.dto';
import { EditarUsuarioDto } from './dto/in/editar-usuario.dto';
import { ListarUsuariosDto } from './dto/in/listar-usuario.dto';
import { Prisma } from '@prisma/client';
import {
  AppErrorBadRequest,
  AppErrorConflict,
  AppErrorNotFound,
  AppErrorUnauthorized,
} from 'src/utils/errors/app-errors';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuarioService {
  constructor(private readonly prismaService: PrismaService) {}

}
