const Login = () => {
  return (
    <div className="bg-black text-white rounded-xl">
      <h1 className="text-center text-[30px] my-6 font-bold">ReactGram</h1>
      <div className="w-[400px] m-15 mt-0">
        <h2 className="font-semibold text-center mb-4">
          Faça seu login para ver o que há de novo.
        </h2>
        <form className="flex flex-col gap-3 w-full">
          <input
            className="bg-gray-600 indent-1 rounded-sm"
            type="email"
            placeholder="E-mail"
          />
          <input
            className="bg-gray-600 indent-1 rounded-sm"
            type="password"
            placeholder="Senha"
          />
          <button
            className="bg-blue-500 mt-2 rounded-sm font-bold p-1"
            type="submit"
          >
            Login
          </button>
        </form>
        <hr className="border-gray-600 m-4 mx-0 text-center w-full" />

        <p className="text-center font-semibold">
          Não tem uma conta?{" "}
          <a className="text-blue-400 font-bold" href="/register">
            Cadastre-se
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
