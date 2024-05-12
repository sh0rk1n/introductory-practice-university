import React, { useRef, useState } from "react";
export const ModalWindow = ({ onClose }) => {
  const modalRef = useRef(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const isFormValid = () => {
    return name.trim() !== "" && phone.trim() !== "" && email.trim() !== "";
  };

  const handleCloseModal = () => {
    onClose()
    document.body.style.overflowY = 'auto'; // Разрешить прокрутку страницы
  };

  return (
    <div ref={modalRef}
         className="fixed inset-[-10rem] z-10 overflow-hidden flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div className=" fixed inset-0 flex items-center justify-center ">
        <div className="absolute inset-[-500rem] bg-black opacity-30"></div>
      </div>
      <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
      <div
        className="inline-block align-bottom bg-gradient-to-br from-purple-400 to-indigo-600 rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div className="bg-gradient-to-br from-purple-400 to-indigo-600 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="text-center">
            <h3 className="text-3xl font-medium">
              Записаться на курс
            </h3>
            <div className="mt-2">
              <p className="text-sm leading-5 text-gray-300 mb-2">Наш специалист свяжется с вами и ответит на любые
                ваши <br/> вопросы</p>
            </div>
          </div>
          <div className="flex flex-col items-center">

            <input className="h-11 w-[26rem] pl-4 my-3 text-black rounded-full outline-none shadow-2xl"
                   placeholder="Имя"
                   type="text"
                   value={name}
                   onChange={(e) => setName(e.target.value)}
            />
            <input className="h-11 w-[26rem] pl-4 my-3 text-black rounded-full outline-none shadow-2xl"
                   placeholder="Телефон"
                   type="text"
                   value={phone}
                   onChange={(e) => setPhone(e.target.value)}
            />
            <input className="h-11 w-[26rem] pl-4 my-3 text-black rounded-full outline-none shadow-2xl"
                   placeholder="Электронная почта"
                   type="text"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
            />
            <div
              className="flex justify-center px-4 py-3 ">
            <span className="rounded-md shadow-sm ">
              <button
                onClick={handleCloseModal}
                disabled={!isFormValid()}
                className={isFormValid() ? "inline-flex justify-center w-full border border-transparent bg-gradient-to-br from-red-500 to-purple-900 py-2.5 px-8 rounded-full text-base leading-6 font-medium text-white shadow-sm hover:opacity-90 focus:outline-none sm:text-sm sm:leading-5" : "inline-flex justify-center w-full border border-transparent bg-gray-400 py-2.5 px-8 rounded-full text-base leading-6 font-medium text-white shadow-sm cursor-not-allowed opacity-50 sm:text-sm sm:leading-5"}
              >
                Отправить
              </button>
            </span>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};
