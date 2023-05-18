import Fastify, { FastifyRequest } from 'fastify';
import cors from '@fastify/cors';
import data from './data.js';
const fastify = Fastify();
await fastify.register(cors);

type MockAPIRequest = FastifyRequest<{
  Params: { id: string; playerId: string };
}>;

fastify.get('/teams', () => {
  return data;
});

fastify.get('/teams/:id', (request: MockAPIRequest) => {
  const [response] = data.filter((d) => d.id === parseInt(request.params.id));
  return response;
});

fastify.get('/teams/:id/players', (request: MockAPIRequest) => {
  const [response] = data
    .filter((d) => d.id === parseInt(request.params.id))
    .map((d) => d.players);
  return response;
});

fastify.get('/teams/:id/players/:playerId', (request: MockAPIRequest) => {
  const id = +request.params.id;
  const playerId = +request.params.playerId!;
  const [response] = data.filter((d) => d.id === id).map((d) => d.players);
  const [player] = response.filter((d) => d.id === playerId);
  return player;
});

const serverOptions = {
  port: 3000,
};

await fastify.listen(serverOptions);
