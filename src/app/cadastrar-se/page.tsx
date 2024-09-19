// pages/signup.tsx
"use client"
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SignupPage = () => {
    const [isWorker, setIsWorker] = useState(false);

    const handleSwitch = () => {
        setIsWorker(!isWorker);
    };

    return (
        <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
            <div
                className={`absolute top-0 left-0 w-1/2 h-full bg-purple-600 dark:bg-purple-800 transition-transform duration-700 ${isWorker ? 'transform translate-x-full' : ''}`}
            >
                <div className="flex items-center justify-center h-full text-center text-white dark:text-gray-200 p-6">
                    <div>
                        {!isWorker ? (
                            <>
                                <h1 className="text-3xl font-bold mb-4">Bem-vindo ao nosso serviço!</h1>
                                <p className="mb-6 text-justify">Ao se cadastrar como usuário, você poderá acessar uma vasta gama de serviços oferecidos por profissionais qualificados. Estamos aqui para ajudar você a encontrar exatamente o que precisa de forma rápida e eficiente. Junte-se a nós e experimente a facilidade de conectar-se com os melhores trabalhadores da sua região!</p>
                                <button
                                    onClick={handleSwitch}
                                    className="px-4 py-2 bg-white text-purple-600 rounded-md shadow-md hover:bg-gray-200 dark:bg-gray-200 dark:text-purple-600 dark:hover:bg-gray-100"
                                >
                                    Cadastrar-se Como Trabalhador
                                </button>
                            </>
                        ) : (
                            <>
                                <h1 className="text-3xl font-bold mb-4">Seja bem-vindo!</h1>
                                <p className="mb-6 text-justify">Ao se cadastrar como trabalhador, você terá a oportunidade de se conectar com clientes em busca de seus serviços. Mostre suas habilidades, receba avaliações e construa uma reputação sólida. Estamos animados para ver como você pode contribuir para nossa comunidade e ajudar pessoas a encontrar o profissional ideal para suas necessidades!</p>
                                <button
                                    onClick={handleSwitch}
                                    className="px-4 py-2 bg-white text-purple-600 rounded-md shadow-md hover:bg-gray-200 dark:bg-gray-200 dark:text-purple-600 dark:hover:bg-gray-100"
                                >
                                    Cadastrar-se Como Usuário
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <div
                className={`absolute top-0 right-0 w-1/2 h-full bg-white dark:bg-gray-900 transition-transform duration-700 ${isWorker ? 'transform -translate-x-full' : ''}`}
            >
                <div className="flex items-center justify-center h-full p-6">
                    <div className="w-full max-w-md">
                        <AnimatePresence>
                            <motion.div
                                key={isWorker ? 'worker' : 'user'}
                                initial={{ opacity: 0, x: isWorker ? 50 : -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: isWorker ? -50 : 50 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h1 className="mb-6 text-2xl font-bold text-center text-purple-600 dark:text-purple-400">
                                    Cadastro
                                </h1>
                                <form>
                                    <div className="mb-4">
                                        <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Nome
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-purple-300"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-purple-300"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Senha
                                        </label>
                                        <input
                                            type="password"
                                            required
                                            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-purple-300"
                                        />
                                    </div>
                                    {isWorker && (
                                        <>
                                            <div className="mb-4">
                                                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                                                    Profissão
                                                </label>
                                                <input
                                                    type="text"
                                                    required
                                                    className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-purple-300"
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                                                    Descrição
                                                </label>
                                                <textarea
                                                    rows={3}
                                                    required
                                                    className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-purple-300"
                                                />
                                            </div>
                                        </>
                                    )}
                                    <button
                                        type="submit"
                                        className="w-full px-4 py-2 mt-4 text-white bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none focus:ring focus:ring-purple-300"
                                    >
                                        Criar Conta
                                    </button>
                                </form>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
