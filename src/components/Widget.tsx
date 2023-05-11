import Image from "next/image";
import { useState } from "react";
import man from "../../public/man.jpg";
import car from "../../public/car.svg";
import star from "../../public/star.svg";
import phone from "../../public/phone.svg";
import shield from "../../public/shield.svg";
import DarkModeButton from "./DarkModeButton";
import { GithubIcon, PhoneIcon, ShieldIcon, StarIcon } from "./Icons";

export function Widget() {
  return (
    <div className="bg-white dark:bg-[#1E1E1E] w-[50rem] h-[43.1rem] rounded-[2.5rem] py-6 px-14 flex flex-col gap-[] ">
      <div className="flex flex-col gap-[6.1875rem]">
        <div className="self-center bg-[#E5D8EA] dark:bg-[#864293] h-4 rounded-full w-[10.5rem] " />
        <div className="flex flex-col w-full  text-[#372D3B] dark:text-slate-200 gap-1">
          <h1 className="font-bold text-[2.5rem] leading-[3rem]">
            Encontre <span className="text-[#864293]">Boris</span> no local de
            partida
          </h1>
          <p className="text-[1.5625rem] leading-[1.875rem] font-medium">
            Chega em 3 minutos (800 metros)
          </p>
        </div>
        <div className="w-full flex justify-between items-center gap-[6.5625rem]">
          {/* Imgs */}
          <div className="flex items-center justify-center relative">
            {/* Foto */}
            <div className="flex flex-col items-center gap-4 ">
              <div className="w-[8.56rem] h-auto flex items-center  flex-col justify-center relative z-10">
                <Image className="  rounded-full " src={man} alt="Man image" />
                <div className="  absolute flex justify-center items-center w-[6.25rem] text-xl leading-6 bg-[#372D3B]  dark:bg-slate-200  rounded-[1rem] gap-2  -bottom-[0.5rem] text-white dark:text-[#1E1E1E] font-semibold dark:font-bold">
                  <StarIcon />
                  <span>5.0</span>
                </div>
              </div>
              <div className=" font-bold text-lg leading-[1.375rem] dark:text-slate-200 ">
                <span>Boris C.</span>
              </div>
            </div>
            {/* Carro */}
            <div className="w-[18rem] h-[7rem] absolute left-[5.75rem]">
              <Image
                className=""
                width={300}
                height={300}
                src={car}
                alt="carro"
              />
            </div>
          </div>
          {/* Placa */}
          <div className="flex flex-col gap-3  text-[#372D3B]  dark:text-slate-200">
            <span className="text-[2.56846875rem] leading-[3.125rem] font-bold ">
              BCD0D19
            </span>
            <span className="text-[1.54108125rem] leading-[1.875rem] font-medium">
              Honda Civic Roxo
            </span>
          </div>
        </div>

        <div className="flex items-center h-16 rounded-md gap-8  ">
          <input
            type="text"
            className="flex-1 bg-[#F5EDF7] text-2xl leading-[1.8125rem] placeholder:font-medium placeholder:text-[#372D3B] py-4 px-7 rounded-3xl"
            placeholder="Enviar mensagem para Boris..."
          />
          <div className=" flex justify-between gap-10 text-[#1E1E1E] dark:text-slate-200">
            {/* <Image className="" src={phone} alt="phone" /> */}

            <PhoneIcon className={"fill-black"} />
            <ShieldIcon className={"fill-black"} />
          </div>
        </div>
      </div>
    </div>
  );
}
