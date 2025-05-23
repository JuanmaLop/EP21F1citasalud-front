"use client";
import Image from "next/image";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
    console.log(username);
  };
  return (
    <main className="flex gap-4 items-center h-screen">
      <section className="w-[60%] bg-gray-30 items-center justify-center hidden md:block ">
        <Image
          src="/citasaludhome.png"
          alt="logo de citasalud"
          width={1000}
          height={500}
        />
      </section>
      <section className="flex flex-col w-screen md:w-[40%] h-screen bg-blue-50 items-center justify-center">
        <Image
          src="/citasaludlogo.png"
          alt="Citasalud logo"
          width={450}
          height={300}
          className="pb-20"
        />

        <div className="w-[80%]">
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Correo Electronico"
              className="w-full px-4 py-2 mb-2 border bg-gray-50 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleUsernameChange}
              value={username}
            />
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Contraseña"
                className="w-full px-4 py-2 mb-2 border bg-gray-50 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                onChange={handlePasswordChange}
                value={password}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? "Ocultar" : "Mostrar"}
              </button>
            </div>

            <button className="bg-blue-500 text-white p-2 rounded-md">
              Iniciar sesión
            </button>
            <section className="flex gap-2 items-center justify-center">
              <a href="#" className=" hover:text-blue-500 mr-auto">
                ¿Tienes problemas para iniciar sesión?
              </a>
              <a href="#" className="hover:text-blue-500">
                Crear cuenta
              </a>
            </section>
          </form>
        </div>
      </section>
    </main>
  );
}
