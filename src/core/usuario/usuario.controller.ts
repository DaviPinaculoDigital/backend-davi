import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    Put,
    Query,
    UseGuards,
  } from '@nestjs/common';
  import { UsuarioService } from './usuario.service';
  import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
  import { UsuarioId } from 'src/auth/decorators/usuario-id.decorator';
  import { CriarUsuarioDto } from './dto/in/criar-usuario.dto';
  import { EditarUsuarioDto } from './dto/in/editar-usuario.dto';
  import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
  import { ListarUsuariosDto } from './dto/in/listar-usuario.dto';

  
  @ApiTags('Usuario')
  @Controller('usuario')
  export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService) {}


    
  }
  