import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { useQuery } from '@apollo/client';
import Loading from '@components/LoadingComponent/Loading';
import { useRouter } from 'next/router';

//Services
import { GET_CHARACTERS } from '@services/index';

//Interfaces
import { Characters } from '@interfaces/Characters';

const Home = () => {
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);
  const [page, setPage] = useState<number>(42);
  const {
    query: { name },
  } = useRouter();
  const { data, loading, error, fetchMore } = useQuery<Characters>(
    GET_CHARACTERS,
    {
      variables: {
        name: name,
      },
    }
  );
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return null;
  }

  return (
    <div className="p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.characters.results.map((character) => (
          <Link
            key={character.id}
            href="/characters/[character.id]"
            as={`/characters/${character.id}`}
            passHref
          >
            <div
              className={`card m-2 cursor-pointer bg-gray-100 border rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200
            ${
              character.status === 'Alive'
                ? 'border-green-200'
                : 'border-red-500 '
            }`}
            >
              <div className="m-3">
                <h2 className="text-lg mb-2">
                  {character.name}
                  <span className="text-sm text-teal-800 font-mono bg-teal-100 inline rounded-full px-2 align-top float-right animate-pulse">
                    {character.species}
                  </span>
                </h2>
                <div className="w-full">
                  <Image
                    src={character.image}
                    alt={character.name}
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {hasNextPage ? (
        <div className="flex justify-center">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded my-10"
            onClick={() => {
              fetchMore({
                variables: { page },
                updateQuery: (prevResult, { fetchMoreResult }) => {
                  fetchMoreResult.characters.results = [
                    ...prevResult.characters.results,
                    ...fetchMoreResult.characters.results,
                  ];
                  const { next } = fetchMoreResult.characters.info;
                  setPage(next);
                  !next ? setHasNextPage(false) : '';
                  return fetchMoreResult;
                },
              });
            }}
          >
            More Characters
          </button>
        </div>
      ) : (
        <p className="my-10 text-center font-medium">Youve reached the end! </p>
      )}
    </div>
  );
};

export default Home;
