import { Request, Response } from "express";
import { prisma } from "../../config/dataSource.js";
import { io, socketMap } from "../../app.js";

export async function notificarProblema(req: Request, res: Response) {
  const mensaje: string = req.body.mensaje;
  const conductorId = "";
  await prisma.notificaciones.create({
    data: {
      origen: req.usuarios!.id,
      destino: conductorId,
      mensaje: mensaje,
      fechaCreacion: new Date()
    }
  });
  io.to(socketMap.get(conductorId)).emit('nuevaNotificacion', mensaje);
  res.status(200).send({ success: true });
}

export async function getNotificaciones(req: Request, res: Response) {
  const notificaciones = await prisma.notificaciones.findMany({
    where: {
      destino: req.usuarios!.id
    }
  })
  res.status(200).send({ success: true, notificaciones: notificaciones });
}

export async function getNotificacionNueva(req: Request, res: Response) {
  const notificacion = await prisma.notificaciones.findFirst({
    where: {
      destino: req.usuarios!.id
    },
    orderBy: {
      fechaCreacion: 'desc'
    }
  });
  res.status(200).send({ succes: true, notificacion });
}
