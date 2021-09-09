import ClientService from "../services/client.service.js";

async function createClient(req, res, next) {
  try {
    let client = req.body;
    if (
      !client.name ||
      !client.cpf ||
      !client.phone ||
      !client.email ||
      !client.address
    ) {
      throw new Error("Name, CPF, Phone, Email e Address são obrigatórios!");
    }

    //ClientService
    res.send(await ClientService.createClient(client));
    logger.info(`POST /client - ${JSON.stringify(client)}`);
  } catch (error) {
    next(error);
  }
}

export default {
  createClient,
};
