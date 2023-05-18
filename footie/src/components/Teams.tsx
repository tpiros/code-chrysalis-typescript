import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Team } from '../types/types';
import { getTeams } from '../services/api';

export default function Teams() {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    let ignore = false;
    async function fetchData() {
      const teams = await getTeams();
      if (!ignore) {
        setTeams(teams);
      }
    }
    void fetchData();

    return () => {
      ignore = true;
    };
  }, []);
  return (
    <>
      <h1>Teams</h1>
      <ul>
        {teams.map((team: Pick<Team, 'id' | 'name'>) => (
          <li key={team.id}>
            <Link to={`${team.id}`}>{team.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
