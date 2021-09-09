import ClientRepository from "../repositories/client.repository.js";

async function createClient(client) {
  try {
    return await ClientRepository.insertClient(client);
  } catch (error) {}
}

export default {
  createClient,
};
