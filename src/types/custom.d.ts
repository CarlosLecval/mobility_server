import type { usuarios, paradas } from "@prisma/client";

declare module "express-serve-static-core" {
  interface Request {
    usuarios?: usuarios;
  }
}

interface ParadaTransporte extends paradas {
  habilitada: boolean;
}
