import Filmes from "@/components/Filmes";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Filmes",
};

const FilmesPage = async () => {
  const response = await fetch("http://localhost:3000/api/filmes");
  const movies = (await response.json()) as FilmeType[];

  return (
    <div className="bg-gray-300 p-4">
      <Filmes filmes={movies} />
    </div>
  );
};

export default FilmesPage;
