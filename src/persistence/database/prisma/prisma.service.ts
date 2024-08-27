import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
    //implementanção pattern monostate
    private static instance: PrismaClient;
  
    public static getInstance(): PrismaClient {
      if (!PrismaService.instance) {
        PrismaService.instance = new PrismaClient({
          log: ['warn', 'error'],
        });
        PrismaService.instance.$connect();
      }
  
      return PrismaService.instance;
    }
  }
