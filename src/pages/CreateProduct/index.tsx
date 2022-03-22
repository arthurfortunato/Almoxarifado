import {
  Container,
  Header,
  BodyContainer,
  InputContainer,
  Label,
  Buttons,
} from "./styles";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import toast, { Toaster } from "react-hot-toast";

import { api } from "../../services/api";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Products = () => {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [sector, setSector] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const getProducts = async (
    name: string,
    code: string,
    sector: string,
    description: string,
    amount: string
  ) => {
    await api.post("/product/newproduct", {
      name: name,
      code: code,
      sector: sector,
      description: description,
      amount: amount,
    });
  };

  const saveProduct = async () => {
    try {
      await getProducts(name, code, sector, description, amount);
      setName("");
      setCode("");
      setSector("");
      setDescription("");
      setAmount("");
      toast.success("Produto cadastrado!");
    } catch (error) {
      toast.error("Preencha todas as informações");
    }
  };

  function handleToCancel() {
    setName("");
    setCode("");
    setSector("");
    setDescription("");
    setAmount("");
  }

  return (
    <Container>
      <Header>
        <h1>Adicione um novo produto!</h1>
      </Header>

      <BodyContainer>
        <InputContainer>
          <Label>
            Digite o nome do produto <p>*</p>
          </Label>
          <Input
            placeholder="Insira o nome do produto..."
            type="text"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />

          <Label>
            Código <p>*</p>
          </Label>
          <Input
            placeholder="Insira o código do produto..."
            type="text"
            value={code}
            onChange={(event) => {
              setCode(event.target.value);
            }}
          />

          <Label>
            Setor<p>*</p>
          </Label>
          <Input
            placeholder="Insira o setor..."
            value={sector}
            onChange={(event) => {
              setSector(event.target.value);
            }}
          />
          <Label>
            Quantidade<p>*</p>
          </Label>
          <Input
            placeholder="Insira a quantidade do produto..."
            type="number"
            value={amount}
            onChange={(event) => {
              setAmount(event.target.value);
            }}
          />

          <Label>
            Descrição<p>*</p>
          </Label>
          <Input
            placeholder="Insira a descrição do produto..."
            type="text"
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
        </InputContainer>
        <Buttons>
          <Button onClick={saveProduct}>Cadastrar</Button>
          <Toaster position="top-center" reverseOrder={false} />
          <Button onClick={handleToCancel} className="cancel">
            Cancelar
          </Button>
        </Buttons>
      </BodyContainer>
    </Container>
  );
};
