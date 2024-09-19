"use client"

import { useState } from 'react';
import Post from '@/components/post';
import { BsChatText } from "react-icons/bs";

const ProfilePage = () => {
    // Filtro de histórico
    const [filter, setFilter] = useState('Todos');

    // Dados estáticos para teste
    const user = {
        nome: 'João da Silva',
        bio: 'Um humilde andarilho neste mundo sombrio.',
        fotoPerfil: 'https://i.pinimg.com/736x/7f/82/f7/7f82f707bfed9261af0cfa7775a3b219.jpg',
        seguidores: 120,
        seguindo: 80,
        posts: [
            { content: 'Acabei de terminar um projeto incrível! #desenvolvimento', date: '20 de setembro de 2024' },
            { content: 'Compartilhando um novo artigo sobre tendências de tecnologia.', date: '18 de setembro de 2024' },
        ],
        comentarios: [
            { postTitle: 'Oportunidade de Desenvolvimento', comment: 'Ótimo post! Muito informativo.', date: '17 de setembro de 2024' },
            { postTitle: 'Novo Framework de JavaScript', comment: 'Estou ansioso para experimentar.', date: '15 de setembro de 2024' },
        ],
    };

    // Filtrar histórico baseado na aba selecionada
    const filteredContent = () => {
        if (filter === 'Posts') return user.posts.map((post, index) => (
            <Post key={index} author={user.nome} content={post.content} date={post.date} />
        ));
        if (filter === 'Comentários') return user.comentarios.map((comentario, index) => (
            <div key={index} className="p-4 mb-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <p className="mt-2 text-gray-800 dark:text-gray-200">{comentario.comment}</p>
                <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                    Comentário em: {comentario.postTitle} - {comentario.date}
                </p>
            </div>
        ));
        return (
            <>
                {user.posts.map((post, index) => (
                    <Post key={index} author={user.nome} content={post.content} date={post.date} />
                ))}
                {user.comentarios.map((comentario, index) => (
                    <div key={index} className="p-4 mb-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                        <p className="mt-2 text-gray-800 dark:text-gray-200">{comentario.comment}</p>
                        <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                            Comentário em: {comentario.postTitle} - {comentario.date}
                        </p>
                    </div>
                ))}
            </>
        );
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 relative">
            {/* Botão de chat fixo */}
            <button className="fixed bottom-6 right-6 p-4 text-white bg-purple-600 rounded-full hover:bg-purple-700 focus:outline-none">
                <BsChatText className="w-6 h-6" />
            </button>

            {/* Header com perfil */}
            <div className="relative p-6 border-b-2 border-black dark:border-gray-400 mx-8">
                <img
                    src={user.fotoPerfil}
                    alt={user.nome}
                    className="absolute top-24 left-6 transform -translate-y-1/2 w-40 h-40 rounded-full border-4 border-white"
                />
                <div className="ml-48 mt-10">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{user.nome}</h1>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">{user.bio}</p>
                    <div className="mt-2 flex space-x-4">
                        <span className="text-gray-800 dark:text-gray-200">
                            Seguidores: {user.seguidores}
                        </span>
                        <span className="text-gray-800 dark:text-gray-200">
                            Seguindo: {user.seguindo}
                        </span>
                    </div>
                </div>
            </div>

            {/* Navegação de Histórico */}
            <div className="mt-4 px-8">
                <div className="flex space-x-8 justify-center">
                    <button
                        className={`px-4 py-2 dark:text-white ${filter === 'Todos' ? 'border-b-2 border-purple-600' : ''}`}
                        onClick={() => setFilter('Todos')}
                    >
                        Todos
                    </button>
                    <button
                        className={`px-4 py-2 dark:text-white ${filter === 'Posts' ? 'border-b-2 border-purple-600' : ''}`}
                        onClick={() => setFilter('Posts')}
                    >
                        Posts
                    </button>
                    <button
                        className={`px-4 py-2 dark:text-white ${filter === 'Comentários' ? 'border-b-2 border-purple-600' : ''}`}
                        onClick={() => setFilter('Comentários')}
                    >
                        Comentários
                    </button>
                </div>

                {/* Histórico Filtrado */}
                <div className="mt-4">
                    {filteredContent()}
                </div>

                {/* Sugestão: Projetos Recentes */}
                <div className="mt-12">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Projetos Recentes</h2>
                    <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                        <p className="text-gray-800 dark:text-gray-200">
                            Ainda sem projetos recentes cadastrados.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
