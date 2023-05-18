import { Team, Player } from '../types/types';
import { request } from './request';

export function getTeams() {
  return request<Team[]>('/teams');
}

export function getTeam(id: string) {
  return request<Team>(`/teams/${id}`);
}

export function getPlayers(id: string) {
  return request<Player[]>(`/teams/${id}/players`);
}

export function getPlayer(id: string, playerId: string) {
  return request<Player>(`/teams/${id}/players/${playerId}`);
}
