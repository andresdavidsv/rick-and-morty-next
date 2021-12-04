import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { gql, useQuery } from '@apollo/client';
import Loading from '@components/LoadingComponent/Loading';

const GET_EPISODE = gql`
  query getEpisodeQuery($id: ID!){
    episode(id: $id){
      id
      name
      episode
      air_date
      characters {
        id
        name
      }
    }
  }
`

const EpisodeItem = () => {
  const { query: { episodeId } } = useRouter();
  const { data, loading, error } = useQuery(GET_EPISODE, {
    variables: { "id" : episodeId }
  });
  if (loading) {
    return <Loading/>;
  }
  if (error) {
    return null;
  }
  return (
    <div className="container mx-auto my-4">
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Episode Information</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">Episode details and more.</p>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Episode Name</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {data.episode.name}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Episode Number</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {data.episode.episode}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Air Date</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {data.episode.air_date}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Characters</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {data.episode.characters.map((character) => (
                  <Link key={character.id} href="/characters/[character.id]" as={`/characters/${character.id}`} passHref>
                    <span className={`inline-block text-white-700 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 bg-white`}>
                      {character.name}
                    </span>
                  </Link>
                ))}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}

export default EpisodeItem;

