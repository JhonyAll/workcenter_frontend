
"use client"
import { useState } from 'react';

interface PostDetails {
    titulo: string;
    descricao: string;
    localizacao: string;
    foto: File | null;
    mostrarFoto: boolean;
}

const CreatePostPage = () => {
    const [postDetails, setPostDetails] = useState<PostDetails>({
        titulo: '',
        descricao: '',
        localizacao: '',
        foto: null,
        mostrarFoto: false,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setPostDetails(prevState => ({ ...prevState, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;
        setPostDetails(prevState => ({ ...prevState, foto: file }));
    };

    const handleFotoToggle = () => {
        setPostDetails(prevState => ({
            ...prevState,
            mostrarFoto: !prevState.mostrarFoto,
            foto: !prevState.mostrarFoto ? prevState.foto : null, // Resetar a foto se desativado
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Envio do post para o backend
        console.log(postDetails);
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl w-full space-y-8 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    Criar Post
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="space-y-6">
                        <div>
                            <label htmlFor="titulo" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Título do Post
                            </label>
                            <input
                                type="text"
                                name="titulo"
                                id="titulo"
                                value={postDetails.titulo}
                                onChange={handleInputChange}
                                required
                                className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                            />
                        </div>

                        <div>
                            <label htmlFor="descricao" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Descrição do Problema/Serviço
                            </label>
                            <textarea
                                name="descricao"
                                id="descricao"
                                value={postDetails.descricao}
                                onChange={handleInputChange}
                                required
                                rows={5}
                                className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                            ></textarea>
                        </div>

                        {/* <div>
                            <label htmlFor="localizacao" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Localização
                            </label>
                            <input
                                type="text"
                                name="localizacao"
                                id="localizacao"
                                value={postDetails.localizacao}
                                onChange={handleInputChange}
                                className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                            />
                        </div> */}

                        <div>
                            <label htmlFor="foto" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Incluir Foto?
                            </label>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="fotoToggle"
                                    checked={postDetails.mostrarFoto}
                                    onChange={handleFotoToggle}
                                    className="h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                                />
                                <label htmlFor="fotoToggle" className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                                    Sim
                                </label>
                            </div>
                            {postDetails.mostrarFoto && (
                                <div className="mt-2">
                                    <input
                                        type="file"
                                        name="foto"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                        className="block w-full text-sm text-gray-500 dark:text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
                                    />
                                </div>
                            )}
                        </div>

                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="px-4 py-2 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            >
                                Publicar Post
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreatePostPage;
