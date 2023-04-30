import { Request, Response } from "express";
import { prisma } from "../../config/dataSource.js";

export async function getViajes(req: Request, res: Response) {
  const viajes = await prisma.viajes.findMany({
    where: {
      usuarioId: req.usuarios!.id,
    },
    select: {
      inicio: true,
      transportes: {
        select: {
          placas: true,
          conductores: true,
        },
      },
    },
  });
  res.status(200).send({ success: true, viajes: viajes });
}

export async function getViaje(req: Request, res: Response) {
  const viajeId: string = req.body.viajeId;
  const viaje = await prisma.viajes.findUnique({
    where: {
      id: viajeId,
    },
    include: {
      transportes: {
        select: {
          placas: true,
          conductores: true,
        },
      },
    },
  });
  res.status(200).send({ success: true, viaje: viaje });
}
