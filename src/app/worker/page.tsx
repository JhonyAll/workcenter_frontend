
"use client"

import { useState } from 'react';
import { BsChatText } from "react-icons/bs";

const WorkerProfilePage = () => {
    // Estado para controle do filtro ativo
    const [activeTab, setActiveTab] = useState<'all' | 'comments' | 'posts' | 'portfolio'>('all');

    // Dados estáticos para teste
    const worker = {
        nome: 'Carlos Ferreira',
        bio: 'Desenvolvedor full-stack especializado em projetos de alta performance.',
        fotoPerfil: 'https://i.pinimg.com/736x/7f/82/f7/7f82f707bfed9261af0cfa7775a3b219.jpg',
        seguidores: 200,
        seguindo: 150,
        profissao: 'Desenvolvedor Full-Stack',
        avaliacaoMedia: 4.8,
        fotosTrabalho: [
            {
                url: 'https://www.hubspot.com/hs-fs/hubfs/Imported%20sitepage%20images/landing-page-hero-image-br.png?width=540&name=landing-page-hero-image-br.png',
                descricao: 'Landing page de alta conversão para e-commerce.',
            },
            {
                url: 'https://xperiun.com/wp-content/uploads/2023/04/DASHBOARD_DE_VENDAS4-1024x575.png',
                descricao: 'Sistema de gerenciamento de usuários com dashboard intuitivo.',
            },
        ],
        comentarios: [
            { user: 'João Silva', comment: 'Serviço impecável! Altamente recomendado.', date: '18 de setembro de 2024' },
            { user: 'Maria Oliveira', comment: 'Muito profissional e competente.', date: '15 de setembro de 2024' },
        ],
        posts: [
            { content: 'Lancei uma nova funcionalidade no sistema que desenvolvi! #devlife', date: '20 de setembro de 2024' },
        ],
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <div className="relative p-6 border-b-2 border-purple-600 dark:border-purple-300">
                <button className="fixed bottom-4 right-4 p-3 text-white bg-purple-600 rounded-full hover:bg-purple-700 focus:outline-none">
                    <BsChatText className="w-6 h-6" />
                </button>
                <img
                    src={worker.fotoPerfil}
                    alt={worker.nome}
                    className="absolute top-24 left-6 transform -translate-y-1/2 w-40 h-40 rounded-full border-4 border-white"
                />
                <div className="ml-44 mt-8">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{worker.nome}</h1>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">{worker.profissao}</p>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">{worker.bio}</p>
                    <div className="mt-2 flex space-x-4">
                        <span className="text-gray-800 dark:text-gray-200">
                            Seguidores: {worker.seguidores}
                        </span>
                        <span className="text-gray-800 dark:text-gray-200">
                            Seguindo: {worker.seguindo}
                        </span>
                        <span className="text-gray-800 dark:text-gray-200">
                            Avaliação: {worker.avaliacaoMedia} / 5
                        </span>
                    </div>
                </div>
            </div>

            {/* Aba de navegação */}
            <div className="pt-8 px-4 max-w-4xl mx-auto">
                <nav className="flex space-x-4 border-b-2 border-gray-300 dark:border-gray-600 pb-4">
                    <button
                        onClick={() => setActiveTab('all')}
                        className={`px-4 py-2 ${activeTab === 'all' ? 'text-purple-600 dark:text-purple-400 border-b-2 border-purple-600 dark:border-purple-400' : 'text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400'}`}>
                        Todos
                    </button>
                    <button
                        onClick={() => setActiveTab('comments')}
                        className={`px-4 py-2 ${activeTab === 'comments' ? 'text-purple-600 dark:text-purple-400 border-b-2 border-purple-600 dark:border-purple-400' : 'text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400'}`}>
                        Comentários
                    </button>
                    <button
                        onClick={() => setActiveTab('posts')}
                        className={`px-4 py-2 ${activeTab === 'posts' ? 'text-purple-600 dark:text-purple-400 border-b-2 border-purple-600 dark:border-purple-400' : 'text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400'}`}>
                        Posts
                    </button>
                    <button
                        onClick={() => setActiveTab('portfolio')}
                        className={`px-4 py-2 ${activeTab === 'portfolio' ? 'text-purple-600 dark:text-purple-400 border-b-2 border-purple-600 dark:border-purple-400' : 'text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400'}`}>
                        Portfólio
                    </button>
                </nav>

                <div className="mt-6">
                    {/* Filtrar e exibir o conteúdo com base na aba ativa */}
                    {activeTab === 'all' && (
                        <>
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Comentários</h2>
                            {worker.comentarios.map((comentario, index) => (
                                <div key={index} className="p-4 mb-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                                    <p className="mt-2 text-gray-800 dark:text-gray-200">{comentario.comment}</p>
                                    <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                                        Comentado por: {comentario.user} - {comentario.date}
                                    </p>
                                </div>
                            ))}
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-6">Posts</h2>
                            {worker.posts.map((post, index) => (
                                <div key={index} className="p-4 mb-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                                    <p className="text-gray-800 dark:text-gray-200">{post.content}</p>
                                    <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">{post.date}</p>
                                </div>
                            ))}
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-6">Portfólio</h2>
                            <div className="grid grid-cols-2 gap-4">
                                {worker.fotosTrabalho.map((foto, index) => (
                                    <div key={index} className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                                        <img src={foto.url} alt={foto.descricao} className="rounded-lg mb-2" />
                                        <p className="text-gray-800 dark:text-gray-200">{foto.descricao}</p>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}

                    {activeTab === 'comments' && (
                        <>
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Comentários</h2>
                            {worker.comentarios.map((comentario, index) => (
                                <div key={index} className="p-4 mb-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                                    <p className="mt-2 text-gray-800 dark:text-gray-200">{comentario.comment}</p>
                                    <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                                        Comentado por: {comentario.user} - {comentario.date}
                                    </p>
                                </div>
                            ))}
                        </>
                    )}

                    {activeTab === 'posts' && (
                        <>
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Posts</h2>
                            {worker.posts.map((post, index) => (
                                <div key={index} className="p-4 mb-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                                    <p className="text-gray-800 dark:text-gray-200">{post.content}</p>
                                    <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">{post.date}</p>
                                </div>
                            ))}
                        </>
                    )}

                    {activeTab === 'portfolio' && (
                        <>
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Portfólio</h2>
                            <div className="grid grid-cols-2 gap-4">
                                {worker.fotosTrabalho.map((foto, index) => (
                                    <div key={index} className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                                        <img src={foto.url} alt={foto.descricao} className="rounded-lg mb-2" />
                                        <p className="text-gray-800 dark:text-gray-200">{foto.descricao}</p>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default WorkerProfilePage;
