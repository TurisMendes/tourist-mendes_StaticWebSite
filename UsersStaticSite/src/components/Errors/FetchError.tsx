import { RefetchOptions, RefetchQueryFilters } from '@tanstack/react-query';
import React from 'react';

interface FetchErrorProps {
  action: <TPageData>(options?: RefetchOptions & RefetchQueryFilters<TPageData>) => Promise<unknown>;
  content: string;
}

export const FetchError = ({action, content }: FetchErrorProps) => {
  
  return (
    <div className="text-center w-full my-4">
      <h1 className="text-h2 text-red-500 dark:text-red-400 mb-4">Erro ao carregar {content}</h1>
      <p className="text-base text-black dark:text-gray-300">
        Ocorreu um problema ao tentar carregar {content}. Por favor, tente novamente.
      </p>
      <button
        className="mt-6 px-4 py-2 bg-primary dark:bg-secondary text-white dark:text-black active:bg-primaryActive rounded-full hover:bg-primaryDark dark:hover:bg-secondaryDark dark:active:bg-secondaryActive"
        onClick={() => action()}
      >
        Tentar novamente
      </button>
    </div>
  )
}