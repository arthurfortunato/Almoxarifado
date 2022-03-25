import {
  ButtonModal,
  BodyModalStyled,
  HeaderModalStyled,
  InputModalStyled,
} from "./styles";

import { useState } from "react";
import Modal from "react-modal";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { IoClose } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { useAuth } from "../../hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    padding: 0,
    border: 0,
    borderRadius: 30,
    width: "100%",
    maxWidth: "700px",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
export function ModalCreateUser() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { UserSignUp } = useAuth();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleToSignUp = async () => {
    try {
      const data = {
        name,
        email,
        password,
      };

      if (email.trim() === "") {
        return toast.error("E-mail Inválido");
      }
      await UserSignUp(data)

    } catch (error) {
      toast.error("E-mail já cadastrado!");
    }
  };

  return (
    <div>
      <ButtonModal onClick={openModal}>Registre-se</ButtonModal>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <HeaderModalStyled>
          <div>
            <FaUserAlt size={"22px"} />
            <h2>Criar Usuário</h2>
          </div>
          <button onClick={closeModal}>
            <IoClose size={"25px"} />
          </button>
        </HeaderModalStyled>

        <BodyModalStyled>
          <h2>Dados do seu usuário</h2>
          <form onSubmit={handleToSignUp}>
            <InputModalStyled>
              <label>Nome</label>
              <Input
                type="text"
                placeholder="Informe o seu nome..."
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <label>E-mail:</label>
              <Input
                type="email"
                placeholder="Informe o seu e-mail..."
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <label>Informe a sua senha (8 posições):</label>
              <Input
                type="password"
                placeholder="•••••••••••"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </InputModalStyled>
            <Button>Criar Usuário</Button>
          </form>
        </BodyModalStyled>
      </Modal>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
