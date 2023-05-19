export default function FormularioDeLogin() {
    return (
        <form class=" mt-2 max-h-1/2">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                    Email
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Digite seu email" />
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Senha
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Digite sua senha" />
            </div>
            <div class="flex flex-col items-center">
                <button class=" mb-2 bg-sch-green hover:bg-sch-green-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Entrar
                </button>
                <a class="text-sm text-sch-green hover:text-sch-green-dark" href="#">Esqueci minha senha</a>
            </div>
        </form>
    )
}