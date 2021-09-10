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

async function getClients(req, res, next) {
  try {
    res.send(await ClientService.getClients());
    logger.info("GET /client");
  } catch (error) {
    next(error);
  }
}

async function getClient(req, res, next) {
  try {
    console.log(req.params.id)
    res.send(await ClientService.getClient(req.params.id));
    
    logger.info("GET /client/:id");
  } catch (error) {
    next(error);
  }
}

async function deleteClient(req, res, next) {
  try {
    await ClientService.deleteClient(req.params.id);
    res.end();
    logger.info("DELETE /client");
  } catch (error) {
    next(error);
  }
}

export default {
  createClient,
  getClients,
  getClient,
  deleteClient
};
