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
import { useNavigate } from "react-router-dom";

import toast, { Toaster } from "react-hot-toast";

import { api } from "../../services/api";
import { useEffect, useState } from "react";

interface IProduct {
  id: string;
  name: string;
  code: string;
  sector: string;
  amount: string;
}

const EditProducts = (product: Partial<IProduct>) => {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [sector, setSector] = useState("");
  const [amount, setAmount] = useState("");

  const navigate = useNavigate();

  const getProducts = async (
    name: string,
    code: string,
    sector: string,
    amount: string
  ) => {
    await api.put(`/product/updated/${localStorage.getItem("idCode")}`, {
      name: name,
      code: code,
      sector: sector,
      amount: amount,
    });
  };

  const saveProduct = async () => {
    try {
      await getProducts(name, code, sector, amount).then(() => {
        navigate("/products");
      });
    } catch (error) {
      toast.error("Preencha todas as informações");
    }
  };

  useEffect(() => {
    const url = window.location.href;
    const hasIdCode = url.includes("updated/");

    if (hasIdCode) {
      const [urlWithoutCode, idCode] = url.split("updated/");

      window.history.pushState({}, "", urlWithoutCode);

      localStorage.setItem("idCode", idCode);
    }
  }, []);

  async function handleCancel() {
    navigate("/updatedproducts");
  }

  return (
    <Container>
      <Header>
        <h1>Edite o produto do seu estoque</h1>
      </Header>
      <BodyContainer>
        <InputContainer key={product.id}>
          <Label>
            Digite o nome do produto <p>*</p>
          </Label>
          <Input
            value={product.name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <Label>
            Código <p>*</p>
          </Label>
          <Input
            value={product.code}
            onChange={(event) => {
              setCode(event.target.value);
            }}
          />
          <Label>
            Setor<p>*</p>
          </Label>
          <Input
            value={product.sector}
            onChange={(event) => {
              setSector(event.target.value);
            }}
          />
          <Label>
            Quantidade<p>*</p>
          </Label>
          <Input
            value={product.amount}
            onChange={(event) => {
              setAmount(event.target.value);
            }}
          />
        </InputContainer>
        <Buttons>
          <Button onClick={saveProduct} className="edit">
            Editar
          </Button>
          <Toaster position="top-center" reverseOrder={false} />

          <Button onClick={handleCancel} className="cancel">
            Cancelar
          </Button>
        </Buttons>
      </BodyContainer>
    </Container>
  );
};

export default EditProducts;
