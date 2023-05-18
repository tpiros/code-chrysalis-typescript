import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Player } from '../types/types';
import { getPlayer } from '../services/api';

import { Cloudinary } from '@cloudinary/url-gen';
import { thumbnail } from '@cloudinary/url-gen/actions/resize';
import { focusOn } from '@cloudinary/url-gen/qualifiers/gravity';
import { face } from '@cloudinary/url-gen/qualifiers/focusOn';
import { AdvancedImage } from '@cloudinary/react';
import { defaultImage } from '@cloudinary/url-gen/actions/delivery';
import { source } from '@cloudinary/url-gen/actions/overlay';
import { text } from '@cloudinary/url-gen/qualifiers/source';
import { Position } from '@cloudinary/url-gen/qualifiers/position';
import { compass } from '@cloudinary/url-gen/qualifiers/gravity';
import { TextStyle } from '@cloudinary/url-gen/qualifiers/textStyle';

const getPlayerPhoto = (name: string) => {
  const publicId = name.replaceAll(' ', '-').toLowerCase();
  const cld = new Cloudinary({
    cloud: { cloudName: 'tamas-demo' },
    url: { secure: true },
  });

  const playerPhoto = cld.image(`football-players/${publicId}`);
  playerPhoto
    .resize(
      thumbnail().width(200).height(200).zoom(0.7).gravity(focusOn(face()))
    )
    .delivery(defaultImage('default_avatar.png'))
    .overlay(
      source(
        text(name, new TextStyle('Helvetica', 20))
          .textColor('#000')
          .backgroundColor('#ff5050')
      ).position(new Position().gravity(compass('south')).offsetY(10))
    )
    .format('auto')
    .quality('auto');

  return <AdvancedImage cldImg={playerPhoto} />;
};

export default function PlayerIndex() {
  const [player, setPlayer] = useState<Player>({} as Player);
  const { id, playerId } = useParams();
  useEffect(() => {
    let ignore = false;
    async function fetchData() {
      const player = await getPlayer(id!, playerId!);
      if (!ignore) {
        setPlayer(player);
      }
    }
    void fetchData();

    return () => {
      ignore = true;
    };
  }, [id, playerId]);

  return (
    <>
      <h1>{player.name}</h1>
      <>{player.name && getPlayerPhoto(player.name)}</>
      <p>
        {player.name} is {player.age} years old and he usually wears jersey #
        {player.number}.
      </p>
    </>
  );
}
