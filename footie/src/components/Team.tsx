import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getTeam } from '../services/api';
import { Team } from '../types/types';

export default function TeamIndex() {
  const [team, setTeam] = useState<Team>({} as Team);
  const { id } = useParams();
  useEffect(() => {
    let ignore = false;
    async function fetchData() {
      const team = await getTeam(id!);
      if (!ignore) {
        setTeam(team);
      }
    }
    void fetchData();

    return () => {
      ignore = true;
    };
  }, [id]);

  return (
    <>
      <h1>{team.name}</h1>
      <h2>
        {team.city}, {team.country}
      </h2>
      <p>
        <b>Home stadium:</b> {team.stadium}
      </p>
      <ul>
        {team?.players?.map(({ id, name }) => (
          <li key={id}>
            <Link to={`players/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
