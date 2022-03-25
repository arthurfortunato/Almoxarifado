import {
  ButtonModal,
  BodyModalStyled,
  HeaderModalStyled,
  InputModalStyled
} from './styles';

import { useState } from 'react';
import Modal from 'react-modal';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { IoClose } from 'react-icons/io5';
import { FaUserAlt } from 'react-icons/fa';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    padding: 0,
    border: 0,
    borderRadius: 30,
    width: '100%',
    maxWidth: '700px',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
export function ModalCreateUser() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

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
            <button onClick={closeModal}><IoClose size={"25px"} /></button>
          </HeaderModalStyled>

          <BodyModalStyled>
            <h2>Dados do seu usuário</h2>
            <form>
              <InputModalStyled>
                  <label>Nome</label>
                  <Input
                    placeholder="Informe o seu nome..."
                  />
                  <label>E-mail:</label>
                  <Input
                    placeholder="Informe o seu e-mail..."
                  />
                  <label>Informe a sua senha (8 posições):</label>
                  <Input
                    placeholder="•••••••••••"
                  />
              </InputModalStyled>
              <Button>Criar Usuário</Button>
            </form>
          </BodyModalStyled>
      </Modal>
    </div>
  );
}
