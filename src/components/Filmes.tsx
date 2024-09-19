"use client";

import React from "react";

type FilmesPropsType = {
  filmes: FilmeType[];
};

type CardPropsType = {
  nome: String;
  descricao: String;
};

const Card = ({ nome, descricao }: CardPropsType) => {
  return (
    <div className="w-80 rounded bg-gray-200 p-4 flex flex-col gap-2">
      <h1 className="text-xl text-center">{nome}</h1>
      <p>{descricao}</p>
    </div>
  );
};

const Filmes = ({ filmes }: FilmesPropsType) => {
  const movies: FilmeType[] = filmes;

  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      {movies.map((e) => (
        <Card nome={e.title} descricao={e.overview} key={e.id} />
      ))}
    </div>
  );
};

export default Filmes;
