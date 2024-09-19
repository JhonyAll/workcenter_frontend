"use client"

import Post from '@/components/post';
import { useState } from 'react';

const HomePage = () => {
    const [posts, setPosts] = useState([
        {
            author: 'Maria Souza',
            content: 'Acabei de resolver um problema de encanação! Recomendo o trabalhador João.',
            date: '20 de setembro de 2024',
            type: 'post',
        },
        {
            author: 'Carlos Almeida',
            content: 'Estou em busca de alguém para desenvolver um site!',
            date: '19 de setembro de 2024',
            type: 'post',
        },
    ]);

    const [comentarios, setComentarios] = useState([
        {
            author: 'Pedro Silva',
            comment: 'Muito bom, fiquei interessado!',
            date: '18 de setembro de 2024',
            postTitle: 'Desenvolvimento de site',
            type: 'comentario',
        },
        {
            author: 'Ana Lima',
            comment: 'O trabalho do João foi excelente!',
            date: '17 de setembro de 2024',
            postTitle: 'Reparo de encanamento',
            type: 'comentario',
        },
    ]);

    const [recomendacoes, setRecomendacoes] = useState([
        {
            name: 'João da Silva',
            profession: 'Encanador',
            rating: 4.8,
            foto: 'https://i.pinimg.com/736x/7f/82/f7/7f82f707bfed9261af0cfa7775a3b219.jpg',
        },
        {
            name: 'Carla Mendes',
            profession: 'Desenvolvedora Web',
            rating: 4.9,
            foto: 'https://i.pinimg.com/736x/7f/82/f7/7f82f707bfed9261af0cfa7775a3b219.jpg',
        },
    ]);

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Página Inicial</h1>

            {/* Seção de Recomendados */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Recomendações de Trabalhadores</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                    {recomendacoes.map((worker, index) => (
                        <div key={index} className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                            <img src={worker.foto} alt={worker.name} className="w-16 h-16 rounded-full mb-3" />
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{worker.name}</h3>
                            <p className="text-gray-600 dark:text-gray-400">{worker.profession}</p>
                            <p className="text-yellow-400">⭐ {worker.rating}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Seção de Feed */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Publicações</h2>
                <div className="mt-4 space-y-6">
                    {posts.map((post, index) => (
                        <Post key={index} author={post.author} content={post.content} date={post.date} />
                    ))}
                </div>
            </div>

            {/* Seção de Comentários */}
            <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Comentários Recentes</h2>
                <div className="mt-4 space-y-6">
                    {comentarios.map((comentario, index) => (
                        <div key={index} className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                            <p className="text-gray-800 dark:text-gray-200">
                                {comentario.comment}
                            </p>
                            <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                                Comentário em: {comentario.postTitle} - {comentario.date}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomePage;
